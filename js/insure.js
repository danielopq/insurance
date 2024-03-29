window.onload = start;

function start(){
	document.getElementById("nav-hamburger").addEventListener('click',showMobileMenu,false);
}

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