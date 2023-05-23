// items
const instrument = [
  {
    id: 1,
    title: "Enya EGA-Q1 PRO",
    category: "acoustic",
    price: 519.99,
    img: "./assets/img/item-1.webp",
    desc: `Enya Q1 Pro guitar features a premium solid sitka spruce top on a body made of Indian laminate rosewood. The combination produces a strong, balanced voice with tight, focused bass and crisp mids and highs. Other features include a slim and smooth-playing mahogany neck, radius richlite fretboard, mother-of-pearl rosette and Enya AcousticPlus® pickup.`,
  },
  {
    id: 2,
    title: "Gibson Hummingbird",
    category: "acoustic",
    price: 3499.0,
    img: "./assets/img/item-2.png",
    desc: `The unmistakable Gibson Hummingbird™ is followed by the masses as one of the most remarkable acoustic guitars ever built. The new Hummingbird Faded blends vintage appointments and today's modern, high-quality build construction. The Hummingbird Faded is outfitted with gold Gotoh® Keystone tuners, a traditional Hummingbird truss rod cover, and a bone nut and saddle.`,
  },
  {
    id: 3,
    title: " Gibson Slash Signed 1958 Les Paul Standard 'Brazilian Dream'",
    category: "electric",
    price: 12999.0,
    img: "./assets/img/item-3.jpg",
    desc: `This very special instrument is the result of a collaboration between Slash and the skilled artisans at Gibson Custom Shop to create the ultimate Les Paul Standard. It's based on Slash’s favourite Historic specifications and appointments, including a genuine solid Brazilian rosewood fingerboard. The coveted sonic and visual appeal of this species of rosewood.`,
  },
  {
    id: 4,
    title: "Ibanez TOD10 Tim Henson Signature Electric Guitar",
    category: "electric",
    price: 1499.99,
    img: "./assets/img/item-4.png",
    desc: `Polyphia's Tim Henson has wowed audiences with his idiosyncratic style of technical shredding since the band's earliest independently released EPs dropped in the early 2010s. Fittingly, the Ibanez TOD10 Tim Henson Signature is a high-performance solidbody electric guitar with custom tweaks and appointments tailor-made for fleet-fingered fretboard gymnastics.`,
  },
  {
    id: 5,
    title: "LIMITED EDITION PLAYER PLUS STRATOCASTER® HSS",
    category: "electric",
    price: 1329.99,
    img: "./assets/img/item-5.jpg",
    desc: `Fusing classic Fender design with player-centric features and exciting new finishes, the Player Plus Stratocaster HSS delivers superb playability and unmistakable style. The powerful Player Plus humbucking pickup delivers the perfect balance of gain and definition, while the Player Plus Noiseless Strat® pickups are bright and touch sensitive.`,
  },
  {
    id: 6,
    title: "ENYA M6 SOLID MAHOGANY UKULELE",
    category: "ukulele",
    price: 239.99,
    img: "./assets/img/item-6.webp",
    desc: `The M6 Solid Mahogany Ukulele is identical to our traditional Mahogany Ukulele except for its finish. It's distinguished by an exquisite hi-gloss finish with subtle black highlights. Mahogany construction makes this uke durable yet lightweight, with a well-balanced and moderate tone. The M6 features a solid top, back, and sides & upgraded tuners.`,
  },
  {
    id: 7,
    title: "Gibson Thunderbird Bass",
    category: "bass",
    price: 2299.0,
    img: "./assets/img/item-7.jpg",
    desc: `The Gibson Thunderbird has the classic reverse body and headstock design as originally introduced in 1963 as Gibson's first neck-through-body bass design. The traditional 9-ply mahogany/walnut neck through body construction provides a thundering low end response and a piano like sustain. The narrow nut width and rounded neck profile neck feels both fast and intuitive.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayInstrumentItem(instrument);
});

// filter items
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    const instrumentCategory = instrument.filter(function (instrumentItem) {
      if (instrumentItem.category === category) {
        return instrumentItem;
      }
    });
    if (category === "all") {
      displayInstrumentItem(instrument);
    } else {
      displayInstrumentItem(instrumentCategory);
    }
  });
});

function displayInstrumentItem(instrumentItem) {
  let displayInstrument = instrumentItem.map(function (item) {
    return ` <article class="instrument-item">
                 <img src= ${item.img} class="photo" alt="" />
                 <div class="item-info">
                <header>
                 <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
                 </header>
                <p class="item-text">
                ${item.desc}
                </p>
                </div>
                </article>`;
  });
  displayInstrument = displayInstrument.join("");
  sectionCenter.innerHTML = displayInstrument;
}
