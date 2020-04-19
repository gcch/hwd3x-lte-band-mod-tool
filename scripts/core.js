/**
 *
 * core.js ---
 *
 * Copyright (c) 2020 tag.
 *
 */

const ERRORS = {
	//-2:     'ERROR_NO_DEVICE',
	//-1:     'ERROR_DEFAULT',
	1:      'ERROR_FIRST_SEND',
	100001: 'ERROR_UNKNOWN',
	100002: 'ERROR_NOT_SUPPORT',
	100003: 'ERROR_NO_RIGHT',
	100004: 'ERROR_BUSY',
	100005: 'ERROR_FORMAT_ERROR',
	100006: 'ERROR_PARAMETER_ERROR',
	100007: 'ERROR_SAVE_CONFIG_FILE_ERROR',
	100008: 'ERROR_GET_CONFIG_FILE_ERROR',
	101001: 'ERROR_NO_SIM_CARD_OR_INVALID_SIM_CARD',
	101002: 'ERROR_CHECK_SIM_CARD_PIN_LOCK',
	101003: 'ERROR_CHECK_SIM_CARD_PUN_LOCK',
	101004: 'ERROR_CHECK_SIM_CARD_CAN_UNUSEABLE',
	101005: 'ERROR_ENABLE_PIN_FAILED',
	101006: 'ERROR_DISABLE_PIN_FAILED',
	101007: 'ERROR_UNLOCK_PIN_FAILED',
	101008: 'ERROR_DISABLE_AUTO_PIN_FAILED',
	101009: 'ERROR_ENABLE_AUTO_PIN_FAILED',
	102001: 'ERROR_GET_NET_TYPE_FAILED',
	102002: 'ERROR_GET_SERVICE_STATUS_FAILED',
	102003: 'ERROR_GET_ROAM_STATUS_FAILED',
	102004: 'ERROR_GET_CONNECT_STATUS_FAILED',
	103001: 'ERROR_DEVICE_AT_EXECUTE_FAILED',
	103002: 'ERROR_DEVICE_PIN_VALIDATE_FAILED',
	103003: 'ERROR_DEVICE_PIN_MODIFFY_FAILED',
	103004: 'ERROR_DEVICE_PUK_MODIFFY_FAILED',
	103005: 'ERROR_DEVICE_GET_AUTORUN_VERSION_FAILED',
	103006: 'ERROR_DEVICE_GET_API_VERSION_FAILED',
	103007: 'ERROR_DEVICE_GET_PRODUCT_INFORMATON_FAILED',
	103008: 'ERROR_DEVICE_SIM_CARD_BUSY',
	103009: 'ERROR_DEVICE_SIM_LOCK_INPUT_ERROR',
	103010: 'ERROR_DEVICE_NOT_SUPPORT_REMOTE_OPERATE',
	103011: 'ERROR_DEVICE_PUK_DEAD_LOCK',
	103012: 'ERROR_DEVICE_GET_PC_AISSST_INFORMATION_FAILED',
	103013: 'ERROR_DEVICE_SET_LOG_INFORMATON_LEVEL_FAILED',
	103014: 'ERROR_DEVICE_GET_LOG_INFORMATON_LEVEL_FAILED',
	103015: 'ERROR_DEVICE_COMPRESS_LOG_FILE_FAILED',
	103016: 'ERROR_DEVICE_RESTORE_FILE_DECRYPT_FAILED',
	103017: 'ERROR_DEVICE_RESTORE_FILE_VERSION_MATCH_FAILED',
	103018: 'ERROR_DEVICE_RESTORE_FILE_FAILED',
	103101: 'ERROR_DEVICE_SET_TIME_FAILED',
	103102: 'ERROR_COMPRESS_LOG_FILE_FAILED',
	104001: 'ERROR_DHCP_ERROR',
	106001: 'ERROR_SAFE_ERROR',
	107720: 'ERROR_DIALUP_GET_CONNECT_FILE_ERROR',
	107721: 'ERROR_DIALUP_SET_CONNECT_FILE_ERROR',
	107722: 'ERROR_DIALUP_DIALUP_MANAGMENT_PARSE_ERROR',
	107724: 'ERROR_DIALUP_ADD_PRORILE_ERROR',
	107725: 'ERROR_DIALUP_MODIFY_PRORILE_ERROR',
	107726: 'ERROR_DIALUP_SET_DEFAULT_PRORILE_ERROR',
	107727: 'ERROR_DIALUP_GET_PRORILE_LIST_ERROR',
	107728: 'ERROR_DIALUP_GET_AUTO_APN_MATCH_ERROR',
	107729: 'ERROR_DIALUP_SET_AUTO_APN_MATCH_ERROR',
	108001: 'ERROR_LOGIN_NO_EXIST_USER',
	108002: 'ERROR_LOGIN_PASSWORD_ERROR',
	108003: 'ERROR_LOGIN_ALREADY_LOGINED',
	108004: 'ERROR_LOGIN_MODIFY_PASSWORD_FAILED',
	108005: 'ERROR_LOGIN_TOO_MANY_USERS_LOGINED',
	108006: 'ERROR_LOGIN_USERNAME_OR_PASSWORD_ERROR',
	108007: 'ERROR_LOGIN_TOO_MANY_TIMES',
	109001: 'ERROR_LANGUAGE_GET_FAILED',
	109002: 'ERROR_LANGUAGE_SET_FAILED',
	110001: 'ERROR_ONLINE_UPDATE_SERVER_NOT_ACCESSED',
	110002: 'ERROR_ONLINE_UPDATE_ALREADY_BOOTED',
	110003: 'ERROR_ONLINE_UPDATE_GET_DEVICE_INFORMATION_FAILED',
	110004: 'ERROR_ONLINE_UPDATE_GET_LOCAL_GROUP_COMMPONENT_INFORMATION_FAILED',
	110005: 'ERROR_ONLINE_UPDATE_NOT_FIND_FILE_ON_SERVER',
	110006: 'ERROR_ONLINE_UPDATE_NEED_RECONNECT_SERVER',
	110007: 'ERROR_ONLINE_UPDATE_CANCEL_DOWNLODING',
	110008: 'ERROR_ONLINE_UPDATE_SAME_FILE_LIST',
	110009: 'ERROR_ONLINE_UPDATE_CONNECT_ERROR',
	110021: 'ERROR_ONLINE_UPDATE_INVALID_URL_LIST',
	110022: 'ERROR_ONLINE_UPDATE_NOT_SUPPORT_URL_LIST',
	110023: 'ERROR_ONLINE_UPDATE_NOT_BOOT',
	110024: 'ERROR_ONLINE_UPDATE_LOW_BATTERY',
	111001: 'ERROR_USSD_ERROR',
	111012: 'ERROR_USSD_FUCNTION_RETURN_ERROR',
	111013: 'ERROR_USSD_IN_USSD_SESSION',
	111014: 'ERROR_USSD_TOO_LONG_CONTENT',
	111016: 'ERROR_USSD_EMPTY_COMMAND',
	111017: 'ERROR_USSD_CODING_ERROR',
	111018: 'ERROR_USSD_AT_SEND_FAILED',
	111019: 'ERROR_USSD_NET_NO_RETURN',
	111020: 'ERROR_USSD_NET_OVERTIME',
	111021: 'ERROR_USSD_XML_SPECIAL_CHARACTER_TRANSFER_FAILED',
	111022: 'ERROR_USSD_NET_NOT_SUPPORT_USSD',
	112001: 'ERROR_SET_NET_MODE_AND_BAND_WHEN_DAILUP_FAILED',
	112002: 'ERROR_SET_NET_SEARCH_MODE_WHEN_DAILUP_FAILED',
	112003: 'ERROR_SET_NET_MODE_AND_BAND_FAILED',
	112004: 'ERROR_SET_NET_SEARCH_MODE_FAILED',
	112005: 'ERROR_NET_REGISTER_NET_FAILED',
	112006: 'ERROR_NET_NET_CONNECTED_ORDER_NOT_MATCH',
	112007: 'ERROR_NET_CURRENT_NET_MODE_NOT_SUPPORT',
	112008: 'ERROR_NET_SIM_CARD_NOT_READY_STATUS',
	112009: 'ERROR_NET_MEMORY_ALLOC_FAILED',
	113017: 'ERROR_SMS_NULL_ARGUMENT_OR_ILLEGAL_ARGUMENT',
	113018: 'ERROR_SMS_OVERTIME',
	113020: 'ERROR_SMS_QUERY_SMS_INDEX_LIST_ERROR',
	113031: 'ERROR_SMS_SET_SMS_CENTER_NUMBER_FAILED',
	113036: 'ERROR_SMS_DELETE_SMS_FAILED',
	113047: 'ERROR_SMS_SAVE_CONFIG_FILE_FAILED',
	113053: 'ERROR_SMS_LOCAL_SPACE_NOT_ENOUGH',
	113054: 'ERROR_SMS_TELEPHONE_NUMBER_TOO_LONG',
	114001: 'ERROR_SD_FILE_EXIST',
	114002: 'ERROR_SD_DIRECTORY_EXIST',
	114004: 'ERROR_SD_FILE_OR_DIRECTORY_NOT_EXIST',
	114004: 'ERROR_SD_IS_OPERTED_BY_OTHER_USER',
	114005: 'ERROR_SD_FILE_NAME_TOO_LONG',
	114006: 'ERROR_SD_NO_RIGHT',
	114007: 'ERROR_SD_FILE_IS_UPLOADING',
	115001: 'ERROR_PB_NULL_ARGUMENT_OR_ILLEGAL_ARGUMENT',
	115002: 'ERROR_PB_OVERTIME',
	115003: 'ERROR_PB_CALL_SYSTEM_FUCNTION_ERROR',
	115004: 'ERROR_PB_WRITE_FILE_ERROR',
	115005: 'ERROR_PB_READ_FILE_ERROR',
	115199: 'ERROR_PB_LOCAL_TELEPHONE_FULL_ERROR',
	116001: 'ERROR_STK_NULL_ARGUMENT_OR_ILLEGAL_ARGUMENT',
	116002: 'ERROR_STK_OVERTIME',
	116003: 'ERROR_STK_CALL_SYSTEM_FUCNTION_ERROR',
	116004: 'ERROR_STK_WRITE_FILE_ERROR',
	116005: 'ERROR_STK_READ_FILE_ERROR',
	117001: 'ERROR_WIFI_STATION_CONNECT_AP_PASSWORD_ERROR',
	117002: 'ERROR_WIFI_WEB_PASSWORD_OR_DHCP_OVERTIME_ERROR',
	117003: 'ERROR_WIFI_PBC_CONNECT_FAILED',
	117004: 'ERROR_WIFI_STATION_CONNECT_AP_WISPR_PASSWORD_ERROR',
	118001: 'ERROR_CRADLE_GET_CRURRENT_CONNECTED_USER_IP_FAILED',
	118002: 'ERROR_CRADLE_GET_CRURRENT_CONNECTED_USER_MAC_FAILED',
	118003: 'ERROR_CRADLE_SET_MAC_FAILED',
	118004: 'ERROR_CRADLE_GET_WAN_INFORMATION_FAILED',
	118005: 'ERROR_CRADLE_CODING_FAILED',
	118006: 'ERROR_CRADLE_UPDATE_PROFILE_FAILED',
};

