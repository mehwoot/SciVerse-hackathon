
context_obj = {};

function contextCallback(obj) {
    
    context_obj = obj;
    
    
    $("#content").html("<iframe id='content_iframe' src='http://sciverse-annotator.herokuapp.com/papers/" + obj.pii + "/gadget' width='300' height='150'></iframe><a href='javascript:void(0);' id='annotate'>Click here to annotate this article!</a>");
    
    $("#annotate").click(function () {
        var canvas_view = new gadgets.views.View("canvas"); 
        gadgets.views.requestNavigateTo(canvas_view, context_obj);
    });
   
}

$(document).ready(function() {
    
    gadgets.sciverse.getContextInfo(contextCallback);
     
});

