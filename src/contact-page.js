function loadContactPage(page) { 
  const title = document.createElement('h1');
  title.textContent = 'Contact Us';
  title.classList.add('title');
  page.appendChild(title);

  const contactsContainer = document.createElement('div');
  contactsContainer.classList.add('mainDiv');
  page.appendChild(contactsContainer);

  const name = document.createElement('p');
  name.textContent = 'My Name';
  name.classList.add('contactText');
  contactsContainer.appendChild(name);

  const address = document.createElement('p');
  address.textContent = '123 smith way, city, State';
  address.classList.add('contactText');
  contactsContainer.appendChild(address);

  const email = document.createElement('p');
  email.textContent = 'fakeemail@fake.email';
  email.classList.add('contactText');
  contactsContainer.appendChild(email);

  const phone = document.createElement('p');
  phone.textContent = '123-456-6789';
  phone.classList.add('contactText');
  contactsContainer.appendChild(phone);

}

export {loadContactPage};