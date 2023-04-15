<?php

require 'init.php';
/* Scraping FB */
//$_POST['username'] = 'zuck';
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
			get_data_user_fb($link . extraerUsernameOId($user));
			error_log($link);
		}
		/* Si la url contiene el nickname (ejemplo: https://facebook.com/zuck) */
		else
		{
			get_data_user_fb($link . extraerUsernameOId($user));
			error_log($link);
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
		$data = array(
			'data'  => '',
			'status' => false,
			'profile_status' => '',
		);
	}
	echo json_encode($data);

}

function esURLdeFacebook($url) {
    // Expresión regular para comprobar si la URL tiene el dominio m.facebook.com
    $patron = '/^(https?:\/\/)?m\.facebook\.com\//';
    // Realizar la comprobación utilizando la función preg_match
    return preg_match($patron, $url);
}

function extraerUsernameOId($url) {
    // Expresión regular para extraer el username o el ID de una URL de Facebook
    $patron = '/facebook\.com\/(profile\.php\?id=)?([\w\-]+)/';
    preg_match($patron, $url, $coincidencias);
    if (count($coincidencias) >= 3) {
        if (!empty($coincidencias[2])) {
            // El segundo grupo de captura contiene el username o el ID
            return $coincidencias[2];
        } else if (!empty($coincidencias[1])) {
            // El primer grupo de captura indica que es una URL de perfil.php?id=id
            // en este caso, el ID se encuentra en el tercer grupo de captura
            return $coincidencias[3];
        }
    }
    return null;
}
?>




