const menuButton = document.querySelector(".menu-button");
const rudderMenu = document.querySelector(".rudder-menu");
const closeButton = document.querySelector(".close");
const menuButtonIcon = document.querySelector(".menu-button i");
const list = document.querySelector("ul");

menuButton.addEventListener("click", () => {
	menuButtonIcon.classList.add("rotate");
	rudderMenu.classList.remove("invisible");
	rudderMenu.classList.add("visible");
	setTimeout(() => {
		list.classList.remove("invisible");
		list.classList.add("visible");
		menuButton.classList.add("invisible");
	}, 500);
});
