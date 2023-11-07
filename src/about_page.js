function aboutPage(){
    let contentDiv = document.querySelector("#content");
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("main-section");
    let heading = document.createElement("h1");
    heading.innerText = "This is the about page";
    heading.classList.add("about-heading");
    let img = document.createElement("img");
    img.classList.add("about-img");
    img.setAttribute("src", "https://plus.unsplash.com/premium_photo-1686090448301-4c453ee74718?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    let paragraph = document.createElement("p");
    paragraph.innerText = "Lorem ipsum";
    paragraph.classList.add("about-paragraph")
    containerDiv.appendChild(heading);
    containerDiv.appendChild(img);
    containerDiv.appendChild(paragraph);
    contentDiv.appendChild(containerDiv);
};

export {aboutPage};