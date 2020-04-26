const gamesUrl = 'https://api.rawg.io/api/games';
const corsEnabledUrl = 'https://noroffcors.herokuapp.com/' + gamesUrl;

async function createGames() {
  try {
    const response = await fetch(corsEnabledUrl);

    const games = await response.json();

    gameResults(games.results);
  } catch (error) {
    console.log(error);
  }
}
createGames();

function gameResults(games) {
  console.log(games);
  console.log(games.results);

  const gamesContainer = document.querySelector('.results');

  let html = '';

  for (let i = 0; i < games.length; i++) {
    if (!games[i].name) {
      continue;
    }
    console.log(games[i].name);

    let nameOfGame = 'Unavailable';
    if (games[i].background_image !== '-') {
      nameOfGame = games[i].name;
    }
    html += `<div class="game">
                <h2>${games[i].name}</h2>
                <img src="${games[i].background_image}" alt="${games[i].name}" />
            </div>`;
  }

  gamesContainer.innerHTML = html;
}
