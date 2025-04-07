// List of possible choices
function showInfo() {
   var infoList = [
      "Ivan",
      "Cookie",
      "Vlad",
      "<h2>Hello world!</h2>"
   
   ];

   // Generate a random number and pick that item from the array
   var randomizer = Math.floor(Math.random() * infoList.length);
   
   // Write that information in the HTML element that has the ID of "info"
   document.getElementById("info").innerHTML = infoList[randomizer];
   
}

// You had typos in your function names. Some were called InforList (with an R) and others were infoList (spelled correctly)
