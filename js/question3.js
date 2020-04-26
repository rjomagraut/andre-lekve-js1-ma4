const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const name = params.get('name');

const url = 'https://api.rawg.io/api/games/4200';
const corsEnabledUrl = 'https://noroffcors.herokuapp.com/' + url;

async function createGameDetails() {
  const heading = document.querySelector('h1');

  try {
    const response = await fetch(corsEnabledUrl);
    const details = await response.json();
    console.log('details', details);

    heading.innerHTML = details.name;
    Image.innerText = details.name;
    const replaceImage = document.querySelector('.image');
    replaceImage.src =
      'https://media.rawg.io/media/screenshots/9a9/9a995e75aba0f9ce01a341f506fc4e13.jpg';
    replaceImage.style = details.background_image;
    console.log(replaceImage.src);
    const description = document.querySelector('.description');
    description.innerHTML = details.description;
  } catch (error) {
    heading.innerHTML = 'An error occured';
    console.log(error);
  }
}

createGameDetails();
