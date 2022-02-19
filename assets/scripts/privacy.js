toggleContent = (source, target) => {
    let termsContent = document.getElementById("terms"); //terms
    let privacyContent = document.getElementById("privacy"); //terms
  
    let siblings = source.parentNode.querySelectorAll("li");
    for (let item of siblings) {
      item.classList.remove("policy-navbar-color");
      item.classList.add("text-gray-600", "cursor-pointer");
    }
    source.classList.remove("text-gray-600", "cursor-pointer");
    source.classList.add("policy-navbar-color", );
    switch (target) {
      case 1:
          console.log(terms)

        termsContent.classList.remove("hidden");
        privacyContent.classList.add("hidden");
        break;
      case 2:
    
        termsContent.classList.add("hidden");
        privacyContent.classList.remove("hidden");
        break;
      
    }
  };