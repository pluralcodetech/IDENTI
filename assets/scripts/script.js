function toggleMenu(flag) {
  let value = document.getElementById("menu");
  if (flag) {
    value.classList.remove("hidden");
  } else {
    value.classList.add("hidden");
  }
}




// (async () => {
  // let response = await fetch(" http://country.io/phone.json"
//   , {
//     mode: 'no-cors',
//     method: "get",
//     headers: {
//       "Content-Type": "application/json"
//  },
  // }
  // )
  // let data = await response.json();
  // console.log(data);
// })();
