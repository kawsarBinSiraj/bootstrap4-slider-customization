

/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


$(document).ready(function() {
    // slider title trim
    $("#slider .slide_title").html(function(){
      var text= $(this).text().trim().split(" ");
      var last = text.pop();
      return text.join(" ") + (text.length > 0 ? " <span class='special'>" + last + "</span>" : last);
    });
   
});