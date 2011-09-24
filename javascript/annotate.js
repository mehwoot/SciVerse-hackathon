
gadgets.util.registerOnLoadHandler(getContextInfo);
  
  
down = {};
up = {};
annotation_number = 0;
annotate_mode = false;
context_data = {};
annotations = {};
annotation_selected = -1;

function getContentCallback(response) {
    if (response != null)
    {
        document.getElementById("articleHTML").innerHTML=response;
    }
    
    enableAnnotations();
    
}

function updateDisplayComments() {
    $("#comments").html("");
    for (i=0; i<annotations[annotation_selected].comments.length; i++) {
        $("#comments").append("<span class='comment'>" + annotations[annotation_selected].comments[i] + "</span><br/>");
    }    
}

function enableAnnotations() {
    
    $("#make_annotation").click(function () {
       annotate_mode = true;
    });
    
    $("#articleHTML").mousedown(function (evt) {
        if (annotate_mode) {
           down.x = evt.pageX; 
           down.y = evt.pageY; 
           evt.preventDefault();
       }
       
    });
    
    $("#comment_submit").click(function () {
        if (annotation_selected != -1) {
            annotations[annotation_selected].comments.push($("#comment_input").attr("value"));
            $("#comment_input").attr("value", "");
            updateDisplayComments();
        }
    });
    
    $("#articleHTML").mouseup(function (evt) {
        if (annotate_mode) {
            up.x = evt.clientX;
            up.y = evt.clientY;
            
            first = {};
            second = {};
            
            first.x = Math.min(down.x, up.x);
            first.y = Math.min(down.y, up.y);
            
            second.x = Math.max(down.x, up.x);
            second.y = Math.max(down.y, up.y);
            
            width = second.x - first.x;
            height = second.y - first.y;
                    
            $("#articleHTML").append("<div class='annotation selected' style='border: 1px solid #f00; position: absolute; left:" + first.x + "px; top: " + first.y + "px; width: " + width + "px; height: " + height + "px; ' id='annotation_" + annotation_number + "' ann_num='"+annotation_number+"'></div>");
            
            annotations[annotation_number] = { "x" : first.x, "y": first.y, "width": width, "height": height, comments : new Array(), "id" : annotation_number };
            
            
            $("#annotation_" + annotation_number).click(function() {
                ann_num = $(this).attr("ann_num");
                annotation_selected = ann_num;
                updateDisplayComments();
                $(".annotation").removeClass("selected");
                $(this).addClass("selected");
            });
            
            annotation_selected = annotation_number;
            updateDisplayComments();
            
            annotation_number += 1;
            evt.preventDefault();
            
            annotate_mode = false;
        }
    });
}

$(document).ready(function () {
    
    context_data = gadgets.views.getParams();
    /* Get the article content */
    gadgets.sciverse.getArticleContent(getContentCallback);
    
});

