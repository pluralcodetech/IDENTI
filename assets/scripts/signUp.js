const country_code = document.querySelector('.country_code');

const { countryCodeJson } = dataFile;
console.log(countryCodeJson.NG);

const options = (docArea, index, value) => {
    docArea.innerHTML += `
       <option key="${index}" value="${value}"> ${index} ${value}</option>
    `;
};

for(let char in countryCodeJson){
    options(country_code, char, countryCodeJson[char])
}