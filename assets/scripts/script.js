function toggleMenu(flag) {
  let value = document.getElementById("menu");
  if (flag) {
    value.classList.remove("hidden");
  } else {
    value.classList.add("hidden");
  }
}


// Tab handler starts
toggleContent = (source, target) => {
  // let exploreContent = document.getElementById("explore"); //home
  // let businessContent = document.getElementById("business"); //aboutUs
  // let techContent = document.getElementById("tech"); // contactUs
  // let lifestyleContent = document.getElementById("lifestyle"); //terms
  let homeContent = document.getElementById("home"); //home
  let aboutUsContent = document.getElementById("aboutUs"); //aboutUs
  let contactUsContent = document.getElementById("contactUs"); // contactUs
  let termsContent = document.getElementById("terms"); //terms
  let privacyContent = document.getElementById("privacy"); //terms

  let siblings = source.parentNode.querySelectorAll("li");
  for (let item of siblings) {
    item.classList.remove("custom-navbar-color");
    item.classList.add("text-gray-600", "cursor-pointer");
  }
  source.classList.remove("text-gray-600", "cursor-pointer");
  source.classList.add("custom-navbar-color");
  switch (target) {
    case 1:
      homeContent.classList.remove("hidden");
      aboutUsContent.classList.add("hidden");
      contactUsContent.classList.add("hidden");
      termsContent.classList.add("hidden");
      privacyContent.classList.add("hidden");
      break;
    case 2:
      homeContent.classList.add("hidden");
      aboutUsContent.classList.remove("hidden");
      contactUsContent.classList.add("hidden");
      termsContent.classList.add("hidden");
      privacyContent.classList.add("hidden");
      break;
    case 3:
      homeContent.classList.add("hidden");
      aboutUsContent.classList.add("hidden");
      contactUsContent.classList.remove("hidden");
      termsContent.classList.add("hidden");
      privacyContent.classList.add("hidden");

      break;
    case 4:
      homeContent.classList.add("hidden");
      aboutUsContent.classList.add("hidden");
      contactUsContent.classList.add("hidden");
      termsContent.classList.remove("hidden");
      privacyContent.classList.add("hidden");
      break;
    case 5:
      homeContent.classList.add("hidden");
      aboutUsContent.classList.add("hidden");
      contactUsContent.classList.add("hidden");
      termsContent.classList.add("hidden");
      privacyContent.classList.remove("hidden");
      break;
  }
};


// Country code api


(async () => {
  let response = await fetch(" http://country.io/phone.json"
//   , {
//     mode: 'no-cors',
//     method: "get",
//     headers: {
//       "Content-Type": "application/json"
//  },
  // }
  )
  // let data = await response.json();
  // console.log(data);
})();
