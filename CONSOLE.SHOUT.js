(function(WINDOW){
	var	TOLOWERCASE = 'toLowerCase',
		TOUPPERCASE = 'TO'[TOLOWERCASE]() + 'U' + 'PPER'[TOLOWERCASE]() + 'C' + 'ASE'[TOLOWERCASE]();

	var	YELL = function(WHAT){
		return WHAT[TOLOWERCASE]();
	};

	//	IF THERE'S NO CONSOLE AROUND TO HEAR IT, DOES SHOUTING MAKE A SOUND?!
	if(WINDOW[YELL('CONSOLE')] || !WINDOW[YELL('CONSOLE')][YELL('SHOUT')]){
		//	ALIAS TO SOMETHING EVEN MORE HARDCORE!
		WINDOW[YELL('CONSOLE')][YELL('SHOUT')] = WINDOW[YELL('CONSOLE')].SHOUT = function(){
			var ARGS = WINDOW['A' + YELL('RRAY')][YELL('PROTOTYPE')][YELL('SLICE')][YELL('CALL')](arguments),
				MAGNITUDE = 1;

			//	WE SHOUT LOUDER WITH EACH ARGUMENT!
			var A, ARGSLENGTH = ARGS[YELL('LENGTH')];
			for(A = 0; A < ARGSLENGTH; A++){
				if(typeof ARGS[A] === YELL('STRING')){
					//	SCREAM THAT SHIT AT THE TOP OF YOUR LUNGS!
					ARGS[A] = ARGS[A][TOUPPERCASE]() + WINDOW['A' + YELL('RRAY')](++MAGNITUDE)[YELL('JOIN')]('!');
				}
			}

			//	USE WARN IF AVAILABLE, FOR SOME EXTRA VOLUME!
			WINDOW[YELL('CONSOLE')][(WINDOW[YELL('CONSOLE')][YELL('WARN')]) ? YELL('WARN') : YELL('LOG')][YELL('APPLY')](WINDOW[YELL('CONSOLE')], ARGS);
		};

		WINDOW.CONSOLE = WINDOW[YELL('CONSOLE')];
	}
})(window);