function updateMessage(url, http_status, messsage, response) {
	document.getElementById('url').innerHTML = url
	document.getElementById('status').innerHTML = http_status;
	document.getElementById('message').innerHTML = messsage;
	document.getElementById('response').innerHTML = response;
	escapeDivPreHtml();
}

function escapeDivPreHtml() {
	var escapeHtml = (function(String) {
		var escapeMap = {
			'&': '&amp;',
			"'": '&#x27;',
			'`': '&#x60;',
			'"': '&quot;',
			'<': '&lt;',
			'>': '&gt;'
		};
		var escapeReg = '[';
		var reg;
		for (var p in escapeMap) {
			if (escapeMap.hasOwnProperty(p)) {
				escapeReg += p;
			}
		}
		escapeReg += ']';
		reg = new RegExp(escapeReg, 'g');
		return function escapeHtml(str) {
			str = (str === null || str === undefined) ? '' : '' + str;
			return str.replace(reg, function (match) {
				return escapeMap[match];
			});
		};
	}(String));
	var pre = document.querySelectorAll('div.div-pre');
	for (var i = 0; i < pre.length; i++) {
		pre[i].innerHTML = escapeHtml(pre[i].innerHTML);
	}
}

function encryptSHA256(str) {
	var sha256 = new jsSHA('SHA-256', 'TEXT', { encoding: 'UTF8' });
	sha256.update(str);
	var hash = btoa(sha256.getHash('HEX'));
	return hash
}

