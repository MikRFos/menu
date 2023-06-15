function loadMainPage(contentBox) {
  const webTitle = document.createElement('h1');
  webTitle.textContent = 'My Restaurant';
  webTitle.classList.add('title');

  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('mainDiv');
  contentBox.appendChild(descriptionDiv);
  const descTitle = document.createElement('h3');
  descTitle.textContent = 'Description';
  descTitle.classList.add('subtitle');
  descriptionDiv.appendChild(descTitle);
  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = 'This is my restaurants web page.\
  It is a really good restaurant you really should buy all the food';
  descriptionDiv.appendChild(description);

  const hoursDiv = document.createElement('div');
  hoursDiv.classList.add('mainDiv');
  const hoursTitle = document.createElement('h3');
  hoursTitle.textContent = 'Hours:';
  hoursDiv.appendChild(hoursTitle);
  const hours = document.createElement('div');

  const sundayHours = document.createElement('p');
  sundayHours.textContent = 'Sunday: 12pm - 10pm';
  sundayHours.classList.add('hoursList');
  hours.appendChild(sundayHours);
  const mondayHours = document.createElement('p');
  mondayHours.textContent = 'Monday: 11am - 11pm';
  mondayHours.classList.add('hoursList');
  hours.appendChild(mondayHours);
  const tuesdayHours = document.createElement('p');
  tuesdayHours.textContent = 'Tuesday: 11am - 11pm';
  tuesdayHours.classList.add('hoursList');
  hours.appendChild(tuesdayHours);
  const wednesdayHours = document.createElement('p');
  wednesdayHours.textContent = 'Wednesday: 11am - 11pm';
  wednesdayHours.classList.add('hoursList');
  hours.appendChild(wednesdayHours);
  const thursdayHours = document.createElement('p');
  thursdayHours.textContent = 'Thursday: 11am - 11pm';
  thursdayHours.classList.add('hoursList');
  hours.appendChild(thursdayHours);
  const fridayHours = document.createElement('p');
  fridayHours.textContent = 'Friday: 11am - 11pm';
  fridayHours.classList.add('hoursList');
  hours.appendChild(fridayHours);
  const saturdayHours = document.createElement('p');
  saturdayHours.textContent = 'Saturday: 11am - 11pm';
  saturdayHours.classList.add('hoursList');

  hours.appendChild(saturdayHours);
  hoursDiv.appendChild(hours);
  contentBox.appendChild(hoursDiv);

  const locationDiv = document.createElement('div');
  const locationTitle = document.createElement('h3');
  locationTitle.textContent = 'Location:';
  locationDiv.appendChild(locationTitle);
  const location = document.createElement('p');
  location.textContent = '123 smith way, city, State';
  locationDiv.appendChild(location);
  contentBox.appendChild(locationDiv);


}

export { loadMainPage };
