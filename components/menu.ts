import { html } from "@hono/hono/html";

const Menu = html`
    <div id="menu">
        <ul id="menu-ul">
            <div id="">
            </div>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/gift-cards">Gift Cards</a></li>
            <li><a href="tel:804-424-2607">(804) 424-2607</a></li>
            <li>Anthony@carytownmassage.com</li>
            <li>3316 West Cary St, StylePod, Unit 104/109</li>
            <li>Richmond, Virginia 23221</li>
        </ul>
    </div>
`;

export default Menu;
