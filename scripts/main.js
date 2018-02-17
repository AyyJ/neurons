//////////////////////////////////
/////// LOAD ASSETS & SUCH ///////
//////////////////////////////////

Preload({
	images:[

		// Neuron images
		{id:"neuron_body", src:"assets/sprites/body_dark.png"},
		{id:"neuron_body_red", src:"assets/sprites/body_red.png"},
		{id:"neuron_body_blue", src:"assets/sprites/body_blue.png"},
		{id:"neuron_hover", src:"assets/sprites/body_hover.png"},
		{id:"neuron_highlight", src:"assets/sprites/body_highlight.png"},
		{id:"flash", src:"assets/sprites/hebb_flash.png"},

		// Shade
		{id:"shade", src:"assets/sprites/shade.png"}

	],
	sounds:[
		
		// Sounds & Shtuff
		{id:"sfx_spark", src:"assets/sounds/spark.mp3"},
		{id:"sfx_loop", src:"assets/sounds/Headspace.mp3"}

	]
});

////////////////
// INITIALIZE //
////////////////

subscribe("/init",function(){

	// Remove Preloader Message
	canvas.setAttribute("loading","no");

	// Initialize Shtuff
	Interactive.init();
	Narrator.goto("INTRO");

});
