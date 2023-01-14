$(document).ready(function(){
    var prices = [
        {id: "short", value: 0},
        {id: "midlength", value: 0},
        {id: "long", value: 0},
        {id: "ownLength", value: 0},
        
        {id: "midlengthSleeve_A", value: 0},
        {id: "longSleeve_B", value: 0},
        {id: "narrowMidLengthSleeve_C", value: 0},
        {id: "narrowLongSleeve_D", value: 0},
        {id: "ownSleeve_wide_E", value: 0},
        {id: "ownSleeve_F", value: 0}, 
        
        {id: "A-brass-ring-simple", value: 3},
        {id: "B-brass-ring", value: 3},
        {id: "C-black-ring", value: 3},
        {id: "D-silver-ring", value: 3},
        {id: "E-pronze", value: 3},
        {id: "F-gold", value: 3}, 
        
        {id: "with_lining_B", value: 52},
        {id: "no_lining_A", value: 0},
        
        {id: "A_with_belt_loops", value: 0},
        {id: "B_without_belt_loops", value: 0},
        
        {id: "bronze_oak_A", value: 3},
        {id: "bronze_long_B", value: 3},
        {id: "bronze-leaf_C", value: 3},
        {id: "bronze-leaf_D", value: 3},
        {id: "silver_leaf_E", value: 3},
        {id: "silver_leaf_F", value: 3},
        {id: "silver-long_G", value: 3},
        {id: "silver_fleur_H", value: 3},
        {id: "siro_leaf_I", value: 3},
        {id: "whiteLeaf-J", value: 3},
        {id: "purpleLeaf-K", value: 3},
        {id: "greenLeaf-L", value: 3},
        {id: "blueLeaf-M", value: 3},
        
        {id: "graywool_A", value: 55},
        {id: "lightblue_B", value: 35},
        {id: "darkblue_C", value: 35},
        {id: "brown_D", value: 45},
        {id: "redviscose_E", value: 35},
        {id: "blueviscose_F", value: 35},
        {id: "ownfabric_G", value: 0}
        
    ];
    
    var img = document.createElement("img");
    var yourModelText = "";
    
    function calculateCombinedImage() {
        if ($("#length option:selected").val() == "short") {
            if ($("#sleeve option:selected").val() == "midlengthSleeve_A") {
                img.src = "./images/halatti/hiha_a_pituus_a.jpg";
                yourModelText = "Valintasi: Hiha A yhdistettynä pituuteen A";
            }
            if ($("#sleeve option:selected").val() == "longSleeve_B") {
                img.src = "./images/halatti/hiha_b_pituus_a.jpg";
                yourModelText = "Valintasi: Hiha B yhdistettynä pituuteen A";
            }
            if ($("#sleeve option:selected").val() == "narrowMidLengthSleeve_C") {
                img.src = "./images/halatti/hiha_c_pituus_a.jpg";
                yourModelText = "Valintasi: Hiha C yhdistettynä pituuteen A";
            }
            if ($("#sleeve option:selected").val() == "narrowLongSleeve_D") {
                img.src = "./images/halatti/hiha_d_pituus_a.jpg";
                yourModelText = "Valintasi: Hiha D yhdistettynä pituuteen A";
            }
            if ($("#sleeve option:selected").val() == "ownSleeve_wide_E") {
                img.src = "./images/halatti/hiha_b_pituus_a.jpg";
                yourModelText = "Valintasi: Hiha E (oma pituus) yhdistettynä pituuteen A";
            }
            if ($("#sleeve option:selected").val() == "ownSleeve_F") {
                img.src = "./images/halatti/hiha_d_pituus_a.jpg";
                yourModelText = "Valintasi: Hiha F (oma pituus, kapea) yhdistettynä pituuteen A";
            }
        }
        if ($("#length option:selected").val() == "midlength") {
            if ($("#sleeve option:selected").val() == "midlengthSleeve_A") {
                img.src = "./images/halatti/hiha_a_pituus_b.jpg";
                yourModelText = "Valintasi: Hiha A yhdistettynä pituuteen B";
            }
            if ($("#sleeve option:selected").val() == "longSleeve_B") {
                img.src = "./images/halatti/hiha_b_pituus_b.jpg";
                yourModelText = "Valintasi: Hiha B yhdistettynä pituuteen B";
            }
            if ($("#sleeve option:selected").val() == "narrowMidLengthSleeve_C") {
                img.src = "./images/halatti/hiha_c_pituus_b.jpg";
                yourModelText = "Valintasi: Hiha C yhdistettynä pituuteen B";
            }
            if ($("#sleeve option:selected").val() == "narrowLongSleeve_D") {
                img.src = "./images/halatti/hiha_d_pituus_b.jpg";
                yourModelText = "Valintasi: Hiha D yhdistettynä pituuteen B";
            }
            if ($("#sleeve option:selected").val() == "ownSleeve_wide_E") {
                img.src = "./images/halatti/hiha_b_pituus_b.jpg";
                yourModelText = "Valintasi: Hiha E (oma pituus) yhdistettynä pituuteen B";
            }
            if ($("#sleeve option:selected").val() == "ownSleeve_F") {
                img.src = "./images/halatti/hiha_d_pituus_b.jpg";
                yourModelText = "Valintasi: Hiha F (oma pituus, kapea) yhdistettynä pituuteen B";
            }
        }
        if ($("#length option:selected").val() == "long") {
            if ($("#sleeve option:selected").val() == "midlengthSleeve_A") {
                img.src = "./images/halatti/hiha_a_pituus_c.jpg";
                yourModelText = "Valintasi: Hiha A yhdistettynä pituuteen C";
            }
            if ($("#sleeve option:selected").val() == "longSleeve_B") {
                img.src = "./images/halatti/hiha_b_pituus_c.jpg";
                yourModelText = "Valintasi: Hiha B yhdistettynä pituuteen C";
            }
            if ($("#sleeve option:selected").val() == "narrowMidLengthSleeve_C") {
                img.src = "./images/halatti/hiha_c_pituus_c.jpg";
                yourModelText = "Valintasi: Hiha C yhdistettynä pituuteen C";
            }
            if ($("#sleeve option:selected").val() == "narrowLongSleeve_D") {
                img.src = "./images/halatti/hiha_d_pituus_c.jpg";
                yourModelText = "Valintasi: Hiha D yhdistettynä pituuteen C";
            }
            if ($("#sleeve option:selected").val() == "ownSleeve_wide_E") {
                img.src = "./images/halatti/hiha_b_pituus_c.jpg";
                yourModelText = "Valintasi: Hiha E (oma pituus) yhdistettynä pituuteen C";
            }
            if ($("#sleeve option:selected").val() == "ownSleeve_F") {
                img.src = "./images/halatti/hiha_d_pituus_c.jpg";
                yourModelText = "Valintasi: Hiha F (oma pituus, kapea) yhdistettynä pituuteen C";
            }
        }
        if ($("#length option:selected").val() == "ownLength") {
            if ($("#sleeve option:selected").val() == "midlengthSleeve_A") {
                img.src = "./images/halatti/hiha_a_pituus_b.jpg";
                yourModelText = "Valintasi: Hiha A yhdistettynä itse valitsemaasi pituuteen";
            }
            if ($("#sleeve option:selected").val() == "longSleeve_B") {
                img.src = "./images/halatti/hiha_b_pituus_b.jpg";
                yourModelText = "Valintasi: Hiha B yhdistettynä itse valitsemaasi pituuteen";
            }
            if ($("#sleeve option:selected").val() == "narrowMidLengthSleeve_C") {
                img.src = "./images/halatti/hiha_c_pituus_b.jpg";
                yourModelText = "Valintasi: Hiha C yhdistettynä itse valitsemaasi pituuteen";
            }
            if ($("#sleeve option:selected").val() == "narrowLongSleeve_D") {
                img.src = "./images/halatti/hiha_d_pituus_b.jpg";
                yourModelText = "Valintasi: Hiha D yhdistettynä itse valitsemaasi pituuteen";
            }
            if ($("#sleeve option:selected").val() == "ownSleeve_wide_E") {
                img.src = "./images/halatti/hiha_b_pituus_b.jpg";
                yourModelText = "Valintasi: Hiha E (oma pituus) yhdistettynä itse valitsemaasi pituuteen";
            }
            if ($("#sleeve option:selected").val() == "ownSleeve_F") {
                img.src = "./images/halatti/hiha_d_pituus_b.jpg";
                yourModelText = "Valintasi: Hiha F (oma pituus, kapea) yhdistettynä itse valitsemaasi pituuteen";
            }
        }
        
        var src = document.getElementById("combined_image");
        src.appendChild(img);
        
        $("#yourModelText").html(yourModelText);
        
    }
    
    function calculateSum() {
       var calculated_total_sum = 195;
     
       $("#halattiForm .priceOption").each(function () {
           var price_of_item = 0;
           var itemInList = prices.find((o) => { return o["id"] === $(this).val() });
           var price_of_item = itemInList ? itemInList.value : 0;
               
           if ($.isNumeric(price_of_item)) {
              calculated_total_sum += parseFloat(price_of_item);
              }                  
            });
        
        $("#total_sum_value").html(calculated_total_sum);
        $("#total_sum_value_footer").html(calculated_total_sum);
        
        $("#selected_fabric").html($( "#fabric option:selected" ).text());
        $("#selected_back").html($( "#backdecoration option:selected" ).text());
        $("#selected_belt").html($( "#belt option:selected" ).text());
        $("#selected_lining").html($( "#lining option:selected" ).text());
        $("#selected_length").html($( "#length option:selected" ).text());
        $("#selected_sleeve").html($( "#sleeve option:selected" ).text());
        
            calculateCombinedImage();   
       /* if ($(this).val() == "midlengthSleeve_A" || $(this).val() == "longSleeve_B" || $(this).val() == "narrowMidLengthSleeve_C" || $(this).val() == "narrowLongSleeve_D" || $(this).val() == "ownSleeve_wide_E" || $(this).val() == "ownSleeve_F" || $(this).val() == "short" || $(this).val() == "midlength" || $(this).val() == "long" || $(this).val() == "ownLength") {
            calculateCombinedImage();   
        }*/
        
    }
    
    img.src = "./images/halatti/hiha_b_pituus_a.jpg";
    var src = document.getElementById("combined_image");
    src.appendChild(img);
    
    calculateSum();
    
    $("#showOrHide").html("Näytä");
        
    function changeHideFooterValue() {
            if ($("#showOrHide").html() === "Näytä"){
                $("#showOrHide").html("Piilota");
                $(".halatti-footer").removeClass("minimize");
                $(".angle-up").addClass("hidden");
                $(".angle-down").removeClass("hidden");
            }
            else {
                $("#showOrHide").html("Näytä");
                $(".halatti-footer").addClass("minimize");
                $(".angle-up").removeClass("hidden");
                $(".angle-down").addClass("hidden");
        }
    };
    
    document.getElementById("showOrHideButton").addEventListener("click", changeHideFooterValue);
    
    $("#halattiForm").on('input', '.priceOption', calculateSum);
    
    $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1300) {
        $(".halatti-footer").removeClass("hidden");
    }
}); 

});

