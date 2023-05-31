"use strict";

const nav = document.querySelector("ul");
const scrollBtn = document.querySelector(".button");
const portfolio = document.getElementById("portfolio");
const allSections = document.querySelectorAll("section");
const menuIcon = document.querySelector(".fa-bars");
const largeScreen = window.matchMedia("(min-width: 960px)");


const openMenu = function () {
	if (nav.style.display === "block") {
		nav.style.display = "none";
	} else {
		nav.style.display = "block";
	}
};

const normalLinks = function () {
	if (largeScreen.matches) {
		nav.style.display = "flex";
	} else {
		nav.style.display = "none";
	}
};

largeScreen.addEventListener("change", normalLinks);

menuIcon.addEventListener("click", openMenu);

const handleHover = function (e) {
	if (e.target.classList.contains("nav-link")) {
		const link = e.target;
		const siblings = link.closest("ul").querySelectorAll(".nav-link");

		siblings.forEach(el => {
			if (el !== link) el.style.opacity = this;
		});
	}
};

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

scrollBtn.addEventListener("click", function (e) {
	portfolio.scrollIntoView({behavior : "smooth"});
});

normalLinks();