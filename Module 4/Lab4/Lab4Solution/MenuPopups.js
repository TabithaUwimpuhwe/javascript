
// Create a new div element that will be used as the popup.
var popdiv = document.createElement("div");
popdiv.id = "menumessage";
popdiv.textContent = "default text for testing";
popdiv.style.color = "orange";
popdiv.style.border = "1px solid white";
popdiv.style.borderRadius = "10px";
popdiv.style.backgroundColor = "black";
popdiv.style.position = "absolute";
popdiv.style.padding = "10px";
popdiv.style.display = "none";
// popdiv.style.transformOrigin ="0 0";
// popdiv.style.transform = "rotate(15deg)";
document.body.appendChild(popdiv);

//var topnav = document.getElementById("topNav");
//var tabs = topnav.getElementsByTagName("a");
// alternate to the previous two lines
var tabs = document.querySelectorAll("#topNav a");

for (var index = 0; index < tabs.length; index++) {
    var tab = tabs[index];
    tab.onmouseenter=function() {ShowPopup(this)}
    tab.onmouseleave=function() {HidePopup()}
}

function ShowPopup(tab)
{
    // get the popup div and position it
    var popdiv = document.getElementById("menumessage");
    popdiv.style.left = "30px";
    popdiv.style.top = "110px";
    popdiv.style.left = tab.offsetLeft + "px";
    popdiv.style.top = (tab.offsetTop + 30) + "px";

    // select the text to display
    var popuptext = "";
    switch (tab.textContent) {
        case "Home":
            popuptext = "Return to the home page.";
            break;
        case "Toys":
            popuptext = "See our latest toys, including boats, planes and cars!";
            break;
        case "Sports":
            popuptext = "See our new line of sporting goods!";
            break;
        default:
            popuptext = "";
            break;
    }
    // set the text and display the popup
    if (popuptext != "")
    {
        popdiv.textContent = popuptext;
        popdiv.style.display = "block";
    }


}


function HidePopup()
{
    // hide the popup
    var popdiv = document.getElementById("menumessage");
    popdiv.style.display = "none";   
}

