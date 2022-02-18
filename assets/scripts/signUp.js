const country_code = document.querySelector('.country_code');

const { countryCodeJson } = dataFile;


const options = (docArea, index, value) => {
    docArea.innerHTML += `
        <option key="${index}" value="${Object.values(value).toString()}"> ${Object.keys(value).toString()} ${Object.values(value).toString()}</option>
    `;
}

countryCodeJson && countryCodeJson.map((item, index) => options(country_code, index, item))