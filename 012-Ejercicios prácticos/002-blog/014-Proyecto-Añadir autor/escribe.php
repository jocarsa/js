<?php  
    $fp = fopen('entradas.csv', 'a'); 
    fwrite($fp, PHP_EOL .''.date('Y').'-'.date('m').'-'.date('d').',"'.$_GET['titulo'].'","'.$_GET['texto'].'",josevicente.jpg,"'.$_GET['autor'].'"');   
    fclose($fp);   
?>  