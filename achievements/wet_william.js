var name		= "Wet William";
var collection_type	= 0;
var is_secret		= 0;
var desc		= "Meticulously watered 41 gaspingly hot Gas Plants";
var status_text		= "It takes class to spend time de-hotifying so many Gas Plants. No Wet Willy are you. You have earned the designation of a full-fledged Wet William.";
var last_published	= 1323931406;
var is_shareworthy	= 0;
var url		= "wet-william";
var category		= "trees";
var url_swf		= "http:\/\/c2.glitch.bz\/achievements\/2011-05-09\/wet_william_1304984732.swf";
var url_img_180		= "http:\/\/c2.glitch.bz\/achievements\/2011-05-09\/wet_william_1304984732_180.png";
var url_img_60		= "http:\/\/c2.glitch.bz\/achievements\/2011-05-09\/wet_william_1304984732_60.png";
var url_img_40		= "http:\/\/c2.glitch.bz\/achievements\/2011-05-09\/wet_william_1304984732_40.png";
function on_apply(pc){
	
}
var conditions = {
	342 : {
		type	: "counter",
		group	: "trants_watered",
		label	: "trant_gas",
		value	: "41"
	},
};
function onComplete(pc){ // generated from rewards
	var multiplier = pc.buffs_has('gift_of_gab') ? 1.2 : pc.buffs_has('silvertongue') ? 1.05 : 1.0;
	multiplier += pc.imagination_get_achievement_modifier();
	if (/completist/i.exec(this.name)) { 
		 var level = pc.stats_get_level(); 
		 if (level > 4) {  
				multiplier *= (pc.stats_get_level()/4); 
		} 
	} 
	pc.stats_add_xp(round_to_5(300 * multiplier), true);
	pc.stats_add_favor_points("grendaline", round_to_5(40 * multiplier));
	if(pc.buffs_has('gift_of_gab')) {
		pc.buffs_remove('gift_of_gab');
	}
	else if(pc.buffs_has('silvertongue')) {
		pc.buffs_remove('silvertongue');
	}
}
var rewards	= {
	"xp"	: 300,
	"favor"	: {
		"giant"		: "grendaline",
		"points"	: 40
	}
};

//log.info("wet_william.js LOADED");

// generated ok (NO DATE)
