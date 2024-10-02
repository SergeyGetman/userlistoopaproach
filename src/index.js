import UserApp from "./methods";


document.addEventListener("DOMContentLoaded", () => {
  const app = new UserApp((filteredUsers) => {
  
    document.getElementById("app").innerHTML = filteredUsers
        .map((user) => user.createCard())
        .join("");
});

app.init();
});
