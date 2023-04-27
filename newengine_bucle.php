<?php

require 'init.php';
/* Scraping FB */
$_POST['username'] = 'zuck';

$a = 0;
while ($a < 10){
if(isset($_POST['username']) AND !empty($_POST['username']))
{
	$user = $_POST['username'];
	$link = 'https://m.facebook.com/';
	/* Si el usuario escribió el FIB del usuario de facebook */
	if (is_numeric($user)) {
		$fbid = $user;
		$link .= 'profile.php?id=' . $fbid;
	}
	/* Si el usuario escribió la url al perfil del usuario de facebook */
	elseif(url_exists($user))
	{
		$link = $user;
		$rid = '';
		$components = parse_url($user);

		/* Si la url contiene el id (ejemplo: https://facebook.com/profile.php?id=4) */
		if(isset($components['query']))
		{
			get_data_user_fb($user);
			$a++;
			print($a . PHP_EOL);
		}
		/* Si la url contiene el nickname (ejemplo: https://facebook.com/zuck) */
		else
		{
			get_data_user_fb($user);
			$a++;
			print($a . PHP_EOL);
		}
	}
	/* Si escribio solo el nickname (ejemplo: zuck) */
	else
	{
		$link .= $user;
		get_data_user_fb($link);
		$a++;
		print($a . PHP_EOL);
	}


}

elseif(isset($_POST['user1']))
{
	$data = array(
		'status' => true,
		'data' => file_get_contents('facebook/fakedata.txt'),
		'profile_status' => 'public',
	);
}

else
{
	$data = array(
		'status' => false,
	);
}

}
function get_data_user_fb($link){
	$data = array('namefb' => 'a', 'engine'=>'fr', 'id'=>'z', 'link'=>$link);
	$url = 'http://localhost/find-my-fbid/verified.php';
	$json = file_get_contents($url, false, stream_context_create(
		array (
			'http' => array(
				'method'    => 'POST',
				'header'    => 'Content-type: application/x-www-form-urlencoded',
				'content' => http_build_query($data),
			)
		)
	));

	$datauser = json_decode($json);
	$verified = $datauser->verified == true ? 'block' : 'none';
	$json = '<script type=\'text/javascript\'>';
	//$json .= "$('#profil-picture-fb').attr('src','".$datauser->photo."' );";
	//$json .= "$('#idfb').val(\"".$datauser->fbid."\");";
	$json .= "$('#name-fb2').html(\"".$datauser->name."\");" ;
	//$json .= "$('#name-fb22').html(\"".$datauser->name."\");" ;
	//$json .= "$( '#myimage' ).css('display', 'none');" ;
	//$json .= "$( '.verified' ).css('display', '". $verified ."');" ;
	$json .= '</script>';
	$data = array(
		'data'  => $json,
		'status' => true,
		'profile_status' => 'public',
	);

	echo json_encode($data);

}

?>