function logout() {
	console.log('info: logout() is called.');

}

// getDeviceEnabledBand() --- Get Enabled LTE Bands
function getDeviceEnabledBand() {
	console.log('info: getDeviceEnabledBand() is called.');

	var api = '/api/net/net-mode';
	var url = 'http://' + document.apiform.address.value + api;
	updateMessage(url, '', 'Connecting...', '');

	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onload = function(e) {

		var error_code = xhr.responseText.match(/<code>([0-9]+)<\/code>/i);
		if (error_code == null) {
			console.log(xhr.responseText);
			var lteband = xhr.responseText.match(/<lteband>([A-Fa-f0-9]+)<\/lteband>/i);
			console.log(lteband);
			lteband = lteband[1];

			var lteband_hex_upper = parseInt('0x' + lteband.substring(0, lteband.length - 8), 16);
			var lteband_hex_lower = parseInt('0x' + lteband.substring(lteband.length - 7, lteband.length), 16);
			var mask_hex = parseInt('0x00000001', 16);
			var band_number = 1;
			var band_list = [];
			var lteband_hex = lteband_hex_lower;
			while ( lteband_hex != 0x0 ) {
				if ( (lteband_hex & mask_hex) == 0x1 ) {
					band_list.push(band_number);
				}
				lteband_hex = lteband_hex >> 1;
				band_number++;
			}
			band_number = 33;
			lteband_hex = lteband_hex_upper;
			while ( lteband_hex != 0x0 ) {
				if ( (lteband_hex & mask_hex) == 0x1 ) {
					band_list.push(band_number);
				}
				lteband_hex = lteband_hex >> 1;
				band_number++;
			}

			setBands(band_list);
			updateMessage(url, xhr.statusText, 'Enabled LTE Band: ' + band_list, xhr.responseText);
		} else {
			updateMessage(url, xhr.statusText, 'Error: ' + ERRORS[error_code[1]], xhr.responseText);
		}
	};
	xhr.onerror = function(e) {
		updateMessage(url, xhr.statusText, 'Error: Check the address or your browser status (Cross-Origin Resource Sharing).', '');
	};
	xhr.send(null);
}

