const getDigimonUrl = `https://digimon-api.vercel.app/api/digimon` 
const digimonsList = document.getElementById('lisDigimons')
const searchBar = document.getElementById('searchBar');
let digimons = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredDigimons = digimons.filter((digimon) => {
        return (
            digimon.name.toLowerCase().includes(searchString) ||
            digimon.level.toLowerCase().includes(searchString)
        );
    });
    console.log(filteredDigimons)
    displayDigimons(filteredDigimons)
});


const loadDigimons = async () => {
    try{
        const response = await fetch(getDigimonUrl);
        digimons = await response.json();
        displayDigimons(digimons);
        console.log(digimons)
    }catch (error) {
        console.log(error)
    }
};

const displayDigimons = (digimons) => {
    const htmlString = digimons
        .map((digimon) => {
            return `
            <li class="card">
                <h2 class="card-title">${digimon.name}</h2>
                <p class="card-subtitle">${digimon.level}</p>  
                <img class="card-image" alt="${digimon.name}" src="${digimon.img}">
            </li>
        `;  
    })
    .join('');     
    digimonsList.innerHTML = htmlString
};

loadDigimons()