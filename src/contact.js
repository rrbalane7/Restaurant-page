function createContact(){
    const container = document.createElement("div");
    container.classList.add("center-cont");
    container.style.marginTop = "10em";


    const contactInfoCont = document.createElement("div");
    const contactHeader = document.createElement("h2")
    contactHeader.classList.add("contact-header");
    contactHeader.textContent = "For Inquiries and reservations,  feel free to contact us:";

    const contactList = document.createElement("ul");
    contactList.classList.add("contact-list");

    contactList.appendChild(createContactItem("smartphone-svgrepo-com.svg","+63-279590951"));
    contactList.appendChild(createContactItem("phone-svgrepo-com.svg","006-795-027"));
    contactList.appendChild(createContactItem("email-svgrepo-com.svg","fancyram@hotmail.com"));

    contactInfoCont.appendChild(contactHeader);
    contactInfoCont.appendChild(contactList)

    container.appendChild(contactInfoCont);
    
    const footer = document.querySelector("footer");
    footer.style.position = "fixed";
    footer.style.bottom = "0%";
    footer.style.width = "100vw";

    return container

}

function createContactItem(imageSource, contact){
    const lItem = document.createElement("li");
    lItem.classList.add("contact-item");
    const contactIcon = document.createElement("img");
    contactIcon.classList.add("contact-icon")
    contactIcon.src = imageSource;
    contactIcon.alt = `contact-icon`;
    const info = document.createElement("p");
    info.textContent = contact;

    lItem.appendChild(contactIcon);
    lItem.appendChild(info)

    return lItem
}

function loadContact(){
    const main = document.querySelector("#main");
    main.textContent = "";
    main.appendChild(createContact());

}

export default loadContact