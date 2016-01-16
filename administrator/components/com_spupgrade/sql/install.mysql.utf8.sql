DROP TABLE IF EXISTS `#__spupgrade_tables`;
CREATE TABLE IF NOT EXISTS `#__spupgrade_tables` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `extension_name` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL COMMENT 'Name of the extension''s table',
  PRIMARY KEY (`id`),
  UNIQUE KEY `extension_name` (`extension_name`,`name`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 ;

INSERT INTO `#__spupgrade_tables` (`id`, `extension_name`, `name`) VALUES
(1, 'com_users', 'users'),
(3, 'com_content', 'sections'),
(4, 'com_content', 'categories'),
(5, 'com_content', 'content'),
(6, 'com_contact', 'categories'),
(7, 'com_contact', 'contact_details'),
(10, 'com_newsfeeds', 'categories'),
(11, 'com_newsfeeds', 'newsfeeds'),
(12, 'com_banners', 'categories'),
(13, 'com_banners', 'banner_clients'),
(14, 'com_banners', 'banners'),
(15, 'com_menus', 'menu_types'),
(16, 'com_menus', 'menu'),
(17, 'com_modules', 'modules'),
(18, 'com_media', 'images'),
(19, 'com_media', 'template'),
(20, 'com_acymailing', 'acymailing_config'),
(21, 'com_acymailing', 'acymailing_fields'),
(22, 'com_acymailing', 'acymailing_filter'),
(23, 'com_acymailing', 'acymailing_history'),
(24, 'com_acymailing', 'acymailing_list'),
(25, 'com_acymailing', 'acymailing_listcampaign'),
(26, 'com_acymailing', 'acymailing_listmail'),
(27, 'com_acymailing', 'acymailing_listsub'),
(28, 'com_acymailing', 'acymailing_mail'),
(29, 'com_acymailing', 'acymailing_queue'),
(30, 'com_acymailing', 'acymailing_rules'),
(31, 'com_acymailing', 'acymailing_stats'),
(32, 'com_acymailing', 'acymailing_subscriber'),
(33, 'com_acymailing', 'acymailing_template'),
(34, 'com_acymailing', 'acymailing_url'),
(35, 'com_acymailing', 'acymailing_urlclick'),
(36, 'com_acymailing', 'acymailing_userstats'),
(37, 'com_acymailing', 'media'),
(38, 'com_k2', 'k2_attachments'),
(39, 'com_k2', 'k2_categories'),
(40, 'com_k2', 'k2_comments'),
(41, 'com_k2', 'k2_extra_fields'),
(42, 'com_k2', 'k2_extra_fields_groups'),
(43, 'com_k2', 'k2_items'),
(44, 'com_k2', 'k2_rating'),
(45, 'com_k2', 'k2_tags'),
(47, 'com_k2', 'k2_tags_xref'),
(48, 'com_k2', 'k2_user_groups'),
(49, 'com_k2', 'k2_users'),
(50, 'com_k2', 'media'),
(51, 'com_kunena', 'kunena_aliases'),
(52, 'com_kunena', 'kunena_announcement'),
(53, 'com_kunena', 'kunena_attachments'),
(54, 'com_kunena', 'kunena_categories'),
(55, 'com_kunena', 'kunena_configuration'),
(56, 'com_kunena', 'kunena_keywords'),
(57, 'com_kunena', 'kunena_keywords_map'),
(59, 'com_kunena', 'kunena_messages'),
(61, 'com_kunena', 'kunena_messages_text'),
(62, 'com_kunena', 'kunena_polls'),
(63, 'com_kunena', 'kunena_polls_options'),
(64, 'com_kunena', 'kunena_polls_users'),
(65, 'com_kunena', 'kunena_ranks'),
(66, 'com_kunena', 'kunena_sessions'),
(67, 'com_kunena', 'kunena_smileys'),
(68, 'com_kunena', 'kunena_thankyou'),
(69, 'com_kunena', 'kunena_topics'),
(70, 'com_kunena', 'kunena_users'),
(71, 'com_kunena', 'kunena_users_banned'),
(72, 'com_kunena', 'kunena_user_categories'),
(73, 'com_kunena', 'kunena_user_read'),
(74, 'com_kunena', 'kunena_user_topics'),
(75, 'com_kunena', 'media'),
(76, 'com_virtuemart', 'virtuemart_adminmenuentries'),
(77, 'com_virtuemart', 'virtuemart_calc_categories'),
(78, 'com_virtuemart', 'virtuemart_calc_countries'),
(79, 'com_virtuemart', 'virtuemart_calc_manufacturers'),
(80, 'com_virtuemart', 'virtuemart_calc_shoppergroups'),
(81, 'com_virtuemart', 'virtuemart_calc_states'),
(82, 'com_virtuemart', 'virtuemart_calcs'),
(83, 'com_virtuemart', 'virtuemart_categories'),
(84, 'com_virtuemart', 'virtuemart_categories_en_gb'),
(85, 'com_virtuemart', 'virtuemart_category_categories'),
(86, 'com_virtuemart', 'virtuemart_category_medias'),
(87, 'com_virtuemart', 'virtuemart_configs'),
(88, 'com_virtuemart', 'virtuemart_countries'),
(89, 'com_virtuemart', 'virtuemart_coupons'),
(90, 'com_virtuemart', 'virtuemart_currencies'),
(91, 'com_virtuemart', 'virtuemart_customs'),
(92, 'com_virtuemart', 'virtuemart_invoices'),
(93, 'com_virtuemart', 'virtuemart_manufacturer_medias'),
(94, 'com_virtuemart', 'virtuemart_manufacturercategories'),
(95, 'com_virtuemart', 'virtuemart_manufacturercategories_en_gb'),
(96, 'com_virtuemart', 'virtuemart_manufacturers'),
(97, 'com_virtuemart', 'virtuemart_manufacturers_en_gb'),
(98, 'com_virtuemart', 'virtuemart_medias'),
(99, 'com_virtuemart', 'virtuemart_migration_oldtonew_ids'),
(100, 'com_virtuemart', 'virtuemart_modules'),
(101, 'com_virtuemart', 'virtuemart_order_calc_rules'),
(102, 'com_virtuemart', 'virtuemart_order_histories'),
(103, 'com_virtuemart', 'virtuemart_order_items'),
(104, 'com_virtuemart', 'virtuemart_order_userinfos'),
(105, 'com_virtuemart', 'virtuemart_orders'),
(106, 'com_virtuemart', 'virtuemart_orderstates'),
(107, 'com_virtuemart', 'virtuemart_paymentmethod_shoppergroups'),
(108, 'com_virtuemart', 'virtuemart_paymentmethods'),
(109, 'com_virtuemart', 'virtuemart_paymentmethods_en_gb'),
(110, 'com_virtuemart', 'virtuemart_permgroups'),
(111, 'com_virtuemart', 'virtuemart_product_categories'),
(112, 'com_virtuemart', 'virtuemart_product_customfields'),
(113, 'com_virtuemart', 'virtuemart_product_manufacturers'),
(114, 'com_virtuemart', 'virtuemart_product_medias'),
(115, 'com_virtuemart', 'virtuemart_product_prices'),
(116, 'com_virtuemart', 'virtuemart_product_relations'),
(117, 'com_virtuemart', 'virtuemart_product_shoppergroups'),
(118, 'com_virtuemart', 'virtuemart_products'),
(119, 'com_virtuemart', 'virtuemart_products_en_gb'),
(120, 'com_virtuemart', 'virtuemart_rating_reviews'),
(121, 'com_virtuemart', 'virtuemart_rating_votes'),
(122, 'com_virtuemart', 'virtuemart_ratings'),
(123, 'com_virtuemart', 'virtuemart_shipmentmethod_shoppergroups'),
(124, 'com_virtuemart', 'virtuemart_shipmentmethods'),
(125, 'com_virtuemart', 'virtuemart_shipmentmethods_en_gb'),
(126, 'com_virtuemart', 'virtuemart_shoppergroups'),
(127, 'com_virtuemart', 'virtuemart_states'),
(128, 'com_virtuemart', 'virtuemart_userfield_values'),
(129, 'com_virtuemart', 'virtuemart_userfields'),
(130, 'com_virtuemart', 'virtuemart_userinfos'),
(131, 'com_virtuemart', 'virtuemart_vendor_medias'),
(132, 'com_virtuemart', 'virtuemart_vendors'),
(133, 'com_virtuemart', 'virtuemart_vendors_en_gb'),
(134, 'com_virtuemart', 'virtuemart_vmuser_shoppergroups'),
(135, 'com_virtuemart', 'virtuemart_vmusers'),
(136, 'com_virtuemart', 'virtuemart_waitingusers'),
(137, 'com_virtuemart', 'virtuemart_worldzones'),
(138, 'com_virtuemart', 'media'),
(139, 'com_breezingforms', 'facileforms_compmenus'),
(140, 'com_breezingforms', 'facileforms_config'),
(141, 'com_breezingforms', 'facileforms_elements'),
(142, 'com_breezingforms', 'facileforms_forms'),
(143, 'com_breezingforms', 'facileforms_integrator_criteria_fixed'),
(144, 'com_breezingforms', 'facileforms_integrator_criteria_form'),
(145, 'com_breezingforms', 'facileforms_integrator_criteria_joomla'),
(146, 'com_breezingforms', 'facileforms_integrator_items'),
(147, 'com_breezingforms', 'facileforms_integrator_rules'),
(148, 'com_breezingforms', 'facileforms_packages'),
(149, 'com_breezingforms', 'facileforms_pieces'),
(150, 'com_breezingforms', 'facileforms_records'),
(151, 'com_breezingforms', 'facileforms_scripts'),
(152, 'com_breezingforms', 'facileforms_subrecords'),
(153, 'com_sh404sef', 'redirection'),
(154, 'com_sh404sef', 'sh404sef_aliases'),
(155, 'com_sh404sef', 'sh404sef_meta'),
(156, 'com_sh404sef', 'sh404sef_pageids'),
(157, 'com_jcomments', 'jcomments'),
(158, 'com_jcomments', 'jcomments_blacklist'),
(159, 'com_jcomments', 'jcomments_objects'),
(160, 'com_jcomments', 'jcomments_reports'),
(161, 'com_jcomments', 'jcomments_settings'),
(162, 'com_jcomments', 'jcomments_subscriptions'),
(163, 'com_jcomments', 'jcomments_votes'),
(164, 'com_jevents', 'categories'),
(165, 'com_jevents', 'jevents_catmap'),
(166, 'com_jevents', 'jevents_exception'),
(167, 'com_jevents', 'jevents_icsfile'),
(168, 'com_jevents', 'jevents_repbyday'),
(169, 'com_jevents', 'jevents_repetition'),
(170, 'com_jevents', 'jevents_rrule'),
(171, 'com_jevents', 'jevents_vevdetail'),
(172, 'com_jevents', 'jevents_vevent'),
(173, 'com_jevents', 'jev_defaults'),
(174, 'com_jevents', 'jev_users'),
(175, 'com_comprofiler', 'comprofiler'),
(176, 'com_comprofiler', 'comprofiler_fields'),
(177, 'com_comprofiler', 'comprofiler_field_values'),
(178, 'com_comprofiler', 'comprofiler_lists'),
(179, 'com_comprofiler', 'comprofiler_members'),
(180, 'com_comprofiler', 'comprofiler_plugin'),
(181, 'com_comprofiler', 'comprofiler_tabs'),
(182, 'com_comprofiler', 'comprofiler_userreports'),
(183, 'com_comprofiler', 'comprofiler_views'),
(184, 'com_comprofiler', 'media'),
(185, 'com_sef', 'sefaliases'),
(186, 'com_sef', 'sefexts'),
(187, 'com_sef', 'sefexttexts'),
(188, 'com_sef', 'seflog'),
(189, 'com_sef', 'sefmoved'),
(190, 'com_sef', 'sefurls'),
(191, 'com_sef', 'sefurlword_xref'),
(192, 'com_sef', 'sefwords'),
(193, 'com_sef', 'sef_statistics'),
(194, 'com_sef', 'sef_subdomains'),
(195, 'com_phocadownload', 'phocadownload'),
(196, 'com_phocadownload', 'phocadownload_categories'),
(197, 'com_phocadownload', 'phocadownload_licenses'),
(198, 'com_phocadownload', 'phocadownload_user_stat'),
(199, 'com_phocadownload', 'media'),
(200, 'com_phocagallery', 'phocagallery'),
(201, 'com_phocagallery', 'phocagallery_categories'),
(202, 'com_phocagallery', 'phocagallery_comments'),
(203, 'com_phocagallery', 'phocagallery_img_comments'),
(204, 'com_phocagallery', 'phocagallery_img_votes'),
(205, 'com_phocagallery', 'phocagallery_img_votes_statistics'),
(206, 'com_phocagallery', 'phocagallery_user'),
(207, 'com_phocagallery', 'phocagallery_votes'),
(208, 'com_phocagallery', 'phocagallery_votes_statistics'),
(209, 'com_phocagallery', 'media'),
(210, 'com_phocaguestbook', 'phocaguestbook_books'),
(211, 'com_phocaguestbook', 'phocaguestbook_items'),
(212, 'com_phocamaps', 'phocamaps_map'),
(213, 'com_phocamaps', 'phocamaps_marker'),
(214, 'com_phocamaps', 'media'),
(215, 'com_jnews', 'jnews_followup'),
(216, 'com_jnews', 'jnews_listmailings'),
(217, 'com_jnews', 'jnews_lists'),
(218, 'com_jnews', 'jnews_listssubscribers'),
(219, 'com_jnews', 'jnews_mailings'),
(220, 'com_jnews', 'jnews_queue'),
(221, 'com_jnews', 'jnews_stats_details'),
(222, 'com_jnews', 'jnews_stats_globa'),
(223, 'com_jnews', 'jnews_subscribers'),
(224, 'com_jnews', 'jnews_templates'),
(225, 'com_jnews', 'jnews_xonfig'),
(226, 'com_jnews', 'media'),
(227, 'com_rsform', 'rsform_components'),
(228, 'com_rsform', 'rsform_component_types'),
(229, 'com_rsform', 'rsform_component_type_fields'),
(230, 'com_rsform', 'rsform_conditions'),
(231, 'com_rsform', 'rsform_condition_details'),
(232, 'com_rsform', 'rsform_config'),
(233, 'com_rsform', 'rsform_emails'),
(234, 'com_rsform', 'rsform_forms'),
(235, 'com_rsform', 'rsform_mappings'),
(236, 'com_rsform', 'rsform_posts'),
(237, 'com_rsform', 'rsform_properties'),
(238, 'com_rsform', 'rsform_submissions'),
(239, 'com_rsform', 'rsform_submission_columns'),
(240, 'com_rsform', 'rsform_submission_values'),
(241, 'com_rsform', 'rsform_translations'),
(242, 'com_rsform', 'media');

DROP TABLE IF EXISTS `#__spupgrade_log`;
CREATE TABLE IF NOT EXISTS `#__spupgrade_log` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tables_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT 'FK to the #__spupgrade_tables',
  `note` mediumtext NOT NULL,
  `state` tinyint(3) NOT NULL DEFAULT '0',
  `source_id` int(10) unsigned NOT NULL DEFAULT '0',
  `destination_id` int(10) unsigned NOT NULL DEFAULT '0',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `data` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;