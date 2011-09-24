 /*
  * Call back function to process content
  *
  * response - response from getArticleContent call, string of article page body
  *
  */
  
  
down = {};
up = {};
annotation_number = 0;
  
function getContentCallback(response) {
    if (response != null)
    {
        document.getElementById("articleHTML").innerHTML=response;
    }
    // Tells gadget to resize itself
    
    gadgets.window.adjustHeight();
    
    enableAnnotations();
    
}

function enableAnnotations() {
    
    $("#articleHTML").mousedown(function (evt) {
       down.x = evt.pageX; 
       down.y = evt.pageY; 
       evt.preventDefault();
       
    });
    
    $("#articleHTML").mouseup(function (evt) {
        
        up.x = evt.pageX;
        up.y = evt.pageY;
        
        first = {};
        second = {};
        
        first.x = Math.min(down.x, up.x);
        first.y = Math.min(down.y, up.y);
        
        second.x = Math.max(down.x, up.x);
        second.y = Math.max(down.y, up.y);
        
        width = second.x - first.x;
        height = second.y - first.y;
                
        $("#articleHTML").append("<div class='annotation' style='border: 1px solid #f00; position: absolute; left:" + first.x + "px; top: " + first.y + "px; width: " + width + "px; height: " + height + "px; ' id='annotation_number'>annotation!!!!!!!!</div>");
        evt.preventDefault();
    });
}

$(document).ready(function () {
    
    /* Get the article content */
    gadgets.sciverse.getArticleContent(getContentCallback);
    
});
