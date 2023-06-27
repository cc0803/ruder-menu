const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close");
const menuButtonIcon = document.querySelector(".menu-button i");
const list = document.querySelector("ul");
const listIcons = Array.from(document.querySelectorAll("li i"));

menuButton.addEventListener("click", () => {
	menuButtonIcon.classList.add("rotate");
	list.removeAttribute("id", "invisible");
	listIcons.forEach((icon) => {
		icon.removeAttribute("id", "invisible");
	});
	setTimeout(() => {
		menuButton.setAttribute("id", "invisible");
	}, 500);
});

closeButton.addEventListener("click", () => {});
