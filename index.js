let flags = [
  {
    name: "Indian Flag in 1947",
    des: "When India got independence, a committee headed by Rajendra Prasad was formed to select the National Flag of India. The committee decided to adopt the flag of Indian National Congress, with suitable modifications, as the flag of independent India. As a result, the flag of 1931 was adopted as Indian flag but 'Charkha' in the middle was replaced by 'Chakra' (wheel) and hence our National Flag came into being.",
    image: "images/flag7.png",
  },
  {
    name: "Indian Flag in 1931",
    des: "Some people were not happy with the communal interpretation of the flag. Keeping this in view, a new flag was designed which replaced red with ochre. This colour signified the combined spirit of both religions as saffron was the colour of Hindu yogis as well as Muslim darvesh. But the Sikh community also demanded a separate representation in the flag or the complete abandonment of religious colours. This resulted in another flag by Pingali Venkayya. This new flag had three colours. Saffron was at the top followed by white in the middle and green at the bottom. The 'Charkha' was placed at the center.",
    image: "images/flag6.png",
  },
  {
    name: "Indian Flag in 1921",
    des: "As Mahatma Gandhi wanted all the communities of India to be represented in the flag of the nation, a new flag was designed. This flag had three colours. At the top was white than green and at the bottom was red. White symbolised minority communities of India, green Muslims, and the red represented Hindu and Sikh communities. The 'Charkha' was drawn across all the bands symbolising the unification of these communities. The pattern of this flag was based on the flag of Ireland, another nation which was struggling to get its independence from Britain.",
    image: "images/flag5.png",
  },
  {
    name: "Indian Flag in 1917",
    des: "The Home Rule League formed by Bal Gangadhar Tilak adopted a new flag in 1917, as at that time the Dominion status was being demanded for India. The flag had the Union Jack at the top, near the hoist. The rest of the flag contained five red and four blue strips. It had seven stars on it in the shape of 'Saptarishi' constellation which is supposed to be the sacred one for Hindus. It also had a crescent moon and a star at the top fly end. This flag did not gain popularity among the masses.",
    image: "images/flag4.png",
  },
  {
    name: "Indian Flag in 1907",
    des: "In 1907 came the Madam Bhikaji Rustom Cama's flag. The flag was collectively designed by Madam Bhikaji Cama, Vinayak Damodar Savarkar (Veer Savarkar) and Shyamji Krishna Varma. The flag was unfurled by Madam Cama on 22 August 1907 at Stuttgrat, Germany, and attained the status of the first Indian flag to be hoisted in a foreign land. From this event onwards it was also referred to as 'Berlin Committee flag'. The flag consisted of three colours- the topmost being green followed by golden saffron in the middle and the red colour at the bottom",
    image: "images/flag3.png",
  },

  {
    name: "Indian Flag in 1906",
    des: "This flag was designed in 1906. It was a tricolour with three equal strips of blue (top), yellow (middle) and red (lower). In this flag, the blue strip had eight stars of slightly different shapes. The red strip had two symbols, one of sun and the other of a star and a crescent. The yellow strip had 'Vande Mataram' written on it in Devnagiri script In the same year, another version of the Indian flag was created. It was also tricolour but its colours were different. It had orange, yellow and green and came to be known as 'Calcutta flag' or 'Lotus flag', as it had eight half open lotuses on it. It is believed to be have been designed by Sachindra Prasad Bose and Sukumar Mitra.",

    image: "images/flag2.png",
  },
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; //track the current slide

const createSlide = () => {
  if (slideIndex >= flags.length) {
    slideIndex = 0;
  }

  //create DOM Elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(flags[slideIndex].name));
  p.appendChild(document.createTextNode(flags[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up images
  imgElement.src = flags[slideIndex].image;
  slideIndex++;

  //setting element classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "flag-title";
  p.className = "flag-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 4000);

/*expanding cards*/

const element = document.querySelectorAll(".pic");

element.forEach((pic) => {
  pic.addEventListener("click", () => {
    removeActive();
    pic.classList.add("active");
  });
});
function removeActive() {
  element.forEach((pic) => {
    pic.classList.remove("active");
  });
}

/*fighter list*/
let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});


/*loader*/
var loader= document.getElementById("preloader");
window.addEventListener("click", function() {
    loader.style.display = "none";
})
