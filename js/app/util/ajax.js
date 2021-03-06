/* Global variables */
//content_control = products, stores or interests.
var content_control = "products"

/************************/
/* Products categories  */
/************************/


/* Add category */
	
$(document).ready(function(){
    jQuery('#add-category').click(function(){
            innerContentAddCategory();
            loadPopup();
            jQuery('#input-new-category').focus();
    });
});

function innerContentAddCategory(){
    jQuery('#popup-content').empty();
    var popup_content = '<div>';
    popup_content += '<form id="form-add-new-category" name="form-add-new-category" class="form-add-new-category" method="post">';
    popup_content += '		<label>Añadir una nueva categoría</label>';
    popup_content += '		<input type="text" id="input-new-category" name="input-new-category" class="input-new-category"/>';
    popup_content += '		<input type="button" id="accept-new-category" name="accept-new-category" class="button" value="Añadir" onClick="saveCategory()" />';
    popup_content += '		<input type="button" id="cancel-new-category" name="cancel-new-category" class="button" value="Cancelar" onClick="closePopup()" />';
    popup_content += '	</form>';
    popup_content += '	</div>';
    $('#popup-content').append(popup_content);
}

function addCategory(new_category, new_category_id){
    var num_categories = jQuery('.slider-item-categories li').size();
    
    if(new_category != ''){
            if(num_categories % 6 == 0){
                    if(num_categories >= 6) {jQuery('#nav-categories').fadeIn('normal');}
                    var new_html_slide = '<div id="slider-category-item-'+(num_categories / 6 + 1)+'" class="slider-item-categories">';
                    new_html_slide += '<nav>';
                    new_html_slide += '		<ul>';
                    new_html_slide += '			<li><a class="button" href="#" data-categoryid="'+ new_category_id +'" data-filter=".'+ new_category_id +'">'+new_category+'</a></li>';
                    new_html_slide += '		</ul>';
                    new_html_slide += '</nav>';
                    new_html_slide += '</div>';
                    jQuery('#slider-categories').append(new_html_slide);
            }
            else{
                    jQuery('#categories #container-slider-categories ul:last').append('<li><a class="button" href="#'+new_category+'" data-categoryid="'+ new_category_id +'" data-filter=".'+ new_category_id +'">'+new_category+'</a></li>');
            }
            jQuery('#slider-categories-right').click();
            jQuery('#categories #container-slider-categories ul:last li:last').css('display','none');
            jQuery('#categories #container-slider-categories ul:last li:last').fadeIn('slow');
    }
    closePopup();
    active_drop_products();
    click_category_filters();
}


function saveCategory(){
    var new_category = jQuery('#input-new-category').val();
    jQuery.ajax({
        url: base_url+ "category/add/" +new_category,
        async: false,
            success: function(respuesta){										
                addCategory(new_category, respuesta);
        }							  
    });	
}

/* Add a category to product */
function add_product_category(product_id, category_id){    
    var success = true;
    url = base_url + "category/add_product_category/" + product_id + "/" +category_id;
    jQuery.ajax({
        url: url,
        async: false,
        complete: function(objeto, exito){
            if(exito=="success"){
            }
        },
        error: function(objeto, quepaso, otroobj){
            success =  false;
        }
    });	
    return success;
}


/***********************/
/* Stores categories   */
/***********************/

$(document).ready(function(){
    //Add events
    $('#input-new-category-store').live('keydown', function(e) {
        if (e.keyCode == 13) {  // enter
                addCategoryStore();
        }
    });
    jQuery('#add-category-store').click(function(){
        innerContentAddCategoryStore();
        loadPopup();
        jQuery('#input-new-category-store').focus();
    });
});
function innerContentAddCategoryStore(){
        jQuery('#popup-content').empty();
        var popup_content = '<div>';
        popup_content += '<form id="form-add-new-category-store" name="form-add-new-category-store" class="form-add-new-category" method="post">';
        popup_content += '		<label>Añadir una nueva categoría</label>';
        popup_content += '		<input type="text" id="input-new-category-store" name="input-new-category-store" class="input-new-category" />';
        popup_content += '		<input type="button" id="accept-new-category-store" name="accept-new-category-store" class="button" value="añadir" onClick="saveStCategory()" />';
        popup_content += '		<input type="button" id="cancel-new-category-store" name="cancel-new-category-store" class="button" value="cancelar" onClick="closePopup()" />';
        popup_content += '	</form>';
        popup_content += '	</div>';
        $('#popup-content').append(popup_content);
}

