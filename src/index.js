import {landingPage} from "./pageload";
import {aboutPage} from "./about_page";
import {conceptPage} from "./concept";
import "./styles.css";

let contentDiv = document.querySelector("#content");
let containerDiv = document.createElement("div");
// Initial div
containerDiv.classList.add("tabs")

// Concept Buttons
let homeBtn = document.createElement("button");
homeBtn.classList.add("home-btn")
homeBtn.textContent = "Home Button";
let aboutBtn = document.createElement("button");
aboutBtn.classList.add("about-btn");
aboutBtn.textContent = "About Button";
let conceptBtn = document.createElement("button");
conceptBtn.classList.add("concept-btn");
conceptBtn.textContent = "Concept Button";

[homeBtn, aboutBtn, conceptBtn].forEach((button, idx) => containerDiv.appendChild(button));
contentDiv.appendChild(containerDiv);
landingPage();

[homeBtn, aboutBtn, conceptBtn].forEach(function (button, idx){
    button.addEventListener("click", (e) => {
        let mainSection = document.querySelector(".main-section");
        deleteContent(mainSection);
        if (e.target.classList.contains("home-btn")){
            landingPage();
        } else if (e.target.classList.contains("about-btn")) {
            aboutPage();
        } else if (e.target.classList.contains("concept-btn")) {
            conceptPage();
        };
    });
});

function deleteContent(targetDiv) {
    targetDiv.parentNode.removeChild(targetDiv);
};

