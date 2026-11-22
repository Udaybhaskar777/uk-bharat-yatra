export const TEMPLES_DATA = [
  {
    id: "tirumala",
    name: "Sri Venkateswara Swamy Temple",
    location: "Tirupati, Andhra Pradesh",
    region: "South",
    deity: "Vishnu",
    coords: { x: 43, y: 76 },
    builtBy: "Pallavas, Cholas & Krishnadevaraya (300 CE – 16th Century)",
    architecture: "Dravidian Architecture (Ananda Nilayam Vimana)",
    timings: "02:30 AM – 01:30 AM (Next Day)",
    nearestStation: { name: "Tirupati Main", code: "TPTY", distance: "22 km" },
    avgBudgetPerDay: 850,
    history:
      "Situated on the seventh peak (Venkatadri) of the Seshachalam Hills, Tirumala is the richest and most visited Hindu pilgrimage center in the world. Patronized heavily by the Pallavas, Cholas, and Vijayanagara Emperor Sri Krishnadevaraya, who donated priceless jewels.",
    stays: [
      { name: "TTD Srinivasam Complex", type: "TTD Trust", price: "₹200 - ₹600", distance: "0.5 km from TPTY Station" },
      { name: "TTD Madhavam Rest House", type: "TTD Trust", price: "₹800 - ₹1000", distance: "0.8 km from Bus Stand" },
      { name: "Alipiri Free Pilgrim Dorms", type: "Free Locker/Stay", price: "Free", distance: "Foot of Tirumala Hills" }
    ]
  },
  {
    id: "simhachalam",
    name: "Sri Varaha Lakshmi Narasimha Temple",
    location: "Visakhapatnam, Andhra Pradesh",
    region: "South",
    deity: "Vishnu",
    coords: { x: 54, y: 66 },
    builtBy: "Eastern Ganga King Narasimhadeva I (13th Century)",
    architecture: "Kalinga & Chalukyan Temple Architecture",
    timings: "06:30 AM – 09:00 PM",
    nearestStation: { name: "Simhachalam / Visakhapatnam", code: "VSKP", distance: "16 km" },
    avgBudgetPerDay: 650,
    history:
      "Located on the Simhachalam hill range, the deity appears covered in sandalwood paste (Chandanotsavam) throughout the year except on Akshaya Tritiya, revealing the original Nija Roopa.",
    stays: [
      { name: "Devasthanam Choultries", type: "Temple Trust", price: "₹300 - ₹700", distance: "0.3 km" },
      { name: "Gopalapatnam Budget Dorms", type: "Budget Stay", price: "₹450", distance: "4 km" }
    ]
  },
  {
    id: "srisailam",
    name: "Mallikarjuna Jyotirlinga Temple",
    location: "Srisailam, Andhra Pradesh",
    region: "South",
    deity: "Shiva",
    coords: { x: 42, y: 69 },
    builtBy: "Satavahanas, Kakatiyas & Vijayanagara Kings",
    architecture: "Dravidian & Vijayanagara Pillared Mandapas",
    timings: "04:30 AM – 10:00 PM",
    nearestStation: { name: "Markapur Road", code: "MRK", distance: "85 km" },
    avgBudgetPerDay: 750,
    history:
      "Unique shrine housing both one of the 12 Jyotirlingas (Mallikarjuna) and one of the 18 Maha Shakti Peethas (Bhramaramba) in the Nallamala forest hills.",
    stays: [
      { name: "APTDC Haritha Hotel", type: "Govt Stay", price: "₹1,100", distance: "0.6 km" },
      { name: "Vasavi Arya Vysya Satram", type: "Community Trust", price: "₹300 - ₹500", distance: "0.4 km" }
    ]
  },
  {
    id: "kedarnath",
    name: "Kedarnath Jyotirlinga Temple",
    location: "Rudraprayag, Uttarakhand",
    region: "North",
    deity: "Shiva",
    coords: { x: 42, y: 20 },
    builtBy: "Pandavas (Original) & Adi Shankaracharya (8th Century)",
    architecture: "Katyuri Stone Ashlar Architecture",
    timings: "04:00 AM – 09:00 PM (Apr – Nov)",
    nearestStation: { name: "Rishikesh / Haridwar", code: "HW", distance: "216 km + 16 km Trek" },
    avgBudgetPerDay: 1200,
    history:
      "Standing at 3,583 meters near the Chorabari Glacier, this ancient stone temple survived the catastrophic 2013 Himalayan floods protected by the massive Bhim Shila boulder.",
    stays: [
      { name: "GMVN Kedarnath Base Camp Tents", type: "Govt Stay", price: "₹500 - ₹1,200", distance: "0.5 km" },
      { name: "Bharat Sevashram Sangha (Gaurikund)", type: "Ashram", price: "₹300", distance: "Trek Base" }
    ]
  },
  {
    id: "kashi",
    name: "Kashi Vishwanath Jyotirlinga",
    location: "Varanasi, Uttar Pradesh",
    region: "North",
    deity: "Shiva",
    coords: { x: 56, y: 39 },
    builtBy: "Maharani Ahilyabai Holkar (1780) & Maharaja Ranjit Singh",
    architecture: "Nagara Architecture with Gold-Plated Spire",
    timings: "03:00 AM – 11:00 PM",
    nearestStation: { name: "Varanasi Junction", code: "BSB", distance: "4 km" },
    avgBudgetPerDay: 700,
    history:
      "Located on the western bank of the sacred Ganga, Kashi Vishwanath is the spiritual heart of Hinduism. Maharaja Ranjit Singh donated 1 tonne of gold to plate its spires.",
    stays: [
      { name: "Birla Dharamshala (Godowlia)", type: "Trust Stay", price: "₹400 - ₹700", distance: "0.7 km" },
      { name: "Sri Kashi Math Samsthan", type: "Mutt", price: "₹350", distance: "0.9 km" }
    ]
  },
  {
    id: "ayodhya",
    name: "Shri Ram Janmabhoomi Mandir",
    location: "Ayodhya, Uttar Pradesh",
    region: "North",
    deity: "Vishnu",
    coords: { x: 53, y: 36 },
    builtBy: "Shri Ram Janmabhoomi Teerth Kshetra (2024)",
    architecture: "Traditional Maru-Gurjara Nagara Style (No Iron/Steel)",
    timings: "06:30 AM – 09:30 PM",
    nearestStation: { name: "Ayodhya Dham Junction", code: "AY", distance: "2 km" },
    avgBudgetPerDay: 750,
    history:
      "Built using pink Bansi Paharpur sandstone without any iron or steel to last over 1,000 years, enshrining Balak Ram sculpted by Arun Yogiraj.",
    stays: [
      { name: "Janmabhoomi Pilgrim Facilitation Dorms", type: "Trust Stay", price: "₹250 - ₹500", distance: "1 km" },
      { name: "Birla Dharamshala Ayodhya", type: "Dharamshala", price: "₹500", distance: "1.2 km" }
    ]
  },
  {
    id: "meenakshi",
    name: "Meenakshi Amman Temple",
    location: "Madurai, Tamil Nadu",
    region: "South",
    deity: "Shakti",
    coords: { x: 40, y: 88 },
    builtBy: "Pandyan Emperors & Nayak Dynasty (16th Century)",
    architecture: "Dravidian Architecture (14 Towering Gopurams)",
    timings: "05:00 AM – 10:00 PM",
    nearestStation: { name: "Madurai Junction", code: "MDU", distance: "1.5 km" },
    avgBudgetPerDay: 700,
    history:
      "Famous for its 14 vibrant Gopurams covered in thousands of mythological sculptures and the Thousand Pillar Hall featuring musical stone pillars.",
    stays: [
      { name: "Meenakshi Temple Devasthanam Rest House", type: "Temple Trust", price: "₹350 - ₹600", distance: "0.4 km" },
      { name: "Madurai Railway Retiring Rooms", type: "IRCTC", price: "₹400", distance: "1.5 km" }
    ]
  },
  {
    id: "puri",
    name: "Shree Jagannath Temple",
    location: "Puri, Odisha",
    region: "East",
    deity: "Vishnu",
    coords: { x: 62, y: 58 },
    builtBy: "King Anantavarman Chodaganga Deva (12th Century)",
    architecture: "Kalinga Temple Architecture",
    timings: "05:00 AM – 11:00 PM",
    nearestStation: { name: "Puri Railway Station", code: "PURI", distance: "2.5 km" },
    avgBudgetPerDay: 650,
    history:
      "One of the Char Dham pilgrimage sites. Famous for the annual Rath Yatra, the flag atop the Neelachakra that always flutters opposite the wind, and the world's largest temple kitchen.",
    stays: [
      { name: "Neeladri Bhakta Nivas", type: "Temple Trust", price: "₹400 - ₹700", distance: "0.6 km" },
      { name: "Gundicha Bhakta Nivas", type: "Temple Trust", price: "₹350", distance: "2 km" }
    ]
  },
  {
    id: "somnath",
    name: "Somnath Jyotirlinga Temple",
    location: "Prabhas Patan, Gujarat",
    region: "West",
    deity: "Shiva",
    coords: { x: 20, y: 53 },
    builtBy: "Reconstructed by Sardar Vallabhbhai Patel (1951)",
    architecture: "Chalukya (Maru-Gurjara) Architecture",
    timings: "06:00 AM – 10:00 PM",
    nearestStation: { name: "Veraval Junction", code: "VRL", distance: "6 km" },
    avgBudgetPerDay: 750,
    history:
      "First among the 12 Jyotirlingas, standing right on the Arabian Sea shore where the Baan Stambh arrow pillar indicates an unobstructed sea line straight to the South Pole.",
    stays: [
      { name: "Lilavati Atithi Bhavan", type: "Somnath Trust", price: "₹500 - ₹800", distance: "0.3 km" },
      { name: "Maheshwari Atithi Bhavan", type: "Trust Stay", price: "₹400", distance: "0.5 km" }
    ]
  },
  {
    id: "goldentemple",
    name: "Sri Harmandir Sahib (Golden Temple)",
    location: "Amritsar, Punjab",
    region: "North",
    deity: "Sikh Heritage",
    coords: { x: 33, y: 18 },
    builtBy: "Guru Arjan Dev Ji (1604) & Maharaja Ranjit Singh",
    architecture: "Indo-Islamic & Sikh Architecture",
    timings: "Open 24 Hours",
    nearestStation: { name: "Amritsar Junction", code: "ASR", distance: "2 km" },
    avgBudgetPerDay: 400,
    history:
      "Surrounded by the sacred Amrit Sarovar, Harmandir Sahib has four entrances symbolizing openness to all castes and faiths. Its Guru Ka Langar serves free meals to over 100,000 people daily.",
    stays: [
      { name: "Guru Ram Das Niwas", type: "SGPC Free/Donation", price: "Free / Donation", distance: "0.1 km" },
      { name: "Mata Ganga Ji Niwas", type: "SGPC Trust", price: "₹300 - ₹500", distance: "0.2 km" }
    ]
  }
];