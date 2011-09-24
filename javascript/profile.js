function getContextInfo() {
  gadgets.sciverse.getContextInfo(contextCallback);
}
		
function contextCallback(obj) {
  $("#content").html("<iframe src='http://sciverse-annotator.herokuapp.com/papers/" + obj.pii + "?title=" + encodeURIComponent(obj.docTitle) + "' width='327' height='150' style='border: none; margin: 0px; padding: 0px'></iframe>");
  gadgets.window.adjustHeight();
}

gadgets.util.registerOnLoadHandler(getContextInfo);

/*
context_obj = {};

function contextCallback(obj) {
    
    context_obj = obj;

    $("#content").html("<a href='javascript:void(0);' id='annotate'>Click here to annotate this article!</a>");
    
    $("#annotate").click(function () {
        var canvas_view = new gadgets.views.View("canvas"); 
        gadgets.views.requestNavigateTo(canvas_view, context_obj);
    });
   
}

$(document).ready(function() {
    
    
    gadgets.sciverse.getContextInfo(contextCallback);
     
    
    
});
*/
