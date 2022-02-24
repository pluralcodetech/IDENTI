const country_code = document.querySelector('.country_code');
const country_code2 = document.querySelector('.country_code2');

const { countryCodeJson } = dataFile;


const options = (docArea, index, value) => {
    docArea.innerHTML += `
       <option key="${index}" value="${value}"> ${index} ${value}</option>
    `;
};

for(let char in countryCodeJson){
    options(country_code, char, countryCodeJson[char])
    options(country_code2, char, countryCodeJson[char])
}