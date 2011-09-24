function getContextInfo() {
  gadgets.sciverse.getContextInfo(contextCallback);
}
		
function contextCallback(obj) {
  $("#content").html("<iframe src='http://sciverse-annotator.herokuapp.com/papers/" + obj.pii + "?title=" + encodeURIComponent(obj.docTitle) + "' width='327' height='150' style=""></iframe>");
  gadgets.window.adjustHeight();
}

gadgets.util.registerOnLoadHandler(getContextInfo);
