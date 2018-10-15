$( document ).on('turbolinks:load', function() {




var div = '.todo-list';
var body = 'body';


$(body).on('click', function() {

  $(div).removeClass('clicked');
  $(div).css('background-image', 'linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(243, 243, 243) 100%)');
  $(div).find( 'div.list--footer-box' ).css('opacity', '0');
  $(div).find( 'div.list--footer-box-date' ).css('opacity', '0');
  $(div).find( 'a.btn' ).hide();
  $(div).find( '.list-buttons .btn' ).removeClass('animation');
  $(div).find( 'div.list--footer-box' ).delay(200).slideUp( 200 );
  $(div).find( 'div.list--footer-box-date' ).delay(200).slideUp( 200 );
 
});



// this will attach the anonymous function as an event handler for all elements with class 'todo-list'
$(div).on('click', function() {
  event.stopPropagation();
      if ( $(this).hasClass( "clicked" ) ) {
   
        console.log("true" + this)


      } else {


        $(div).removeClass('clicked');
        $(div).css('background-image', 'linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(243, 243, 243) 100%)');
        $(div).find( 'div.list--footer-box' ).css('opacity', '0');
        $(div).find( 'div.list--footer-box-date' ).css('opacity', '0');
        $(div).find( 'a.btn' ).hide();
        $(div).find( '.list-buttons .btn' ).removeClass('animation');
        $(div).find( 'div.list--footer-box' ).delay(200).slideUp( 200 );
        $(div).find( 'div.list--footer-box-date' ).delay(200).slideUp( 200 );
  
        console.log("false" + this)
        

        $(this).addClass('clicked');
        $(this).css('background-image', 'linear-gradient(135deg, #008BB4 0%, #56C3B0 100%)');
        $(this).find( 'a.btn' ).show();
        $(this).find( '.list-buttons .btn' ).addClass('animation');
        $(this).find( 'div.list--footer-box' ).css('opacity', '1');
        $(this).find( 'div.list--footer-box-date' ).css('opacity', '1');
        $(this).find( 'div.list--footer-box' ).slideDown( 200 );
        $(this).find( 'div.list--footer-box-date' ).slideDown( 200 );
    
       

      }


 
  });




  



// document fuction end
});