// setDeviceEnabledBand() --- Set Enabled LTE Bands
function setDeviceEnabledBand() {
	console.log('info: setDeviceEnabledBand() is called.');

	// Get csrf_token
	var api = '/';
	var url = 'http://' + document.apiform.address.value + api;
	updateMessage(url, '', 'Connecting...', '');

	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.withCredentials = true;
	xhr.onerror = function(e) {
		updateMessage(url, xhr.statusText, 'Error: Cannot access.', '');
	};
	xhr.send(null);

	if (xhr.status === 200) {
		var str = xhr.responseText;
		var csrf_token = str.match(/<meta name="csrf_token" content="([A-Za-z0-9]+)">/i);
		csrf_token = csrf_token[1];
		if (csrf_token != null) {
			updateMessage(url, xhr.statusText, 'Success to get a token: ' + csrf_token, '');
		} else {
			updateMessage(url, xhr.statusText, 'Error: Fail to get the token.', '');
			return -1;
		}

		// Login
		api = '/api/user/login';
		url = 'http://' + document.apiform.address.value + api;
		updateMessage(url, '', 'Connecting...', '');

		xhr.open('POST', url, false);
		xhr.onerror = function(e) {
			updateMessage(url, xhr.statusText, 'Error: Cannot access.', '');
		};

		// Generate credential
		var username = 'admin';
		var password = document.apiform.password.value;
		var password_hash = encryptSHA256(username + encryptSHA256(password) + csrf_token);

		var login_params = '';
		login_params += '<!--?xml version="1.0" encoding="UTF-8"?-->\r';
		login_params += '<request>\r';
		login_params += '<Username>' + username + '</Username>\r';
		login_params += '<Password>' + password_hash + '</Password>\r';
		login_params += '<password_type>4</password_type>\r';
		login_params += '</request>\r';
		console.log(login_params);

		xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		xhr.setRequestHeader('__RequestVerificationToken', csrf_token);
		xhr.send(login_params);

		// Login Result
		if (xhr.status === 200) {
			
			var error_code = xhr.responseText.match(/<code>([0-9]+)<\/code>/i);
			if (error_code == null) {
				updateMessage(url, xhr.statusText, 'Login Successful!', xhr.responseText);

				// Set LTE Bands
				api = '/api/net/net-mode';
				url = 'http://' + document.apiform.address.value + api;
				updateMessage(url, '', 'Connecting...', '')
				token = xhr.getResponseHeader('__RequestVerificationTokenOne');
				xhr.open('POST', url, true);
				xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
				xhr.setRequestHeader('__RequestVerificationToken', token);
				xhr.onload = function(e) {
					error_code = xhr.responseText.match(/<code>([0-9]+)<\/code>/i);
					console.log(error_code);
					if (error_code == null) {
						updateMessage(url, xhr.statusText, 'Change Successful!', xhr.responseText);
					} else {
						updateMessage(url, xhr.statusText, 'Error: ' + ERRORS[error_code[1]], xhr.responseText);
					}
				};
				xhr.onerror = function(e) {
					updateMessage(url, xhr.statusText, 'Error: Check Parameters.', '')
				};
				xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset="UTF-8"');
				console.log(document.apiform.reqparams.value);
				xhr.send(document.apiform.reqparams.value);

			} else {
				updateMessage(url, xhr.statusText, 'Error: ' + ERRORS[error_code[1]], xhr.responseText);
			}
			
		} else {
			updateMessage(url, xhr.statusText, 'Error: Cannot access.', xhr.responseText);
		}

	} else {
		updateMessage(url, xhr.statusText, 'Error: Check the address or your browser status (Cross-Origin Resource Sharing).', '')
	}
}

