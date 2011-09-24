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
       down.x = evt.clientX; 
       down.y = evt.clientY; 
    });
    
    $("#articleHTML").mouseup(function (evt) {
        up.x = evt.clientX;
        up.y = evt.clientY;
        
        alert('lol!');
        
        $(body).append("<div class='annotation' id='annotation_number'>annotation!!!!!!!!</div>");
        
    });
}

$(document).ready(function () {
    
    /* Get the article content */
    gadgets.sciverse.getArticleContent(getContentCallback);
    
});
