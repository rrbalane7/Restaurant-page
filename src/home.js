function createHome(){
    const container = document.createElement("div");
    container.classList.add("center-cont")

    const brandCont = document.createElement("div");
    brandCont.classList.add("brand-name-logo");
    const brandLogo = document.createElement("img");
    const brandName = document.createElement("h1");
    brandName.textContent = "FANCY RAM SANDWICHES";
    brandLogo.src = "/media/sandwich-svgrepo-com.svg";
    brandLogo.alt = "brand-logo";
    brandLogo.setAttribute("draggable","false")
    brandCont.appendChild(brandLogo);
    brandCont.appendChild(brandName);
   

    const infoCont = document.createElement("div");
    infoCont.classList.add("resto-info");
    const infoTitle = document.createElement("h1");
    infoTitle.textContent = "🟢🟡🔴 We're here 🟢🟢🟢";
    const infoDesc = document.createElement("p");
    infoDesc.textContent = "The small resto is undoubtedly one of the most outstanding and magnificent food establishments in the town. Characterized by the quiet atmosphere, its light-colored interior and its elegant, glamorous decor, it was once a cafe before turning into a restaurant with many qualities of the former.";
    infoCont.appendChild(infoTitle);
    infoCont.appendChild(infoDesc);
    

    const schedCont = document.createElement("div");
    schedCont.classList.add("store-schedule");
    const schedTitle = document.createElement("h1");
    schedTitle.textContent = "Store Hours 🕦";
    const schedLine1 = document.createElement("p");
    schedLine1.innerHTML = `<strong>Monday to Friday: </strong>9:00am - 9:00pm`;
    const schedLine2 = document.createElement("p");
    schedLine2.innerHTML = `<strong>Saturday: </strong>11:00am - 7:00pm`;
    schedCont.appendChild(schedTitle);
    schedCont.appendChild(schedLine1);
    schedCont.appendChild(schedLine2);

    const addressCont = document.createElement("div");
    addressCont.classList.add("address-info");
    const addressTitle = document.createElement("h1");
    addressTitle.textContent = "Address";
    const address = document.createElement("p");
    address.textContent = "🏠 H74H+865, Pili-Corre Road, Pili, Camarines Sur";
    addressCont.appendChild(addressTitle);
    addressCont.appendChild(address);
    
    container.appendChild(brandCont);
    container.appendChild(infoCont);
    container.appendChild(schedCont);
    container.appendChild(addressCont);

    const footer = document.querySelector("footer");
    footer.style.position = "relative";
    footer.style.bottom = "";
    footer.style.width = "";

    return container;

}

function loadHome(){
    const main = document.querySelector("#main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome