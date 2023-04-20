let LISTA = [];
let POKEMON = [];

$(function(){
    console.log("betoltodes után", LISTA);
    let vegpont = "adatok.json";
    AdatBe(vegpont,LISTA,megjelenit);
    console.log("Adatbe() metodus utan", LISTA);

    
    pokVegpont = "https://pokeapi.co/api/v2/pokemon/ditto";
    AdatBe(pokVegpont,POKEMON,pockemonMegjelenit);
    AdatTorol(vegpont,2);
});

function AdatTorol(vegpont,id){

    vegpont=vegpont + "/" + id
    console.log();
    fetch(vegpont, {
        method: "DELETE",
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.log(error))
}

//EZ EGY ASZINKRON MUKODES
//CSAK AKKOR KERÜLNEK A LISTÁBA AZ ADATOK HA MEGÉRKEZTEK AZ ADATOK A SZERVERRŐL!
function AdatBe(vegpont,lista,callbackFV){
    //promisse
    fetch(vegpont, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log(data);
            lista = data;
            callbackFV(lista);
            console.log("fetch adatbeolvasas utan", lista);
        })
        .catch((error) => console.log(error))
}

function megjelenit(lista){
    console.log("megjelenit",lista);
}

function pockemonMegjelenit(adat){
    console.log(adat);
    //pokemon képének elérési útja
    console.log(adat.sprites.front_default)
    let eleresiUt = adat.sprites.front_default;
    console.log(eleresiUt);
    let pokemonNev = adat.name;
    const pokeObj = {
        eleresiUt:eleresiUt, // elérésiUt = adat.sprites.front_default
        pokemonNev:pokemonNev, // pokemonNev = adat.name
    };
    const pokDiv = $(".pokemon");
    const text = `<h1>${pokeObj.pokemonNev}</h1>
                    <div class="kep">
                    <img src="${eleresiUt} alt="${pokeObj.pokemonNev}">
                    </div>`
    pokDiv.html(text);
}