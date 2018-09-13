<?php

$valeurRecherchee = 155;
$compteur = 1;
while(rand(0,1000)!== $valeurRecherchee){
    $compteur++; 
}
echo "Il a fallu $compteur fois pour trouver $valeurRecherchee !";

?>