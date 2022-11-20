const pageLoad = (() => {


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
    const makeLandingSection = () => {

        const content = document.querySelector(".content");
        const landingSection = document.createElement("section");
        const headingWrapper = document.createElement("div");
        const h1 = document.createElement("h1");
        const button2 = document.createElement("button");
        const span = document.createElement("span");
        const img = document.createElement("img");

        content.appendChild(landingSection);

        landingSection.appendChild(headingWrapper);


        headingWrapper.appendChild(h1);
        headingWrapper.appendChild(button2);
        button2.appendChild(span);
        landingSection.appendChild(img);

        landingSection.classList.add("landing-section");

        headingWrapper.classList.add("heading-wrapper");

        img.src = "images/food-plate1.png";

        h1.innerHTML = "We will deliver what the chef has planned";
        button2.innerHTML = "Choose food";
    }

    const makeMidSection = () => {
        const content = document.querySelector(".content");
        const midSection = document.createElement("section");
        const h2 = document.createElement("h2");
        const carousel = document.createElement("div");
        const burgerDiv = document.createElement("div");
        const pizzaDiv = document.createElement("div");
        const cakeDiv = document.createElement("div");
        const burgerImg = document.createElement("img");
        const pizzaImg = document.createElement("img");
        const cakeImg = document.createElement("img");
        const burgerP = document.createElement("p");
        const pizzaP = document.createElement("p");
        const cakeP = document.createElement("p");

        content.appendChild(midSection);
        midSection.appendChild(h2);
        midSection.appendChild(carousel);
        carousel.appendChild(burgerDiv);
        carousel.appendChild(pizzaDiv)
        carousel.appendChild(cakeDiv);
        burgerDiv.appendChild(burgerImg);
        burgerDiv.appendChild(burgerP);
        pizzaDiv.appendChild(pizzaImg);
        pizzaDiv.appendChild(pizzaP);
        cakeDiv.appendChild(cakeImg);
        cakeDiv.appendChild(cakeP);

        midSection.classList.add("mid-section");
        carousel.classList.add("carousel");

        burgerImg.src = "images/001-burger.png"
        pizzaImg.src = "images/002-pizza.png"
        cakeImg.src = "images/003-cake.png"

        h2.innerHTML = "Week top categories";
        burgerP.innerHTML = "Fast food";
        pizzaP.innerHTML = "Pizza";
        cakeP.innerHTML = "Dessert";
    }

    const makeFooter = () => {
        const content = document.querySelector(".content");
        const footer = document.createElement("footer");
        const footerWrapper = document.createElement("div");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        const button = document.createElement("button");
        const span = document.createElement("span");

        content.appendChild(footer);
        footer.appendChild(footerWrapper);
        footerWrapper.appendChild(h2);
        footerWrapper.appendChild(p);
        footerWrapper.appendChild(button);
        button.appendChild(span);

        footerWrapper.classList.add("footer-wrapper");

        h2.innerHTML = "Welcome here!";
        p.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio perferendis veritatis quis tenetur facere voluptas.";
        button.innerHTML = "About us";
        span.innerHTML = ">";

    }
    return {
        makeContent,
        makeNav,
        makeLandingSection,
        makeMidSection,
        makeFooter,

    }
})();

export {
    pageLoad,

};