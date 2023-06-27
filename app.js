const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close");
const menuButtonIcon = document.querySelector(".menu-button i");
const list = document.querySelector("ul");
const listIcons = Array.from(document.querySelectorAll("li i"));

menuButton.addEventListener("click", () => {
	menuButtonIcon.classList.add("rotate");
	menuButtonIcon.classList.remove("rotateReversed");
	list.removeAttribute("id", "invisible");
	listIcons.forEach((icon) => {
		icon.removeAttribute("id", "invisible");
	});

	setTimeout(() => {
		menuButton.classList.add("z-index-shift");
	}, 500);
});

closeButton.addEventListener("click", () => {
	menuButton.removeAttribute("id", "invisible");
	menuButton.classList.remove("z-index-shift");
	menuButtonIcon.classList.remove("rotate");

	list.setAttribute("id", "invisible");

	listIcons.forEach((icon) => {
		icon.setAttribute("id", "invisible");
	});
});
