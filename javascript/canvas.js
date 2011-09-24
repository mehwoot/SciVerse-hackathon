 /*
  * Call back function to process content
  *
  * response - response from getArticleContent call, string of article page body
  *
  */
  
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
       alert(evt.which); 
    });
}

$(document).ready(function () {
    
    /* Get the article content */
    gadgets.sciverse.getArticleContent(getContentCallback);
    
});
