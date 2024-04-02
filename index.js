
import data_Cities from './data_Cites.JSON' with { type: 'json' };

function fillCitiesSelect() {
    var cityOptionDataHTML = "";
    for (var key in data_Cities) {
        cityOptionDataHTML += `<option value="${key}">${data_Cities[key].name}</option>`;
    }
    document.querySelector("#selectCity").innerHTML = cityOptionDataHTML;
}

function onChangeCity() {
    var cityName = document.querySelector("#selectCity").value;
    console.log(`you chose ${cityName}`);
    var cityData = data_Cities[cityName];
    document.querySelector("#cityImg").setAttribute("src", cityData.imageURL);
    document.querySelector("#cityDescription").innerHTML = cityData.description;

    var images = eval(`data_Cities.${cityName}.images`);
    var imagesHTML = "";
    for (var i = 0; i < images.length; i++) {
        imagesHTML += `<img src=${images[i]}>`;
    }
    document.querySelector("#cityGallery").innerHTML = imagesHTML;
}

document.querySelector('#selectCity').addEventListener('change', onChangeCity);
fillCitiesSelect();
onChangeCity();
