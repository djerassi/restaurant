function conceptPage(){
    let contentDiv = document.querySelector("#content");
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("main-section");    
    let heading = document.createElement("h1");
    heading.innerText = "This is the concept page";
    heading.classList.add("concept-heading");
    let img = document.createElement("img");
    img.classList.add("concept-img");
    img.setAttribute("src", "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    let paragraph = document.createElement("p");
    paragraph.innerText = "Lorem ipsum";
    paragraph.classList.add("concept-paragraph")
    containerDiv.appendChild(heading);
    containerDiv.appendChild(img);
    containerDiv.appendChild(paragraph);
    contentDiv.appendChild(containerDiv);
};

export {conceptPage};