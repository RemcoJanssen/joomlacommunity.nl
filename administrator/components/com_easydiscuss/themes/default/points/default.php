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
<form action="index.php" method="post" name="adminForm" id="adminForm" data-ed-form>
	<div class="app-filter filter-bar form-inline">
	    <div class="form-group">
	        <?php echo $this->html('table.search', 'search', $search); ?>
	    </div>
	    <div class="form-group">
	    	<?php echo $this->html('table.filter', 'filter_state', $state, array('P' => 'COM_EASYDISCUSS_PUBLISHED', 'U' => 'COM_EASYDISCUSS_UNPUBLISHED')); ?>
	    </div>
	    <div class="form-group">
	    	<?php echo $this->html('table.limit', $pagination); ?>
	    </div>
	</div>
	
	<div class="panel-table">
		<table class="app-table app-table-middle table table-striped" data-ed-table>
			<thead>
				<tr>
					<td width="1%" class="center">
						<?php echo $this->html('table.checkall'); ?>
					</td>
					<td style="text-align: left;">
						<?php echo JHTML::_('grid.sort', JText::_('COM_EASYDISCUSS_POINTS_TITLE'), 'a.title', $orderDirection, $order); ?>
					</td>
					<td width="1%" class="center">
						<?php echo JText::_( 'COM_EASYDISCUSS_PUBLISHED' ); ?>
					</td>
					<td width="1%" class="center">
						<?php echo JText::_( 'COM_EASYDISCUSS_POINTS' ); ?>
					</td>
					<td width="10%" class="center">
						<?php echo JHTML::_('grid.sort', JText::_('COM_EASYDISCUSS_DATE'), 'a.created', $orderDirection, $order); ?>
					</td>
					<td width="6%" class="center">
						<?php echo JHTML::_('grid.sort', JText::_('COM_EASYDISCUSS_ID'), 'a.id', $orderDirection, $order ); ?>
					</td>
				</tr>
			</thead>

			<tbody>
			<?php if ($points) { ?>
				<?php $i = 0; ?>
				<?php foreach ($points as $point) { ?>
					<tr>
						<td class="center">
							<?php echo $this->html('table.checkbox', $i++, $point->id); ?>
						</td>
						<td style="text-align: left;">
							<a href="<?php echo JRoute::_( 'index.php?option=com_easydiscuss&view=points&layout=form&id=' . $point->id ); ?>"><?php echo $point->title; ?></a>
						</td>
						<td class="center">
							<?php echo $this->html('table.state', 'points', $point, 'published'); ?>
						</td>
						<td class="center">
							<?php echo $point->rule_limit; ?>
						</td>
						<td class="center">
							<?php echo $point->created;?>
						</td>
						<td class="center">
							<?php echo $point->id; ?>
						</td>
					</tr>
				<?php } ?>
			<?php } else { ?>
				<tr>
					<td colspan="6" class="center">
						<?php echo JText::_('COM_EASYDISCUSS_NO_POINTS_YET');?>
					</td>
				</tr>
			<?php } ?>
			</tbody>

			<tfoot>
				<tr>
					<td colspan="6">
						<div class="footer-pagination center">
							<?php echo $pagination->getListFooter(); ?>
						</div>
					</td>
				</tr>
			</tfoot>
		</table>
	</div>

	<input type="hidden" name="filter_order" value="<?php echo $order; ?>" />
	<input type="hidden" name="filter_order_Dir" value="" />
	
	<?php echo $this->html('form.hidden', 'points', 'points'); ?>
</form>