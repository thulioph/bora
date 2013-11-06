var APP = APP || {};

APP.Login = {
	_tela: null,
	setUp: function() {
		var that = this;

		// ir até a tela de opções de interesses
		$$('.buttons_login').tap(function() {
			that.MostrarTelaInteresses();
			that.FecharTelaLogin();
		});

		// ativar o interesse em categorias
		$$('.circular_buttons_nav').tap(function(event){
			that.MarcarCategoriaComoInteressado(event);
		});

		// pular cadastro
		$$('#step_pass').tap(function(){
			that.MostrarTelaListaEventos();
			that.FecharTelaLogin();
		});

		// fechar tela de interesses e ir para lista de eventos
		$$('#go_to_app').tap(function(){
			that.MostrarTelaListaEventos();
			that.FecharTelaInteresses();
		});

		// mostrar tela de lista de eventos
		$$('#go_event_list').tap(function(){
			that.MostrarTelaListaEventos();
			that.FecharTelaEventosMapa();
		});

		// mostrar menu principal por tap
		$$('.prime_nav_view').tap(function(){
			that.AtivarMenuPrincipal();
		});

		// mostrar menu com swipe
		// $$('#showcase_events').swipeRight(function(event){
		// 	that.AtivarMenuPrincipalSwipe(event);
		// });

		// fechar menu com swipe
		// $$('#showcase_events').swipeLeft(function(event){
		// 	that.DesativarMenuPrincipalSwipe(event)
		// });

		// mostrar tela de detalhes do evento
		$$('.content article').tap(function(){
			that.MostrarTelaDetalheEventos();
			that.FecharTelaListaEventos();
		});

		// voltar para tela de lista de eventos
		$$('#back_to_showcase_events').tap(function(){
			that.MostrarTelaListaEventos();
			that.FecharTelaDetalheEventos();
		});

		// mostrar menu de compartilhamento
		$$('#share_button').tap(function(){
			$$('.nav_share').toggleClass('activeMenu')
		});

		// mostrar menu principal por tap
		$$('#more_informations_event').tap(function(){
			that.AtivarMenuDetalheEvento();
		});

		// mostrar menu com swipe
		// $$('#event_detail').swipeLeft(function(event){
		// 	that.AtivarMenuDetalheEventoSwipe(event);
		// });

		// fechar menu com swipe
		// $$('#event_detail').swipeRight(function(event){
		// 	that.DesativarMenuDetalheEventoSwipe(event)
		// });

		// alterar distância de pesquisa no mapa
		$$('#distance_change').swiping(function(){
			that.FiltroDistancia();
		});

		// mostrar opções de busca no mapa
		$$('#more_informations_map').tap(function(){
			that.AtivarMenuOpcoesGeolocalizacao();
		});

		// mostrar tela de eventos no mapa
		$$('#go_events_on_map').tap(function(event){
			that.FecharTelaListaEventos();
			that.MostrarTelaEventosMapa(event);
		});
	},
	FecharTelaLogin: function(){
		var login = $$('#app_login');
		
		login.removeClass('active_display');

		setTimeout(function(){
			login.style('display', 'none');
		},300);
	},
	MostrarTelaInteresses: function(){
		var interesses = $$('#app_interests');
		
		setTimeout(function(){
			interesses.style('display', 'block');
		},12);
		setTimeout(function(){
			interesses.addClass('active_display');	
		},150);

		window.scrollTo(0)
	},
	FecharTelaInteresses: function(){
		var interesses = $$('#app_interests');
		
		interesses.addClass('close_display').removeClass('active_display');

		setTimeout(function(){
			interesses.style('display', 'none');
		},300);
	},
	MarcarCategoriaComoInteressado: function(event){
		var target = event.currentTarget;

		$$(target).find('.card').toggleClass('flipped');
	},
	MostrarTelaListaEventos: function(){
		var eventos = $$('#showcase_events'),
			nav = $$('#app_navigation a'),
			target = $$('#go_event_list'),
			aplicacao = $$('#app_canvas'),
			menu = $$('#left_bar');

		menu.removeClass('activeMenu');		
		aplicacao.removeClass('prime_nav_view_show');

		nav.removeClass('active');
		target.addClass('active');
		
		setTimeout(function(){
			eventos.style('display', 'block').removeClass('close_display');
		},12);
		setTimeout(function(){
			eventos.addClass('active_display');	
		},150);

		window.scrollTo(0)
	},
	FecharTelaListaEventos: function(){
		var interesses = $$('#showcase_events');
		
		interesses.addClass('close_display').removeClass('active_display');

		setTimeout(function(){
			interesses.style('display', 'none');
		},300);
	},
	AtivarMenuPrincipal: function(){
		var aplicacao = $$('#app_canvas'),
			menu = $$('#left_bar');
		
		menu.toggleClass('activeMenu');		
		aplicacao.toggleClass('prime_nav_view_show');
	},
	AtivarMenuPrincipalSwipe: function(event){
		var valor = event.currentTouch.x,
			aplicacao = $$('#app_canvas'),
			menu = $$('#left_bar');

		menu.addClass('activeMenu');
		if (valor >= 100){
			aplicacao.addClass('prime_nav_view_show');
		} else{
			aplicacao.style('-webkit-transform', 'translate(' + valor + '%, 0)');
		};
	},
	DesativarMenuPrincipalSwipe: function(event){
		var valor = event.currentTouch.x,
			aplicacao = $$('#app_canvas'),
			menu = $$('#left_bar');

		
		menu.removeClass('activeMenu');
		if (valor >= 100){
			aplicacao.removeClass('prime_nav_view_show');
		} else{
			aplicacao.style('-webkit-transform', 'translate(' + valor + '%, 0)');
		};
	},
	MostrarTelaDetalheEventos: function(){
		var eventos = $$('#event_detail');
		
		setTimeout(function(){
			eventos.style('display', 'block').removeClass('close_display');
		},12);
		setTimeout(function(){
			eventos.addClass('active_display');	
		},150);

		window.scrollTo(0)
	},
	FecharTelaDetalheEventos: function(){
		var eventos = $$('#event_detail');
		
		eventos.addClass('close_display').removeClass('active_display');

		setTimeout(function(){
			eventos.style('display', 'none');
		},300);
	},
	AtivarMenuDetalheEvento: function(){
		var aplicacao = $$('#app_canvas'),
			menu = $$('#right_bar_event');
		
		menu.toggleClass('activeMenu');		
		aplicacao.toggleClass('event_nav_view_show');
	},
	AtivarMenuDetalheEventoSwipe: function(event){
		var valor = event.currentTouch.x,
			aplicacao = $$('#app_canvas'),
			menu = $$('#right_bar_event');

		menu.addClass('activeMenu');
		if (valor >= 100){
			aplicacao.addClass('event_nav_view_show');
		} else{
			aplicacao.style('-webkit-transform', 'translate(' + valor + '%, 0)');
		};
	},
	DesativarMenuDetalheEventoSwipe: function(event){
		var valor = event.currentTouch.x,
			aplicacao = $$('#app_canvas'),
			menu = $$('#right_bar_event');

		
		menu.removeClass('activeMenu');
		if (valor >= 100){
			aplicacao.removeClass('event_nav_view_show');
		} else{
			aplicacao.style('-webkit-transform', 'translate(' + valor + '%, 0)');
		};
	},
	MostrarTelaEventosMapa: function(event){
		var geolocalizacao = $$('#events_on_map'),
			aplicacao = $$('#app_canvas'),
			menu = $$('#left_bar'),
			nav = $$('#app_navigation a'),
			target = $$(event.currentTarget);
		
		setTimeout(function(){
			geolocalizacao.style('display', 'block').removeClass('close_display');
		},12);
		setTimeout(function(){
			geolocalizacao.addClass('active_display');	
		},150);

		menu.removeClass('activeMenu');		
		aplicacao.removeClass('prime_nav_view_show');

		nav.removeClass('active');
		target.addClass('active');

		window.scrollTo(0)
	},
	FecharTelaEventosMapa: function(){
		var geolocalizacao = $$('#events_on_map');
		
		geolocalizacao.addClass('close_display').removeClass('active_display');

		setTimeout(function(){
			geolocalizacao.style('display', 'none');
		},300);
	},
	FiltroDistancia: function(){
		var input_val = $$('#distance_change').val(),
			bandeira = $$('.result_distance');

		bandeira.text(input_val + ' km')

		if (input_val == 5){
			bandeira.style('left','2%');
		} else if(input_val == 6){
			bandeira.style('left','18%');
		}else if(input_val == 7){
			bandeira.style('left','32%');
		}else if(input_val == 8){
			bandeira.style('left','47%');
		}else if(input_val == 9){
			bandeira.style('left','61%');
		}else if(input_val == 10){
			bandeira.style('left','76%');
		};
	},
	AtivarMenuOpcoesGeolocalizacao: function(){
		var aplicacao = $$('#app_canvas'),
			menu = $$('#right_bar');
		
		menu.toggleClass('activeMenu');		
		aplicacao.toggleClass('event_nav_view_show');
	}

}