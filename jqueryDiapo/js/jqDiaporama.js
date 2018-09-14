var i, tImages = new Array();
var photo = $("#photo");
var btNext = $("#bt_Next");
var btPrevious = $("#bt_Previous");
var btStart = $("#bt_Start");
var btEnd = $("#bt_End");
var btPlay = $("#bt_Play");
var btPause = $("#bt_Pause");
var nunberImages = 5;
var animImage;

function init(fullImage) {  // chargement de toutes les images
    for (i = 0; i < fullImage; i++) {
        tImages[i] = new Image();
        tImages[i].src = "../Images/" + i + ".jpg";
    }
    i = 0;
    changerImage(i);
    animImage = window.setInterval(changerImage, 1500);
    $("#bt_navigationt").css({textAlign: "center"});

    btStart.attr("disabled", true);
    btPrevious.attr("disabled", true);

    btStart.on("click", function () {
        i = 0;
        changerImage(i);
    });
    btPrevious.on("click", function () {
        i--;
        changerImage(i);
    });
    btNext.on("click", function () {
        if (i === tImages.length - 1) {
            changerImage(i);
        } else {
            i++;
            changerImage(i);
        }
    });
    btEnd.on("click", function () {
        i = tImages.length - 1;
        changerImage(i);
    });
    btPlay.on("click", function () {
        animImage = window.setInterval(changerImage, 1500);
        btPause.attr("disabled", false);
    });
    btPause.on("click", function () {
        window.clearInterval(animImage);
        btPlay.attr("disabled", false);
        btPause.attr("disabled", true);
    });
}

function changerImage(anImage) {
    if (anImage === undefined) {
        i++;
        if (i === tImages.length - 1) {
            i = 0;
        }
        photo.attr("src", tImages[i].src);
        photo.attr("Images : " + i + ".jpg");
        btPlay.attr("disabled", true);
    } else {
        photo.attr("src", tImages[anImage].src);
        photo.attr("Images : " + anImage + ".jpg");
        window.clearInterval(animImage);
        btPrevious.attr("disabled", (i === 0)); //on peut aussi utiliser la condition if directement dans la valeur booleénne.
        btStart.attr("disabled", (i === 0));
        btNext.attr("disabled", (i === tImages.length - 2));
        btEnd.attr("disabled", (i === tImages.length - 2));
    }
    $("#lbl_compteur").text((i + 1) + "/" + nunberImages);
}
$(document).ready(init(nunberImages + 1));


//function init(anImages) {
//    for (i = 0; i < anImages; i++) {
//        tImages[i] = new Image();
//        tImages[i].src = "../images/" + i + ".jpg";
//    }
//    i = 0;
//    changerImage();
//    window.setInterval(changerImage, 1000);
//}

//function changerImageAuto() {
//    photo.attr("src", tImages[i].src);
//    photo.attr("Images : " + i + ".jpg");
//    i++;
//    if (i === tImages.length - 1) {
//        i = 0;
//    }
//
//}
