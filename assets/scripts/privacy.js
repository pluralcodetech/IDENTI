

toggleContent = (source, target) => {
    let termsContent = document.getElementById("terms"); //terms
    let privacyContent = document.getElementById("privacy"); //terms
    let nav_list = document.getElementById("nav_list");
    let nav_list_1 = document.getElementById("nav_list_1");

    let siblings = source.parentNode.querySelectorAll("li");
    for (let item of siblings) {
      item.classList.remove("policy-navbar-color");
      item.classList.add("text-gray-600", "cursor-pointer");
    }
    source.classList.remove("text-gray-600", "cursor-pointer");
    source.classList.add("policy-navbar-color", );
    switch (target) {
      case 1:
        privacyContent.classList.remove("hidden");
        termsContent.classList.add("hidden");
        nav_list.classList.add("policy-navbar-color");
        nav_list_1.classList.remove("policy-navbar-color");
        break;
      case 2:
        privacyContent.classList.add("hidden");
        termsContent.classList.remove("hidden");
        
        break;
    }
  };