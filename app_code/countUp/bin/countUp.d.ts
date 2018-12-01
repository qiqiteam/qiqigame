// Type definitions for ./path/to/countUp.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * target = id of html element or var of previously selected html element where counting occurs
 * startVal = the value you want to begin at
 * endVal = the value you want to arrive at
 * decimals = number of decimal places, default 0
 * duration = duration of animation in seconds, default 2
 * options = optional object of options (see below)
 */
declare interface CountUp {
		
	/**
	 * 
	 * @param target 
	 * @param startVal 
	 * @param endVal 
	 * @param decimals 
	 * @param duration 
	 * @param options 
	 * @return  
	 */
	new (target : any, startVal : any, endVal : any, decimals : any, duration : any, options : any): CountUp;
}

