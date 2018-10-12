/* 
 * Selections.js
 */

let slideshow =
        $('.slideshow').slides(
        {
            visible: 1, /* Inoperant */
            skip: true, /* Boutons previous et next */
            pagination: false, /* Boutons 1, 2, etc */
            slideWidth: true, /* Meme largeur pour les images a voir*/
            auto: false, /* Scroll auto en millisecondes ou false */
            loop: false,
            previousText: "<",
            nextText: ">",
            autostop: true
        }
);


