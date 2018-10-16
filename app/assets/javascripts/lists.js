// document function on turbolinks load
$( document ).on('turbolinks:load', function() {

  //  variables // targets
  const div = '.todo-list';
  const footerDiv = 'div.list--footer-box, div.list--footer-box-date';
  const optButton = 'a.btn';
  const listButton = '.list-buttons .btn';

  // Hide the clicked list when clicked outside of the div .todo-list
  $(document).on('click', function(event) {
    if (!$(event.target).closest(div).length) {

      // all divs with class .todo-list
      $(div).removeClass('clicked');
      $(div).find(optButton).hide();
      $(div).find(listButton).removeClass('animation');
      $(div).find(footerDiv).removeClass('visible-opacity');
      $(div).find(footerDiv).delay(200).slideUp( 200 );

    }
  });


  // this will attach the anonymous function as an event handler for all elements with class 'todo-list'
  $(div).on('click', function() {

      /*  
        check if .todo-list div, has class .clicked 
        if it has, it means, its already clicked and theres nothing to do. 
        if it doesnt, add class .clicked to .todo-list div   
      */
      if ( $(this).hasClass( "clicked" ) ) {
   
         // do nothing if true, because it means, that div is already clicked

      } else {
  
        // all divs with class .todo-list
        $(div).removeClass('clicked');
        $(div).find(optButton).hide();
        $(div).find(listButton).removeClass('animation');
        $(div).find(footerDiv).removeClass('visible-opacity');
        $(div).find(footerDiv).delay(200).slideUp( 200 );
      
        // clicked div with class .todo-list | overrides everything before in this statement on element click
        $(this).addClass('clicked');
        $(this).find(optButton).show();
        $(this).find(listButton).addClass('animation');
        $(this).find(footerDiv).addClass('visible-opacity');
        $(this).find(footerDiv).slideDown( 200 );

      }

  });

// document function end
});



