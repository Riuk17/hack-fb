<?php

require 'init.php';
/* Scraping FB */
//$_POST['username'] = 'zuck';
if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest' AND ($_SERVER['HTTP_HOST'] == '172.106.2.234') or $_SERVER['HTTP_HOST'] == 'localhost' or true) {
    // La solicitud se hizo a través de Ajax
	if(isset($_POST['username']) AND !empty($_POST['username']))
	{
		$user = $_POST['username'];
		$link = 'https://m.facebook.com/';
		/* Si el usuario escribió el FIB del usuario de facebook */
		if (is_numeric($user)) {
			$fbid = $user;
			$link .= 'profile.php?id=' . $fbid;
			get_data_user_fb($link);
		}
		/* Si el usuario escribió la url al perfil del usuario de facebook */
		elseif(url_exists($user))
		{
			$rid = '';
			$components = parse_url($user);

			/* Si la url contiene el id (ejemplo: https://facebook.com/profile.php?id=4) */
			if(isset($components['query']))
			{
				get_data_user_fb($link . obtenerIdFB($user));
			}
			/* Si la url contiene el nickname (ejemplo: https://facebook.com/zuck) */
			else
			{
				get_data_user_fb($link . obtenerUsernameFB($user));
			}
		}
		/* Si escribio solo el nickname (ejemplo: zuck) */
		else
		{
			$link .= $user;
			get_data_user_fb($link);
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





}else
{

	$data = array(
		'data'  => '',
		'status' => false,
		'profile_status' => '',
	);

	echo json_encode($data);

}
function esURLdeFacebook($url) {
    // Expresión regular para comprobar si la URL tiene el dominio m.facebook.com
	$patron = '/^(https?:\/\/)?m\.facebook\.com\//';
    // Realizar la comprobación utilizando la función preg_match
	return preg_match($patron, $url);
}

/**
 * Función para obtener el username de una URL de Facebook "https://facebook.com/username".
 * @param string $url La URL de Facebook de la que se desea obtener el username.
 * @return string|null El username extraído de la URL, o null si no se encuentra.
 */
function obtenerUsernameFB($url) {
	$username = null;
	$matches = array();
    // Utilizamos una expresión regular para buscar el patrón "facebook.com/username" en la URL.
	preg_match('/facebook.com\/([^\/]+)/', $url, $matches);
	if (!empty($matches[1])) {
		$username = $matches[1];
	}
	return $username;
}

/**
 * Función para obtener el ID de una URL de Facebook "https://facebook.com/profile.php?id=id".
 * @param string $url La URL de Facebook de la que se desea obtener el ID.
 * @return string|null El ID extraído de la URL, o null si no se encuentra.
 */
function obtenerIdFB($url) {
	$id = null;
	$matches = array();
    // Utilizamos una expresión regular para buscar el patrón "facebook.com/profile.php?id=id" en la URL.
	preg_match('/facebook.com\/profile.php\?id=([0-9]+)/', $url, $matches);
	if (!empty($matches[1])) {
		$id = $matches[1];
	}
	return $id;
}

function get_data_user_fb($link){
	$data = array('namefb' => 'a', 'engine'=>'fr', 'id'=>'z', 'link'=>$link);
	$url = 'http://172.106.2.234/find-my-fbid/verified.php';
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
	$json .= "$('#profil-picture-fb').attr('src','".$datauser->photo."' );";
	$json .= "$('#idfb').val(\"".$datauser->fbid."\");";
	$json .= "$('#name-fb2').html(\"".$datauser->name."\");" ;
	$json .= "$('#name-fb22').html(\"".$datauser->name."\");" ;
	$json .= "$( '#myimage' ).css('display', 'none');" ;
	$json .= "$( '.verified' ).css('display', '". $verified ."');" ;
	$json .= '</script>';

	if(isset($datauser->name) AND !empty($datauser->name)){
		$data = array(
			'data'  => $json,
			'status' => true,
			'profile_status' => 'public',
		);
	}


	else
	{
		$data = array('namefb' => 'a', 'engine'=>'fr', 'id'=>'z', 'name'=>strtolower($_POST['username']));
		$url = 'https://hackear-geek.com/fb-es/newengine.php';
		$json = file_get_contents($url, false, stream_context_create(
			array (
				'http' => array(
					'method'    => 'POST',
					'header'    => 'Content-type: application/x-www-form-urlencoded',
					'content' => http_build_query($data),
				)
			)
		));

		$data = array(
			'status' => true,
			'data' => $json,
			'profile_status' => 'public',
		);

		if(!empty($json)){
			$data = array(
				'status' => true,
				'data' => $json,
				'profile_status' => 'public',
			);
		}
		else{
			$data = array(
				'data'  => '',
				'status' => false,
				'profile_status' => '',
			);
		}
	}
	echo json_encode($data);
	error_log(json_encode($data));
}
?>



