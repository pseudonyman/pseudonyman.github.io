function colorChange(){
	document.getElementById("knapp1").innerHTML = "Mer mig.";
	addElement();
}

function addElement(){
	var element = document.createElement("img");
	element.setAttribute("src", "https://media.giphy.com/media/unQ3IJU2RG7DO/giphy.gif");
	element.setAttribute("alt", "cat");
	element.setAttribute("style", "width:100px;height:100px");

	var container = document.getElementById("div1");
	container.appendChild(element);
}