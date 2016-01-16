<?php
/**
 * @package		EasyDiscuss
 * @copyright	Copyright (C) 2010 Stack Ideas Private Limited. All rights reserved.
 * @license		GNU/GPL, see LICENSE.php
 *
 * EasyDiscuss is free software. This version may have been modified pursuant
 * to the GNU General Public License, and as distributed it includes or
 * is derivative of works licensed under the GNU General Public License or
 * other free or open source software licenses.
 * See COPYRIGHT.php for copyright notices and details.
 */
defined('_JEXEC') or die('Restricted access');

class modEasydiscussLatestRepliesHelper
{
	public static function getData( $params )
	{
		$db		= DiscussHelper::getDBO();
		$count	= (INT)trim($params->get('count', 0));

		if( !class_exists( 'EasyDiscussModelPosts' ) )
		{
			jimport( 'joomla.application.component.model' );
			JLoader::import( 'posts' , DISCUSS_MODELS );
		}
		$model	= DiscussHelper::getModel( 'Posts' );
		$result	= $model->getReplies('allreplies', 'latest' ,null , $count);

		if( !$result )
		{
			return $result;
		}

		require_once DISCUSS_HELPERS . '/parser.php';

		$replies = array();

		foreach( $result as $item )
		{
			$item->content	= EasyDiscussParser::bbcode( $item->content );

			$item->title   = DiscussHelper::wordFilter( $item->title);
			$item->content = DiscussHelper::wordFilter( $item->content);

			$replies[]		= $item;
		}

		return $replies;
	}
}
