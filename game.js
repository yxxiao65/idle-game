
var score = 1; // Create a variable to store the score in

var title = new Title('Lonely Island Gatherer!'); // Create a title element
var button = new Button('Gather Wood!', btnPress);   // Create a button element
//button.remove();
var hidden = new Button('Gather Iron', btnPress);
hidden.hide();//hide the button
var hidden2 = new Button('Gather Titanium Alloy', btnPress);
hidden2.hide();
var scr = new Text(score);                    // Create a text element
var hidden3 = new Button('You did build a spaceship and escape the island! Hvae a nice day!');
hidden3.hide();
var scr2 = new Text(score2)



//this not work as I expected, QAQ
var text1 = new Text('Text1');  // Create some text to go in the columns
var text2 = new Text('Text2');

column1.add(text1);  // Add the text to the first column
column2.add(text2);  // Add the text to the second column


setInterval(btnPress, 1000);   // Set up a loop


function btnPress() {
  score++;         // Increase the score
  scr.edit(score/4); // Update the page with the new score


    if(score > 40) {
    hidden.show();
  }

  if(score > 120) {
  hidden2.show();
  }


  if(score > 400) {
  hidden3.show();
  }

  if(score > 120) {
  hidden.hide();
}

  if(score > 400) {
hidden2.hide();
}

if(score > 40) {
button.hide();
}

if(score > 400) {
scr.hide();//hide every thing else after 100
}



}
