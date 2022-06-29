const fetchDigimon = () => {


const getDigimonUrl = `https://digimon-api.vercel.app/api/digimon`


    fetch(getDigimonUrl)
        .then(response => response.json())
        .then(digimons => {
            const listDigimons = digimons.reduce((acc, digimon) => {
                acc += `
                    <li class="card">
                        <h2 class="card-title">${digimon.name}</h2>
                        <p class="card-subtitle">${digimon.level}</p>  
                        <img class="card-image" alt="${digimon.name}" src="${digimon.img}">
                    </li>`
                return acc
            }, '');

            const ul = document.querySelector('[data-js="digidex"]')

            ul.innerHTML = listDigimons
        }) 
        
}


fetchDigimon()