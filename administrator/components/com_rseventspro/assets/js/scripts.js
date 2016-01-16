var rsepro_timer;function isset () {    // http://kevin.vanzonneveld.net    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)    // +   improved by: FremyCompany    // +   improved by: Onno Marsman    // +   improved by: Rafał Kukawski    // *     example 1: isset( undefined, true);    // *     returns 1: false    // *     example 2: isset( 'Kevin van Zonneveld' );    // *     returns 2: true    var a = arguments,        l = a.length,        i = 0,        undef;    if (l === 0) {        throw new Error('Empty isset');    }    while (i !== l) {        if (a[i] === undef || a[i] === null) {            return false;        }        i++;    }    return true;}function rseproMap() {	if ($('mapContainer').getStyle('display') == 'none') {		$('mapContainer').setStyle('display','');		map_initialize();	} else {		$('mapContainer').setStyle('display','none');	}}function rspagination(view, limitstart, rscontainer) {	var params = '';		if (rscontainer)		$('rsepro_loadmore_'+rscontainer).className = "rsepromore_active";	else $('rsepro_loadmore').className = "rsepromore_active";	if (rscontainer) {		var total = 0;		if (isset($('rseprocontainer_past')))		total += $('rseprocontainer_past').getElements('tr').length - 1;		if (isset($('rseprocontainer_ongoing')))	total += $('rseprocontainer_ongoing').getElements('tr').length - 1;		if (isset($('rseprocontainer_thisweek')))	total += $('rseprocontainer_thisweek').getElements('tr').length - 1;		if (isset($('rseprocontainer_thismonth')))	total += $('rseprocontainer_thismonth').getElements('tr').length - 1;		if (isset($('rseprocontainer_nextmonth')))	total += $('rseprocontainer_nextmonth').getElements('tr').length - 1;		if (isset($('rseprocontainer_upcoming')))	total += $('rseprocontainer_upcoming').getElements('tr').length - 1;				params = '&type=' + rscontainer + '&total=' + total;	}		var req = new Request({		method: 'post',		url: 'index.php?option=com_rseventspro',		data: 'view=' + view + '&layout=items&lstart=' + limitstart + params,		onSuccess: function(responseText, responseXML) {			var response = responseText;			var start = response.indexOf('RS_DELIMITER0') + 13;			var end = response.indexOf('RS_DELIMITER1');			response = response.substring(start, end);			var code = response.toDOM();						if (rscontainer) {				for (i=0; i< code.length; i++)					$('rseprocontainer_'+rscontainer).appendChild(code[i]);								if (typeof jQuery != 'undefined') {					if (typeof jQuery('.hasTooltip').tooltip({}) != 'undefined')						jQuery('.hasTooltip').tooltip({});				} else {					$$('.hasTip').each(function(el) {						var title = el.get('title');						if (title) {							var parts = title.split('::', 2);							el.store('tip:title', parts[0]);							el.store('tip:text', parts[1]);						}					});					var JTooltips = new Tips($$('.hasTip'), { maxTitleChars: 50, fixed: false});				}								$('rsepro_loadmore_'+rscontainer).className = "rsepromore_inactive";				if (($('rseprocontainer_'+rscontainer).getElements('tr').length - 1) >= $('total_'+rscontainer).value)					$(rscontainer).style.display = 'none';			} else {				for (i=0; i< code.length; i++)					$('rseprocontainer').appendChild(code[i]);								$('rsepro_loadmore').className = "rsepromore_inactive";				if ( ($('rseprocontainer').getElements('tr').length) >= $('total').value) $('rsepro_loadmore').style.display = 'none';			}		}	});	req.send();}function addRule(err1, err2, msg) {	if ($('status').value == 1 && $('rule').value == 1 || $('status').value == 2 && $('rule').value == 2) {		alert(err1);		return;	}		if ($('rule').value == 4 && $('mid').value == 0) {		alert(err2);		return;	}		$('loader').style.display = '';	params = '&status=' + $('status').value + '&interval=' + $('interval').value + '&rule=' + $('rule').value + '&mid=' + $('mid').value;		var req = new Request({		method: 'post',		url: 'index.php?option=com_rseventspro',		data: 'task=saverule&payment=' + $('payment').value + params,		onSuccess: function(responseText, responseXML) {			var response = responseText;			var start = response.indexOf('RS_DELIMITER0') + 13;			var end = response.indexOf('RS_DELIMITER1');			response = response.substring(start, end);						if (response) {				elements = $('rseprocontainer').getElements('tr').length;								// Create the table row				var thetr = new Element('tr', {'class': 'row'+(elements % 2)});								// Create the first table column				var thetd1 = new Element('td', {'class': 'center hidden-phone'});				var theinp = new Element('input', {'type': 'checkbox', 'onclick' : 'Joomla.isChecked(this.checked);', 'name': 'cid[]', 'id': 'cb'+elements, 'value': response});				theinp.inject(thetd1);								// Create the second table column				var thetd2 = new Element('td', {'class': 'nowrap has-context'});				var message = $('message1').innerHTML + ' <b>' + $('payment').getSelected().get('text') + '</b> ' + $('message2').innerHTML + ' <b>' + $('status').getSelected().get('text') + '</b> ' + $('message3').innerHTML + ' <b>' + $('interval').value + '</b> ' + $('message4').innerHTML + ' <b>' + $('rule').getSelected().get('text') + '</b>';								if ($('rule').value == 4)					message += ' <b>('+ $('email').innerHTML +')</b>';								thetd2.innerHTML = message;								// Create the third table column				var thetd3 = new Element('td', {'class': 'center hidden-phone', 'html': response});								thetd1.inject(thetr);				thetd2.inject(thetr);				thetd3.inject(thetr);				thetr.inject($('rseprocontainer'));								$('mid').value = 0;				$('email').innerHTML = msg;				$('loader').style.display = 'none';			}		}	});	req.send();}function rs_stop() {	clearTimeout(rsepro_timer);}function rs_search() {	if ($('filter_from').value == 'description') return;	if ($('search').value == '') return;		var position = $('search').getPosition();		$('rs_results').style.top = (navigator.appVersion.indexOf('MSIE 7.') != -1) ? (position.y + 25) + 'px' : (position.y + 14) + 'px';	$('rs_results').style.left = (navigator.appVersion.indexOf('MSIE 7.') != -1) ? (position.x - 38) + 'px' : position.x + 'px';		rsepro_timer = setTimeout( function() {		var req = new Request({			method: 'post',			url: 'index.php?option=com_rseventspro',			data: 'task=filter&type=' + $('filter_from').value + '&search=' + $('search').value + '&condition=' + $('filter_condition').value,			onSuccess: function(responseText, responseXML) {				var response = responseText;				var start = response.indexOf('RS_DELIMITER0') + 13;				var end = response.indexOf('RS_DELIMITER1');				response = response.substring(start, end);								if (response != '') {					$('rs_results').innerHTML = response;					$('rs_results').style.display = 'block';				} else $('rs_results').style.display = 'none';			}		});		req.send();	}, 1000);}function rs_add_loc() {	if (isset($('rs_location_window'))) {		$('rs_location_window').reveal({duration: 'short'});		$('rs_new_location').innerHTML = $('rs_location').value;	}}function rsepro_change_list(val) {	if ($('jform_params_archived').getParent().getParent().hasClass('control-group')) {		$('jform_params_archived').getParent().getParent().style.display = 'none';		$('jform_params_days').getParent().getParent().style.display = 'none';				if (val == 'all')			$('jform_params_archived').getParent().getParent().style.display = '';		else if (val == 'future')			$('jform_params_days').getParent().getParent().style.display = '';		else if (val == 'featured')			$('jform_params_archived').getParent().getParent().style.display = '';	} else {		$('jform_params_archived').getParent().style.display = 'none';		$('jform_params_days').getParent().style.display = 'none';				if (val == 'all')			$('jform_params_archived').getParent().style.display = '';		else if (val == 'future')			$('jform_params_days').getParent().style.display = '';		else if (val == 'featured')			$('jform_params_archived').getParent().style.display = '';	}}function rs_ideal(val) {	if ($('jform_ideal_account').getParent().getParent().hasClass('control-group')) {		$('jform_ideal_merchantid').getParent().getParent().style.display = '';		$('jform_ideal_subid').getParent().getParent().style.display = '';		$('jform_ideal_hashkey').getParent().getParent().style.display = '';		$('jform_ideal_abnamroid').getParent().getParent().style.display = '';		$('jform_ideal_ing_cer').getParent().getParent().style.display = '';		$('jform_ideal_ing_pem').getParent().getParent().style.display = '';		$('jform_ideal_rabo_cer').getParent().getParent().style.display = '';		$('jform_ideal_rabo_pem').getParent().getParent().style.display = '';				if (val == 'mollie') {			$('jform_ideal_subid').getParent().getParent().style.display = 'none';			$('jform_ideal_hashkey').getParent().getParent().style.display = 'none';			$('jform_ideal_abnamroid').getParent().getParent().style.display = 'none';			$('jform_ideal_ing_cer').getParent().getParent().style.display = 'none';			$('jform_ideal_ing_pem').getParent().getParent().style.display = 'none';			$('jform_ideal_rabo_cer').getParent().getParent().style.display = 'none';			$('jform_ideal_rabo_pem').getParent().getParent().style.display = 'none';		} else if (val == 'ingbasic' || val == 'rabobanklite') {			$('jform_ideal_abnamroid').getParent().getParent().style.display = 'none';			$('jform_ideal_ing_cer').getParent().getParent().style.display = 'none';			$('jform_ideal_ing_pem').getParent().getParent().style.display = 'none';			$('jform_ideal_rabo_cer').getParent().getParent().style.display = 'none';			$('jform_ideal_rabo_pem').getParent().getParent().style.display = 'none';		} else if (val == 'ingadvanced') {			$('jform_ideal_abnamroid').getParent().getParent().style.display = 'none';			$('jform_ideal_rabo_cer').getParent().getParent().style.display = 'none';			$('jform_ideal_rabo_pem').getParent().getParent().style.display = 'none';		} else if (val == 'rabobankpro') {			$('jform_ideal_abnamroid').getParent().getParent().style.display = 'none';			$('jform_ideal_ing_cer').getParent().getParent().style.display = 'none';			$('jform_ideal_ing_pem').getParent().getParent().style.display = 'none';		} else if (val == 'abnamroeasy') {			$('jform_ideal_merchantid').getParent().getParent().style.display = 'none';			$('jform_ideal_subid').getParent().getParent().style.display = 'none';			$('jform_ideal_hashkey').getParent().getParent().style.display = 'none';			$('jform_ideal_ing_cer').getParent().getParent().style.display = 'none';			$('jform_ideal_ing_pem').getParent().getParent().style.display = 'none';			$('jform_ideal_rabo_cer').getParent().getParent().style.display = 'none';			$('jform_ideal_rabo_pem').getParent().getParent().style.display = 'none';		} else if (val == 'targetpay') {			$('jform_ideal_subid').getParent().getParent().style.display = 'none';			$('jform_ideal_hashkey').getParent().getParent().style.display = 'none';			$('jform_ideal_abnamroid').getParent().getParent().style.display = 'none';			$('jform_ideal_ing_cer').getParent().getParent().style.display = 'none';			$('jform_ideal_ing_pem').getParent().getParent().style.display = 'none';			$('jform_ideal_rabo_cer').getParent().getParent().style.display = 'none';			$('jform_ideal_rabo_pem').getParent().getParent().style.display = 'none';		}	} else {		$('jform_ideal_merchantid').getParent().style.display = '';		$('jform_ideal_subid').getParent().style.display = '';		$('jform_ideal_hashkey').getParent().style.display = '';		$('jform_ideal_abnamroid').getParent().style.display = '';		$('jform_ideal_ing_cer').getParent().style.display = '';		$('jform_ideal_ing_pem').getParent().style.display = '';		$('jform_ideal_rabo_cer').getParent().style.display = '';		$('jform_ideal_rabo_pem').getParent().style.display = '';				if (val == 'mollie') {			$('jform_ideal_subid').getParent().style.display = 'none';			$('jform_ideal_hashkey').getParent().style.display = 'none';			$('jform_ideal_abnamroid').getParent().style.display = 'none';			$('jform_ideal_ing_cer').getParent().style.display = 'none';			$('jform_ideal_ing_pem').getParent().style.display = 'none';			$('jform_ideal_rabo_cer').getParent().style.display = 'none';			$('jform_ideal_rabo_pem').getParent().style.display = 'none';		} else if (val == 'ingbasic' || val == 'rabobanklite') {			$('jform_ideal_abnamroid').getParent().style.display = 'none';			$('jform_ideal_ing_cer').getParent().style.display = 'none';			$('jform_ideal_ing_pem').getParent().style.display = 'none';			$('jform_ideal_rabo_cer').getParent().style.display = 'none';			$('jform_ideal_rabo_pem').getParent().style.display = 'none';		} else if (val == 'ingadvanced') {			$('jform_ideal_abnamroid').getParent().style.display = 'none';			$('jform_ideal_rabo_cer').getParent().style.display = 'none';			$('jform_ideal_rabo_pem').getParent().style.display = 'none';		} else if (val == 'rabobankpro') {			$('jform_ideal_abnamroid').getParent().style.display = 'none';			$('jform_ideal_ing_cer').getParent().style.display = 'none';			$('jform_ideal_ing_pem').getParent().style.display = 'none';		} else if (val == 'abnamroeasy') {			$('jform_ideal_merchantid').getParent().style.display = 'none';			$('jform_ideal_subid').getParent().style.display = 'none';			$('jform_ideal_hashkey').getParent().style.display = 'none';			$('jform_ideal_ing_cer').getParent().style.display = 'none';			$('jform_ideal_ing_pem').getParent().style.display = 'none';			$('jform_ideal_rabo_cer').getParent().style.display = 'none';			$('jform_ideal_rabo_pem').getParent().style.display = 'none';		} else if (val == 'targetpay') {			$('jform_ideal_subid').getParent().style.display = 'none';			$('jform_ideal_hashkey').getParent().style.display = 'none';			$('jform_ideal_abnamroid').getParent().style.display = 'none';			$('jform_ideal_ing_cer').getParent().style.display = 'none';			$('jform_ideal_ing_pem').getParent().style.display = 'none';			$('jform_ideal_rabo_cer').getParent().style.display = 'none';			$('jform_ideal_rabo_pem').getParent().style.display = 'none';		}	}}function rsepro_add_ticket(id, place, tname, tprice) {	var seat_container			= $('rsepro_seat_'+id+place);	var selected_container		= window.parent.$('rsepro_selected_tickets');	var selected_view_container	= window.parent.$('rsepro_selected_tickets_view');	var eventID					= parseInt($('eventID').innerHTML);		// Set the event id	if (window.parent.$('jform_ide').value == 0) {		window.parent.$('jform_ide').value = eventID;	} else if (window.parent.$('jform_ide').value != eventID) {		alert(Joomla.JText._('COM_RSEVENTSPRO_SUBSCRIBER_PLEASE_SELECT_TICKET_FROM_EVENT'));		return;	}		// We are dealing with unlimited tickets	if (place == 0) {		if (isset(window.parent.$('ticket'+id+place))) {			if ($('rsepro_unlimited_'+id).value == 0 || $('rsepro_unlimited_'+id).value == '') {				selected_container.removeChild(window.parent.$('ticket'+id+place));			} else {				window.parent.$('ticket'+id+place).value = $('rsepro_unlimited_'+id).value;			}		} else {			if ($('rsepro_unlimited_'+id).value != 0 || $('rsepro_unlimited_'+id).value != '') {				input = document.createElement('input');				input.setAttribute('type', 'hidden');				input.setAttribute('name', 'unlimited['+id+']');				input.setAttribute('id', 'ticket'+id+place);				input.setAttribute('value', $('rsepro_unlimited_'+id).value);				selected_container.appendChild(input);			}		}	} else {		if (seat_container.hasClass('rsepro_selected')) {			// Deselect ticket			seat_container.removeClass('rsepro_selected')						if (isset(window.parent.$('ticket'+id+place))) {				selected_container.removeChild(window.parent.$('ticket'+id+place));			}		} else {			seat_container.addClass('rsepro_selected');			input = document.createElement('input');			input.setAttribute('type', 'hidden');			input.setAttribute('name', 'tickets['+id+'][]');			input.setAttribute('id', 'ticket'+id+place);			input.setAttribute('value', place);			selected_container.appendChild(input);		}	}		if (!isset(window.parent.$('content'+id))) {		if (place == 0) {			selected_view_container.innerHTML += '<span id="content'+id+'"><span id="rsepro_quantity'+id+'">'+ $('rsepro_unlimited_'+id).value +'</span> x ' + tname + ' (' + tprice + ') <br /> </span>';		} else {			selected_view_container.innerHTML += '<span id="content'+id+'"><span id="rsepro_quantity'+id+'">'+ window.parent.$$('input[name^=tickets['+id+'][]]').length +'</span> x ' + tname + ' (' + tprice + ') <br /> </span>';		}	} else {		if (place == 0) {			if ($('rsepro_unlimited_'+id).value == 0)				selected_view_container.removeChild(window.parent.$('content'+id));			else 				window.parent.$('rsepro_quantity'+id).innerHTML = $('rsepro_unlimited_'+id).value;		} else {			if (window.parent.$$('input[name^=tickets['+id+'][]]').length == 0)				selected_view_container.removeChild(window.parent.$('content'+id));			else 				window.parent.$('rsepro_quantity'+id).innerHTML = window.parent.$$('input[name^=tickets['+id+'][]]').length;		}	}}function rsepro_reset_tickets(text) {	$$('.rsepro_selected').removeClass('rsepro_selected');	$$('input[id^=rsepro_unlimited]').each(function (el){		el.value = '';	});		$$('input[name=simple_tickets[]]').each(function (el){		el.value = '';	});		window.parent.$('jform_ide').value = 0;	window.parent.$('rsepro_selected_tickets_view').innerHTML = '';	window.parent.$('rsepro_selected_tickets').innerHTML = '';	window.parent.$('rsepro_simple_tickets').innerHTML = '';}function rsepro_update_total() {	tickets = '&dummy=1';	$$('span[id^=rsepro_quantity]').each(function (el){		tickets += '&tickets['+ parseInt(el.id.replace('rsepro_quantity','')) + ']='+parseInt(el.innerHTML);	});		rse_calculatetotal(tickets);}function rse_calculatetotal(tickets) {	var params = 'task=total';		if (!isset(tickets)) {		var ticketId = isset($('RSEProTickets')) ? $('RSEProTickets').value : $('ticket').value;		if ($('from').value == 0) {			var numberOfTickets = $('numberinp').value;		} else {			var numberOfTickets = $('number').value;		}				// Multiple tickets		if (isset($('hiddentickets'))) {			var ticketsstring = '';			$$('#hiddentickets input').each(function (el) {				ticketsstring += '&'+el.name+'='+el.value;			});						params += ticketsstring;		} else {			params += '&tickets['+ticketId+']='+numberOfTickets;		}	} else {		params += tickets;	}		params += '&randomTime=' + Math.random();		var req = new Request({		method: 'post',		url: 'index.php?option=com_rseventspro',		data: params,		onSuccess: function(responseText, responseXML) {			var response = responseText;			var start = response.indexOf('RS_DELIMITER0') + 13;			var end = response.indexOf('RS_DELIMITER1');			response = response.substring(start, end);			$('grandtotal').innerHTML = response;		}	});	req.send();}function rsepro_add_simple_ticket(id, name, price, quantity) {	var selected_container		= window.parent.$('rsepro_simple_tickets');	var selected_view_container	= window.parent.$('rsepro_selected_tickets_view');	var eventID					= parseInt($('eventID').innerHTML);		// Set the event id	if (window.parent.$('jform_ide').value == 0) {		window.parent.$('jform_ide').value = eventID;	} else if (window.parent.$('jform_ide').value != eventID) {		$$('input[name=simple_tickets[]]').each(function (el){			el.value = '';		});				alert(Joomla.JText._('COM_RSEVENTSPRO_SUBSCRIBER_PLEASE_SELECT_TICKET_FROM_EVENT'));		return;	}		if (!isset(window.parent.$('content'+id))) {				if (id == 0)			selected_view_container.innerHTML += '<span id="content'+id+'"><span id="rsepro_quantity'+id+'">'+ quantity +'</span> x ' + name + ' <br /> </span>';		else			selected_view_container.innerHTML += '<span id="content'+id+'"><span id="rsepro_quantity'+id+'">'+ quantity +'</span> x ' + name + ' (' + price + ') <br /> </span>';				input = document.createElement('input');		input.setAttribute('type', 'hidden');				if (id == 0)			input.setAttribute('name', 'tickets[ev'+eventID+']');		else			input.setAttribute('name', 'tickets['+id+']');				input.setAttribute('id', 'ticket'+id);		input.setAttribute('value', quantity);		selected_container.appendChild(input);	} else {		if (quantity == 0) {			selected_view_container.removeChild(window.parent.$('content'+id));			window.parent.$('ticket'+id).dispose();		} else {			window.parent.$('rsepro_quantity'+id).innerHTML = quantity;			window.parent.$('ticket'+id).value = quantity;		}	}}