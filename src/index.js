import { loadMainPage } from "./main-page";
console.log('hello');
const page = document.getElementById('content');

const tabDiv = document.createElement('div');
tabDiv.classList.add('tabs');

const contentDiv = document.createElement('div');


const homeButton = document.createElement('button');
homeButton.textContent = 'Home';
homeButton.addEventListener('click', () => {
  contentDiv.textContent = '';
  loadMainPage(contentDiv);
});
homeButton.classList.add('navButton');
const menuButton = document.createElement('button');
menuButton.textContent = 'Menu';
menuButton.classList.add('navButton');
const contactButton = document.createElement('button');
contactButton.textContent = 'Contact Us';
contactButton.classList.add('navButton');

tabDiv.appendChild(homeButton);
tabDiv.appendChild(menuButton);
tabDiv.appendChild(contactButton);

page.appendChild(tabDiv);
page.appendChild(contentDiv);
