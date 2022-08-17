const popUpBox = document.querySelector("#pop-up-box");
const errorBox = document.querySelector("#error-box");
const resultBox = document.querySelector("#result-box");

setTimeout(() => {
  Notification.requestPermission((permission) => {
    console.log("Permission is ", permission);
    resultBox.innerHTML = `"${permission}"`;
  })
    .catch((error) => {
      console.log("Error====>", error);
      errorBox.innerHTML = `"${error}"`;
    })
    .finally(() => {
      console.log("Promise is resolved");
    });
}, 1000);
