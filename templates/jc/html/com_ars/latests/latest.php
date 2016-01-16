<?php
/**
 * @package AkeebaReleaseSystem
 * @copyright Copyright (c)2010-2013 Nicholas K. Dionysopoulos
 * @license GNU General Public License version 3, or later
 */

defined('_JEXEC') or die();

?>
<?php if( array_key_exists('all', $this->items) ): ?>
	<?php echo $this->loadAnyTemplate('site:com_ars/latest/generic', array('renderSection' => 'all', 'title' => '')); ?>
<?php else: ?>
	<?php echo $this->loadAnyTemplate('site:com_ars/latest/generic', array('renderSection' => 'normal', 'title' => 'ARS_CATEGORY_NORMAL')); ?>
	<?php echo $this->loadAnyTemplate('site:com_ars/latest/generic', array('renderSection' => 'bleedingedge', 'title' => 'ARS_CATEGORY_BLEEDINGEDGE')); ?>
<?php endif; ?>
