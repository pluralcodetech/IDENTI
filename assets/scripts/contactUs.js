const country_code = document.querySelector('.country_code');

const { countryCodeJson } = dataFile;
console.log(countryCodeJson.NG);

// Loader Component
const loader = (docArea) => {
    docArea.innerHTML = `
    <div class=" flex justify-center w-full">
        <div class="flex flex-row rounded-xl space-x-2 shadow-2xl p-4 items-center w-auto">
            <div class=" animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-400"></div>
            <small class="text-midnightblue">Please wait...</small>
        </div>
    </div>  
`;
}

// Modal Component
const modal = (docArea, error, message) => {
    docArea.innerHTML = `
    <div class="w-full md:w-2/6 bg-white shadow-lg z-50 mt-20 md:mt-10 mx-auto rounded-lg overflow-hidden">
        <div class="p-4 flex space-x-4 flex-col text-center items-center">
            <div class="mt-4">
                <h1 class="text-xl font-semibold tracking-wide text-red-700 block">
                    ${
                        error ? message : message
                    }
                </h1>
 
            </div>
        </div>
        <div class="p-4 text-right md:space-x-4 flex  md:flex-row flex-col-reverse">
            <button onclick="cancelModal()" class="flex-1 px-4 md:py-1.5 py-2 bg-white border-2 rounded-lg focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-blue-800 hover:bg-gray-50">
                Cancel
            </button>
            
        </div>
    </div>
    `;
}

const options = (docArea, index, value) => {
    docArea.innerHTML += `
       <option key="${index}" value="${value}"> ${index} ${value}</option>
    `;
};

for(let char in countryCodeJson){
    options(country_code, char, countryCodeJson[char])
};


// Api section
const full_name = document.querySelector('#full_name');
const email_address = document.querySelector("#email");
const countryCode = document.querySelector("#countryCode");
const phone_number = document.querySelector("#phone_number");
const messageArea = document.querySelector("#message");
const submit_btn = document.querySelector("#submit_btn");
const modal_containerSection = document.querySelector('#modal-container');

let storeCountryCode = {
    store: ''
}

let {store} = storeCountryCode

const handleChange = (e) => {
    store = e.target.value
};

const getValues = (e) => {
    e.preventDefault();

    let name = full_name.value
    let email = email_address.value
    let countryCode = store
    let phoneNumber = phone_number.value
    let message = messageArea.value
    let subject = "Inquiry on Identtii"

    api(name, email, countryCode, phoneNumber, message, subject);
};

const api =  async (name, email, countryCode, phoneNumber, message, subject) => {
     // Loader Component
     loader(modal_containerSection);

    try {
        let response = await fetch(`http://162.241.159.59:9090/v1/user/contact-us`, {
        headers: {
            "content-type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify({
            "name": name,
            "email": email,
            "countryCode": countryCode,
            "phoneNumber": phoneNumber,
            "message": message,
            "subject": subject
        }),
        
        })
        handleErrors(response);
    } catch (error) {
        console.log(error);
    }
}

const handleErrors = (response) => {
    if (!response.ok) {
        modal(modal_containerSection, true, "Message not sent successfully");
      throw new Error(response.statusText);
      
    }
    modal(modal_containerSection, false, "Message sent successfully");
    return response;
};



submit_btn.addEventListener("click", getValues);
countryCode.addEventListener("change", handleChange);

