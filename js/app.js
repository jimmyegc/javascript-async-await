const app = document.getElementById("app");
const spinner = document.getElementById("spinner");
const cardGames = document.getElementById("games");
/* const getInfo = () => {
  spinner.style.visibility = "visible";
  fetch("data.json")
    .then((res) => {
      if (!res.ok) {
        throw { ok: false, message: "Error 404." };
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      setTimeout(() => {
        spinner.style.visibility = "hidden";
        console.log("finally");
      }, 2000);
    });
}; */

const loadGames = (games) => {
  games.forEach((game) => {
    console.log(game);
    cardGames.innerHTML += `
      <div 
        class="w-full p-2 bg-white border border-gray-200 max-w-sm rounded 
        overflow-hidden shadow-md hover:shadow-2xl">
        <img class="w-full" src="${game.image}">

        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">${game.name}</div>
          <p class="text-gray-700 text-base">            
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${game.year}</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${game.genre}</span>        
        </div>
               
      </div>
    `;
  });
};

const fakePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa resuelta!");
  }, 20);
});

const getGames = async () => {
  try {
    const hola = await fakePromise;
    console.log(hola);
    const res = await fetch("data.json");
    const data = await res.json();
    console.log(data);
    loadGames(data);
  } catch (err) {
    console.log(err);
  } finally {
    spinner.style.visibility = "hidden";
  }
};

//getInfo();
getGames();
