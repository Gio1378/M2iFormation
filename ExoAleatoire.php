
<?php

$valeurRecherchee = 155;
$compteur = 1;
$changeStyle = "";
while(rand(0,1000)!== $valeurRecherchee){
    $compteur++; 
}
$message =  "Il a fallu $compteur fois pour trouver $valeurRecherchee !";

if ($compteur > 150){
    $changeStyle = "class = 'message'";
}

?>

<html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style> 
    .message{
        background-color : yellow;
        border : solid;
        border-radius: 5px;
        } 
    </style>
    <title>Document</title>
</head>
<body>
    <p> <span <?php echo  $changeStyle ?>  ><?php echo  $message ?> </span></p>
</body>
</html>

</html>