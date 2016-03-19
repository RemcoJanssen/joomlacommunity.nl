<?php
/**
 * @package   AkeebaReleaseSystem
 * @copyright Copyright (c)2010 Nicholas K. Dionysopoulos
 * @license   GNU General Public License version 3, or later
 */

namespace Akeeba\ReleaseSystem\Admin\Model;

defined('_JEXEC') or die;

use FOF30\Container\Container;
use FOF30\Model\DataModel;

class Environments extends DataModel
{
	use Mixin\ImplodedArrays;
	use Mixin\Assertions;

	/**
	 * Public constructor. Overrides the parent constructor.
	 *
	 * @see DataModel::__construct()
	 *
	 * @param   Container  $container  The configuration variables to this model
	 * @param   array      $config     Configuration values for this model
	 *
	 * @throws \FOF30\Model\DataModel\Exception\NoTableColumns
	 */
	public function __construct(Container $container, array $config = array())
	{
		$config['tableName'] = '#__ars_environments';
		$config['idFieldName'] = 'id';

		parent::__construct($container, $config);

		$this->blacklistFilters([
			'title'
		]);

		// Behaviours
		$this->addBehaviour('Filters');
	}

	/**
	 * Implements custom filtering
	 *
	 * @param   \JDatabaseQuery  $query           The model query we're operating on
	 * @param   bool             $overrideLimits  Are we told to override limits?
	 *
	 * @return  void
	 */
	protected function onBeforeBuildQuery(\JDatabaseQuery &$query, $overrideLimits = false)
	{
		$db = $this->getDbo();

		$fltSearch = $this->getState('search', null, 'string');

		if ($fltSearch)
		{
			$fltSearch = "%$fltSearch%";

			$query->where($db->qn('title') . ' LIKE ' . $db->q($fltSearch));
		}
	}

}