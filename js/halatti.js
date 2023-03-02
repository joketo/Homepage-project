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
        
        {id: "lummehopeaA", value: 3},
        {id: "longhopea_B", value: 3},
        {id: "leafhopea_C", value: 3},
        {id: "pienihopea_D", value: 3},
        {id: "lummekulta_E", value: 3},
        {id: "longkulta_F", value: 3},
        {id: "tammikulta_G", value: 3},
        {id: "lehtikulta_H", value: 3},
        {id: "kuparilumme_I", value: 3},
        {id: "kuparitammi-J", value: 3},
        
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
    
    function changeExamplePic1Value() {
        $(".example1").removeClass("hidden");
        $(".example2").addClass("hidden");
        $(".example3").addClass("hidden");
        $(".example4").addClass("hidden");
        $(".example5").addClass("hidden");
        
        $(".example1thumbnail").removeClass("not-selected");
        $(".example2thumbnail").addClass("not-selected");
        $(".example3thumbnail").addClass("not-selected");
        $(".example4thumbnail").addClass("not-selected");
        $(".example5thumbnail").addClass("not-selected");
        
        $("#halattiExampleText").html("Keskipitkä helma (B), keskipitkät hihat (A). Kankaana ohut silkkivilla. Vyö D, selkäkoru A.");
        $("#halattiExampleTextMobile").html("Keskipitkä helma (B), keskipitkät hihat (A). Kankaana ohut silkkivilla. Vyö D, selkäkoru A.");
    };
    function changeExamplePic2Value() {
        $(".example2").removeClass("hidden");
        $(".example1").addClass("hidden");
        $(".example3").addClass("hidden");
        $(".example4").addClass("hidden");
        $(".example5").addClass("hidden");
        
        $(".example2thumbnail").removeClass("not-selected");
        $(".example1thumbnail").addClass("not-selected");
        $(".example3thumbnail").addClass("not-selected");
        $(".example4thumbnail").addClass("not-selected");
        $(".example5thumbnail").addClass("not-selected");
        
        $("#halattiExampleText").html("Lyhyt helma (A), keskipitkät hihat (A). Kangas A, vuoritettu. Vyö D.");
        $("#halattiExampleTextMobile").html("Lyhyt helma (A), keskipitkät hihat (A). Kangas A, vuoritettu. Vyö D.");
    };
    function changeExamplePic3Value() {
        $(".example3").removeClass("hidden");
        $(".example1").addClass("hidden");
        $(".example2").addClass("hidden");
        $(".example4").addClass("hidden");
        $(".example5").addClass("hidden");
        
        $(".example3thumbnail").removeClass("not-selected");
        $(".example1thumbnail").addClass("not-selected");
        $(".example2thumbnail").addClass("not-selected");
        $(".example4thumbnail").addClass("not-selected");
        $(".example5thumbnail").addClass("not-selected");
        
        $("#halattiExampleText").html("Keskipitkä helma (B) kapeilla pitkillä hihoilla (D), kangas E, vuoritettu, Selkäkoru D ilman korulukkoa. Vyön sijaan solki ja viimeisessä kuvassa taakse sidottu naru.");
        $("#halattiExampleTextMobile").html("Keskipitkä helma (B) kapeilla pitkillä hihoilla (D), kangas E, vuoritettu, Selkäkoru D ilman korulukkoa. Vyön sijaan solki ja viimeisessä kuvassa taakse sidottu naru.");
    };
    
    function changeExamplePic4Value() {
        $(".example4").removeClass("hidden");
        $(".example1").addClass("hidden");
        $(".example2").addClass("hidden");
        $(".example3").addClass("hidden");
        $(".example5").addClass("hidden");
        
        $(".example4thumbnail").removeClass("not-selected");
        $(".example1thumbnail").addClass("not-selected");
        $(".example2thumbnail").addClass("not-selected");
        $(".example3thumbnail").addClass("not-selected");
        $(".example5thumbnail").addClass("not-selected");
        
        $("#halattiExampleText").html("Pitkä helma (C) pitkillä leveillä hihoilla (C). Kankaana karheahko villakreppi, ei vuoria, vyö mallia E.");
        $("#halattiExampleTextMobile").html("Pitkä helma (C) pitkillä leveillä hihoilla (C). Kankaana karheahko villakreppi, ei vuoria, vyö mallia E.");
    };
    
    function changeExamplePic5Value() {
        $(".example5").removeClass("hidden");
        $(".example1").addClass("hidden");
        $(".example2").addClass("hidden");
        $(".example3").addClass("hidden");
        $(".example4").addClass("hidden");
        
        $(".example5thumbnail").removeClass("not-selected");
        $(".example1thumbnail").addClass("not-selected");
        $(".example2thumbnail").addClass("not-selected");
        $(".example3thumbnail").addClass("not-selected");
        $(".example4thumbnail").addClass("not-selected");
        
        $("#halattiExampleText").html("Keskipitkä helma (B) pitkillä kapeilla hihoilla (D) ja erikoisleveillä hihansuukoristeilla. Paksu takkivilla, selkälaskokset ommeltu kiinni. Vyö mallia E, selkäkoru G.");
        $("#halattiExampleTextMobile").html("Keskipitkä helma (B) pitkillä kapeilla hihoilla (D) ja erikoisleveillä hihansuukoristeilla. Paksu takkivilla, selkälaskokset ommeltu kiinni. Vyö mallia E, selkäkoru G.");
    };
    
    
    $("#halattiExampleText").html("Keskipitkä helma (B), keskipitkät hihat (A). Kankaana ohut silkkivilla. Vyö D, selkäkoru F.");
    $("#halattiExampleTextMobile").html("Keskipitkä helma (B), keskipitkät hihat (A). Kankaana ohut silkkivilla. Vyö D, selkäkoru F.");
    document.getElementById("showOrHideButton").addEventListener("click", changeHideFooterValue);
    
    document.getElementById("examplePic1Thumbnail").addEventListener("click", changeExamplePic1Value);
    document.getElementById("examplePic2Thumbnail").addEventListener("click", changeExamplePic2Value);
    document.getElementById("examplePic3Thumbnail").addEventListener("click", changeExamplePic3Value);
    document.getElementById("examplePic4Thumbnail").addEventListener("click", changeExamplePic4Value);
    document.getElementById("examplePic5Thumbnail").addEventListener("click", changeExamplePic5Value);
    
    $("#halattiForm").on('input', '.priceOption', calculateSum);
    
    $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1300) {
        $(".halatti-footer").removeClass("hidden");
    }
}); 

});

