const country_code = document.querySelector('.country_code');
const country_code2 = document.querySelector('.country_code2');

const { countryCodeJson } = dataFile;


const options = (docArea, index, value) => {
    docArea.innerHTML += `
        <option key="${index}" value="${Object.values(value).toString()}"> ${Object.keys(value).toString()} ${Object.values(value).toString()}</option>
    `;
}

countryCodeJson && countryCodeJson.map((item, index) => options(country_code, index, item));
countryCodeJson && countryCodeJson.map((item, index) => options(country_code2, index, item));