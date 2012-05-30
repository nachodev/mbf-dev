<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
?>
<div id="shadow" onClick="closePopup()">
</div>
<div id="popup">
        <nav id="popup-nav">
                <ul class="nav-list">
                        <li class="nav-popup-item" id="popup-prev"><img src="images/left.png"></li>
                        <li class="nav-popup-item" id="popup-next"><img src="images/right.png"></li>
                </ul>
        </nav>
</div>
<div id="popup-content">
</div>
<div class="container-slider">
        <section class="slider">
                <?php
                for($i=0; $i < count($products); $i++){
                ?>
            
                <?php if(($i)%12 == 0){  ?>
                <!-- Slider item <?php echo ($i)/3 ?> -->
                <div id="slider-item-1" class="slider-item">	
                <?php } ?>
                <?php 
                    $image = rawurldecode($products[$i]->image);
                    $price = rawurldecode($products[$i]->price);
                    $price == "NS" ? $price = "" : $price = $price + " €";
                    $store_name = rawurldecode($products[$i]->store_name);
                    $description = rawurldecode($products[$i]->description); 
                    $description == "NS" ? $description = "" : $description = $description;
                    $store_url = rawurldecode($products[$i]->store_url); 
                ?>
                    
               
                        <article class="item" data-store-url="<?php echo $store_url; ?>" data-img="<?php echo $image ?>" data-price="<?php echo $price ?>" data-brand="<?php echo $store_name ?>" data-description="<?php echo $description ?>">
                                <div class="container-item-img">
                                        <img class="item-img image-fit" src="<?php echo $image ?>" onload="fit($(this))" />
                                </div>
                            
                                <span class="item-price">
                                 <?php if($products[$i]->price != "NS"){ ?>
                                 <?php echo $products[$i]->price ?>
                                 <?php  }  ?>
                                </span>
                           
                                <span class="item-brand"><a href="<?php echo $products[$i]->store_url; ?>"><?php echo $products[$i]->store_name; ?></a></span>
                        </article>
                <?php if(($i+1)%12 == 0){ ?>
                    </div> <!-- end slider item <?php echo ($i+1)/3 ?> -->
                <?php } ?>
                <?php 
                }
                ?>
        </section>
        <nav id="nav-slider">	 	
                <ul class="nav-list">
                        <li class="nav-item" id="slider-left"><img src="images/left.png"></li>
                        <li class="nav-item" id="slider-right"><img src="images/right.png"></li>
                </ul>
        </nav>
</div>	<!-- END SLIDER -->