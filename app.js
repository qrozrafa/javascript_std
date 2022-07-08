//referencias do DOM
const form = document.querySelector('#form');
const searchInput = document.querySelector('#search');
const songsContainer = document.querySelector('#songs-container');
const prevAndNextContainer = document.querySelector('#prev-and-next-container');

const getURL = `https://api.lyrics.ovh`;

//Manipulando o restante da informação
const getMoreSongs = async url => {
    const response =  await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
    const data = await response.json();

    insertSongsIntoPage(data);
}

//Manipulando a informação
const insertSongsIntoPage = songsInfo => {
    songsContainer.innerHTML = songsInfo.data.map(song => `
        <li class="song">
            <span class="song-artist"><strong>${song.artist.name}</strong> - ${song.title}</span>
            <button class="btn" data-artist="${song.artist.name}" data-song-title="${song.title}">Ver letra</button>
        </li>
    `).join('');

    if (songsInfo.prev || songsInfo.next) {
        prevAndNextContainer.innerHTML = `
            ${songsInfo.prev ? `<button class="btn" onClick="getMoreSongs('${songsInfo.prev}')">Anteriores</button>` : '' }
            ${songsInfo.next ? `<button class="btn" onClick="getMoreSongs('${songsInfo.next}')">Próximas</button>` : '' }
        `
        return
    };

    prevAndNextContainer.innerHTML = '';
}

//carregando API em JSON
const fetchSongs = async term => {
    const response =  await fetch(`${getURL}/suggest/${term}`);
    const data = await response.json();

    insertSongsIntoPage(data);
};

form.addEventListener('submit', e => {
    e.preventDefault();

    //recebendo a referencia da string do input
    const searchTerm = searchInput.value.trim();

    //verificando se a string recebida é vazia
    if (!searchTerm) {
        songsContainer.innerHTML = `<li class="warning-message">Por favor, digite um termo válido</li>`
        return
    };

    fetchSongs(searchTerm)
});

//carregando a API com as letras recebida dos parametros abaixo
const fetchLyrics = async (artist, songTitle) => {
    const response =  await fetch(`${getURL}/v1/${artist}/${songTitle}`);
    const data = await response.json(); 
    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>')
    
    songsContainer.innerHTML = `
        <li class="lyrics-container">
            <h2><strong>${songTitle}</strong> - ${artist}</h2>
            <p class="lyrics">${lyrics}</p>
        </li>
    `
}

//pegando o valor do button "ver letras" e fazendo requisição para API
songsContainer.addEventListener('click', e => {
    const clickedElement = e.target;

    if (clickedElement.tagName === 'BUTTON') {
        const artist = clickedElement.getAttribute('data-artist');
        const songTitle = clickedElement.getAttribute('data-song-title');
        
        prevAndNextContainer.innerHTML = '';
        fetchLyrics(artist,songTitle);
    }
})