function addCategoryStore(new_st_category_name, new_st_category_id){
    var num_categories_store = jQuery('.slider-item-stores li').size();
    if(num_categories_store != ''){
        if(num_categories_store % 6 == 0){
            if(num_categories_store >= 6) {jQuery('#nav-stores').fadeIn('normal');}
            var new_html_slide = '<div id="slider-store-item-'+(num_categories_store / 6 + 1)+'" class="slider-item-stores">';
            new_html_slide += '<nav>';
            new_html_slide += '		<ul>';
            new_html_slide += '			<li><a class="button" href="#" data-categoryid="'+ new_st_category_id +'" data-filter=".'+ new_st_category_id +'">'+new_st_category_name+'</a></li>';
            new_html_slide += '		</ul>';
            new_html_slide += '</nav>';
            new_html_slide += '</div>';
            jQuery('#slider-stores').append(new_html_slide);
        }
        else{
            jQuery('#stores #container-slider-stores ul:last').append('<li><a class="button" href="#" data-categoryid="'+ new_st_category_id +'" data-filter=".'+ new_st_category_id +'">'+new_st_category_name+'</a></li>');
        }
        jQuery('#stores #container-slider-stores ul:last li:last').css('display','none');
        jQuery('#stores #container-slider-stores ul:last li:last').fadeIn('slow');
        active_drop_stores();
        jQuery('#slider-stores-right').click();
    }
    closePopup();
    click_st_category_filters();
}

function saveStCategory(){
    var new_st_category_name = jQuery('#input-new-category-store').val();
    jQuery.ajax({
        url: base_url+ "st_category/add/" +new_st_category_name,
        async: false,
            success: function(respuesta){										
                addCategoryStore(new_st_category_name, respuesta);
        }							  
    });	
}

/* Add a category to product */
function add_store_to_StCategory(store, st_category){    
    var success = true;
    url = base_url + "st_category/add_st_category_store/" + st_category + "/" + store + "/1";
    console.log(url);
    jQuery.ajax({
        url: url,
        async: false,
        complete: function(objeto, exito){
            if(exito=="success"){
            }
        },
        error: function(objeto, quepaso, otroobj){
            success =  false;
        }
    });	
    return success;
}

/* Insert html to content*/
function insert_content(url){
    console.log(url);
    var success = true;
    $('#fade').animate({opacity: 0}, 400, function() {
        //$("#ajax-loader-content").fadeIn("fast", function(){});
        jQuery.ajax({
            url: url,
            async: false,
            success: function(respuesta){
               document.getElementById("fade").innerHTML = respuesta;
            },	
            error: function(objeto, quepaso, otroobj){
                success =  false;
            }
        });	    
    });/*
    $("#ajax-loader-content").fadeIn("fast", function(){});
    jQuery.ajax({
        url: url,
        async: false,
        success: function(respuesta){
            document.getElementById("fade").innerHTML = respuesta;
                $('#fade').fadeIn('fast');
            $("#ajax-loader-content").fadeOut("fast", function(){
                    $('#fade').fadeIn('slow', function() {});
            });               
        },	
        error: function(objeto, quepaso, otroobj){
            success =  false;
        }
    });	*/
       
    return success;
   
}


/* Get HTML Template */
function get_temaplate(url){
    console.log(url);
    var HTML = '';    
    //$("#ajax-loader-content").fadeIn("fast", function(){});
    jQuery.ajax({
        url: url,
        async: false,
        success: function(respuesta){
           HTML = respuesta;
        },	
        error: function(objeto, quepaso, otroobj){
            success =  false;
        }
    });	 
    return HTML;
}

/****************************************************/
/* Show nav widgets st_cat and product categories   */
/****************************************************/
 $(document).ready(function(){
   if(jQuery('.slider-item-stores li').size() > 6){
       jQuery('#nav-stores').fadeIn('normal');
   }
   if(jQuery('.slider-item-categories li').size() > 6){
       jQuery('#nav-categories').fadeIn('normal');
   }
});


/***************/
/* Interests   */
/***************/
function active_drag_drop_interest(){
    
}
function insert_interest(st_category_id){
    
}


 $(document).ready(function(){
    jQuery('#interest a').click(function(){
        var st_cat =  $(this).data('stcategory');
        console.log(st_cat);
        url = base_url +  "main/stores_category/" + st_cat;
        insert_content(url);
        $('#fade').queue(function(){
            $(this).animate({opacity: 1}, 400);
            active_drag_drop_stores();
            $(this).dequeue();
        });
    });
 });
 