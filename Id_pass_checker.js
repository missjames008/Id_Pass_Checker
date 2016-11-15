

var userId = "Florence";
var password = "2chain$";

// User Id Checker idCheck
// !userId === password;
// userId.length >= 6;
// !userId.includes("!") && !userId.includes("#") && !userId.includes("$");

function idCheck(str){
  return str != password && str.length >= 6 && !str.includes("!") && !str.includes("#") && !str.includes("$");
};


// Password Checker passCheck
// !password === userId;
// password.length >= 6;
// password.includes("!") || password.includes("#") || password.includes("$");
// !password === "password";


function passCheck(str){
  return str != userId && str.length >= 6 && (str.includes("!") || str.includes("#") || str.includes ("$")) && str != "password!" && str.includes(integer) ;
};

// ( str.includes("0") || str.includes("1") || str.includes("2") || str.includes("3") || str.includes("4") || str.includes("5") || str.includes("6") || str.includes("7") || str.includes("8") || str.includes("9"))


// Both Checker bothCheck
// runs checks on both userId and password

function bothCheck(userId, password) {
  return idCheck(userId) && passCheck(password);
}

//Create user prompt

userId = prompt("Please enter a username. Must be at least 6 characters, cannot contain characters !#$");
password = prompt("Please enter a password. Must be at least 6 characters, must contain either !#$, cannot be the same as username");

//Create overall function

function getInfo() {
  var userId = prompt("Please enter a username. Must be at least 6 characters, cannot contain characters !#$");
  var password = prompt("Please enter a password. Must be at least 6 characters, must contain either !#$, cannot be the same as username");
  alert("Dog bless you: " + bothCheck(userId, password));
}

//Credit Card Verification

function cardVar(num){
  return num.length = 16 && num.charAt(14) * 2;
}
