const addNewList = () => {
	let createNewList = document.createElement("DL");
	createNewList.innerText = "This is start of new list";
	createNewList.setAttribute("id", "newList2");
	document.querySelector("dl").append(createNewList);
	let createNewListTitle = document.createElement("DT");
	createNewListTitle.innerText = "This is new list title";
	createNewListTitle.setAttribute("id", "newListTitle2");
	document.querySelector("#newList2").append(createNewListTitle);
	let createNewListItem = document.createElement("DD");
	createNewListItem.innerText = "This is new list item";
	createNewListItem.setAttribute("id", "newListItem2");
	document.querySelector("#newList2").append(createNewListItem);
};

document.getElementById("btnNewlist").addEventListener("click", addNewList);

const createNewListBox = () => {
	let inputcheckbox = document.createElement("input");
	inputcheckbox.setAttribute("type", "checkbox");

	let inputtextbox = document.createElement("input");
	inputtextbox.setAttribute("type", "text");
	inputtextbox.setAttribute("placeholder", "Add Title Here");
	inputtextbox.style.width = "600px";

	let inputbutton = document.createElement("input");
	inputbutton.setAttribute("type", "button");
	inputbutton.setAttribute("value", "+");
	inputbutton.setAttribute("id", "btnNewItem");
	inputbutton.setAttribute("onclick", "addNewItem()");
	// document
	// 	.getElementById("newList2")
	// 	.append(inputcheckbox, inputtextbox, inputbutton);

	let inputcheckbox2 = document.createElement("input");
	inputcheckbox2.setAttribute("type", "checkbox");

	let inputtextbox2 = document.createElement("input");
	inputtextbox2.setAttribute("type", "text");
	inputtextbox2.setAttribute("placeholder", "Add Task Here");
	inputtextbox2.style.width = "800px";

	// document.getElementById("newList2").append(inputcheckbox2, inputtextbox2);
};

function addNewItem() {
	let inputcheck = document.createElement("input");
	inputcheck.setAttribute("type", "checkbox");

	let inputtext = document.createElement("input");
	inputtext.setAttribute("type", "text");
	inputtext.setAttribute("placeholder", "Add Task Here");
	inputtext.style.width = "800px";
	// document.getElementById("newListItem2").append(inputcheck, inputtext);
}

document.getElementById("btnNewItem").addEventListener("click", addNewItem);

//spare
const addNewList = () => {
	let createNewListTitle = document.createElement("DT");
	let titleBox = document.createElement("input");
	titleBox.setAttribute("type", "text");
	titleBox.setAttribute("placeholder", "Add Title Here");
	titleBox.style.width = "600px";
	document.querySelector("#currentlist").append(createNewListTitle, titleBox);

	let createNewListItem = document.createElement("DD");
	let taskBox1 = document.createElement("input");
	taskBox1.setAttribute("type", "text");
	taskBox1.setAttribute("placeholder", "Add Task Here");
	taskBox1.style.width = "800px";
	document.querySelector("#currentlist").append(createNewListItem, taskBox1);

	let createNewListItem2 = document.createElement("DD");
	createNewListItem2.innerText = "This is new list item2";
	document.querySelector("#currentlist").append(createNewListItem2);

	let br = document.createElement("br");
	document.querySelector("#currentlist").append(br);
};
document.getElementById("btnNewlist").addEventListener("click", addNewList);

//spare
// const promptLoaded = () => {
// 	let userInput;
// 	let user = prompt("Please enter your name:", "");
// 	if (user == null || user == "") {
// 		userInput = "Your To Do List";
// 	} else {
// 		userInput = user + ": To Do List";
// 	}
// 	document.getElementById("username").innerHTML = userInput;
// };

// window.addEventListener("load", promptLoaded);

const dateInput = document.createElement("input");
dateInput.setAttribute("type", "date");
dateInput.setAttribute("value", "2022-01-01");
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
	let createNewListTitle = document.createElement("DT");
	let titleBox = document.createElement("input");
	titleBox.setAttribute("type", "checkbox");
	let titleBox2 = document.createElement("input");
	titleBox2.setAttribute("type", "text");
	titleBox2.setAttribute("placeholder", "Add Title Here");
	titleBox2.style.width = "600px";
	let titleBox3 = document.createElement("input");
	titleBox3.setAttribute("type", "button");
	titleBox3.setAttribute("id", "addnew");
	titleBox3.setAttribute("value", "+");

	createNewListTitle.append(titleBox, titleBox2, titleBox3);
	document.querySelector("#test1").append(createNewListTitle);

	let createNewListItem = document.createElement("DD");
	let taskBox1 = document.createElement("input");
	taskBox1.setAttribute("type", "checkbox");
	let taskBox2 = document.createElement("input");
	taskBox2.setAttribute("type", "text");
	taskBox2.setAttribute("placeholder", "Add Task Here");
	taskBox2.style.width = "800px";
	createNewListItem.append(taskBox1, taskBox2);
	createNewListTitle.appendChild(createNewListItem);

	let createNewListItem2 = document.createElement("DD");
	let taskBox3 = document.createElement("input");
	taskBox3.setAttribute("type", "checkbox");

	let taskBox4 = document.createElement("input");
	taskBox4.setAttribute("type", "text");
	taskBox4.setAttribute("placeholder", "Add Task Here");
	taskBox4.style.width = "800px";
	createNewListItem2.append(taskBox3, taskBox4);
	createNewListTitle.appendChild(createNewListItem2);

	let br = document.createElement("br");
	createNewListTitle.append(br);
};

document.getElementById("btnNewlist").addEventListener("click", addNewList);

const addNewItem = () => {
	let createNewDD = document.createElement("DD");

	let inputCheck = document.createElement("input");
	inputCheck.setAttribute("type", "checkbox");

	let inputText = document.createElement("input");
	inputText.setAttribute("type", "text");
	inputText.setAttribute("placeholder", "Add Task Here");
	inputText.style.width = "800px";

	createNewDD.append(inputCheck, inputText);
	document.querySelector("currentlist1").appendChild(createNewDD);
};

document.getElementById("addnew").addEventListener("click", addNewItem);

document.getElementById("btnNewItem").addEventListener("click", addNewItem);
