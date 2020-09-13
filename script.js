var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var Random = document.getElementById("Random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
setGradient();

function random () {
	var random1 = Math.ceil(Math.random() * 255);
	return random1;
}

function randomGradient () { 
	var c1 = "rgb(" + random () + "," + random () + "," + random () + ")" ;

	var c2 = "rgb(" + random () + "," + random () + "," + random () + ")" ;

	body.style.background = 
	"linear-gradient(to right, " 
	+ c1 
	+ ", " 
	+ c2 
	+ ")";
	// color1.setAttribute("value",c1);
	// color2.setAttribute("value",c2);
	css.textContent = body.style.background + ";";
}
//randomGradient ();

Math.ceil(Math.random() * 100)

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
Random.addEventListener("click",randomGradient);