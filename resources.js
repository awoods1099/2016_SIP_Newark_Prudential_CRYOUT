var imagefiles = ["cryout.jpg", "cryout1.jpg", "cryout2.jpg", "cryout3.jpg", "cryout4.jpg", "cryout5.jpg", "cryout6.jpg", "cryout7.jpg", "cryout8.jpg", "cryout9.jpg"];
var slideIndex = 1;


function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var myslides = document.getElementById("mySlides");
    if  (n > myslides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex =  myslides.length} ;
    for (i = 0; i < myslides.length; i++) {
         myslides[i].style.display = "none";
    }
	console.log("slide: " + slideIndex);
	console.log(imagefiles[5]);
	myslides.src = imagefiles[slideIndex%10];
	console.log(myslides.src);
}
