<!doctype html>
<html>
    <head lang="es">
        <title>Mybuyfriends</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="./css/style.css">
        <!--[if lt IE 9]>
                <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
        <!--<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js"></script>-->
        <script src="./js/app/ui/popup.js"></script>
        <script src="./js/app/ui/sliders.js"></script>
        <script src="./js/app/ui/image_adjuster.js"></script>        
        <script src="./js/app/util/register.js"></script>
        <script src="./js/config.js"></script>
        <script src="./js/app/util/ajax.js"></script>
        <script src="./js/isotope.js"></script>
        <script src="./js/jquery-ui-1.8.21.custom.js"></script>
        
        
       
        
      

        <!-- Alto sidebar igual a content -->
        <script type="text/javascript">
            $(document).ready(function(){
                    $('#sidebar').css('height',$('#content').css('height'));
            });
        </script>
    </head>
    <body>
        <div id="page">
        <div id="shadow" onClick="closePopup()">
        </div>
        <div id="popup">
        </div>
        <div id="popup-content">
        </div>
           