OUTPUT = document.getElementById("output")

async function music(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd128131b33msh2d7517b075673cfp176ac2jsn7c6a97484ac2',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    
    data = await fetch('https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5', options);

    result = await data.json();

    const n = result.albums.items.length;
    console.log(result)
    for(let i = 0; i < n; i++){
        let line = document.createElement("h1");
        let lineDisplay = document.createTextNode(result.albums.items[i].data.artists.items[0].profile.name);
        line.appendChild(lineDisplay);
        OUTPUT.appendChild(line)
    }
}

async function music1(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd128131b33msh2d7517b075673cfp176ac2jsn7c6a97484ac2',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    
    data = await fetch('https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5', options);

    result = await data.json();

    list = result.albums.items

    console.log(result)
    console.log(list)

    list.forEach(element => {
        innerString = ""
        let imgURL = element.data.coverArt.sources[1].url
        let name = element.data.artists.items[0].profile.name
        let music = element.data.name
        innerString += `
            <div class="box">
                <h1 style=" color: #3C1642;">${name}</h1>
                <h4>${music}</h4>
                <img src="${imgURL}" >
            </div>
        `
        OUTPUT.innerHTML += innerString
    });
}

music1()




