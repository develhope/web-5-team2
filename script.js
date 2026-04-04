const svgVideoPlay = `<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M12 7L0 14L6.1196e-07 0L12 7Z" fill="currentColor"></path>
                        </svg>`;
const svgVideoPause = `<svg
							width="12"
							height="14"
							viewBox="0 0 12 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path d="M0 0H4V14H0V0Z" fill="currentColor"></path>
							<path d="M8 0H12V14H8V0Z" fill="currentColor"></path>
						</svg>`;

const videoGrejsimojs = document.getElementById("grejsimojs_video");
const btnGrejsimojs = document.getElementById("grejsimojs_btn");

btnGrejsimojs.addEventListener("click", () => {
	if (videoGrejsimojs.paused) {
		videoGrejsimojs.play();
		btnGrejsimojs.innerHTML = svgVideoPause;
	} else {
		videoGrejsimojs.pause();
		btnGrejsimojs.innerHTML = svgVideoPlay;
	}
});

const videoPantry = document.getElementById("pantry_video");
const btnPantry = document.getElementById("pantry_btn");

btnPantry.addEventListener("click", () => {
	if (videoPantry.paused) {
		videoPantry.play();
		btnPantry.innerHTML = svgVideoPause;
	} else {
		videoPantry.pause();
		btnPantry.innerHTML = svgVideoPlay;
	}
});

const videoTalents = document.getElementById("talents_video");
const btnTalents = document.getElementById("talents_btn");

btnTalents.addEventListener("click", () => {
	if (videoTalents.paused) {
		videoTalents.play();
		btnTalents.innerHTML = svgVideoPause;
	} else {
		videoTalents.pause();
		btnTalents.innerHTML = svgVideoPlay;
	}
});

const videoFolklotic = document.getElementById("folklotic_video");
const btnFolklotic = document.getElementById("folklotic_btn");

btnFolklotic.addEventListener("click", () => {
	if (videoFolklotic.paused) {
		videoFolklotic.play();
		btnFolklotic.innerHTML = svgVideoPause;
	} else {
		videoFolklotic.pause();
		btnFolklotic.innerHTML = svgVideoPlay;
	}
});

const videoYearbook = document.getElementById("yearbook_video");
const btnYearbook = document.getElementById("yearbook_btn");

btnYearbook.addEventListener("click", () => {
	if (videoYearbook.paused) {
		videoYearbook.play();
		btnYearbook.innerHTML = svgVideoPause;
	} else {
		videoYearbook.pause();
		btnYearbook.innerHTML = svgVideoPlay;
	}
});

const videoStorage = document.getElementById("storage_video");
const btnStorage = document.getElementById("storage_btn");

btnStorage.addEventListener("click", () => {
	if (videoStorage.paused) {
		videoStorage.play();
		btnStorage.innerHTML = svgVideoPause;
	} else {
		videoStorage.pause();
		btnStorage.innerHTML = svgVideoPlay;
	}
});

const videoMealtime = document.getElementById("mealtime_video");
const btnMealtime = document.getElementById("mealtime_btn");

btnMealtime.addEventListener("click", () => {
	if (videoMealtime.paused) {
		videoMealtime.play();
		btnMealtime.innerHTML = svgVideoPause;
	} else {
		videoMealtime.pause();
		btnMealtime.innerHTML = svgVideoPlay;
	}
});

const videoSandlopare = document.getElementById("sandlopare_video");
const btnSandlopare = document.getElementById("sandlopare_btn");

btnSandlopare.addEventListener("click", () => {
	if (videoSandlopare.paused) {
		videoSandlopare.play();
		btnSandlopare.innerHTML = svgVideoPause;
	} else {
		videoSandlopare.pause();
		btnSandlopare.innerHTML = svgVideoPlay;
	}
});

const videoIvar = document.getElementById("ivar_video");
const btnIvar = document.getElementById("ivar_btn");

btnIvar.addEventListener("click", () => {
	if (videoIvar.paused) {
		videoIvar.play();
		btnIvar.innerHTML = svgVideoPause;
	} else {
		videoIvar.pause();
		btnIvar.innerHTML = svgVideoPlay;
	}
});

const videoKitchen = document.getElementById("kitchen_video");
const btnKitchen = document.getElementById("kitchen_btn");

btnKitchen.addEventListener("click", () => {
	if (videoKitchen.paused) {
		videoKitchen.play();
		btnKitchen.innerHTML = svgVideoPause;
	} else {
		videoKitchen.pause();
		btnKitchen.innerHTML = svgVideoPlay;
	}
});

const videoCoworker = document.getElementById("coworker_video");
const btnCoworker = document.getElementById("coworker_btn");

btnCoworker.addEventListener("click", () => {
	if (videoCoworker.paused) {
		videoCoworker.play();
		btnCoworker.innerHTML = svgVideoPause;
	} else {
		videoCoworker.pause();
		btnCoworker.innerHTML = svgVideoPlay;
	}
});

const videoSchool = document.getElementById("school_video");
const btnSchool = document.getElementById("school_btn");

btnSchool.addEventListener("click", () => {
	if (videoSchool.paused) {
		videoSchool.play();
		btnSchool.innerHTML = svgVideoPause;
	} else {
		videoSchool.pause();
		btnSchool.innerHTML = svgVideoPlay;
	}
});

const videoWardrobe = document.getElementById("wardrobe_video");
const btnWardrobe = document.getElementById("wardrobe_btn");

btnWardrobe.addEventListener("click", () => {
	if (videoWardrobe.paused) {
		videoWardrobe.play();
		btnWardrobe.innerHTML = svgVideoPause;
	} else {
		videoWardrobe.pause();
		btnWardrobe.innerHTML = svgVideoPlay;
	}
});
