function getContextInfo() {
  gadgets.sciverse.getContextInfo(contextCallback);
}
		
function contextCallback(obj) {
  console.log(obj);
  $("#content").html("<iframe src='http://sciverse-annotator.herokuapp.com/papers/" + obj.pii + "?title=" + encodeURIComponent(obj.docTitle) + "' width='327' height='150' style='border: none; margin: 0px; padding: 0px'></iframe>");
  gadgets.window.adjustHeight();
}

gadgets.util.registerOnLoadHandler(getContextInfo);
