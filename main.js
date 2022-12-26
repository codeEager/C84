var img_image;
var keyPressed = 0;

function add() {
	img_imageTag = new Image(); 
	img_imageTag.onload = upload_img; 
	img_imageTag.src = img_image; 
	img_imageTag.height = 100;
	img_imageTag.width = 100;
}

function upload_img() {
	ctx.drawImage(img_imageTag, 10, 10, 300, 100);
}

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

window.addEventListener("keydown", dhanshika_keydown);

function dhanshika_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

        if((keyPressed >= 97 && keyPressed <= 122) || (keyPressed >= 65 && keyPressed <= 90)) {
			alphabetKey();
			document.getElementById("div1").innerHTML = "You Pressed Alphabet Key!";
		}
		else if (keyPressed >= 48 && keyPressed <= 57) {
			numberkey();
			document.getElementById("div1").innerHTML = "You Pressed Number Key!";
		}
		else if (keyPressed >= 37 && keyPressed <= 40) {
			arrowKey();
			document.getElementById("div1").innerHTML = "You Pressed Arrow Key!";
		}
		else if (keyPressed == 17 || keyPressed == 18 || keyPressed == 27) {
			specialKey();
			document.getElementById("div1").innerHTML = "You Pressed Special Key!";
		}
		/*else if (keyPressed >= 17 && keyPressed <= 28) {
			functionKey();
			document.getElementById("div1").innerHTML = "You Pressed Function Key!";
		}*/
		else {
			otherKey();
			document.getElementById("div1").innerHTML = "You Pressed Other Key!";
		}
}

function alphabetKey() {
	img_image="Alphabet_Key.png";
	add();
}

function numberkey() {
	img_image="Number_Key.png";
	add();
}

function arrowKey() {
	img_image="Arrow_Key.png";
	add();
}

function specialKey() {
	img_image="Special_Key.png";
	add();
}

function otherKey() {
	img_image="Other_Key.png";
	add();
}
