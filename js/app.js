// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'App Framework7',
	panel: {
		swipe: true,
	},
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/favorito/',
    	url: 'favorito.html',
    	name: 'favorito',
  		},
		{
		path: '/guardado/',
    	url: 'guardado.html',
    	name: 'guardado',
  		},
		{
		path: '/recetas/',
    	url: 'recetas.html',
    	name: 'recetas',
  		},
		{
		path: '/ingredientes/',
    	url: 'ingredientes.html',
    	name: 'ingredientes',
  		},
		{
		path: '/explora/',
    	url: 'explora.html',
    	name: 'explora',
  		},
		{
		path: '/caja/',
    	url: 'caja.html',
    	name: 'caja',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		{
		path: '/producto/',
    	url: 'producto.html',
    	name: 'producto',
  		},
		
	],
	dialog: {
		title: 'LaMare',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#modal-login');
		
		app.dialog.alert('¡Bienvenido a la App LaMare!');
    }
	
});



$$(document).on('click', '#btnCheckout', function (e) {
	e.preventDefault();

	
	app.dialog.confirm('¿Seguro desea finalizar su compra?', function () {

		//app.dialog.alert('Great!');
		
		var notification = app.notification.create({
		 icon: '<i class="material-icons">check</i>',
		 title: 'Order',
		 titleRightText: '',
		 subtitle: '',
		 text: "Tu orden ha sido recibido",
		 closeTimeout: 3000,
		});
		notification.open();

	});



});


