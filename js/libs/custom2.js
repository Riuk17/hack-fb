function random_password(){
	var rm = Math.floor((Math.random() * 6) + 15); // 6 - 15
	var output = "";
	for(var i=0;i<rm;i++){
		output += "*";
	}
	return output;
}

function cadenas(url, social=''){
	var d = new Date();
	var t = d.getTime();

	var txt = [
		[1,200,'<p class="resalt">#Trying 1 times</p>'],
		[1,600,'<p class="resalt">#Trying 2 times</p>'],
		[1,1200,'<p class="resalt">#Trying 3 times</p>'],
		[1,2300,'<p class="resalt">#Trying 4 times</p>'],
		[1,500,'<p class="resalt">#Trying 5 times</p>'],
		[0,100,'<p>>_ Loading again...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--libs/attack.py...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--libs/attack-ddos.py...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--libs/attack-server.py...</p>'],
		[1,1000,'<p>&nbsp;&nbsp;&nbsp;--py/python-api.py...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--py/injection.py...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--cpp/config.cpp...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--cpp/injection-test1.cpp...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--ruby/ruby-keys.rb...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--ruby/injection.rb...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--includes/script-hack-2.7.6.php...</p>'],
		[0,100,'<p>>_ Attack...</p>'],
		[1,1200,'<p>>_ Attack...</p>'],
		[0,100,'<p>>_ Attack...</p>'],
		[0,100,'<p>>_ Waiting...</p>'],
		[1,2200,'<p class="resalt">#Open port</p>'],
		[1,2200,'<p class="resalt">#Emuling IP United States, BX</p>'],
		[0,100,'<p class="fail">>_ Fail...</p>'],
		[0,100,'<p class="fail">>_ Fail...</p>'],
		[0,100,'<p class="fail">>_ Fail...</p>'],
		[0,100,'<p class="fail">>_ Fail...</p>'],
		[1,1100,'<p class="resalt">#Open port 702</p>'],
		[0,600,'<p>>_ Details acccount...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[1,700,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p class="fail">>_ Fail...</p>'],
		[1,1000,'<p class="fail">>_ Fail...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: ********************...</p>'],
		[1,2100,'<p>>_ Accesing as '+url+'...</p>'],
		[1,600,'<p>>_ Accesing as '+url+'...</p>'],
		[1,200,'<p>>_ Accesing as '+url+'...</p>'],
		[0,100,'<p>>_ Accesing as '+url+'...</p>'],
		[0,100,'<p>>_ Accesing as '+url+'...</p>'],
		[0,100,'<p>>_ Accesing as '+url+'...</p>'],
		[0,100,'<p>>_ Accesing as '+url+'...</p>'],
		[0,100,'<p>>_ Accesing as '+url+'...</p>'],
		[0,100,'<p>>_ Accesing as '+url+'...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[1,900,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--OLD PASSWORD: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[1,2600,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[1,1000,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[1,700,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[1,200,'<p class="resalt">#Trying 1 times</p>'],
		[1,600,'<p class="resalt">#Trying 2 times</p>'],
		[1,900,'<p class="resalt">#Trying 3 times</p>'],
		[0,100,'<p>>_ Accesing as '+url+'...</p>'],
		[0,100,'<p>>_ Accesing as '+url+'...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[1,1200,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Generate password: ****************...</p>'],
		[0,100,'<p>>_ Open SQL port 3306...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp; >> SELECT f__u__ as username FROM ...</p>'],
		[0,100,'<p class="fail">>_ Fail...</p>'],
		[0,100,'<p class="fail">>_ Fail...</p>'],
		[0,100,'<p class="fail">>_ Fail...</p>'],
		[0,100,'<p class="fail">>_ Fail...</p>'],
		[1,500,'<p class="resalt">#ERROR</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp; >> SELECT f__u__ as user FROM ...</p>'],
		[0,100,'<p class="fail">>_ Fail...</p>'],
		[0,100,'<p class="fail">>_ Fail...</p>'],
		[0,100,'<p class="fail">>_ Fail...</p>'],
		[0,100,'<p class="fail">>_ Fail...</p>'],
		[1,500,'<p class="resalt">#ERROR</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp; >> SELECT fb__u__xx__ as username(VP.IP)...</p>'],
		[1,500,'<p class="resalt">#Return data</p>'],
		[1,500,'<p class="resalt">#Receiving answer</p>'],
		[1,900,'<p class="resalt">#Receiving asnwer</p>'],
		[0,100,'<p>>_ Open my data base SQL</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Saving data...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--Saving data...</p>'],
		[1,1800,'<p class="resalt">#HACK 99%</p>'],
		[1,1800,'<p class="resalt">#HACK 100%</p>'],
		[1,1800,'<p class="resalt">#VERIFY DATA ACCOUNT RECENT HACK</p>'],
		[1,1000,'<p>>_ Triying login...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password: *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password: *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password: *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password: *************...</p>'],
		[0,100,'<p>>_ Triying login...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password: *************...</p>'],
		[1,1100,'<p>&nbsp;&nbsp;&nbsp;--password: *************...</p>'],
		[0,100,'<p>>_ Triying login...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password: *************...</p>'],
		[0,100,'<p>>_ Triying login...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password: *************...</p>'],
		[0,100,'<p>>_ Triying login...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--email: *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password: *************...</p>'],
		[0,100,'<p class="resalt">#Decode password MD5...</p>'],
		[0,100,'<p>>_ Triying password decode...</p>'],
		[1,4200,'<p>&nbsp;&nbsp;&nbsp;--password *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password *************...</p>'],
		[1,500,'<p>&nbsp;&nbsp;&nbsp;--password *************...</p>'],
		[0,100,'<p>&nbsp;&nbsp;&nbsp;--password *************...</p>'],
		[1,500,'<p class="resalt">#LOGIN</p>'],
		[0,100,'<p>>_ Saving account details in our data base...</p>'],
		[0,100,'<p>>_ Saving account details in our data base...</p>'],
		[0,100,'<p>>_ Please wait...</p>'],
		[1,1000,'<p>>_ Waiting any seconds...</p>'],
		[0,100,'<p>>_ Saving account details in our data base...</p>'],
		[0,100,'<p>>_ Please wait...</p>'],
		[1,200,'<p>>_ Waiting any seconds...</p>'],
		[1,1200,'<p>>_ Please wait...</p>'],
		[1,500,'<p class="resalt">SAVED DATA</p>'],
		[1,2200,'<p>>_ Saved data sucefully...</p>'],
		[0,100,'<p>&nbsp;</p>'],
		[0,100,'<p>&nbsp;</p>'],
		[1,400,'<p>>_ FINISH HACK 100%!</p>'],
		[1,400,'<p>>_ PLEASE Wait any seconds...</p>'],
		[0,100,'<p> ......... TURN OFF ........</p>'],
		[0,100,'<p> ......... TURN OFF ........</p>'],
		[0,100,'<p> ........ SLEEP MODE .......</p>'],
		[3,100,'<p> Your account details are saved, download it now.</p>']];

return txt;
}
function countProperties(obj) {
	var count = 0;

	for(var prop in obj) {
		if(obj.hasOwnProperty(prop))
			++count;
	}

	return count;
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function unicodeToChar(text) {
	return text.replace(/\\u[\dA-F]{4}/gi,
		function (match) {
			return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
		});
}

function sanear_user(t) {
	var nuevo = '';

	// buscamos arrobas y que solo tenga 1 y solo al principio
	if (   (t.indexOf('@'))>-1   ) {
			// si tiene arrobas, ahora vemos que sea al inicio
		if(   (t.indexOf('@'))==0 && (t.indexOf('@', 1))==-1   ) {
			// la tiene en la pos 1
			nuevo = t.replace('@','');
			SEGUIR = true;
		} else {
			// tiene la @ en otra posicion o tiene mas @
			SEGUIR = false;
		}
	} else {
			// no tiene arrobas
		nuevo = t;
		SEGUIR = true;
	}

	// vemos que solo sea una cadena de letras numeros y puntos o solo numeros
	if(   SEGUIR===true   ) {
			// ya se explodeo el ?
			// explodeamos el / si tiene, ejemplo " facebook.com/user/ "
		var nnn = nuevo.split('https://hackear.mx/');
		nuevo = nnn[0];

		var reg = new RegExp('^[a-zA-Z0-9]+[a-zA-Z0-9\.]+[a-zA-Z0-9]+$');
		var reg2 = new RegExp('^[0-9]+$');
		if(   reg.test(nuevo)   ) {
				// username parece correcto
					// ahora vemos que no tenga puntos seguidos (ej: john..09)
			var ln = nuevo.length;
			var punto_encontrado = false;
			var puntos_validos = true;
			for(var i=0; i<ln; i++) {
				if(   nuevo[i]=='.'   ) {
					if(   punto_encontrado===true   ) {
								// ya habia sido encontrado y volvio a ser encontrado, tiene 2 puntos seguidos (MAL)
						puntos_validos = false;
						break;
					} else {
						punto_encontrado = true;
					}
				} else {
					punto_encontrado = false;
				}
					} // end for

					if(   puntos_validos===true   ) {
							// todo bien con el USER
						nuevo = nuevo;
						SEGUIR = true;
					} else {
						SEGUIR = false;
					}
				} else if(   reg2.test(nuevo)   ) {
				// solo numeros (id user)
					SEGUIR = true;
					nuevo = nuevo;
				} else {
				// tiene caracteres raros al principio o final
					SEGUIR = false;
				}
			}

			var rt = [nuevo, SEGUIR];
			return rt;
} /* end function sanear_user */



			function set_error( red, t ) {
				$('#hack_error_'+red).fadeIn();

				$('.hack-content').removeClass('hack-wait');
				$('.input_hack').val('');

				$(t).find('input').prop('disabled', false);
				$(t).find('button').html('Hackear');
				$(t).find('.waiter').remove();
			}

			function set_private(red, data, input) {
				for_modal_private_red = red;
				for_modal_private_input = input;
				for_modal_private_data = data;

				$('#modal_hack_force').fadeIn(100);

				$('.form_hack').find('.waiter').remove();
} /* end function set_private */
