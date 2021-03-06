<?php
/**
 * @package		ACL Manager for Joomla
 * @copyright 	Copyright (c) 2011-2016 Sander Potjer
 * @license 	GNU General Public License version 3 or later
 */

// No direct access.
defined('_JEXEC') or die;

/**
 * Extend Joomla core class
 */
class ModulesModelModules extends ModulesModelModulesCore
{
	public function getItems()
	{
		// Load the list items.
		$query = $this->_getListQuery();
		$items = $this->_getList($query, 0, 0);

		$user	= JFactory::getUser();
		for ($x = 0, $count = count($items); $x < $count; $x++) {
			//Check the access level. Remove modules the user shouldn't see
			$canEdit	= $user->authorise('core.edit','com_modules.module.'.$items[$x]->id);
			$canChange	= $user->authorise('core.edit.state','com_modules.module.'.$items[$x]->id);
			if (!$canEdit && !$canChange) {
				unset($items[$x]);
			}
		}
		$items = array_values($items);
		if($this->getState('list.start') || $this->getState('list.limit')) {
			$items = array_slice($items, $this->getState('list.start'), $this->getState('list.limit'));
		}

		return $items;
	}

	public function getTotal()
	{
		// Get a storage key.
		$store = $this->getStoreId('getTotal');

		// Try to load the data from internal storage.
		if (isset($this->cache[$store]))
		{
			return $this->cache[$store];
		}

		$query = $this->_getListQuery();
		$this->_db->setQuery($query, 0, 0);
		$items = $this->_db->loadObjectList();
		$user	= JFactory::getUser();
		for ($x = 0, $count = count($items); $x < $count; $x++) {
			//Check the access level. Remove articles the user shouldn't see
			$canEdit	= $user->authorise('core.edit','com_modules.module.'.$items[$x]->id);
			$canChange	= $user->authorise('core.edit.state','com_modules.module.'.$items[$x]->id);
			if (!$canEdit && !$canChange) {
				unset($items[$x]);
			}
		}
		$total = count($items);

		// Check for a database error.
		if ($this->_db->getErrorNum())
		{
			$this->setError($this->_db->getErrorMsg());
			return false;
		}

		// Add the total to the internal cache.
		$this->cache[$store] = $total;

		return $this->cache[$store];
	}
}
