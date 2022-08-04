function createMenu(){
    const container = document.createElement("div");
    container.classList.add("center-cont");

    const menuTitleCont = document.createElement("div");
    menuTitleCont.classList.add("menu-title-cont");
    const title = document.createElement("h1");
    title.textContent = "BEST SELLERS!!!👌";
    menuTitleCont.appendChild(title);

    const galleryCont = document.createElement("ul");
    galleryCont.classList.add("menu-list")

    galleryCont.appendChild(createFoodItem("/media/Grilled Chicken Sandwich.jpg","Grilled Chicken Sandwich","$20"));
    galleryCont.appendChild(createFoodItem("/media/grilled ham and cheese sandwich.jpg","Grilled Ham & Cheese","$12"));
    galleryCont.appendChild(createFoodItem("/media/Tuna Sandwich.jpg","Tuna Sandwich","$15"));
    galleryCont.appendChild(createFoodItem("/media/Grilled PB&J.jpg","Grilled Peanut Butter & Jelly Sandwich","$15"));

    container.appendChild(menuTitleCont)
    container.appendChild(galleryCont);

    const footer = document.querySelector("footer");
    footer.style.position = "relative";
    footer.style.bottom = "";
    footer.style.width = "";

    return container;

}

function createFoodItem(imageSource, name, price){
    const list = document.createElement("li");
    const foodImage = document.createElement("img");
    foodImage.classList.add("food-img")
    foodImage.src = imageSource;
    foodImage.alt = `image-${name}`
    foodImage.setAttribute("draggable","false")
    const foodInfoCont = document.createElement("div");
    foodInfoCont.classList.add("food-item-cont");
    const foodName = document.createElement("h3");
    foodName.textContent = name;
    const foodPrice = document.createElement("p");
    foodPrice.textContent = price;

    foodInfoCont.appendChild(foodName);
    foodInfoCont.appendChild(foodPrice);

    list.appendChild(foodImage);
    list.appendChild(foodInfoCont);

    return list


}

function loadMenu(){
    const main = document.querySelector("#main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu