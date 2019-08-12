$(document).ready(function(){

    $(".openOfficeImages").click(function(){
    api_images = ['CLOTHES/office_3.jpg', 'CLOTHES/office_1.png', 'CLOTHES/office_2.png'];
    api_titles = ['Velvet dress with pearl embroidery', '', ''];
    api_descriptions = ['Two of my latest projects that go very nicely together. The fabric for the shirt was taken from my old dress.', 'Black pencil skirt is always needed. This one has two buttons instead of a zipper. The plates are created when you close the skirt.', 'The skirt has some nice pockets too.']
    $.prettyPhoto.open(api_images,api_titles,api_descriptions);
    });
    
    $(".openVioletDressImages").click(function(){
    api_images = ['CLOTHES/violet.jpg', 'CLOTHES/violet2.jpg', 'CLOTHES/violet3.jpg'];
    api_titles = ['Velvet dress with pearl embroidery', '', ''];
    api_descriptions = ['I originally made this dress for Halloween but it can also be worn as a short evening dress.', 'I sewed different class pearls to highlight the pattern of the fabric.', 'The dress has a corset back to give it shape.']
    $.prettyPhoto.open(api_images,api_titles,api_descriptions);
    });
    
    $(".openWaterfallImages").click(function(){
    api_images = ['CLOTHES/vesiputous_1.jpg', 'CLOTHES/vesiputous_3.jpg'];
    api_titles = ['A shirt with waterfall neckline.', ''];
    api_descriptions = ['I wanted to make a shirt that was light and could be worn with a high waisted skirt.', 'I found the fabric on sale and just fell in love with it.']
    $.prettyPhoto.open(api_images,api_titles,api_descriptions);
    });
    
    $(".openForestDressImages").click(function(){
    api_images = ['CLOTHES/metsamekko_edesta.jpg','CLOTHES/metsamekko_takaa2.jpg','CLOTHES/metsamekko_sivu.jpg','CLOTHES/metsamekko_takaa.jpg','CLOTHES/metsamekko_rungolla.jpg'];
        api_titles = ['Dress inspired by summer forest','','','','',''];
        api_descriptions = ['This dress is almost zero-waste. I managed to use an old tablecloth almost entirely on it.','The dress closes with beautiful hook buckle on the back of the neck and lacing on the waist.','The material is probably cotton. Although pretty thick, it\'s soft to the touch.','The open back is perfect for hot summers.','Just like forest in summer, the dress has a natural and relaxed feel to it.']
        $.prettyPhoto.open(api_images,api_titles,api_descriptions);
    });
    
    $(".openBlanketCoatImages").click(function(){
    api_images = ['CLOTHES/paivapeittotakki_front.jpg','CLOTHES/paivapeittotakki_sivu.jpg','CLOTHES/paivapeittotakki_sivu2.jpg','CLOTHES/paivapeittotakki_back.jpg'];
        api_titles = ['Coat from a blanket','','','',''];
        api_descriptions = ['I made the pattern from scratch. The green fabric is recycled, I think it was used as a blanket before.','The size of the fabric made some restrictions on the design and how I could cut the patterns.','The folds in the back are one of my favourite parts of the coat.','I hope to get better pictures taken soon. I also made short cape that is supposed to be worn with the coat when the weather is colder.']
        $.prettyPhoto.open(api_images,api_titles,api_descriptions);
    });
    
    $(".openElliWeddingImages").click(function(){
        api_images = ['CLOTHES/ellinmekkofull.jpg','CLOTHES/ellinmekkofullback.jpg','CLOTHES/ellinmekkofront.jpg','CLOTHES/ellinmekkoback.jpg','CLOTHES/ellinmekkofront2.jpg'];
        api_titles = ['Wedding dress','','','',''];
        api_descriptions = ['The dress is made with my friends measurements. It\'s supposed to be really light and delicate like her.','The hem is slightly fuller from behind.','Part of the lace is appliqued by hand. The neckline is hand-stitched.','The lace in the back is mostly hand appliqued. The buttons are made from the same fabric as the hem.','The sleeves are one of my favourite part of the dress.']
        $.prettyPhoto.open(api_images,api_titles,api_descriptions);
    });
    
    $(".openBluedressImages").click(function(){
        images = ['CLOTHES/blue_dress.jpg','CLOTHES/blue_dress_2.jpg'];
        titles = ['Blue dress','Blue dress'];
        descriptions = ['Front','Back']
        $.prettyPhoto.open(images,titles,descriptions);
    });
    
    $(".openWeddingImages").click(function(){
        wimages = ['CLOTHES/wedding.png','CLOTHES/weddinginside.jpg','CLOTHES/weddinghem.jpg','CLOTHES/wedding2.png','CLOTHES/wedding3.png'];
        wtitles = ['The wedding dress','',''];
        wdescriptions = ['The green lace makes this wedding dress less traditional.','','The hem has pearls and real flowers.','Organza cape made of silk is part of the dress','The hem has many layers but is still light to wear.']
        $.prettyPhoto.open(wimages,wtitles,wdescriptions);
    });
    
    $(".openLightJacketImages").click(function(){
        wimages = ['CLOTHES/takki1.jpg','CLOTHES/takki2.jpg','CLOTHES/takki_kaulus.jpg','CLOTHES/takki_hiha.jpg'];
        wtitles = ['Light jacket','',''];
        wdescriptions = ['Cotton jacket for light workout such as biking in the city.','','Detail of the neckline.','The inside of the sleeves are gray fabric.']
        $.prettyPhoto.open(wimages,wtitles,wdescriptions);
    });
    
    $(".openKataCoatImages").click(function(){
        wimages = ['CLOTHES/katatakki_front.jpg','CLOTHES/katatakki_sivusta.jpg','CLOTHES/katatakki_takaa.jpg','CLOTHES/katatakki_kaulus.jpg','CLOTHES/katatakki_nappi.jpg'];
        wtitles = ['Wool coat','',''];
        wdescriptions = ['My friend designed this wool coat for herself. I made the pattern and technical choices based on her drawing.','The model of the coat is really unique. It took many fittings to get it just right.','The back has the same black pattern as the front.','The neckline can be worn in two different ways.','The buttons are gorgeous.']
        $.prettyPhoto.open(wimages,wtitles,wdescriptions);
    });
    
    
		$("a[rel^='prettyPhoto']").prettyPhoto({
			animation_speed: 'fast', /* fast/slow/normal */
			slideshow: 5000, /* false OR interval time in ms */
			autoplay_slideshow: false, /* true/false */
			opacity: 0.80, /* Value between 0 and 1 */
			show_title: true, /* true/false */
			allow_resize: true, /* Resize the photos bigger than viewport. true/false */
			default_width: 500,
			default_height: '700px',
			counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
			theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
			horizontal_padding: 20, /* The padding on each side of the picture */
			hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
			wmode: 'opaque', /* Set the flash wmode attribute */
			autoplay: true, /* Automatically start videos: True/False */
			modal: false, /* If set to true, only the close button will close the window */
			deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
			overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
			keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
			changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
			callback: function(){}, /* Called when prettyPhoto is closed */
			ie6_fallback: true,
			markup: '<div class="pp_pic_holder"> \
						<div class="ppt">&nbsp;</div> \
						<div class="pp_top"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
						<div class="pp_content_container"> \
							<div class="pp_left"> \
							<div class="pp_right"> \
								<div class="pp_content"> \
									<div class="pp_loaderIcon"></div> \
									<div class="pp_fade"> \
										<a href="#" class="pp_expand" title="Expand the image">Expand</a> \
										<div class="pp_hoverContainer"> \
											<a class="pp_next" href="#">next</a> \
											<a class="pp_previous" href="#">previous</a> \
										</div> \
										<div id="pp_full_res"></div> \
										<div class="pp_details"> \
											<div class="pp_nav"> \
												<a href="#" class="pp_arrow_previous">Previous</a> \
												<p class="currentTextHolder">0/0</p> \
												<a href="#" class="pp_arrow_next">Next</a> \
											</div> \
											<p class="pp_description"></p> \
											{pp_social} \
											<a class="pp_close" href="#">Close</a> \
										</div> \
									</div> \
								</div> \
							</div> \
							</div> \
						</div> \
						<div class="pp_bottom"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
					</div> \
					<div class="pp_overlay"></div>',
			gallery_markup: '<div class="pp_gallery"> \
								<a href="#" class="pp_arrow_previous">Previous</a> \
								<div> \
									<ul> \
										{gallery} \
									</ul> \
								</div> \
								<a href="#" class="pp_arrow_next">Next</a> \
							</div>',
			image_markup: '<img id="fullResImage" src="{path}" />',
			flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
			quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
			iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
			inline_markup: '<div class="pp_inline">{content}</div>',
			custom_markup: '',
			social_tools: false /* html or false to disable */
		});
});
