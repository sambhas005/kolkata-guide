const places = [
  { name: "Belur Math", address: "Belur, Howrah, West Bengal 711202",
    description: "The spiritual center of the Ramakrishna Mission, blending architectural styles.",
    map: "https://www.google.com/maps/dir/?api=1&destination=Belur+Math+Kolkata",
    img: "url('https://example.com/belur-math.jpg')" },

  { name: "Birla Mandir", address: "Asutosh Chatterjee Rd, Ballygunge, Kolkata, West Bengal 700019",
    description: "Marble temple with intricate carvings of Lord Laxminarayan.",
    map: "https://www.google.com/maps/dir/?api=1&destination=Birla+Mandir+Kolkata",
    img: "url('https://example.com/birla-mandir.jpg')" },

  { name: "Birla Planetarium", address: "JD Block, Sector III, Salt Lake City, Kolkata, West Bengal 700098",
    description: "One of Asia’s largest planetariums offering astronomy shows.",
    map: "https://www.google.com/maps/dir/?api=1&destination=Birla+Planetarium+Kolkata",
    img: "url('https://example.com/birla-planetarium.jpg')" },

  { name: "Botanical Gardens", address: "Shibpur, Howrah, West Bengal 711103",
    description: "Home to the Great Banyan Tree and thousands of plant species.",
    map: "https://www.google.com/maps/dir/?api=1&destination=Botanical+Gardens+Kolkata",
    img: "url('https://example.com/botanical-gardens.jpg')" },

  { name: "Cultural Assembly (Milan Mela Grounds)", address: "Science City Rd, Kolkata, West Bengal 700046",
    description: "Popular cultural festival venue and event space.",
    map: "https://www.google.com/maps/dir/?api=1&destination=Milan+Mela+Grounds+Kolkata",
    img: "url('https://example.com/milan-mela.jpg')" },

  { name: "College Street", address: "College Street, Kolkata, West Bengal 700073",
    description: "Famous for India’s largest second-hand book market.",
    map: "https://www.google.com/maps/dir/?api=1&destination=College+Street+Kolkata",
    img: "49783404491_b7aa613c53_b.jpg" },

  { name: "Dakshineswar Kali Temple", address: "Dakshineswar, Kolkata, West Bengal 700076",
    description: "22‑spired temple dedicated to Goddess Kali; spiritual hotspot.",
    map: "https://www.google.com/maps/dir/?api=1&destination=Dakshineswar+Kali+Temple+Kolkata",
    img: "url('https://example.com/dakshineswar.jpg')" },

  { name: "Eden Gardens", address: "Brabourne Rd, Maidan, Kolkata, West Bengal 700071",
    description: "Legendary cricket stadium known worldwide.",
    map: "https://www.google.com/maps/dir/?api=1&destination=Eden+Gardens+Kolkata",
    img: "url('https://example.com/eden-gardens.jpg')" },

  { name: "Fort William", address: "AJC Bose Rd, Hastings, Kolkata, West Bengal 700023",
    description: "British-era fortress, now Eastern Command HQ.",
    map: "https://www.google.com/maps/dir/?api=1&destination=Fort+William+Kolkata",
    img: "url('https://example.com/fort-william.jpg')" },

  { name: "Howrah Bridge", address: "Howrah Bridge, Hooghly River, Kolkata, West Bengal 700001",
    description: "Instant city landmark and engineering marvel.",
    map: "https://www.google.com/maps/dir/?api=1&destination=Howrah+Bridge+Kolkata",
    img: "url('https://example.com/howrah-bridge.jpg')" },

  { name: "Indian Museum", address: "27, Jawaharlal Nehru Rd, Park Street, Kolkata, West Bengal 700016",
    description: "India’s oldest and largest museum since 1814.",
    map: "https://www.google.com/maps/dir/?api=1&destination=Indian+Museum+Kolkata",
    img: "url('https://example.com/indian-museum.jpg')" },

  { name: "Jorasanko Thakur Bari", address: "60/4 Mahatma Gandhi Rd, Jorasanko, Kolkata, West Bengal 700007",
    description: "Birthplace of Rabindranath Tagore, now a museum.",
    map: "https://www.google.com/maps/dir/?api=1&destination=Jorasanko+Thakur+Bari+Kolkata",
    img: "url('https://example.com/jorasanko.jpg')" },

  { name: "Kalighat Temple", address: "Kalighat Rd, Kalighat, Kolkata, West Bengal 700026",
    description: "One of the 51 Shakti Peethas in India.",
    map: "https://www.google.com/maps/dir/?api=1&destination=Kalighat+Temple+Kolkata",
    img: "url('https://example.com/kalighat.jpg')" },

  { name: "Marble Palace", address: "46, Muktaram Babu St, Jorasanko, Kolkata, West Bengal 700007",
    description: "19th‑century mansion with marble interiors and art.",
    map: "https://www.google.com/maps/dir/?api=1&destination=Marble+Palace+Kolkata",
    img: "url('https://example.com/marble-palace.jpg')" },

  { name: "Mother House", address: "54A, AJC Bose Road, College Square, Kolkata, West Bengal 700014",
    description: "Final resting place of Mother Teresa.",
    map: "https://www.google.com/maps/dir/?api=1&destination=Mother+House+Kolkata",
    img: "url('https://example.com/mother-house.jpg')" },

  { name: "Nakhoda Mosque", address: "Joseph Chittaranjan Ave, Kolkata, West Bengal 700013",
    description: "Largest mosque in the city with beautiful architecture.",
    map: "https://www.google.com/maps/dir/?api=1&destination=Nakhoda+Mosque+Kolkata",
    img: "url('https://example.com/nakhoda-mosque.jpg')" },

  { name: "National Library", address: "Belvedere Road, Alipore, Kolkata, West Bengal 700027",
    description: "Houses over 2.2 million books and rare manuscripts.",
    map: "https://www.google.com/maps/dir/?api=1&destination=National+Library+Kolkata",
    img: "url('https://example.com/national-library.jpg')" },

  { name: "Park Street", address: "Park Street, Kolkata, West Bengal 700016",
    description: "Historic food and nightlife street with heritage ambience.",
    map: "https://www.google.com/maps/dir/?api=1&destination=Park+Street+Kolkata",
    img: "url('https://example.com/park-street.jpg')" },

  { name: "Prinsep Ghat", address: "Hastings, Kolkata, West Bengal 700021",
    description: "Riverside ghat with Palladian pavilion, great sunset views.",
    map: "https://www.google.com/maps/dir/?api=1&destination=Prinsep+Ghat+Kolkata",
    img: "url('https://example.com/prinsep-ghat.jpg')" },

  { name: "Rabindra Sarobar", address: "Southern Avenue, Kolkata, West Bengal 700029",
    description: "Serene lake and cultural hub for relaxation.",
    map: "https://www.google.com/maps/dir/?api=1&destination=Rabindra+Sarobar+Kolkata",
    img: "url('https://example.com/rabindra-sarobar.jpg')" },

  { name: "Rabindra Sadan", address: "Belvedere Road, Bhawanipur, Kolkata, West Bengal 700020",
    description: "Key venue for theatre, music & film festivals.",
    map: "https://www.google.com/maps/dir/?api=1&destination=Rabindra+Sadan+Kolkata",
    img: "url('https://example.com/rabindra-sadan.jpg')" },

  { name: "Science City", address: "JBS Haldane Ave, East Topsia, Kolkata, West Bengal 700046",
    description: "Interactive science exhibits and space shows.",
    map: "https://www.google.com/maps/dir/?api=1&destination=Science+City+Kolkata",
    img: "url('https://example.com/science-city.jpg')" },

  { name: "South Park Street Cemetery", address: "Park Street, Kolkata, West Bengal 700016",
    description: "18th‑century cemetery with heritage tombs and greenery.",
    map: "https://www.google.com/maps/dir/?api=1&destination=South+Park+Street+Cemetery+Kolkata",
    img: "url('https://example.com/park-street-cemetery.jpg')" },

  { name: "St. Paul's Cathedral", address: "Cathedral Rd, Kolkata, West Bengal 700071",
    description: "Gothic Revival cathedral, first Anglican cathedral in Asia.",
    map: "https://www.google.com/maps/dir/?api=1&destination=St.+Paul%27s+Cathedral+Kolkata",
    img: "url('https://example.com/st-pauls.jpg')" },

  { name: "Vidyasagar Setu", address: "Bally Bridge, Kolkata, West Bengal 700091",
    description: "Cable‑stayed bridge over the Hooghly River; modern architectural icon.",
    map: "https://www.google.com/maps/dir/?api=1&destination=Vidyasagar+Setu+Kolkata",
    img: "url('https://example.com/vidyasagar-setu.jpg')" },

  { name: "Victoria Memorial", address: "1, Queens Way, Maidan, Kolkata, West Bengal 700071",
    description: "Marble monument museum built in memory of Queen Victoria.",
    map: "https://www.google.com/maps/dir/?api=1&destination=Victoria+Memorial+Kolkata",
    img: "url('https://example.com/victoria-memorial.jpg')" }
];

const container = document.getElementById('places-container');

places.forEach(place => {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.backgroundImage = place.img;

  card.innerHTML = `
    <h2>${place.name}</h2>
    <p class="description">${place.description}</p>
    <p><strong>Address:</strong><br>${place.address}</p>
    <a class="map-link" href="${place.map}" target="_blank">📍 View on Google Maps</a>
  `;
  container.appendChild(card);
});
