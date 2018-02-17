Narrator.addStates({

	INTRO:{
		start:function(state){
			Narrator.scene("Propagation")
					.music("sfx_loop",{volume:0.05,loop:-1})
					.goto("PROP_INTERRUPTABLE");
		}
	},

	PROP_INTERRUPTABLE:{
		start:function(state){
			Narrator.goto("PROP_CLICK");
			state._listener = subscribe("/neuron/click",function(neuron){
				unsubscribe(state._listener);
			});
		},
		kill:function(state){
			unsubscribe(state._listener);
		}
	}

});
