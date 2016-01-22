<script>
$(window).load(function(){
		var pages = $('#container li'), current=0;
		var currentPage,nextPage;
		var handler=function(){
			$('#container .button').unbind('click');
			currentPage= pages.eq(current);
			if($(this).hasClass('prevButton'))
			{
				if (current <= 0)
					current=pages.length-1;
				else
					current=current-1;
			}
			else
			{

				if (current >= pages.length-1)
					current=0;
				else
					current=current+1;
			}
			nextPage = pages.eq(current);	
			currentPage.fadeTo('slow',0.3,function(){
				nextPage.fadeIn('slow',function(){
					nextPage.css("opacity",1);
					currentPage.hide();
					currentPage.css("opacity",1);
					$('#container .button').bind('click',handler);
				});	
			});
		}

		$('#container .button').click(handler);
		
});

</script>
