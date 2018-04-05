//I used the following bullet points in my assignment
//create an element BESIDES a canvas element using P5 – whether using an “element-specific” function such as createP(), createDiv(), createImg() or similar – or using the generic createElement() function.
//use html() to either retrieve the content of a DOM element for use in your P5 sketch or to modify the content of an element on the page
//use value() to either retrieve the value of an element for use in your P5 sketch or to assign a new value to an element in the DOM
//style() a DOM element with CSS from within P5
//make use of at least one element-specific event handler and callback function
//your canvas should be relocated within another element on your page via parent() or child(). It shouldn't be at the bottom of your web page.



//declaring global variables
let input, button, question;
let myCanvas;

function setup() {

  // create canvas and assign to var myCanvas
  myCanvas = createCanvas(600, 400);
  background (130, 124, 151);
//assigning myCanvas with the parent() function to move it to the top of page
  myCanvas.parent("#canvasHolder");

}
//drawing the circle shape for user to click on
//this will be part of my base framework for my final project planet idea
function draw (){

ellipse(width/2, height/2, 200, 200);

}
//creating a function to allow the user to click on the ellipse
function mousePressed(){
//checking to see if the mouse is outside of the circle, modified from the example
//found here https://p5js.org/examples/hello-p5-interactivity-1.html
  let c = dist(mouseX, mouseY, width/2, height/2);
    if (c < 100){
      //creating an input area for user to put in their answer inspired by
      //this example found in the p5 examples: https://p5js.org/examples/dom-input-and-button.html
        input = createInput();
        input.position(200, 70);

        let col = color(217, 212, 213);
      //creating a button element for the user to click after they have type
      //something in
        button = createButton('submit');
        button.position(input.x + input.width, 70);
        button.style('background-color', col);
        button.mousePressed(answer);
      //creating an element to not only pose the question to the user but this
      //element will update depending on the answer with the if/else function
      //below.
        question = createElement('h2', 'What shape is this?');
        question.position(200,0);

        textAlign(CENTER);
        textSize(50);
    }
}
//creating an argument for the user input in the text box
function answer() {
  let ans = input.value();
//the correct answer is circle anything else is false
  if (ans == "circle") {
    question.html('Correct! It is a '+ans+'!');
    input.value('');
   }

  else {
     question.html ('Sorry, try again.');
     input.value('');
   }
}
