<?php require_once( 'MailChimp.php' ); ?>

<?php
//use ZfrMailChimp\Client\MailChimpClient;

	echo "in requestInvite\n";
	
	$vEmail = $_GET["email"];
	$vPhone = $_GET["phone"];
	
	echo "email n phone: $vEmail $vPhone\n";
	
	$MailChimp = new \Drewm\MailChimp('85852e31e11299161277954ebc513902-us12');

	$result = $MailChimp->call('lists/subscribe', array(
		'id'    => '30ef3c524b',
		'email' => array('email' => $vEmail, 'PHONE' => $vPhone),
		'phone' => array('PHONE' => $vPhone)
	));

	if (isset($result['email'])) {
		echo "Please check your email. Your request for an invite has been submitted.";
	} else if (isset($result['status']) &&
			   $result['status'] === 'error' &&
			   $result['name'] !== 'List_AlreadySubscribed') {
		echo "Error " . $result['name'] . " (" . $result['code'] . "): " . $result['error'] . ".";
	} else {
		echo "An unknown error was encountered. Please try again later or contact us.";
	}
	
	echo "\nout requestInvite";
?>