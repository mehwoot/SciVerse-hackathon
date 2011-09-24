function contextCallback(obj){
    
    alert(obj.pii);
   
}

$(document).ready(function() {
    
    
    gadgets.sciverse.getContextInfo(contextCallback);
     


    /* Display the welcome text */
    $("#content").html("<a href='javascript:void(0);' id='annotate'>Click here to annotate this article!</a>");
    
    $("#annotate").click(function () {
        var canvas_view = new gadgets.views.View("canvas"); 
        gadgets.views.requestNavigateTo(canvas_view);
    });
    
    
    
});
