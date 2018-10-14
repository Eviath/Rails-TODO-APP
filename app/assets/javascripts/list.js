$( document ).on('turbolinks:load', function() {



// this will attach the anonymous function as an event handler for all elements with class 'todo-list'
$('.todo-list').on('click', function() {

    $('.todo-list').removeClass('clicked');
    $('.todo-list').css('background-image', 'linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(243, 243, 243) 100%)');
    $('.todo-list').find( 'a.btn' ).hide();
    $('.todo-list').find( '.list-buttons .btn' ).removeClass('animation');
    $('.todo-list').find( 'div.list--footer-box' ).hide( 200 );
    $('.todo-list').find( 'div.list--footer-box-date' ).hide( 200 );



    $(this).addClass('clicked');
    $(this).css('background-image', 'linear-gradient(135deg, #008BB4 0%, #56C3B0 100%)');
    $(this).find( 'a.btn' ).show();
    $(this).find( '.list-buttons .btn' ).addClass('animation');

    $(this).find( 'div.list--footer-box' ).show( 200 );
    $(this).find( 'div.list--footer-box-date' ).show( 200 );


  });




  



// document fuction end
});



