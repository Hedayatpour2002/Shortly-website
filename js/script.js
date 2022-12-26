// font
tailwind.config = {
  theme: {
    fontFamily: {
      Poppins: ["Poppins"],
      Alata: ["Alata"],
    },
  },
};

// menu
var menu = document.getElementById("menu");
var menuIcon = document.getElementById("menu-icon");
function menuFun() {
  menuIcon.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}
//link
const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("error-message");

linkForm.addEventListener("submit", formSubmit);

// Validate a URL
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
}

function formSubmit(e) {
  e.preventDefault();

  if (input.value === "") {
    errMsg.innerHTML = "Please enter something";
    linkForm.classList.add("border-4");
  } else if (!validURL(input.value)) {
    errMsg.innerHTML = "Please enter a valid URL";
    linkForm.classList.add("border-4");
  } else {
    errMsg.innerHTML = "";
    linkForm.classList.remove("border-4");
    alert("Success");
  }
}
