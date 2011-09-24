 /*
  * Call back function to process content
  *
  * response - response from getArticleContent call, string of article page body
  *
  */
  
  
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
    // Tells gadget to resize itself
    
    gadgets.window.adjustHeight();
    
    enableAnnotations();
    
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
            $("#comments").html("");
            for (int i=0; i<annotations[annotation_selected].comments.length; i++) {
                $("#comments").append("<span class='comment'>" + annotations[annotation_selected].comments[i] + "</span>");
            }
        }
    });
    
    $("#articleHTML").mouseup(function (evt) {
        if (annotate_mode) {
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
                    
            $("#articleHTML").append("<div class='annotation' style='border: 1px solid #f00; position: absolute; left:" + first.x + "px; top: " + first.y + "px; width: " + width + "px; height: " + height + "px; ' id='annotation_" + annotation_number + "' ann_num='"+annotation_number+"'></div>");
            
            $("#annotation_" + annotation_number).append("<div style='position:relative; top: " + height + "px; width: 300px;'> <div class='text_button' style='position:relative; text-align: left;' id='text_button_" + annotation_number + "' note_id='" + annotation_number + "' >Add text</div><div class='text_button' style='display:none; ' id='text_field_" + annotation_number + "' note_id='" + annotation_number + "' ><textarea id='textarea_" + annotation_number + "' rows='1' cols='15'></textarea><br/><input type='submit' note_id='" + annotation_number + "' id='annotation_submit_" + annotation_number + "' value='submit' /></div></div>");
            
            
            annotations[annotation_number] = { "x" : first.x, "y": first.y, "width": width, "height": height, comments : new Array(), "id" : annotation_number };
            
            /* When you click the button to slide out the comments */
            $("#text_button_" + annotation_number).click(function () {
                $("#text_field_" + $(this).attr("note_id")).slideToggle();
            });
            
            
            $("#annotation_" + annotation_number).click(function() {
                ann_num = $(this).attr("ann_num");
                annotation_selected = ann_num;
                $("#comments").html(annotations[annotation_selected].comments);
            });
            
            $("#annotation_submit_" + annotation_number).click(function () {
                ann_num = $(this).attr("note_id");
                annotations[ann_num].comments.push($("#textarea_" + ann_num).attr("value"));
                $("#textarea_" + $(this).attr("note_id")).before("<div style='position:relative;' >" + $("#textarea_" + $(this).attr("note_id")).attr("value") + "</div>");
                $("#textarea_" + $(this).attr("note_id")).attr("value", "");
                //$(this).parent().slideToggle(); 
            });
            
            
            annotation_number += 1;
            evt.preventDefault();
            
            alert(annotations[0].comments);
            
            annotate_mode = false;
        }
    });
}

$(document).ready(function () {
    
    context_data = gadgets.views.getParams();
    /* Get the article content */
    gadgets.sciverse.getArticleContent(getContentCallback);
    
});
