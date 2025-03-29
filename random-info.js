// List of possible choices
function showInfo() {
   var inforList = [
      "Ivan",
      "Cookie",
      "Vlad",
      "<h2>Hello world!</h2>"
   
   ];

   // Generate a random number and pick that item from the array
   var randomizer = Math.floor(Math.random() * inforList.length);
   
   // Write that information in the HTML element that has the ID of "info"
   document.getElementById("info").innerHTML = infoList[randomizer];
   
}