function getBands() {
	band_list = [];
	elements = document.querySelectorAll('input.cb-band');
	for (element of elements) {
		if (element.checked) {
			band_list.push(element.value);
		}
	}
	return band_list;
}

function setBands(bands) {
	elements = document.querySelectorAll('input.cb-band');
	for (element of elements) {
		element.checked = false;
	}

	for (band of bands) {
		element = document.querySelector('input[name="band' + band + '"]');
		if (element != null) {
			element.checked = true;
		}
	}
	updateRequestParameters();
}

function updateRequestParameters() {
	/*
	Network Mode:
		00 - ALL
		01 - Only 2G
		02 - Only 3G
		03 - Only 4G (LTE)
		99 - No Change

	Network Band:
		       1 - BC 0A
		       2 - BC 0B
		       4 - BC 1
		       8 - BC 2
		      10 - BC 3
		      20 - BC 4
		      40 - BC 5
		     400 - BC 6
		     800 - BC 7
		    1000 - BC 8
		    2000 - BC 9
		    4000 - BC 10
		    8000 - BC 11
		10000000 - BC 12
		20000000 - BC 13
		80000000 - BC 14
		3FFFFFFF - ALL

	LTE Band:
		               1 - B 1
		               4 - B 3
		              10 - B 5
		           10000 - B 17
		           20000 - B 18
		     10000000000 - B 41
		     30000000000 - B 42
		7FFFFFFFFFFFFFFF - ALL
	*/

	networkmode = 3;
	networkband = parseInt('0x3FFFFFFF', 16);

	lteband_list = getBands().sort();
	//console.log(lteband_list);
	lteband_bin_str = '';
	for (i = 1; i < 64; i++) {
		flag = '0';
		if (lteband_list.indexOf(i.toString()) >= 0) {
			flag = '1';
		}
		lteband_bin_str = flag + lteband_bin_str;
	}
	lteband_bin_str_upper = lteband_bin_str.substring(0, 31);
	lteband_bin_str_lower = lteband_bin_str.substring(32, 64);
	lteband_int_upper = parseInt(lteband_bin_str_upper, 2);
	lteband_int_lower = parseInt(lteband_bin_str_lower, 2);
	lteband_hex_str = lteband_int_upper.toString(16) + ('00000000' + lteband_int_lower.toString(16)).slice(-8);

	parameters = '';
	parameters += '<!--?xml version="1.0" encoding="UTF-8"?-->\r';
	parameters += '<request>\r';
	parameters += '<NetworkMode>' + ('00' + networkmode).slice(-2) + '</NetworkMode>\r';
	parameters += '<NetworkBand>' + networkband.toString(16) + '</NetworkBand>\r';
	parameters += '<LTEBand>' + Number(lteband_hex_str) + '</LTEBand>\r';
	parameters += '</request>\r';
	
	document.apiform.reqparams.value = parameters;
}