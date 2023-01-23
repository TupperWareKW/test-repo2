import UrlParser from "./routes/url-parser.js";
import routes from "./routes/routes.js";

async function renderPage() {
    const url = UrlParser.parseActiveWithCombiner();
    const page = routes[url];
    const body = document.querySelector('main');
    body.innerHTML = await page.render();
    await page.afterRender();
}

window.addEventListener('load', async () => {
    await renderPage();

    const menuButton = document.querySelector('.menu-button');   
    menuButton.addEventListener('click', () => {
        const menu = document.querySelector('.nav');
        menu.classList.toggle('open');
    })    


    const linkButton = document.querySelectorAll('.nav a');
    linkButton.forEach(el => {
        el.addEventListener('click', () => closeMenu())
    })
    document.querySelector('main').onclick = () => closeMenu();
    document.querySelector('#cuaca-page').onclick = () => closeMenu();
    function closeMenu() {
        const menu = document.querySelector('.nav');
        menu.classList.remove('open');
    }
    
});

window.addEventListener('hashchange', () => {
    renderPage();
})