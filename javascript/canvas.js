 /*
  * Call back function to process content
  *
  * response - response from getArticleContent call, string of article page body
  *
  */
  
function getPageHtmlCallback(response) {
    if (response != null)
    {
        $("#content_iframe").load(function () {
            var o = document.getElementsByTagName('iframe')[0];
            o.contentWindow.postMessage(response, "http://sciverse-annotator.herokuapp.com");
        });
    }
    
}

function getContentCallback(obj) {
    $("#content").html("<iframe id='content_iframe' src='http://sciverse-annotator.herokuapp.com/papers/" + obj.pii + "?title=" + encodeURIComponent(obj.docTitle) + "' width='1300' height='700' style='border: none; margin: 0px; padding: 0px'></iframe>");
    gadgets.sciverse.getArticleContent(getPageHtmlCallback);
}

$(document).ready(function () {
    context_data = gadgets.views.getParams();
    getContentCallback(context_data);
});
