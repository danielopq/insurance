/**
 * @fileoverview Contains de main actions do hide or display the main menu while the mobile version is running.
 * @author Daniel Martinez Duque
 * @date 2024-08-04
 */

(()=>{
	document.getElementById("nav-hamburger").addEventListener('click',showMobileMenu,false);
})()

/**
 * Display or hide the menu and swap the icon button depending on whether the menu is deployed or not.
 */
function showMobileMenu(){
	if(document.getElementById("nav-mobile").style.display == "none"){
		document.getElementById("nav-hamburger").style.backgroundImage = "url('images/icon-close.svg')";
		document.getElementById("nav-mobile").style.display = "flex";
		document.body.style.overflow = "hidden";
	}else{
		document.getElementById("nav-hamburger").style.backgroundImage = "url('images/icon-hamburger.svg')";
		document.getElementById("nav-mobile").style.display = "none";
		document.body.style.overflow = "auto";
	}
}