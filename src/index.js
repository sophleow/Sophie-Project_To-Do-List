const promptLoaded = () => {
	let userInput;
	let user = prompt("Hi! Please enter your name:", "");
	if (user == null || user == "") {
		userInput = "Your To Do List";
	} else {
		userInput = user + ": To Do List";
	}
	document.getElementById("username").innerHTML = userInput;
};

window.addEventListener("load", promptLoaded);

const dateInput = document.createElement("input");
dateInput.setAttribute("type", "date");
dateInput.setAttribute("value", "2022-03-01");
document.getElementById("addDate").append(dateInput);

function startTime() {
	const today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
	setTimeout(startTime, 1000);
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	} // add zero in front of numbers < 10
	return i;
}

const addNewList = () => {
	let name = document.getElementById("btnNewlist").parentElement.id;
	const userdata = document.getElementById(name);
	console.log(userdata.children[1].children.length);
	let a = userdata.children[1].children.length;
	let b = a + 1;

	let createNewListTitle = document.createElement("DT");
	let br = document.createElement("br");
	createNewListTitle.append(br);
	createNewListTitle.setAttribute("id", b);

	let titleBox = document.createElement("input");
	titleBox.setAttribute("type", "checkbox");
	let titleBox2 = document.createElement("input");
	titleBox2.setAttribute("type", "text");
	titleBox2.setAttribute(
		"placeholder",
		"Add Title Here (eg. Work, School, Home)"
	);
	titleBox2.style.width = "600px";
	let titleBox3 = document.createElement("input");
	titleBox3.setAttribute("type", "button");
	titleBox3.setAttribute("id", "addnew" + b);
	titleBox3.setAttribute("value", "+");
	titleBox3.setAttribute("onclick", "addNewItem(this.id)");

	createNewListTitle.append(titleBox, titleBox2, titleBox3);
	document.querySelector("#todolist").append(createNewListTitle);

	let createNewListItem = document.createElement("DD");
	let taskBox1 = document.createElement("input");
	taskBox1.setAttribute("type", "checkbox");
	let taskBox2 = document.createElement("input");
	taskBox2.setAttribute("type", "text");
	taskBox2.setAttribute(
		"placeholder",
		"Add Task Here (eg. finish homework, buy milk, wash dishes)"
	);
	taskBox2.style.width = "800px";
	createNewListItem.append(taskBox1, taskBox2);
	createNewListTitle.appendChild(createNewListItem);

	let createNewListItem2 = document.createElement("DD");
	let taskBox3 = document.createElement("input");
	taskBox3.setAttribute("type", "checkbox");

	let taskBox4 = document.createElement("input");
	taskBox4.setAttribute("type", "text");
	taskBox4.setAttribute(
		"placeholder",
		"Add Task Here (eg. finish homework, buy milk, wash dishes)"
	);
	taskBox4.style.width = "800px";
	createNewListItem2.append(taskBox3, taskBox4);
	createNewListTitle.appendChild(createNewListItem2);

	//let br = document.createElement("br");
	//createNewListTitle.append(br);
};

document.getElementById("btnNewlist").addEventListener("click", addNewList);

const addNewItem = (clicked_id) => {
	console.log(clicked_id);
	let createNewDD = document.createElement("DD");
	let inputCheck = document.createElement("input");
	inputCheck.setAttribute("type", "checkbox");

	let inputText = document.createElement("input");
	inputText.setAttribute("type", "text");
	inputText.setAttribute(
		"placeholder",
		"Add Task Here (eg. finish homework, buy milk, wash dishes)"
	);
	inputText.style.width = "800px";

	createNewDD.append(inputCheck, inputText);
	document.getElementById(clicked_id).parentNode.append(createNewDD);
};

//document.getElementById("addnew").addEventListener("click", addNewList);
