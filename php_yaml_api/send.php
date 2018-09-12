<?php
session_start();

// Include PHP class
require_once('rcapi.class.php');

/**
 *
 * update with your public and private keys.
 * obtain your keys from EXTRA section in RedCappi.com
 * You need to become user to get the keys
 */
 
$public_key = 'cb99eff7f889189c0c0a7b7bf0644546a449a25dc6b079879177737e11bf7b14' ;
$private_key = '7c2f52a4d17d54e87b0ecb17f584775ba86f83c19aaf81a9329e215ab0aab3f9' ;
	
	
$api_domain = 'http://api.redcappi.com';
$api_folder = '/v1';
	
	
	
require_once 'YMLP_API.class.php';
$ApiKey = "918WTCJJ5VF38NXWAHZC";
$ApiUsername = "r9tp";
$api = new YMLP_API($ApiKey,$ApiUsername);


//$rcapi = new RedCappiClientApi($public_key, $private_key, $api_domain, $api_folder);

 //echo $rcapi->addContacts(13271, array( 'email_address'=>'casinonaresh@yahoo.co.in','first_name'=>'contact 3', 'last_name'=>' ','name'=>' ', 'state'=>'', 'zip_code'=>'', 'country'=>' ', 'city'=>' ', 'company'=>' ', 'dob'=>' ', 'phone'=>' ', 'address'=>' '));  


// run command

if(isset($_POST)) {
	if (isset($_POST['first_name'])) {
		$_SESSION["vorname"]= $_POST['first_name'];
	}
	if (isset($_POST['email'])) {
		$_SESSION["email"]= $_POST['email'];
	}
	if (isset($_POST['YMPT'])) {
		$_SESSION["timer"]= $_POST['YMPT']-1;
	}
	if (isset($_POST['session'])) {
		$session = $_POST['session'];
	}
	if (isset($_POST['affiliate_id'])) {
		$affiliate_id = $_POST['affiliate_id'];
	}
	if (isset($_POST['email']) && isset($_POST['first_name'])) {
		$email = $_POST['email'];
		$name = $_POST['first_name'];
		$rcapi = new RedCappiClientApi($public_key, $private_key, $api_domain, $api_folder);
		//$rcapi->addList('ITALIAN 1'); 
		
		$rcapi->addContacts(16848, array( 'email_address'=>$email,'first_name'=>$name, 'last_name'=>' ','name'=>' ', 'state'=>'', 'zip_code'=>'', 'country'=>' ', 'city'=>' ', 'company'=>' ', 'dob'=>' ', 'phone'=>' ', 'address'=>' '));

		$GroupID = "1";

		$OverruleUnsubscribedBounced = "0";

		$output=$api->ContactsAdd($email,$name,$GroupID,$OverruleUnsubscribedBounced);

		if ($rcapi->ErrorMessage) {
			$ErrorMessage= "There's a connection problem: " . $rcapi->ErrorMessage;
		} else if(isset($session) && isset($affiliate_id)) {
			echo('/register.html?email='.$email . '&first_name='.$name . '&session='.$session . '&affiliate_id='.$affiliate_id);
		} else {
			echo('/register.html?email='.$email . '&first_name='.$name);
		}
	} else {
		echo('/register.html');
	}
}
?> 