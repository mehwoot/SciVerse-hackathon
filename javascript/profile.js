$(document).ready(function() {

    /* Display the welcome text */
    $("#content").html("<a id='annotate'>Click here to annotate this article!</a>");
    
    $("#annotate").click(function () {
        var canvas_view = new gadgets.views.View("canvas"); 
        gadgets.views.requestNavigateTo(canvas_view);
    });
    
    
    
});
