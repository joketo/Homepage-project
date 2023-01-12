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
    
    
    function calculateSum() {
       var calculated_total_sum = 195;
     
       $("#halattiForm .priceOption").each(function () {
           var price_of_item = 0;
           var price_of_item = prices.find((o) => { return o["id"] === $(this).val() }).value;
               
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
        
    }
    
    calculateSum();
    
    $("#showOrHide").html("Piilota");
        
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

