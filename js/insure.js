/**
 * @fileoverview Contains the main actions to hide or display the main menu while the mobile version is active.
 * @author Daniel Martinez Duque
 * @date 2024-08-04
 */

/**
 * Toggles the mobile menu's visibility and swaps the icon on the menu button based on whether the menu is currently displayed.
 */
const showMobileMenu = () => {
	const displayed = document.getElementById("nav-mobile").style.display == "flex";

	document.getElementById("nav-hamburger").style.backgroundImage = displayed ? "url('images/icon-hamburger.svg')" : "url('images/icon-close.svg')";
	document.getElementById("nav-mobile").style.display = displayed ? "none" : "flex";
	document.body.style.overflow = displayed ? "auto" : "hidden";
}

(() => {
	document.getElementById("nav-hamburger").addEventListener('click', showMobileMenu, false);
})()