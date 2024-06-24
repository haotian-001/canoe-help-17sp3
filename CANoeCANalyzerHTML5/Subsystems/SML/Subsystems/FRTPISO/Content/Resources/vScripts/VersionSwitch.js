"use strict";

const setVersionHrefs = function() {

		const versionSwitchVTT = document.getElementById("versionSwitchVTT");
		const versionSwitchCANoe = document.getElementById("versionSwitchCANoe");

		const url = window.location.href;

		let urlVTT, urlCANoe;
		urlVTT = urlCANoe = url;
		if (versionSwitchVTT != null ){
			urlVTT = url.replace("/7.3/", "/7.2/");
			versionSwitchVTT.href = urlVTT;
		}
		if (versionSwitchCANoe != null ){
			urlCANoe = url.replace("/17.3/", "/17.2/");
			versionSwitchCANoe.href = urlCANoe;
		}
	}

window.addEventListener("load", (event) => {
	
	setVersionHrefs();

});