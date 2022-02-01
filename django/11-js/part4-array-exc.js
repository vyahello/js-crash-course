let roster = [];

function addNew() {
  let newName = prompt("What namw to add?");
  roster.push(newName);
}

function remove() {
  let remName = prompt("What name to remove?");
  let index = roster.indexOf(remName);
  roster.splice(index, 1);
}

function display() {
  roster.forEach(function (el) {
    console.log(el);
  });
}

var start = prompt("Would you like to start the roster web app? y/n");
var request = "empty";

if (start === "y") {
  while (request !== "quit") {
    request = prompt("Please select an action: add, remove, display, or quit.");
    if (request === "add") {
      addNew();
    } else if (request === "display") {
      display();
    } else if (request == "remove") {
      remove();
    }
  }
}
