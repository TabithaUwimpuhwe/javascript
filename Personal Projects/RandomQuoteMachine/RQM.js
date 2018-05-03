$(document).ready(function(){
    
let quotes: [] = ["I can live without money, but I cannot live without love.", "A lie can travel half way around the world while the truth is putting on its shoes.","Life is 10% what happens to us and 90% how we react to it.", "You are a living magnet. What you attract into your life is in harmony with your dominant thoughts.", "The mind is everything. What you think, you become.", "A moment of gratitude makes a difference in your attitude.", "The person who can bring the spirit of laughter into a room is indeed blessed.", "Love is like the measles; we all have to go through it."];
    
let author: [] =["-Judy Garland","-Charles Spurgeon","-Dennis P. Kimbro", "-Brian Tracy", "–Proverb 4:23 GNT", "-Bruce Wilkinson", "-Bennett Cerf", "-Jerome K. Jerome"];

  function getQuote(){
var randomNum=Math.floor((Math.random()*quotes.length));
document.getElementById('quoteDisplay').innerHTML=quotes[randomNum];
var randomQuote=quotes[randomNum];
var randomAuthor=author[randomNum]

return randomQuote;
return randomAuthor;      
      
}
};