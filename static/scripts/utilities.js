// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("slides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(showSlides, 54300); // Change image every 8 seconds
// }       

function changePicture(id) {
    var src = document.getElementById(id).src;
    if (!src.includes('colour')) {
        //change the picture to colour
        var str = src.replace(".png", "-colour.png");
        document.getElementById(id).src = str;
        shortenPicture(id);
    }
}

function shortenPicture(id) {
    // modify the size of the child div
    document.getElementById(id + '-div').style.width = "40%";
}

function changeBackground(id, colour) {
    var elmnt = document.getElementById(id).style.backgroundColor = colour;
}

function revertPicture(id) {
    var src = document.getElementById(id).src;
    if (src.includes('colour')) {
        var str = src.replace("-colour", "");
        document.getElementById(id).src = str;
    }
}

function revertBackground(id) {
    var elmnt = document.getElementById(id).style.backgroundColor = '#242227';
}

function modifyIntro(id1, id2, id3) {
    document.getElementById(id1).style.width = "40%";
    document.getElementById(id2).style.width = "20%";
    document.getElementById(id3).style.width = "40%";
}