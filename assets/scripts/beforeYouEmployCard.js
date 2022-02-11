const beforeYouEmployCard = document.querySelector("#beforeYouEmploy-card");

// Destructure from data.js
const { aboutUs } = dataFile;

const reUseBYECard = (docArea, uniqueId, image, description) => {
  docArea.innerHTML += `
        <div class="p-10 reUseBYECard " id=${uniqueId}>
            <h5 class="break-words leading-relaxed text-sm">${description}</h5>
            <img src=${image} class="mt-6 " alt="reUseBYE Icon">
        </div>
    `;
};

aboutUs &&
  aboutUs.map(({ id, image, description }) => {
    return reUseBYECard(beforeYouEmployCard, id, image, description);
  });
