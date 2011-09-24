$(document).ready(function() {
  
  FB.login(function(response) {
     if (response.authResponse) {
       console.log('Welcome!  Fetching your information.... ');
       FB.api('/me', function(response) {
         console.log('Good to see you, ' + response.name + '.');
         FB.logout(function(response) {
           console.log('Logged out.');
         });
       });
     } else {
       console.log('User cancelled login or did not fully authorize.');
     }
   }, {scope: ''});
    
    /* Display the welcome text */
    $("#content").html("<a href='javascript:void(0);' id='annotate'>Click here to annotate this article!</a>");
    
    $("#annotate").click(function () {
        var canvas_view = new gadgets.views.View("canvas"); 
        gadgets.views.requestNavigateTo(canvas_view);
    });
    
    
    
});
