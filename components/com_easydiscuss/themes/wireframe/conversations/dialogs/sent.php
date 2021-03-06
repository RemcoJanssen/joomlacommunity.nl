<?php
/**
* @package		EasyDiscuss
* @copyright	Copyright (C) 2010 - 2015 Stack Ideas Sdn Bhd. All rights reserved.
* @license		GNU/GPL, see LICENSE.php
* EasyDiscuss is free software. This version may have been modified pursuant
* to the GNU General Public License, and as distributed it includes or
* is derivative of works licensed under the GNU General Public License or
* other free or open source software licenses.
* See COPYRIGHT.php for copyright notices and details.
*/
defined('_JEXEC') or die('Unauthorized Access');
?>
<dialog>
    <width>400</width>
    <height>120</height>
    <selectors type="json">
    {
        "{closeButton}" : "[data-close-button]"
    }
    </selectors>
    <bindings type="javascript">
    {
        "{closeButton} click": function() {
            this.parent.close();
        }
    }
    </bindings>
    <title><?php echo JText::sprintf('COM_EASYDISCUSS_CONVERSATION_COMPOSE_DIALOG_TITLE', $recipient->getName()); ?></title>
    <content>
        <div class="t-lg-mt--xl t-lg-mb--sm">
            <?php echo JText::sprintf('COM_EASYDISCUSS_CONVERSATION_SENT_DIALOG_CONTENT', $recipient->getName());?>
        </div>
    </content>
    <buttons>
        <button data-close-button type="button" class="btn btn-primary btn-sm"><?php echo JText::_('COM_EASYDISCUSS_BUTTON_CLOSE'); ?></button>
    </buttons>
</dialog>
