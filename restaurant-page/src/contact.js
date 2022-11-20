import {
    menuLoad
} from "./menu";


const contactLoad = (() => {

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
    const makeHeadingSection = () => {
        const content = document.querySelector(".content");
        const contactDiv = document.createElement("div");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");

        content.appendChild(contactDiv);
        contactDiv.appendChild(h1);
        contactDiv.appendChild(p);

        h1.innerHTML = "Contact Us";
        p.innerHTML = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architectoeaque ipsa quae ab illo inventore."
        contactDiv.classList.add("contact-div");
    }

    const makeForm = () => {
        const content = document.querySelector(".content");
        const form = document.createElement("form");
        const p = document.createElement("p");
        const name = document.createElement("input");
        const email = document.createElement("input");
        const number = document.createElement("input");
        const subject = document.createElement("input");
        const message = document.createElement("input");
        const send = document.createElement("button");

        content.appendChild(form);
        form.appendChild(p);
        form.appendChild(name);
        form.appendChild(email);
        form.appendChild(number);
        form.appendChild(subject);
        form.appendChild(message);
        form.appendChild(send);

        name.setAttribute("type", "text");
        email.setAttribute("type", "email");
        number.setAttribute("type", "text");
        subject.setAttribute("type", "text");
        message.setAttribute("type", "textarea");

        name.placeholder = "Name";
        email.placeholder = "Email Adress";
        number.placeholder = "Phone Number";
        subject.placeholder = "Subject";
        message.placeholder = "Message";
        p.innerHTML = "CONTACT";
        send.innerHTML = "SEND";
        form.classList.add("contact-form");

    }
    const makeBottomSection = () => {
        //HOURS OF OPERATION
        const content = document.querySelector(".content");
        const bottomContainer = document.createElement("div");
        const operationDiv = document.createElement("div");
        const h2 = document.createElement("h2");
        const div1 = document.createElement("div");
        const div1p1 = document.createElement("p");
        const div1p2 = document.createElement("p");
        const div1p3 = document.createElement("p");
        const div2 = document.createElement("div");
        const div2p = document.createElement("p");
        const div2p2 = document.createElement("p");
        const div3 = document.createElement("div");
        const div3p = document.createElement("p");
        const div3p2 = document.createElement("p");
        const button = document.createElement("button");

        content.appendChild(bottomContainer);
        bottomContainer.appendChild(operationDiv);
        operationDiv.appendChild(h2);
        operationDiv.appendChild(div1)
        operationDiv.appendChild(div2);
        operationDiv.appendChild(div3);
        operationDiv.appendChild(button);

        div1.appendChild(div1p1);
        div1.appendChild(div1p2);
        div1.appendChild(div1p3);
        div2.appendChild(div2p);
        div2.appendChild(div2p2);
        div3.appendChild(div3p);
        div3.appendChild(div3p2);
        div3.appendChild(div3p);
        div3.appendChild(div3p2);

        h2.innerHTML = "Hours of Operation";
        div1p1.innerHTML = "MON-FRI";
        div1p2.innerHTML = "10:00am - 1:00pm";
        div1p3.innerHTML = "4:00pm -10:30pm";
        div2p.innerHTML = "SAT";
        div2p2.innerHTML = "3:00pm - 10:30pm";
        div3p.innerHTML = "SUN";
        div3p2.innerHTML = "We are closed";
        button.innerHTML = "MAKE A RESERVATION";
        operationDiv.classList.add("operation-div");

        //NEWSLETTER
        const newsLetterDiv = document.createElement("div");
        const upperDiv = document.createElement("div");
        const upperh2 = document.createElement("h2");
        const upperP = document.createElement("p");
        const upperBtn = document.createElement("button");
        const lowerDiv = document.createElement("div");
        const lowerLeftDiv = document.createElement("div");
        const lowerH2 = document.createElement("h2");
        const lowerP = document.createElement("p");
        const lowerRightDiv = document.createElement("div");
        const form = document.createElement("form");
        const name = document.createElement("input");
        const lastName = document.createElement("input");
        const email = document.createElement("input");
        const lowerBtn = document.createElement("button");

        bottomContainer.appendChild(newsLetterDiv);
        newsLetterDiv.appendChild(upperDiv);
        newsLetterDiv.append(lowerDiv);
        lowerDiv.appendChild(lowerLeftDiv)
        lowerDiv.appendChild(lowerRightDiv);
        upperDiv.appendChild(upperh2);
        upperDiv.appendChild(upperP);
        upperDiv.appendChild(upperBtn);
        lowerLeftDiv.appendChild(lowerH2);
        lowerLeftDiv.appendChild(lowerP);
        lowerRightDiv.appendChild(form);
        form.appendChild(name);
        form.appendChild(lastName);
        form.appendChild(email);
        form.appendChild(lowerBtn);

        upperh2.innerHTML = "Drop Us a Line";
        upperP.innerHTML = "Don't be shy. Let us know if you have any questions!";
        upperBtn.innerHTML = "CONTACT US";

        lowerH2.innerHTML = "Our Newsletter";
        lowerP.innerHTML = "Dialogue is an essential part of any script";
        name.placeholder = "First Name";
        lastName.placeholder = "Last Name";
        email.placeholder = "Email Adress";
        lowerBtn.innerHTML = "SIGN UP";
        bottomContainer.classList.add("bottom-container");
        newsLetterDiv.classList.add("newsletter-div");
        upperDiv.classList.add("upper-div");
        lowerDiv.classList.add("lower-div");
        lowerLeftDiv.classList.add("lower-left-div");
        lowerRightDiv.classList.add("lower-right-div");

    }


    return {
        makeContent,
        makeNav,
        makeHeadingSection,
        makeForm,
        makeBottomSection,
    }
})();

export {
    contactLoad,
}