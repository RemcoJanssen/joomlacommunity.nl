<?php
/**
* @package      Komento
* @copyright    Copyright (C) 2010 - 2015 Stack Ideas Sdn Bhd. All rights reserved.
* @license      GNU/GPL, see LICENSE.php
* Komento is free software. This version may have been modified pursuant
* to the GNU General Public License, and as distributed it includes or
* is derivative of works licensed under the GNU General Public License or
* other free or open source software licenses.
* See COPYRIGHT.php for copyright notices and details.
*/
defined('_JEXEC') or die('Restricted access');
?>
<div class="row">
	<div class="col-md-6">
		<fieldset class="panel form-horizontal">
			<div class="panel-head"><?php echo JText::_( 'COM_KOMENTO_SETTINGS_LAYOUT_FRONTPAGE' ); ?></div>
			<div class="panel-body">
				<p><?php echo JText::_( 'COM_KOMENTO_SETTINGS_LAYOUT_FRONTPAGE_DESC' );?></p>
				<!-- Show Comment Link in Frontpage -->
				<?php echo $this->renderSetting( 'COM_KOMENTO_SETTINGS_LAYOUT_FRONTPAGE_SHOW_COMMENTS', 'layout_frontpage_comment' ); ?>

				<!-- Show ReadMore Link in Frontpage -->
				<?php if( $this->component == 'com_content' ) {
					$options = array();
					$options[] = array( 0, 'COM_KOMENTO_SETTINGS_LAYOUT_FRONTPAGE_READMORE_ALWAYS_HIDE' );
					$options[] = array( 1, 'COM_KOMENTO_SETTINGS_LAYOUT_FRONTPAGE_READMORE_OBEY_READMORE_BREAK' );
					$options[] = array( 2, 'COM_KOMENTO_SETTINGS_LAYOUT_FRONTPAGE_READMORE_ALWAYS_SHOW' );
					echo $this->renderSetting( 'COM_KOMENTO_SETTINGS_LAYOUT_FRONTPAGE_SHOW_READMORE', 'layout_frontpage_readmore', 'dropdown', $options );

					echo $this->renderSetting( 'COM_KOMENTO_SETTINGS_LAYOUT_FRONTPAGE_READMORE_USE_JOOMLA', 'layout_frontpage_readmore_use_joomla' );
				} else {
					echo $this->renderSetting( 'COM_KOMENTO_SETTINGS_LAYOUT_FRONTPAGE_SHOW_READMORE', 'layout_frontpage_readmore' );
				}?>

				<!-- Show Hits in Frontpage -->
				<?php echo $this->renderSetting( 'COM_KOMENTO_SETTINGS_LAYOUT_FRONTPAGE_SHOW_HITS', 'layout_frontpage_hits' ); ?>

				<!-- Set comment bar alignment -->
				<?php $options = array();
					$options[] = array( 'left', 'COM_KOMENTO_ALIGNMENT_LEFT' );
					$options[] = array( 'right', 'COM_KOMENTO_ALIGNMENT_RIGHT' );
					echo $this->renderSetting( 'COM_KOMENTO_SETTINGS_LAYOUT_FRONTPAGE_ALIGNMENT', 'layout_frontpage_alignment', 'dropdown', $options );
				?>

				<!-- START: Pro Version Only -->
				<!-- Show Comment Preview in Frontpage -->
				<?php echo $this->renderSetting( 'COM_KOMENTO_SETTINGS_LAYOUT_FRONTPAGE_SHOW_PREVIEW', 'layout_frontpage_preview' ); ?>
				<!-- END: Pro Version Only -->
			</div>
		</fieldset>
	</div>

	<div class="col-md-6">
		<!-- START: Pro Version Only -->
		<fieldset class="panel form-horizontal">
			<div class="panel-head"><?php echo JText::_( 'COM_KOMENTO_SETTINGS_LAYOUT_FRONTPAGE_PREVIEW' ); ?></div>
			<div class="panel-body">
				<!-- Number of comments to preview -->
				<?php echo $this->renderSetting( 'COM_KOMENTO_SETTINGS_PREVIEW_COUNT', 'preview_count', 'input' ); ?>

				<!-- Default sorting to use -->
				<?php $options = array();
					$options[] = array( 'oldest', 'COM_KOMENTO_SETTINGS_SORT_OLDEST' );
					$options[] = array( 'latest', 'COM_KOMENTO_SETTINGS_SORT_LATEST' );
					$options[] = array( 'popular', 'COM_KOMENTO_SETTINGS_SORT_POPULAR' );
					echo $this->renderSetting( 'COM_KOMENTO_SETTINGS_PREVIEW_SORT', 'preview_sort', 'dropdown', $options ); ?>

				<!-- Get sticked comments only -->
				<?php echo $this->renderSetting( 'COM_KOMENTO_SETTINGS_PREVIEW_STICKED_ONLY', 'preview_sticked_only' ); ?>

				<!-- Get parent comments only -->
				<?php echo $this->renderSetting( 'COM_KOMENTO_SETTINGS_PREVIEW_PARENT_ONLY', 'preview_parent_only' ); ?>

				<!-- Truncate comment length -->
				<?php echo $this->renderSetting( 'COM_KOMENTO_SETTINGS_PREVIEW_COMMENT_LENGTH', 'preview_comment_length', 'input' ); ?>
			</div>
		</fieldset>
		<!-- END: Pro Version Only -->
	</div>
</div>

