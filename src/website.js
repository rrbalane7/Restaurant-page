import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";



function createNav (){
    const menuBar = document.createElement("nav");
    menuBar.classList.add("menu-bar");
    const navList = document.createElement("ul");
    navList.classList.add("nav-list")

    navList.appendChild(createNavItem("#", "Home"));
    navList.appendChild(createNavItem("#", "Menu"));
    navList.appendChild(createNavItem("#", "Contact"));

    menuBar.appendChild(navList);


    return menuBar

}

function switchPage(e){
    switch (e.target.textContent) {
        case "Home":
            loadHome();
            break;

        case "Menu":
            loadMenu();
            break;    
    
        default:
            loadContact();
            break;
    }
}

function createNavItem(sourceLink, navTitle){
    const lItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = sourceLink;
    link.textContent = navTitle;
    lItem.appendChild(link);

    return lItem
}

function createMain(){
    const main = document.createElement("div");
    main.setAttribute("id","main");

    return main
}

function createFooter(){
    const footer = document.createElement("footer")
    const someText = document.createElement("p")
    someText.innerHTML = "&copy RRB 2022 The Odin Project";

    footer.appendChild(someText);

    return footer;
}

function startWebsite(){
    const body = document.querySelector("#content")

    body.appendChild(createNav());
    body.appendChild(createMain());
    body.appendChild(createFooter());

    const ul = document.querySelectorAll("li");
    ul.forEach(li => {
        li.addEventListener("click", switchPage)
    });

    loadHome();
}

export default startWebsite
