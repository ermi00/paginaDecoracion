  $(document).ready(function(){
    $('.sidenav').sidenav();
    $('.slider').slider();
    $(".button-collapse").sideNav();
    $('.modal-trigger').leanModal();
    $ ('#push,secton').pushpin({ top:$('#push').height() }); 
    
  });
  
  $(document).ready(function(){
    $('.slider').slider({
        full_width: true,
        height: '100%',
        indicators: true
    });
});