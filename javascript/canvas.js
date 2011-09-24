 /*
  * Call back function to process content
  *
  * response - response from getArticleContent call, string of article page body
  *
  */
  
  
function getContextInfo() {
  gadgets.sciverse.getContextInfo(contextCallback);
}
		
function contextCallback(obj) {
    alert('lol');
    $("#content").html("<iframe src='http://sciverse-annotator.herokuapp.com/papers/" + obj.pii + "?title=" + encodeURIComponent(obj.docTitle) + "' width='327' height='1500' style='border: none; margin: 0px; padding: 0px'></iframe>");
}

$(document).ready(function () {
   getContextInfo(); 
});
