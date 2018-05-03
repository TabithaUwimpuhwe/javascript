/* 
  Author: Mike
  Date: 3/14/17
  Used by: home.html
  Notes:
    Creates a new <style> block to slowly move the image off of the page.
    Add an event handler to hide the image after the animation.
*/

  var styletext = "\
      @keyframes flyaway {  \
      0% {  \
          transition: 5s ease-in;  \
        }  \
        100% {  \
          transform: translate(350px, 100px); \
        }  \
      }  \
      \
      #airplane1 {  \
        animation: flyaway 10s ease-in forwards;  \
        -moz-animation-iteration-count: 1;  \
        animation-iteration-count: 1;   \
      }  \
  "
  var newStyleBlock = document.createElement("style");
  newStyleBlock.textContent = styletext;
  document.head.appendChild(newStyleBlock);

  var airplane = document.getElementById("airplane1");
  airplane.addEventListener("animationend", function() { airplane.style.display="none" }, false);
