function allowDrop(ev) {
	ev.preventDefault();
  }

  function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
  }






// attempt to make more elevated javascript for drag and drop game
//const source1 = document.querySelector(".source1");
//const source2 = document.querySelector(".source2");
//const source3 = document.querySelector(".source3");

//const div1 = document.querySelector(".target");

//source1.addEventListener("dragstart", function(e){
//	e.dataTransfer.setData("text/plain", e.target.id)
//});

//source2.addEventListener("dragstart", function(e){
//	e.dataTransfer.setData("text/plain", e.target.id)
//});

//source3.addEventListener("dragstart", function(e){
//	e.dataTransfer.setData("text/plain", e.target.id)
//});


//target.addEventListener("dragover", function(e){
//	e.preventDefault()
//});

//target.addEventListener("drop", function(e){
//	e.preventDefault()
//	const source1ID = e.dataTransfer.getData("text/plain")
//	e.target.appendChild(document.getElementById(source1ID))
//});

//target.addEventListener("drop", function(e){
//	e.preventDefault()
//	const source2ID = e.dataTransfer.getData("text/plain")
//	e.target.appendChild(document.getElementById(source2ID))
//});

//target.addEventListener("drop", function(e){
//	e.preventDefault()
//	const source3ID = e.dataTransfer.getData("text/plain")
//	e.target.appendChild(document.getElementById(source3ID))
//});