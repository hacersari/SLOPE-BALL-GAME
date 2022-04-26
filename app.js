//PAGE 1 ----------------------------------
 // saves the event target id to use in function drop006()
function dragStart001(event) {
    event.dataTransfer.setData("choice001", event.target.id);
 }

 // browser sometimes behave weird, prevent weirdness
 // makes the games running smoothly
 function allowDrop001(event) {
    event.preventDefault();
 }

 // allows drop it
 // get the data to put in the box and replaces the image with a new image
 function drop006(event) {
    var data = event.dataTransfer.getData("choice001");
    event.target.appendChild(document.getElementById(data));
    place001.innerHTML = "<img src=\"answer_1.jpeg\" width=\"300px\" height=\"300px\">";;
 }


 //PAGE 2 ----------------------------------
 // repeats the same steps on page 1 with using different variables for page 2

 function dragStart002(event) {
    event.dataTransfer.setData("choice002", event.target.id);
 }

 function allowDrop002(event) {
    event.preventDefault();
 }

 function drop007(event) {
    var data = event.dataTransfer.getData("choice002");
    event.target.appendChild(document.getElementById(data));
    place002.innerHTML = "<img src=\"answer_2.jpeg\" width=\"300px\" height=\"300px\">";;
 }


 //PAGE 3 ----------------------------------
 // repeats the same steps on page 1 with using different variables for page 3

 function dragStart003(event) {
    event.dataTransfer.setData("choice003", event.target.id);
 }

 function allowDrop003(event) {
    event.preventDefault();
 }

 function drop008(event) {
    var data = event.dataTransfer.getData("choice003");
    event.target.appendChild(document.getElementById(data));
    place003.innerHTML = "<img src=\"answer_3.jpeg\" width=\"300px\" height=\"300px\">";;
 }