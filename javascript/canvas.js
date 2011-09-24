 /*
  * Call back function to process content
  *
  * response - response from getArticleContent call, string of article page body
  *
  */
		
function getContentCallback(obj) {
    $("#content").html("<iframe src='http://sciverse-annotator.herokuapp.com/papers/" + obj.pii + "?title=" + encodeURIComponent(obj.docTitle) + "' width='1300' height='1600' style='border: none; margin: 0px; padding: 0px'></iframe>");
}

$(document).ready(function () {
    
    alert($(window.top).find("#articlePage"));
    
    context_data = gadgets.views.getParams();
    /* Get the article content */
    getContentCallback(context_data);
    
});
