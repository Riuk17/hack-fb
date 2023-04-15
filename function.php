<?php

function head()
{
	require 'head.php';
}

function footer()
{
	require 'footer.php';
}

/**
 * Optiene el fbid desde el nombre de usuario de fb
 * $url Si es true, $username contendrá el enlace al perfil del usuario (ejemplo: https://facebook.com/zuck)
 */
function get_fbid($username = '', $url = false)
{
	$url_fb = ($url) ? $username : 'https://clear-night-hub.glitch.me/index.php?username=' . $username;
	/* Contenido del html devuelto por https://facebook.com */
	$html     = get_html($url_fb);
	/* Crea un nuevo objeto dom */
	$doc      =   new DOMDocument();
	/* Convierte el html a objeto DOM */
	@$doc->loadHTML($html);
	/* Contendrá todas las etiquetas <a> */
	$tag_a    = '';
	/* Contendrá la url en donde estará el id del usuario */
	$url_data = '';
	/* Contendrá la etiqueta <a> con el id del usuario */
	$all_a = '';
	/* Optiene todos los div del DOM */
	$nodes    =   $doc->getElementsByTagName('div');

	/* Optiene contenido del div de la clase '_3-rj' */
	foreach ($nodes as $key => $div) {
		if($div->getAttribute('class') == '_3-rj')
		{
			/* Almacena el contenido del div */
			$all_a = $div;
			break;
		}
	}
	/* Si no logró conseguir una etiqueta <a> */
	if ($all_a == '') {
		return false;
	}
	/* Optiene contenido del <a> */
	$nodes  =   $all_a->getElementsByTagName('a');
	/* Optiene contenido del div de la clase '_3-rj' */
	foreach ($nodes as $key => $div) {

		/* Almacena el contenido del div */
		$tag_a = $div;
		break;
	}

	if ($tag_a->hasAttributes()) {
		foreach ($tag_a->attributes as $attr) {
			if($attr->nodeName == 'href')
			{
				$url_data =  'https://facebook.com'.$attr->nodeValue;
			}
		}
	}
	else
	{
		return false;
	}

	/* Si no se pudo extraer la url del usuario */
	if($url_data == '')
	{
		return false;
	}

	/* Finalmente extrar el id del usuario */
	$rid = '';
	$components = parse_url($url_data);
	$query = parse_str($components['query'], $rid);

	return $rid['rid'];
}

function get_html($url = '')
{
	$result = '';
	/* header option for file_get_contents */
	/* need to set user agent, because facebook will check user agent */
	$options = array(
		'http'=>array(
			'method'=>"GET",
			'header'=>"Accept-language: en\r\n" .
                  "Cookie: foo=bar\r\n" .  // check function.stream-context-create on php.net
                  "User-Agent: Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.102011-10-16 20:23:10\r\n" // i.e. An iPad
                )
	);
	try
	{
		$context = stream_context_create($options);
		@$result = file_get_contents($url, false, $context);
		error_log($result);
		return $result;
	}
	catch (Exception $e)
	{
		return false;
	}

}

/**
 * Verifica si el string contiene una url
 */
function url_exists( $url = '' ) {

	if( empty( $url ) ){
		return false;
	}

	$options['http'] = array(
		'method' => "HEAD",
		'ignore_errors' => 1,
		'max_redirects' => 0
	);
	$body = @file_get_contents( $url, NULL, stream_context_create( $options ) );

    // Ver http://php.net/manual/es/reserved.variables.httpresponseheader.php
	if( isset( $http_response_header ) ) {
		sscanf( $http_response_header[0], 'HTTP/%*d.%*d %d', $httpcode );

        // Aceptar solo respuesta 200 (Ok), 301 (redirección permanente) o 302 (redirección temporal)
		$accepted_response = array( 200, 301, 302 );
		if( in_array( $httpcode, $accepted_response ) ) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

function get_fbid_from_url($user)
{
	if($fbid = get_fbid($user, 1))
	{
		return $fbid;
	}
	return false;
}

/**
   * Limpia la url
   */
function clear_url()
{
	?>
	<script type="text/javascript">
		var parametrosUrl = ``;
		var o = new URLSearchParams(parametrosUrl);
      /* o tiene { [ 'ordering', 't1' ], [ 'ordering', 't2' ] } */
		console.log(o.entries());
		var m = new Map(o);
      // m eliminó los duplicados, tiene { 'ordering' => 't2' }
		console.log(m);
		var ns = new URLSearchParams(m);
      /* ns.toString() tiene ordering=t2;*/
		console.log(ns.toString())
      /* cambio la URL:*/
		window.history.replaceState(null,document.title,window.location.origin + window.location.pathname + '?' + ns.toString());
	</script>
	<?php
}

	/**
     * Redireccionar a un enlace
     */
	function redirectTo($url)
	{
		$url = urldecode($url);
		if(isset($_POST['ajax']) || isset($_GET['page'])) {
			echo "0: Redirigiendo... <script>window.location.href = '$url'</script>";
		} else {
			echo '<meta http-equiv="refresh" content="0;url='.$url.'">';
		}
		exit;
	}
	?>
