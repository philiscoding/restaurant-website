
const menuLoad = (() => {
  
    const makeContent = () => {
        const body = document.querySelector("body");
        const content = document.createElement("div");
        content.classList.add("content");
        body.appendChild(content);
        return {
            content,
        }
    }
    const makeNav = () => {

        const body = document.querySelector("body");
        const landingSection = document.createElement("section");
        const nav = document.createElement("nav");
        const wrapperDiv = document.createElement("div");
        const div = document.createElement("div");
        const brandText = document.createElement("p");
        const ul = document.createElement("ul");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        const button = document.createElement("button");

        body.appendChild(landingSection);
        landingSection.appendChild(nav);

        nav.appendChild(wrapperDiv);
        wrapperDiv.appendChild(div);
        wrapperDiv.appendChild(ul);
        wrapperDiv.appendChild(button);
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        div.appendChild(brandText);

        landingSection.classList.add("landing-section");
        brandText.classList.add("brand-text");

        brandText.innerHTML = "Tasty World";
        li1.innerHTML = "Home";
        li2.innerHTML = "Menu";
        li3.innerHTML = "Contact";
        li1.classList.add("home");
        li2.classList.add("menu");
        li3.classList.add("contact");
        button.innerHTML = "Registration";

    }
    const makeMenu = () => {
        const content = document.querySelector(".content");
        const cardContainer = document.createElement("div");
        const foodList = ["Pizza", "Cake", "Noodles", "Hot Dogs", "Burgers", "Bratwurst", "Fried Chicken", "Burritos"];

        //Creates cards
        for (let i = 0; i < 8; i++) {

            const card = document.createElement("div");
            const h2 = document.createElement("h2");
            const p = document.createElement("p");
            const img = document.createElement("img");

            cardContainer.appendChild(card);
            card.appendChild(h2);
            card.appendChild(p);
            card.appendChild(img);

            h2.innerHTML = foodList[i];
            p.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, temporibus.";
            img.src = "images/" + (i + 1) + ".png";
            card.classList.add("card");


        }

        cardContainer.classList.add("card-container");
        content.appendChild(cardContainer);

    }

    return {
        makeContent,
        makeNav,
        makeMenu,
    }

})();
export {
    menuLoad
}