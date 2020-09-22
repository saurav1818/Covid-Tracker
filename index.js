let searchCountry = () => {
  let countryName = document.querySelector("#country-input").value;
  console.log(countryName);
  getCovidData(countryName);
};

let getCovidData = (country) => {
  const URL = "https://disease.sh/v3/covid-19/countries/";
  const FULLURL = `${URL}${country}`;

  let covidData = fetch(FULLURL);

  covidData
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      showData(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

let globalCovidData = () => {
  let globalData = fetch("https://disease.sh/v3/covid-19/all");

  globalData
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      showGlobalData(response);
    });
};

let showGlobalData = (globalData) => {
  document.querySelector("#confirmed-cases").innerText = globalData.cases;

  document.querySelector("#recovered-cases").innerText = globalData.recovered;

  document.querySelector("#deaths-cases").innerText = globalData.deaths;
};

let showData = (data) => {
  document.querySelector("#country-name").innerText = data.country;

  document.querySelector("#confirmed").innerText = data.cases;

  document.querySelector("#recovered").innerText = data.recovered;

  document.querySelector("#deaths").innerText = data.deaths;
};

globalCovidData();
