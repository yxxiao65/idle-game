var score = 0;
var food = 10;
var water = 10;

postToPage(score); // Print to the page
postToPage(food);
postToPage(score);



changeTitle('Yikeshan Game');


createButton('bite', btnPress); // Make a button

createButton('drink', btnPress);






setInterval(btnPress, 1000);





function btnPress() {
  score++;
  postToPage(score);




}
