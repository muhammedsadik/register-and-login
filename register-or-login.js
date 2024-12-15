const invalideOperation = "Invalid operation.";
const nameOrPasswordWrong = "User name or password wrong.";
const wellcome = "Wellcome To App";
const selection = "\nSELECT : \n\nRegister : 1\nLogin : 2\n\nLogout : İptal\n";
const register = "1";
const login = "2";
const str = "";
const nameMessage = "Name :";
const passwordMessage = "Password :";

let userName, userPassword, result, condition;
const users = [{ name: "ali", password: "alikova" }, { name: "ece", password: "ecekova" }];

while (true) {
  condition = prompt(selection);

  if (condition === null) {
    break;
  } else if (condition === register) {

    result = checkingRegister();

    if (!result) {
      continue;
    }

    users.push({ name: userName, password: userPassword });
    users.forEach(u => console.log(u.name, u.password));
  } else if (condition === login) {

    result = checkingLogin();

    if (!result) {
      continue;
    }

    alert(wellcome);
    break;

  } else {
    console.log(invalideOperation);
  }
}

function checkingRegister() {
  userName = prompt(nameMessage);

  if (users.some(n => n.name === userName)) {

    while (true) {
      userName = prompt(`${userName} has registered before.\n\nEnter different Name :`);

      if (users.some(n => n.name === userName)) {
        continue;
      }

      break;
    }
  }

  if (userName === null || userName.trim() === str) {
    alert(invalideOperation);
    return false;
  }

  userPassword = prompt(passwordMessage);

  if (userPassword === null || userPassword.trim() === str) {
    alert(invalideOperation);
    return false;
  }

  return true;
}

function checkingLogin() {
  userName = prompt(nameMessage);

  if (userName === null || userName.trim() === str) {
    alert(invalideOperation);
    return false;
  }

  userPassword = prompt(passwordMessage);

  if (userPassword === null || userPassword.trim() === str) {
    alert(invalideOperation);
    return false;
  }

  if (!(users.some(n => n.name === userName && n.password === userPassword))) {
    alert(nameOrPasswordWrong);
    return false;
  }

  return true;
}