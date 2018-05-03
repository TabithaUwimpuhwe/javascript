"use strict";
$(document).ready(function() {
    $("#join_list").click(function() {
        var emailAddress1 = $("#email_address1").val();
        var emailAddress2 = $("#email_address2").val();
        var isValid = true;

        // validate the first email address
        if (emailAddress1 === "") { 
            $("#email_address1").next().text("This field is required.");
            isValid = false;
        } else {
            $("#email_address1").next().text("");
        } 
        
        // validate the second email address
        if (emailAddress2 === "") { 
            $("#email_address2").next().text("This field is required.");
            isValid = false; 
        } else if (emailAddress1 !== emailAddress2) { 
            $("#email_address2").next().text(
                "This entry must equal first entry.");
            isValid = false;
        } else {
            $("#email_address2").next().text("");
        }
        
        // validate the first name entry  
        if ($("#first_name").val() === "") {
            $("#first_name").next().text("This field is required.");
            isValid = false;
        } 
        else {
            $("#first_name").next().text("");
        }
        
        // submit the form if all entries are valid
        if (isValid) {
            $("#email_form").submit();
        }
    }); // end click
    $("#email_address1").focus();


//Event handler p249 to clear entries above by setting text to empty val()
$("#clear_entries").click(function() {
        $(":text").val("");//set text to empty P235
        $(":text").next().text("*"); //add asterix next to "text" area
        $("#email_address1").focus(); //focus to the frist line (box)
    });	// end function (curly brace) and then end click

 $(":text").dblclick(function() {
       // $("#clear_entries").click(); or below (either way works as above)
        $(this).val("");
    }); // end function (curly brace) and then end dblclick
        
    $("#email_address1").focus();
    
}); // end ready
