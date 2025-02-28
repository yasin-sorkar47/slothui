const faqItems = document.querySelectorAll(".faq-item");
const image = document.getElementById("image");
const activeItem1 = document.getElementById("activeItem1");
const activeItem2 = document.getElementById("activeItem2");
const activeItem = document.getElementById("activeItem");
const mobileRes = document.getElementById("mobile");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const toggle = question.querySelector(".faq-toggle");

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    // I'll make everything fucking collapse.
    faqItems.forEach((el) => {
      el.classList.remove("active");
      el.querySelector(".faq-toggle").innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;
    });

    // If it's not open, I'll activate one.
    if (!isOpen) {
      item.classList.add("active");
      toggle.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 15L12 9L18 15" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;
    } else {
      toggle.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;
    }
  });
});

// handle image
const handleImage = () => {
  activeItem1.classList.remove("active");
  activeItem2.classList.remove("active");
  activeItem.classList.add("active");
  image.innerHTML = `
    <img src="./assets/images/graph.webp" alt="image" />
  `;
};

const handleImage1 = () => {
  activeItem.classList.remove("active");
  activeItem2.classList.remove("active");
  activeItem1.classList.add("active");
  image.innerHTML = `
     <img src="./assets/images/phone.png" alt="image" />
  `;
};

const handleImage2 = () => {
  activeItem.classList.remove("active");
  activeItem1.classList.remove("active");
  activeItem2.classList.add("active");
  image.innerHTML = `
     <img src="./assets/images/graph1.webp" alt="image" />
  `;
};

// for mobile
const handleMobileButton = () => {
  if (mobileRes.classList.contains("isNone")) {
    mobileRes.classList.remove("isNone");
    mobileRes.classList.add("isBlock");
  } else {
    mobileRes.classList.remove("isBlock");
    mobileRes.classList.add("isNone");
  }
};
