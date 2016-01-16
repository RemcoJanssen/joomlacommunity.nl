<?php
/**
 * @package    AkeebaReleaseSystem
 * @subpackage plugins.arsdlid
 * @copyright  Copyright (c)2010-2014 Nicholas K. Dionysopoulos
 * @license    GNU General Public License version 3, or later
 */

// Protect from unauthorized access
defined('_JEXEC') or die();

class plgContentArsdlid extends JPlugin
{
	private static $cache = array();

	/**
	 * Should this plugin be allowed to run? True if FOF can be loaded and the ARS component is enabled
	 *
	 * @var  bool
	 */
	private $enabled = true;

	public function __construct(&$subject, $config = array())
	{
		parent::__construct($subject, $config);

		if (!defined('FOF30_INCLUDED') && !@include_once(JPATH_LIBRARIES . '/fof30/include.php'))
		{
			$this->enabled = false;
		}

		// Do not run if Akeeba Subscriptions is not enabled
		JLoader::import('joomla.application.component.helper');

		if (!JComponentHelper::isEnabled('com_ars'))
		{
			$this->enabled = false;
		}
	}


	public function onContentPrepare($context, &$article, &$params, $limitstart = 0)
	{
		if (!$this->enabled)
		{
			return true;
		}

		// Check whether the plugin should process or not
		if (\JString::strpos($article->text, 'downloadid') === false)
		{
			return true;
		}

		// Make sure our auto-loader is set up and ready
		\FOF30\Container\Container::getInstance('com_ars');

		// Search for this tag in the content
		$regex = "#{[\s]*downloadid[\s]*}#s";

		$article->text = preg_replace_callback($regex, array('self', 'process'), $article->text);
	}

	private static function process($match)
	{
		$ret = '';
		$user = JFactory::getUser();

		if (!$user->guest)
		{
			if (!isset(self::$cache[$user->id]))
			{
				self::$cache[$user->id] = \Akeeba\ReleaseSystem\Site\Helper\Filter::myDownloadID();
			}

			$ret = self::$cache[$user->id];
		}

		return $ret;
	}
}
