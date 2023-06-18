function loadMenuPage(page) {
  const title = document.createElement('h1');
  title.textContent = 'Menu';
  title.classList.add('title');
  page.appendChild(title);

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('mainDiv');
  page.appendChild(menuContainer);

  const menu = document.createElement('ol');
  menu.classList.add('menu');

  for (let i = 0; i < 5; i++) {
    let menuItem = document.createElement('li');
    menuItem.textContent = `Menu item ${i+1}: ${((i + 1) % 4) * 5 + 2}$`;
    menuItem.classList.add('menuItem');
    menu.appendChild(menuItem);
  }

  menuContainer.appendChild(menu);
}

export { loadMenuPage };
