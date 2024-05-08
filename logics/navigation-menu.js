const humburger_logo = document.querySelector(".sm-humburger-logo");

const navigation_links = document.querySelector(".navigation-links");
let expand = false;

humburger_logo.addEventListener("click", (e) => {
  e.preventDefault();
  navigation_links.style.transition = "ease-in-out 200ms";
  if (expand) {
    navigation_links.style.height = "207px";
  } else {
    navigation_links.style.height = "0px";
  }
  expand = !expand;
});
