export const INDIA_TEMPLES_SEED = [
  // ==================== SOUTH INDIA ====================
  // Andhra Pradesh
  {
    id: "ap-tirumala",
    name: "Tirumala Venkateswara Temple",
    deity: "Vishnu",
    state: "Andhra Pradesh",
    city: "Tirupati",
    region: "South India",
    circuit: ["Divya Desam", "Iconic"],
    latitude: 13.6833,
    longitude: 79.3472,
    built_by: "Pallavas, Cholas & Sri Krishnadevaraya",
    timings: "02:30 AM – 01:30 AM",
    dress_code: "Traditional (Dhoti/Kurta for Men, Saree/Chudidar for Women)",
    history_summary: "World's richest and most visited Hindu pilgrimage temple on Seshachalam Hills.",
    full_history: "Located on Venkatadri, the seventh peak of Seshachalam Hills, Sri Venkateswara Swamy Temple dates back to 300 CE. Heavily patronized by Pallavas, Cholas, and Vijayanagara Emperor Sri Krishnadevaraya.",
    travel: {
      nearest_railway_code: "TPTY",
      nearest_railway_name: "Tirupati Main",
      nearest_airport: "Tirupati Airport (TIR) - 40 km",
      bus_connectivity: "APSRTC Sapthagiri Express buses every 2 mins from Tirupati to Tirumala."
    },
    stays: [
      { stay_name: "TTD Srinivasam Complex", stay_type: "Temple Trust", price_per_night: "₹200 - ₹600", booking_link_or_contact: "ttdevasthanams.ap.gov.in" },
      { stay_name: "Alipiri Free Pilgrim Dorms", stay_type: "Dharamshala", price_per_night: "Free", booking_link_or_contact: "Walk-in Locker & Hall" }
    ]
  },
  {
    id: "ap-srisailam",
    name: "Mallikarjuna Swamy Temple",
    deity: "Shiva & Shakti",
    state: "Andhra Pradesh",
    city: "Srisailam",
    region: "South India",
    circuit: ["Jyotirlinga", "Shakti Peetha"],
    latitude: 16.0738,
    longitude: 78.8687,
    built_by: "Satavahanas, Kakatiyas & Vijayanagara Kings",
    timings: "04:30 AM – 10:00 PM",
    dress_code: "Traditional attire mandatory for Sparsha Darshan",
    history_summary: "Rare shrine housing both a Jyotirlinga and a Maha Shakti Peetha in Nallamala hills.",
    full_history: "Situated on the banks of Krishna River in Nallamala forest, Srisailam is unique as it enshrines both Sri Mallikarjuna (Jyotirlinga) and Goddess Bhramaramba (Shakti Peetha).",
    travel: {
      nearest_railway_code: "MRK",
      nearest_railway_name: "Markapur Road",
      nearest_airport: "Rajiv Gandhi Intl Airport, Hyderabad (HYD) - 215 km",
      bus_connectivity: "Direct TGSRTC & APSRTC buses from Hyderabad (MGBS) and Kurnool."
    },
    stays: [
      { stay_name: "Vasavi Arya Vysya Satram", stay_type: "Dharamshala", price_per_night: "₹300 - ₹500", booking_link_or_contact: "Walk-in / Trust Counter" },
      { stay_name: "APTDC Haritha Hotel", stay_type: "Hotel", price_per_night: "₹1,100", booking_link_or_contact: "tourism.ap.gov.in" }
    ]
  },
  {
    id: "ap-vijayawada",
    name: "Kanaka Durga Temple",
    deity: "Shakti",
    state: "Andhra Pradesh",
    city: "Vijayawada",
    region: "South India",
    circuit: ["Shakti Peetha", "Iconic"],
    latitude: 16.5151,
    longitude: 80.6059,
    built_by: "Chalukya & Kakatiya Rulers",
    timings: "04:00 AM – 10:00 PM",
    dress_code: "Traditional Wear Preferred",
    history_summary: "Atop Indrakeeladri hill overlooking the Krishna River, famous for Dasara Navaratri.",
    full_history: "According to legend, Arjuna performed penance on Indrakeeladri hill and obtained the Pasupatastra from Lord Shiva here. Goddess Kanaka Durga is Swayambhu (self-manifested).",
    travel: {
      nearest_railway_code: "BZA",
      nearest_railway_name: "Vijayawada Junction (2.5 km)",
      nearest_airport: "Vijayawada Airport (VGA) - 22 km",
      bus_connectivity: "1.5 km from Pandit Nehru Bus Station (PNBS); frequent city buses & autos."
    },
    stays: [
      { stay_name: "Devasthanam Pilgrim Choultries", stay_type: "Temple Trust", price_per_night: "₹350 - ₹650", booking_link_or_contact: "kanakadurgamma.org" }
    ]
  },
  {
    id: "ap-simhachalam",
    name: "Simhachalam Varaha Lakshmi Narasimha Temple",
    deity: "Vishnu",
    state: "Andhra Pradesh",
    city: "Visakhapatnam",
    region: "South India",
    circuit: ["Iconic"],
    latitude: 17.7664,
    longitude: 83.2505,
    built_by: "Eastern Ganga King Narasimhadeva I (13th Century)",
    timings: "06:30 AM – 09:00 PM",
    dress_code: "Traditional Wear",
    history_summary: "Deity stays covered in sandalwood paste year-round except on Akshaya Tritiya.",
    full_history: "Built in Kalinga and Chalukyan styles on Simhachalam hill in Visakhapatnam, the temple features a 16-pillar Natya Mandapa and stone chariot wheels.",
    travel: {
      nearest_railway_code: "VSKP",
      nearest_railway_name: "Visakhapatnam Junction (16 km) / Simhachalam (SCM)",
      nearest_airport: "Visakhapatnam Airport (VTZ) - 14 km",
      bus_connectivity: "APSRTC City Bus Route 6, 6A, 60 from RTC Complex Vizag."
    },
    stays: [
      { stay_name: "Devasthanam Choultries", stay_type: "Temple Trust", price_per_night: "₹300 - ₹700", booking_link_or_contact: "simhachalamdevasthanam.org" }
    ]
  },
  {
    id: "ap-srikalahasti",
    name: "Srikalahasteeswara Temple",
    deity: "Shiva",
    state: "Andhra Pradesh",
    city: "Srikalahasti",
    region: "South India",
    circuit: ["Pancha Bhoota", "Iconic"],
    latitude: 13.7498,
    longitude: 79.6984,
    built_by: "Pallavas, Cholas & Vijayanagara Kings",
    timings: "05:30 AM – 09:00 PM",
    dress_code: "Traditional Wear",
    history_summary: "Represents the Vayu (Air) element among Pancha Bhoota Stalam; famous for Rahu-Ketu Puja.",
    full_history: "Situated on the banks of Swarnamukhi River, a lamp inside the sanctum flickers continuously despite no air vents, signifying the Vayu Linga.",
    travel: {
      nearest_railway_code: "KHT",
      nearest_railway_name: "Srikalahasti Station (3 km)",
      nearest_airport: "Tirupati Airport (TIR) - 27 km",
      bus_connectivity: "36 km from Tirupati; buses every 15 minutes."
    },
    stays: [
      { stay_name: "Devasthanam Sadanams", stay_type: "Temple Trust", price_per_night: "₹300 - ₹600", booking_link_or_contact: "srikalahastitemple.org" }
    ]
  },

  // Telangana
  {
    id: "tg-yadadri",
    name: "Yadadri Lakshmi Narasimha Swamy Temple",
    deity: "Vishnu",
    state: "Telangana",
    city: "Yadagirigutta",
    region: "South India",
    circuit: ["Iconic"],
    latitude: 17.5885,
    longitude: 78.9437,
    built_by: "Kakatiyas & Rebuilt in Black Granite (Krishnashila)",
    timings: "04:00 AM – 09:45 PM",
    dress_code: "Traditional Wear",
    history_summary: "Magnificent cave shrine reconstructed entirely with black granite stone without cement.",
    full_history: "Named after sage Yadarishi who performed penance here, Lord Narasimha manifested in five forms (Pancha Narasimha Kshetram).",
    travel: {
      nearest_railway_code: "BG",
      nearest_railway_name: "Bhongir (13 km) / Raigiri (5 km)",
      nearest_airport: "Hyderabad Airport (HYD) - 90 km",
      bus_connectivity: "60 km from Hyderabad Uppal Bus Depot; frequent TGSRTC buses."
    },
    stays: [
      { stay_name: "Yadadri Temple Cottages", stay_type: "Temple Trust", price_per_night: "₹500 - ₹1,000", booking_link_or_contact: "yadagiriguttatemple.in" }
    ]
  },
  {
    id: "tg-bhadrachalam",
    name: "Bhadrachalam Sri Sita Ramachandra Swamy Temple",
    deity: "Vishnu",
    state: "Telangana",
    city: "Bhadrachalam",
    region: "South India",
    circuit: ["Iconic"],
    latitude: 17.6688,
    longitude: 80.8936,
    built_by: "Kancharla Gopanna (Bhakta Ramadasu - 17th Century)",
    timings: "04:30 AM – 09:00 PM",
    dress_code: "Traditional Wear",
    history_summary: "Dakshina Ayodhya on the banks of River Godavari, built by saint-poet Bhakta Ramadasu.",
    full_history: "Located near Parnasala where Lord Rama stayed during exile, this temple was constructed by Kancharla Gopanna using public funds, leading to his famous devotional Keertanas.",
    travel: {
      nearest_railway_code: "BDCR",
      nearest_railway_name: "Bhadrachalam Road / Kothagudem (40 km)",
      nearest_airport: "Rajahmundry Airport (RJA) - 180 km",
      bus_connectivity: "Direct buses from Khammam, Vijayawada, and Hyderabad."
    },
    stays: [
      { stay_name: "Devasthanam Choultries", stay_type: "Temple Trust", price_per_night: "₹300 - ₹700", booking_link_or_contact: "bhadrachalamonline.com" }
    ]
  },
  {
    id: "tg-ramappa",
    name: "Ramappa Temple (Rudreswara)",
    deity: "Shiva",
    state: "Telangana",
    city: "Palampet (Mulugu)",
    region: "South India",
    circuit: ["UNESCO"],
    latitude: 18.2593,
    longitude: 79.9433,
    built_by: "Kakatiya General Recherla Rudra (1213 CE)",
    timings: "06:00 AM – 06:00 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "UNESCO World Heritage Site famous for floating bricks and sandbox foundation technology.",
    full_history: "Named after its chief sculptor Ramappa, the temple's vimana is built with porous bricks so light they float on water, and carved in black basalt.",
    travel: {
      nearest_railway_code: "WL",
      nearest_railway_name: "Warangal Railway Station (70 km)",
      nearest_airport: "Hyderabad Airport (HYD) - 220 km",
      bus_connectivity: "Buses from Hanamkonda / Warangal to Mulugu & Palampet."
    },
    stays: [
      { stay_name: "TGTDC Haritha Ramappa", stay_type: "Hotel", price_per_night: "₹1,200", booking_link_or_contact: "tourism.telangana.gov.in" }
    ]
  },
  {
    id: "tg-thousandpillar",
    name: "Thousand Pillar Temple",
    deity: "Shiva",
    state: "Telangana",
    city: "Hanamkonda",
    region: "South India",
    circuit: ["Iconic"],
    latitude: 18.0037,
    longitude: 79.5747,
    built_by: "Kakatiya King Rudra Deva (1163 CE)",
    timings: "05:00 AM – 09:00 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "Star-shaped Trikutalayam masterpiece dedicated to Shiva, Vishnu, and Surya.",
    full_history: "Showcasing peak Kakatiya craftsmanship, the temple features a monolithic Nandi carved out of black basalt and intricately perforated stone screens.",
    travel: {
      nearest_railway_code: "KZJ",
      nearest_railway_name: "Kazipet (6 km) / Warangal (8 km)",
      nearest_airport: "Hyderabad Airport (HYD) - 155 km",
      bus_connectivity: "Located right in Hanamkonda city; auto/city bus access."
    },
    stays: [
      { stay_name: "Hanamkonda Budget Lodges", stay_type: "Budget Hostel", price_per_night: "₹500 - ₹800", booking_link_or_contact: "Near Bus Stand" }
    ]
  },

  // Tamil Nadu
  {
    id: "tn-rameswaram",
    name: "Ramanathaswamy Temple",
    deity: "Shiva",
    state: "Tamil Nadu",
    city: "Rameswaram",
    region: "South India",
    circuit: ["Char Dham", "Jyotirlinga"],
    latitude: 9.2881,
    longitude: 79.3174,
    built_by: "Pandya & Sethupathi Rulers (12th Century)",
    timings: "05:00 AM – 09:00 PM",
    dress_code: "Traditional Wear (Dry clothes required after 22 Theertham bath)",
    history_summary: "Char Dham & Jyotirlinga famous for the world's longest pillared temple corridor (1,212 pillars).",
    full_history: "Legend holds that Lord Rama worshipped Shiva here to absolve sins after the Lanka war. Pilgrims bathe in 22 sacred wells (Theerthams) inside the temple.",
    travel: {
      nearest_railway_code: "RMM",
      nearest_railway_name: "Rameswaram Station (1.5 km)",
      nearest_airport: "Madurai Airport (IXM) - 175 km",
      bus_connectivity: "Connected via Pamban Bridge; direct trains/buses from Chennai & Madurai."
    },
    stays: [
      { stay_name: "Devasthanam Cottages & Dorms", stay_type: "Temple Trust", price_per_night: "₹350 - ₹700", booking_link_or_contact: "rameswaramtemple.tnhrce.in" },
      { stay_name: "Shri Shankar Matham", stay_type: "Dharamshala", price_per_night: "₹400", booking_link_or_contact: "Walk-in near East Gate" }
    ]
  },
  {
    id: "tn-meenakshi",
    name: "Meenakshi Amman Temple",
    deity: "Shakti & Shiva",
    state: "Tamil Nadu",
    city: "Madurai",
    region: "South India",
    circuit: ["Iconic"],
    latitude: 9.9195,
    longitude: 78.1193,
    built_by: "Pandyan Emperors & Thirumalai Nayak (16th Century)",
    timings: "05:00 AM – 10:00 PM",
    dress_code: "Traditional Wear Mandatory",
    history_summary: "Iconic Dravidian marvel with 14 towering colorful Gopurams and musical stone pillars.",
    full_history: "Located on the southern bank of Vaigai River, the temple complex spans 14 acres and houses the Hall of Thousand Pillars and the sacred Golden Lotus Tank.",
    travel: {
      nearest_railway_code: "MDU",
      nearest_railway_name: "Madurai Junction (1.5 km)",
      nearest_airport: "Madurai Airport (IXM) - 12 km",
      bus_connectivity: "Walking distance from Periyar Bus Stand."
    },
    stays: [
      { stay_name: "Devasthanam Rest House", stay_type: "Temple Trust", price_per_night: "₹350 - ₹600", booking_link_or_contact: "maduraimeenakshi.org" }
    ]
  },
  {
    id: "tn-brihadeeswarar",
    name: "Brihadeeswarar Temple (Big Temple)",
    deity: "Shiva",
    state: "Tamil Nadu",
    city: "Thanjavur",
    region: "South India",
    circuit: ["UNESCO"],
    latitude: 10.7828,
    longitude: 79.1318,
    built_by: "Raja Raja Chola I (1010 CE)",
    timings: "06:00 AM – 08:30 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "UNESCO Great Living Chola Temple with a 216-ft granite Vimana and an 80-ton capstone.",
    full_history: "Constructed entirely of granite without binding mortar using interlocking stone technology, the temple stands as an engineering triumph of the Chola Empire.",
    travel: {
      nearest_railway_code: "TJ",
      nearest_railway_name: "Thanjavur Junction (2 km)",
      nearest_airport: "Tiruchirappalli Airport (TRZ) - 55 km",
      bus_connectivity: "Frequent buses from Trichy, Madurai, and Chennai."
    },
    stays: [
      { stay_name: "Thanjavur Budget Dorms", stay_type: "Budget Hostel", price_per_night: "₹450 - ₹750", booking_link_or_contact: "Near Old Bus Stand" }
    ]
  },
  {
    id: "tn-arunachaleswarar",
    name: "Arunachaleswarar Temple",
    deity: "Shiva",
    state: "Tamil Nadu",
    city: "Tiruvannamalai",
    region: "South India",
    circuit: ["Pancha Bhoota", "Iconic"],
    latitude: 12.2319,
    longitude: 79.0677,
    built_by: "Cholas & Vijayanagara Rulers",
    timings: "05:30 AM – 09:30 PM",
    dress_code: "Traditional Wear",
    history_summary: "Represents Agni (Fire) element; famous for 14-km Full Moon Girivalam circumambulation.",
    full_history: "Nestled at the base of Arunachala Hill, this massive 24-acre temple is celebrated during Karthigai Deepam when a giant beacon is lit atop the sacred hill.",
    travel: {
      nearest_railway_code: "TNM",
      nearest_railway_name: "Tiruvannamalai Station (2.5 km)",
      nearest_airport: "Chennai Airport (MAA) - 175 km",
      bus_connectivity: "Direct buses every 30 mins from Chennai Koyambedu & Bengaluru."
    },
    stays: [
      { stay_name: "Sri Ramanasramam Guest Rooms", stay_type: "Dharamshala", price_per_night: "Free / Donation", booking_link_or_contact: "sriramanamaharshi.org" }
    ]
  },
  {
    id: "tn-srirangam",
    name: "Sri Ranganathaswamy Temple",
    deity: "Vishnu",
    state: "Tamil Nadu",
    city: "Srirangam (Tiruchirappalli)",
    region: "South India",
    circuit: ["Divya Desam", "Iconic"],
    latitude: 10.8625,
    longitude: 78.6897,
    built_by: "Cholas, Pandyas, Hoysalas & Nayaks",
    timings: "06:00 AM – 09:00 PM",
    dress_code: "Traditional Wear",
    history_summary: "Largest functioning Hindu temple complex in the world spanning 156 acres with 21 Gopurams.",
    full_history: "Foremost among the 108 Divya Desams, Srirangam is situated on an island formed by the Cauvery and Kollidam rivers, featuring the 236-ft Rajagopuram.",
    travel: {
      nearest_railway_code: "SRGM",
      nearest_railway_name: "Srirangam Station (1 km) / Trichy Jn (10 km)",
      nearest_airport: "Tiruchirappalli Airport (TRZ) - 15 km",
      bus_connectivity: "Frequent city buses from Trichy Chathiram Bus Stand."
    },
    stays: [
      { stay_name: "Yatri Nivas Srirangam", stay_type: "Temple Trust", price_per_night: "₹400 - ₹800", booking_link_or_contact: "srirangam.org" }
    ]
  },

  // Karnataka
  {
    id: "ka-hampi",
    name: "Virupaksha Temple",
    deity: "Shiva",
    state: "Karnataka",
    city: "Hampi",
    region: "South India",
    circuit: ["UNESCO"],
    latitude: 15.3350,
    longitude: 76.4600,
    built_by: "Chalukyas & Vijayanagara Empire (7th – 15th Century)",
    timings: "06:00 AM – 06:00 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "Unbroken worship since 7th century in the UNESCO Vijayanagara ruins; pinhole inverted shadow.",
    full_history: "Located on the southern bank of Tungabhadra River, Virupaksha Temple survived the 1565 fall of Vijayanagara and features a pinhole aperture projecting an inverted gopuram shadow.",
    travel: {
      nearest_railway_code: "HPT",
      nearest_railway_name: "Hosapete Junction (13 km)",
      nearest_airport: "Jindal Vijayanagar Airport (VDY) - 38 km",
      bus_connectivity: "Frequent KKRTC buses & shared autos from Hosapete."
    },
    stays: [
      { stay_name: "Zostel Hampi / Riverside Hostels", stay_type: "Budget Hostel", price_per_night: "₹550 - ₹900", booking_link_or_contact: "zostel.com" }
    ]
  },
  {
    id: "ka-udupi",
    name: "Sri Krishna Matha",
    deity: "Vishnu",
    state: "Karnataka",
    city: "Udupi",
    region: "South India",
    circuit: ["Iconic"],
    latitude: 13.3409,
    longitude: 74.7521,
    built_by: "Sri Madhvacharya (13th Century)",
    timings: "04:30 AM – 09:30 PM",
    dress_code: "Traditional Wear (Men remove shirts inside sanctum)",
    history_summary: "Founded by Dvaita philosopher Madhvacharya; darshan is viewed through the 9-holed Kanakana Kindi.",
    full_history: "Administered by the Ashta Mathas in 2-year Paryaya cycles, Udupi Sri Krishna Matha is renowned for free Anna Brahma prasadam served to thousands daily.",
    travel: {
      nearest_railway_code: "UD",
      nearest_railway_name: "Udupi Railway Station (3.5 km)",
      nearest_airport: "Mangaluru Airport (IXE) - 58 km",
      bus_connectivity: "1 km from Udupi Service Bus Stand."
    },
    stays: [
      { stay_name: "Sri Krishna Matha Guest House", stay_type: "Temple Trust", price_per_night: "₹300 - ₹600", booking_link_or_contact: "udupisrikrishnamatha.org" }
    ]
  },
  {
    id: "ka-murudeshwar",
    name: "Murudeshwar Temple",
    deity: "Shiva",
    state: "Karnataka",
    city: "Murudeshwar",
    region: "South India",
    circuit: ["Iconic"],
    latitude: 14.0943,
    longitude: 74.4845,
    built_by: "R.N. Shetty (Modernized 20-Story Gopura)",
    timings: "06:00 AM – 08:30 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "Surrounded on three sides by the Arabian Sea, featuring a 123-ft Shiva statue and 249-ft Rajagopura.",
    full_history: "Linked to the Ramayana legend of the Atma Linga carried by Ravana, Murudeshwar stands on Kanduka Hill with panoramic coastal views.",
    travel: {
      nearest_railway_code: "MRDW",
      nearest_railway_name: "Murudeshwar Station (2 km)",
      nearest_airport: "Mangaluru Airport (IXE) - 155 km",
      bus_connectivity: "Connected via NH-66 coastal highway from Gokarna, Udupi, and Goa."
    },
    stays: [
      { stay_name: "Temple Trust Yatri Nivas", stay_type: "Temple Trust", price_per_night: "₹500 - ₹900", booking_link_or_contact: "Near Temple Gate" }
    ]
  },
  {
    id: "ka-kukke",
    name: "Kukke Subramanya Temple",
    deity: "Kartikeya",
    state: "Karnataka",
    city: "Subramanya",
    region: "South India",
    circuit: ["Iconic"],
    latitude: 12.6656,
    longitude: 75.6166,
    built_by: "Ancient Western Ghats Shrine",
    timings: "06:30 AM – 08:00 PM",
    dress_code: "Traditional Wear (Shirts off for men inside)",
    history_summary: "Nestled in the Western Ghats foothills near Kumaraparvata; revered for Sarpa Dosha rituals.",
    full_history: "Legend states divine serpent Vasuki and other serpents took refuge under Lord Subramanya here after being threatened by Garuda.",
    travel: {
      nearest_railway_code: "SBHR",
      nearest_railway_name: "Subrahmanya Road Station (7 km)",
      nearest_airport: "Mangaluru Airport (IXE) - 105 km",
      bus_connectivity: "Direct KSRTC buses from Bengaluru and Mangaluru."
    },
    stays: [
      { stay_name: "Kukke Temple Guest Houses", stay_type: "Temple Trust", price_per_night: "₹350 - ₹700", booking_link_or_contact: "kukke.org" }
    ]
  },
  {
    id: "ka-chamundeshwari",
    name: "Chamundeshwari Temple",
    deity: "Shakti",
    state: "Karnataka",
    city: "Mysuru",
    region: "South India",
    circuit: ["Shakti Peetha", "Iconic"],
    latitude: 12.2724,
    longitude: 76.6707,
    built_by: "Hoysalas, Vijayanagara & Wadiyar Maharajas",
    timings: "07:30 AM – 09:00 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "Atop Chamundi Hills at 1,000 meters, tutelary deity of Mysuru Wadiyar dynasty.",
    full_history: "Marks the spot where Goddess Durga slew demon Mahishasura (giving Mysuru its name). Features a 1,000-step climb and a giant monolithic Nandi halfway up.",
    travel: {
      nearest_railway_code: "MYS",
      nearest_railway_name: "Mysuru Junction (13 km)",
      nearest_airport: "Mysuru Airport (MYQ) - 16 km",
      bus_connectivity: "KSRTC City Bus Route 201 from Mysuru City Bus Stand."
    },
    stays: [
      { stay_name: "Zostel Mysore / City Dorms", stay_type: "Budget Hostel", price_per_night: "₹500 - ₹850", booking_link_or_contact: "zostel.com" }
    ]
  },

  // Kerala
  {
    id: "kl-padmanabhaswamy",
    name: "Sree Padmanabhaswamy Temple",
    deity: "Vishnu",
    state: "Kerala",
    city: "Thiruvananthapuram",
    region: "South India",
    circuit: ["Divya Desam", "Iconic"],
    latitude: 8.4828,
    longitude: 76.9436,
    built_by: "Travancore Royal Family (Marthanda Varma)",
    timings: "03:30 AM – 07:20 PM (Slot-based)",
    dress_code: "Strict Traditional (Men: Mundu/Dhoti bare-chested; Women: Saree/Long Skirt)",
    history_summary: "Lord Vishnu reclines on Anantha Shesha viewed through three doors; famed for sacred vaults.",
    full_history: "Built in a blend of Chera and Dravidian styles, the idol is crafted from 12,008 Saligramas imported from the Gandaki River in Nepal.",
    travel: {
      nearest_railway_code: "TVC",
      nearest_railway_name: "Thiruvananthapuram Central (1 km)",
      nearest_airport: "Trivandrum Intl Airport (TRV) - 5 km",
      bus_connectivity: "Walking distance from Thampanoor Central Bus Station."
    },
    stays: [
      { stay_name: "East Fort Pilgrim Dorms", stay_type: "Budget Hostel", price_per_night: "₹450 - ₹800", booking_link_or_contact: "Near East Fort" }
    ]
  },
  {
    id: "kl-sabarimala",
    name: "Sabarimala Sree Dharma Sastha Temple",
    deity: "Ayyappa",
    state: "Kerala",
    city: "Pathanamthitta",
    region: "South India",
    circuit: ["Iconic"],
    latitude: 9.4368,
    longitude: 77.0811,
    built_by: "Pandalam Royal Dynasty",
    timings: "Seasonal (Mandala-Makaravilakku & First 5 days of Malayalam months)",
    dress_code: "Black/Blue Vratham Attire with Irumudi Kettu",
    history_summary: "Hilltop forest shrine inside Periyar Tiger Reserve reached via trekking from Pamba.",
    full_history: "One of the largest annual pilgrimages in the world, devotees observe 41 days of austerity before ascending the 18 sacred golden steps (Pathinettam Padi).",
    travel: {
      nearest_railway_code: "CNGR",
      nearest_railway_name: "Chengannur (90 km) / Kottayam (110 km)",
      nearest_airport: "Cochin Intl Airport (COK) - 160 km",
      bus_connectivity: "KSRTC special buses directly to Pamba Base Camp."
    },
    stays: [
      { stay_name: "Travancore Devaswom Viri Sheds & Rooms", stay_type: "Temple Trust", price_per_night: "Free - ₹600", booking_link_or_contact: "sabarimalaonline.org" }
    ]
  },
  {
    id: "kl-guruvayur",
    name: "Guruvayur Sri Krishna Temple",
    deity: "Vishnu",
    state: "Kerala",
    city: "Thrissur",
    region: "South India",
    circuit: ["Iconic"],
    latitude: 10.5946,
    longitude: 76.0391,
    built_by: "Brihaspati & Vayu (Legend) / Zamorins of Calicut",
    timings: "03:00 AM – 09:15 PM",
    dress_code: "Strict Traditional (Mundu for Men, Saree/Set Mundu for Women)",
    history_summary: "Known as Bhuloka Vaikuntha (Heaven on Earth), worshipping baby Krishna (Unnikannan).",
    full_history: "Installed by Guru (Brihaspati) and Vayu, the idol is carved from Patala Anjanam stone. Famous for elephant sanctuary Punnathur Kotta.",
    travel: {
      nearest_railway_code: "GUV",
      nearest_railway_name: "Guruvayur Station (0.8 km) / Thrissur (29 km)",
      nearest_airport: "Cochin Intl Airport (COK) - 78 km",
      bus_connectivity: "Frequent buses from Thrissur and Ernakulam."
    },
    stays: [
      { stay_name: "Guruvayur Devaswom Satram", stay_type: "Temple Trust", price_per_night: "₹350 - ₹750", booking_link_or_contact: "guruvayurdevaswom.in" }
    ]
  },

  // ==================== NORTH INDIA & HIMALAYAS ====================
  // Uttarakhand
  {
    id: "uk-kedarnath",
    name: "Kedarnath Temple",
    deity: "Shiva",
    state: "Uttarakhand",
    city: "Rudraprayag",
    region: "North India & Himalayas",
    circuit: ["Char Dham", "Jyotirlinga"],
    latitude: 30.7352,
    longitude: 79.0669,
    built_by: "Pandavas & Adi Shankaracharya (8th Century)",
    timings: "04:00 AM – 09:00 PM (Apr/May – Nov)",
    dress_code: "Heavy Winter Layers / Modest Wear",
    history_summary: "Highest of the 12 Jyotirlingas at 3,583m in the Garhwal Himalayas; 16-km trek from Gaurikund.",
    full_history: "Built with massive interlocking grey stone slabs without mortar, the temple survived the 2013 flash floods shielded by the Bhim Shila rock.",
    travel: {
      nearest_railway_code: "YNRK",
      nearest_railway_name: "Yog Nagari Rishikesh / Haridwar (HW) - 216 km + 16 km Trek",
      nearest_airport: "Jolly Grant Airport, Dehradun (DED) - 238 km",
      bus_connectivity: "GMOU buses & shared jeeps from Rishikesh/Haridwar to Sonprayag."
    },
    stays: [
      { stay_name: "GMVN Kedarnath Base Camp Tents", stay_type: "Temple Trust", price_per_night: "₹500 - ₹1,200", booking_link_or_contact: "gmvnonline.com" }
    ]
  },
  {
    id: "uk-badrinath",
    name: "Badrinath Temple",
    deity: "Vishnu",
    state: "Uttarakhand",
    city: "Chamoli",
    region: "North India & Himalayas",
    circuit: ["Char Dham", "Divya Desam"],
    latitude: 30.7433,
    longitude: 79.4938,
    built_by: "Adi Shankaracharya (8th Century)",
    timings: "04:30 AM – 09:00 PM (May – Nov)",
    dress_code: "Warm Modest Attire",
    history_summary: "Part of both All-India Char Dham and Chota Char Dham along the Alaknanda River.",
    full_history: "Adi Shankaracharya discovered the black Saligrama idol of Lord Badrinarayan in the Alaknanda River and enshrined it near the Tapt Kund hot springs.",
    travel: {
      nearest_railway_code: "YNRK",
      nearest_railway_name: "Rishikesh (295 km road journey)",
      nearest_airport: "Dehradun Airport (DED) - 310 km",
      bus_connectivity: "Direct road access up to the temple via Joshimath."
    },
    stays: [
      { stay_name: "BKTC Pilgrim Guest Houses", stay_type: "Temple Trust", price_per_night: "₹400 - ₹900", booking_link_or_contact: "badrinath-kedarnath.gov.in" }
    ]
  },
  {
    id: "uk-gangotri",
    name: "Gangotri Temple",
    deity: "Shakti",
    state: "Uttarakhand",
    city: "Uttarkashi",
    region: "North India & Himalayas",
    circuit: ["Char Dham"],
    latitude: 30.9947,
    longitude: 78.9398,
    built_by: "Gorkha General Amar Singh Thapa (18th Century)",
    timings: "06:15 AM – 09:30 PM (May – Nov)",
    dress_code: "Warm Modest Wear",
    history_summary: "Origin seat of Goddess Ganga at 3,100m on the banks of the Bhagirathi River.",
    full_history: "Built in white granite near Bhagirath Shila where King Bhagirath meditated to bring Ganga down from heaven to Earth.",
    travel: {
      nearest_railway_code: "HW",
      nearest_railway_name: "Haridwar / Rishikesh (250 km road)",
      nearest_airport: "Dehradun Airport (DED) - 265 km",
      bus_connectivity: "Buses & shared cabs via Uttarkashi and Harsil."
    },
    stays: [
      { stay_name: "GMVN Gangotri Tourist Rest House", stay_type: "Temple Trust", price_per_night: "₹500 - ₹1,000", booking_link_or_contact: "gmvnonline.com" }
    ]
  },
  {
    id: "uk-yamunotri",
    name: "Yamunotri Temple",
    deity: "Shakti",
    state: "Uttarakhand",
    city: "Uttarkashi",
    region: "North India & Himalayas",
    circuit: ["Char Dham"],
    latitude: 31.0140,
    longitude: 78.4600,
    built_by: "Maharaja Pratap Shah of Tehri Garhwal",
    timings: "06:00 AM – 08:00 PM (May – Nov)",
    dress_code: "Warm Modest Wear",
    history_summary: "First stop of Chota Char Dham at 3,293m; famous for Surya Kund boiling thermal springs.",
    full_history: "Reached via a 6-km trek from Janki Chatti, pilgrims cook rice and potatoes tied in cloth inside Surya Kund as sacred prasad.",
    travel: {
      nearest_railway_code: "DDN",
      nearest_railway_name: "Dehradun (172 km + 6 km Trek)",
      nearest_airport: "Dehradun Airport (DED) - 195 km",
      bus_connectivity: "Road up to Janki Chatti via Barkot."
    },
    stays: [
      { stay_name: "Janki Chatti Dharamshalas", stay_type: "Dharamshala", price_per_night: "₹400 - ₹800", booking_link_or_contact: "Janki Chatti Base" }
    ]
  },
  {
    id: "uk-neelkanth",
    name: "Neelkanth Mahadev Temple",
    deity: "Shiva",
    state: "Uttarakhand",
    city: "Rishikesh",
    region: "North India & Himalayas",
    circuit: ["Iconic"],
    latitude: 30.0869,
    longitude: 78.3797,
    built_by: "Ancient Himalayan Shrine",
    timings: "05:00 AM – 09:00 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "Sacred spot where Lord Shiva consumed the Halahala poison during Samudra Manthan.",
    full_history: "Surrounded by Manikoot, Brahmakoot, and Vishnukoot valleys at 1,330m above Rishikesh, turning Shiva's throat blue (Neelkanth).",
    travel: {
      nearest_railway_code: "YNRK",
      nearest_railway_name: "Rishikesh (32 km)",
      nearest_airport: "Dehradun Airport (DED) - 48 km",
      bus_connectivity: "Shared jeeps from Laxman Jhula / Ram Jhula."
    },
    stays: [
      { stay_name: "Parmarth Niketan / Rishikesh Ashrams", stay_type: "Dharamshala", price_per_night: "₹300 - ₹700", booking_link_or_contact: "parmarth.org" }
    ]
  },

  // Uttar Pradesh
  {
    id: "up-kashi",
    name: "Kashi Vishwanath Temple",
    deity: "Shiva",
    state: "Uttar Pradesh",
    city: "Varanasi",
    region: "North India & Himalayas",
    circuit: ["Jyotirlinga"],
    latitude: 25.3109,
    longitude: 83.0107,
    built_by: "Maharani Ahilyabai Holkar (1780) & Maharaja Ranjit Singh",
    timings: "03:00 AM – 11:00 PM",
    dress_code: "Traditional Wear (Required for Sparsha Darshan)",
    history_summary: "Most revered Jyotirlinga on the banks of the Ganga, connected via Kashi Vishwanath Corridor.",
    full_history: "Reconstructed by Indore's Queen Ahilyabai Holkar and gold-plated with 1 tonne of gold by Punjab's Maharaja Ranjit Singh.",
    travel: {
      nearest_railway_code: "BSB",
      nearest_railway_name: "Varanasi Junction (4 km) / Banaras (BSBS)",
      nearest_airport: "Lal Bahadur Shastri Airport (VNS) - 25 km",
      bus_connectivity: "E-rickshaws up to Godowlia Chowk."
    },
    stays: [
      { stay_name: "Birla Dharamshala (Godowlia)", stay_type: "Dharamshala", price_per_night: "₹400 - ₹750", booking_link_or_contact: "Walk-in / Online" },
      { stay_name: "Zostel Varanasi", stay_type: "Budget Hostel", price_per_night: "₹550", booking_link_or_contact: "zostel.com" }
    ]
  },
  {
    id: "up-ayodhya",
    name: "Shri Ram Janmabhoomi Mandir",
    deity: "Vishnu",
    state: "Uttar Pradesh",
    city: "Ayodhya",
    region: "North India & Himalayas",
    circuit: ["Iconic"],
    latitude: 26.7956,
    longitude: 82.1944,
    built_by: "Shri Ram Janmabhoomi Teerth Kshetra (2024)",
    timings: "06:30 AM – 09:30 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "Grand Nagara-style sandstone temple built without iron or steel at Lord Rama's birthplace.",
    full_history: "Constructed using pink Bansi Paharpur stone from Rajasthan to endure over 1,000 years, housing the 51-inch Balak Ram idol.",
    travel: {
      nearest_railway_code: "AY",
      nearest_railway_name: "Ayodhya Dham Junction (2 km)",
      nearest_airport: "Maharishi Valmiki Intl Airport (AYJ) - 10 km",
      bus_connectivity: "Electric buses & e-rickshaws along Ram Path."
    },
    stays: [
      { stay_name: "Janmabhoomi Pilgrim Dorms", stay_type: "Temple Trust", price_per_night: "₹250 - ₹500", booking_link_or_contact: "srjbtkshetra.org" }
    ]
  },
  {
    id: "up-vrindavan",
    name: "Banke Bihari Temple",
    deity: "Vishnu",
    state: "Uttar Pradesh",
    city: "Vrindavan",
    region: "North India & Himalayas",
    circuit: ["Iconic"],
    latitude: 27.5801,
    longitude: 77.6908,
    built_by: "Swami Haridas (1864)",
    timings: "07:45 AM – 12:00 PM, 05:30 PM – 09:30 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "Beloved Krishna shrine where the sanctum curtain opens and closes every few minutes.",
    full_history: "Manifested through the devotional singing of Swami Haridas (guru of Tansen), the curtain is drawn intermittently so devotees don't faint from the Lord's gaze.",
    travel: {
      nearest_railway_code: "MTJ",
      nearest_railway_name: "Mathura Junction (12 km)",
      nearest_airport: "Agra Airport (AGR) - 70 km / Delhi (DEL) - 160 km",
      bus_connectivity: "Frequent e-rickshaws & shared autos from Mathura."
    },
    stays: [
      { stay_name: "ISKCON Vrindavan Guest House / Ashrams", stay_type: "Dharamshala", price_per_night: "₹400 - ₹800", booking_link_or_contact: "iskconvrindavan.com" }
    ]
  },
  {
    id: "up-mathura",
    name: "Krishna Janmabhoomi Temple",
    deity: "Vishnu",
    state: "Uttar Pradesh",
    city: "Mathura",
    region: "North India & Himalayas",
    circuit: ["Iconic"],
    latitude: 27.5047,
    longitude: 77.6698,
    built_by: "Vajranabha (Ancient) & Modern Complex",
    timings: "05:00 AM – 09:30 PM",
    dress_code: "Modest Wear (Mobile phones & bags restricted inside)",
    history_summary: "Exact prison cell (Garbha Griha) where Lord Krishna was born over 5,000 years ago.",
    full_history: "Located in the heart of Mathura, the complex houses Keshavdeva Temple, Garbha Griha shrine, and Bhagavata Bhavan.",
    travel: {
      nearest_railway_code: "MTJ",
      nearest_railway_name: "Mathura Junction (3 km)",
      nearest_airport: "Agra Airport (AGR) - 58 km",
      bus_connectivity: "10-minute auto ride from Mathura Junction."
    },
    stays: [
      { stay_name: "Birla Dharamshala Mathura", stay_type: "Dharamshala", price_per_night: "₹350 - ₹650", booking_link_or_contact: "Near Janmabhoomi Gate" }
    ]
  },

  // Jammu & Kashmir
  {
    id: "jk-vaishnodevi",
    name: "Vaishno Devi Temple",
    deity: "Shakti",
    state: "Jammu & Kashmir",
    city: "Katra",
    region: "North India & Himalayas",
    circuit: ["Shakti Peetha", "Iconic"],
    latitude: 33.0308,
    longitude: 74.9490,
    built_by: "Pandavas & Maharaja Gulab Singh",
    timings: "Open 24 Hours (RFID Yatra Card mandatory)",
    dress_code: "Comfortable Trekking / Warm Wear",
    history_summary: "Sacred cave shrine in Trikuta Mountains reached via a 13-km trek from Katra.",
    full_history: "Goddess Vaishno Devi is worshipped in the form of three natural rock heads (Pindies) representing Maha Kali, Maha Lakshmi, and Maha Saraswati.",
    travel: {
      nearest_railway_code: "SVDK",
      nearest_railway_name: "Shri Mata Vaishno Devi Katra Station (2 km to Banganga)",
      nearest_airport: "Jammu Airport (IXJ) - 50 km",
      bus_connectivity: "Direct Vande Bharat & express trains from New Delhi to SVDK."
    },
    stays: [
      { stay_name: "Shrine Board Niharika / Vaishnavi Bhawan", stay_type: "Temple Trust", price_per_night: "₹200 - ₹700", booking_link_or_contact: "maavaishnodevi.org" }
    ]
  },
  {
    id: "jk-amarnath",
    name: "Amarnath Cave Temple",
    deity: "Shiva",
    state: "Jammu & Kashmir",
    city: "Anantnag",
    region: "North India & Himalayas",
    circuit: ["Shakti Peetha", "Iconic"],
    latitude: 34.2157,
    longitude: 75.5042,
    built_by: "Natural Himalayan Cave (3,888m)",
    timings: "Seasonal Yatra (July – August Shravan Month)",
    dress_code: "Heavy Sub-Zero Trekking Gear (Medical Certificate Mandatory)",
    history_summary: "High-altitude cave housing a naturally forming Ice Shivlinga that waxes and wanes with the moon.",
    full_history: "Believed to be the cave where Lord Shiva revealed the secret of immortality (Amar Katha) to Goddess Parvati.",
    travel: {
      nearest_railway_code: "JAT",
      nearest_railway_name: "Jammu Tawi (260 km to Pahalgam/Baltal base)",
      nearest_airport: "Srinagar Airport (SXR) - 95 km to Baltal",
      bus_connectivity: "Yatra convoy buses from Jammu to Pahalgam / Baltal."
    },
    stays: [
      { stay_name: "SASB Yatra Base Camp Tents & Langars", stay_type: "Dharamshala", price_per_night: "Free Langar / ₹400 Tent", booking_link_or_contact: "jksasb.nic.in" }
    ]
  },
  {
    id: "jk-shankaracharya",
    name: "Shankaracharya Temple",
    deity: "Shiva",
    state: "Jammu & Kashmir",
    city: "Srinagar",
    region: "North India & Himalayas",
    circuit: ["Iconic"],
    latitude: 34.0793,
    longitude: 74.8431,
    built_by: "King Gopaditya & Visited by Adi Shankaracharya",
    timings: "07:00 AM – 08:00 PM",
    dress_code: "Modest / Warm Wear",
    history_summary: "Perched on Zabarwan Hill at 1,100 ft above Dal Lake, offering panoramic views of Srinagar.",
    full_history: "One of the oldest shrines in Kashmir valley, Adi Shankaracharya meditated here during his visit to spread Advaita Vedanta.",
    travel: {
      nearest_railway_code: "SINA",
      nearest_railway_name: "Srinagar Railway Station (14 km)",
      nearest_airport: "Srinagar Airport (SXR) - 18 km",
      bus_connectivity: "Cabs up to the base followed by 240 stone steps."
    },
    stays: [
      { stay_name: "Dal Lake Houseboats & Srinagar Hostels", stay_type: "Budget Hostel", price_per_night: "₹600 - ₹1,000", booking_link_or_contact: "Boulevard Road" }
    ]
  },

  // Himachal Pradesh
  {
    id: "hp-hidimba",
    name: "Hidimba Devi Temple",
    deity: "Shakti",
    state: "Himachal Pradesh",
    city: "Manali",
    region: "North India & Himalayas",
    circuit: ["Iconic"],
    latitude: 32.2484,
    longitude: 77.1806,
    built_by: "Maharaja Bahadur Singh (1553)",
    timings: "08:00 AM – 06:00 PM",
    dress_code: "Modest / Warm Wear",
    history_summary: "Four-tiered wooden pagoda temple set inside cedar forests of Dhungri in Manali.",
    full_history: "Dedicated to Hidimba Devi, wife of Pandava Bhima and mother of Ghatotkacha, built over a rock worshiped as her manifestation.",
    travel: {
      nearest_railway_code: "JDNX",
      nearest_railway_name: "Joginder Nagar (145 km) / Chandigarh (300 km)",
      nearest_airport: "Kullu-Manali Airport, Bhuntar (KUU) - 52 km",
      bus_connectivity: "Overnight HRTC Volvo buses from Delhi & Chandigarh."
    },
    stays: [
      { stay_name: "Zostel Old Manali", stay_type: "Budget Hostel", price_per_night: "₹550 - ₹950", booking_link_or_contact: "zostel.com" }
    ]
  },
  {
    id: "hp-jwalaji",
    name: "Jwala Ji Temple",
    deity: "Shakti",
    state: "Himachal Pradesh",
    city: "Kangra",
    region: "North India & Himalayas",
    circuit: ["Shakti Peetha"],
    latitude: 31.8756,
    longitude: 76.3193,
    built_by: "King Bhumi Chand & Maharaja Ranjit Singh (Gold Dome)",
    timings: "05:00 AM – 10:00 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "Shakti Peetha with no idol—nine eternal blue flames burn naturally from rock fissures.",
    full_history: "Marks the spot where Goddess Sati's tongue fell. Emperor Akbar famously tried to extinguish the eternal flames but failed and offered a golden umbrella.",
    travel: {
      nearest_railway_code: "JMKR",
      nearest_railway_name: "Jwalamukhi Road Station (21 km)",
      nearest_airport: "Kangra Airport, Gaggal (DHM) - 46 km",
      bus_connectivity: "Frequent HRTC buses from Kangra, Dharamshala, and Pathankot."
    },
    stays: [
      { stay_name: "Temple Trust Yatri Niwas", stay_type: "Temple Trust", price_per_night: "₹350 - ₹700", booking_link_or_contact: "hpjwalaji.nic.in" }
    ]
  },
  {
    id: "hp-jakhoo",
    name: "Jakhoo Hanuman Temple",
    deity: "Hanuman",
    state: "Himachal Pradesh",
    city: "Shimla",
    region: "North India & Himalayas",
    circuit: ["Iconic"],
    latitude: 31.1008,
    longitude: 77.1844,
    built_by: "Ancient Hilltop Shrine (108-ft Hanuman Statue)",
    timings: "07:00 AM – 08:00 PM",
    dress_code: "Warm Modest Wear",
    history_summary: "Highest point in Shimla (2,455m) where Lord Hanuman rested while searching for Sanjeevani herb.",
    full_history: "Features a towering 108-ft statue of Lord Hanuman visible across Shimla and accessible via the Jakhoo Ropeway.",
    travel: {
      nearest_railway_code: "SML",
      nearest_railway_name: "Shimla Toy Train Station (4 km)",
      nearest_airport: "Shimla Airport, Jubbarhatti (SLV) - 22 km",
      bus_connectivity: "Jakhoo Ropeway from The Ridge, Shimla."
    },
    stays: [
      { stay_name: "Kali Bari Temple Guest House Shimla", stay_type: "Dharamshala", price_per_night: "₹450 - ₹800", booking_link_or_contact: "Near Mall Road" }
    ]
  },

  // Punjab & Haryana
  {
    id: "pb-durgiana",
    name: "Durgiana Temple (Silver Temple)",
    deity: "Shakti",
    state: "Punjab",
    city: "Amritsar",
    region: "North India & Himalayas",
    circuit: ["Iconic"],
    latitude: 31.6285,
    longitude: 74.8679,
    built_by: "Guru Harsai Mal Kapoor (1921)",
    timings: "06:00 AM – 10:00 PM",
    dress_code: "Head Covering Required Inside",
    history_summary: "Built in the architectural style of the Golden Temple amidst a sacred sarovar, with silver doors.",
    full_history: "Dedicated to Goddess Durga, the complex also houses shrines of Lakshmi Narayana and Bada Hanuman where Lava and Kusha are believed to have tied Ashwamedha's horse.",
    travel: {
      nearest_railway_code: "ASR",
      nearest_railway_name: "Amritsar Junction (1.5 km)",
      nearest_airport: "Sri Guru Ram Dass Jee Intl Airport (ATQ) - 11 km",
      bus_connectivity: "Walking distance from Amritsar Railway Station & Lohgarh Gate."
    },
    stays: [
      { stay_name: "Durgiana Mandir Yatri Niwas", stay_type: "Temple Trust", price_per_night: "₹350 - ₹650", booking_link_or_contact: "durgianatemple.org" }
    ]
  },
  {
    id: "hr-kurukshetra",
    name: "Brahma Sarovar & Jyotisar",
    deity: "Vishnu & Shiva",
    state: "Haryana",
    city: "Kurukshetra",
    region: "North India & Himalayas",
    circuit: ["Iconic"],
    latitude: 29.9636,
    longitude: 76.8267,
    built_by: "King Kuru & Rebuilt by Marathas",
    timings: "05:00 AM – 09:00 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "Birthplace of the Bhagavad Gita (Jyotisar) and Asia's largest man-made sacred water tank.",
    full_history: "At Jyotisar, Lord Krishna delivered the immortal sermon of the Bhagavad Gita to Arjuna beneath an ancient banyan tree.",
    travel: {
      nearest_railway_code: "KKDE",
      nearest_railway_name: "Kurukshetra Junction (4 km)",
      nearest_airport: "Chandigarh Airport (IXC) - 95 km",
      bus_connectivity: "Located on NH-44 between Delhi and Chandigarh."
    },
    stays: [
      { stay_name: "Kurukshetra Dharamshalas (Birla Mandir)", stay_type: "Dharamshala", price_per_night: "₹300 - ₹600", booking_link_or_contact: "Near Brahma Sarovar" }
    ]
  },

  // ==================== WEST & CENTRAL INDIA ====================
  // Gujarat
  {
    id: "gj-somnath",
    name: "Somnath Temple",
    deity: "Shiva",
    state: "Gujarat",
    city: "Veraval (Prabhas Patan)",
    region: "West & Central India",
    circuit: ["Jyotirlinga"],
    latitude: 20.8880,
    longitude: 70.4012,
    built_by: "Reconstructed by Sardar Vallabhbhai Patel (1951)",
    timings: "06:00 AM – 10:00 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "First of the 12 Jyotirlingas on the Arabian Sea coast; Baan Stambh points straight to South Pole.",
    full_history: "Destroyed and rebuilt multiple times across history, the modern Chalukya-style temple was consecrated by President Dr. Rajendra Prasad in 1951.",
    travel: {
      nearest_railway_code: "VRL",
      nearest_railway_name: "Veraval Junction (6 km)",
      nearest_airport: "Diu Airport (DIU) - 85 km / Rajkot (HSR)",
      bus_connectivity: "Direct GSRTC buses from Ahmedabad, Dwarka, and Rajkot."
    },
    stays: [
      { stay_name: "Lilavati & Sagar Darshan Atithi Bhavan", stay_type: "Temple Trust", price_per_night: "₹500 - ₹900", booking_link_or_contact: "somnath.org" }
    ]
  },
  {
    id: "gj-dwarkadhish",
    name: "Dwarkadhish Temple (Jagat Mandir)",
    deity: "Vishnu",
    state: "Gujarat",
    city: "Dwarka",
    region: "West & Central India",
    circuit: ["Char Dham", "Divya Desam"],
    latitude: 22.2376,
    longitude: 68.9674,
    built_by: "Vajranabha & Chalukya Dynasty (16th Century)",
    timings: "06:30 AM – 09:30 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "5-storied limestone temple supported by 72 pillars at Gomti Creek; flag changes 5 times daily.",
    full_history: "Part of the Char Dham pilgrimage, the 52-yard ceremonial flag (Dhwaja) atop the 78m spire is hoisted five times every day by Aboti Brahmins.",
    travel: {
      nearest_railway_code: "DWK",
      nearest_railway_name: "Dwarka Station (2.5 km)",
      nearest_airport: "Jamnagar Airport (JGA) - 130 km",
      bus_connectivity: "Direct trains & buses from Ahmedabad and Somnath."
    },
    stays: [
      { stay_name: "Birla Dharamshala / Gujrati Samaj", stay_type: "Dharamshala", price_per_night: "₹400 - ₹750", booking_link_or_contact: "Near Temple Square" }
    ]
  },
  {
    id: "gj-nageshwar",
    name: "Nageshwar Jyotirlinga",
    deity: "Shiva",
    state: "Gujarat",
    city: "Dwarka",
    region: "West & Central India",
    circuit: ["Jyotirlinga"],
    latitude: 22.3358,
    longitude: 69.0869,
    built_by: "Ancient Shrine (82-ft Seated Shiva Statue)",
    timings: "06:00 AM – 09:30 PM",
    dress_code: "Traditional Wear (Dhoti for Garbhagriha Puja)",
    history_summary: "One of the 12 Jyotirlingas located between Gomti Dwarka and Beyt Dwarka island.",
    full_history: "Enshrines a south-facing Jyotirlinga made of Dwarka Shila, symbolizing protection from all worldly poisons.",
    travel: {
      nearest_railway_code: "DWK",
      nearest_railway_name: "Dwarka Station (17 km)",
      nearest_airport: "Jamnagar Airport (JGA) - 125 km",
      bus_connectivity: "Local darshan buses & shared autos from Dwarkadhish Temple."
    },
    stays: [
      { stay_name: "Dwarka Trust Dharamshalas", stay_type: "Dharamshala", price_per_night: "₹400 - ₹700", booking_link_or_contact: "Dwarka Town" }
    ]
  },
  {
    id: "gj-ambaji",
    name: "Ambaji Temple",
    deity: "Shakti",
    state: "Gujarat",
    city: "Banaskantha",
    region: "West & Central India",
    circuit: ["Shakti Peetha"],
    latitude: 24.3310,
    longitude: 72.8515,
    built_by: "Nagar Brahmins & Solanki Rulers",
    timings: "07:00 AM – 09:00 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "Major Shakti Peetha with no idol—devotees worship the sacred Shree Visa Yantra.",
    full_history: "Situated near the Aravalli hills on the Gujarat-Rajasthan border, this is where Goddess Sati's heart fell.",
    travel: {
      nearest_railway_code: "ABR",
      nearest_railway_name: "Abu Road Station (20 km)",
      nearest_airport: "Ahmedabad Airport (AMD) - 180 km",
      bus_connectivity: "Frequent buses from Abu Road and Palanpur."
    },
    stays: [
      { stay_name: "Ambaji Temple Trust Guest House", stay_type: "Temple Trust", price_per_night: "₹350 - ₹700", booking_link_or_contact: "ambajitemple.in" }
    ]
  },

  // Maharashtra
  {
    id: "mh-siddhivinayak",
    name: "Siddhivinayak Temple",
    deity: "Ganesha",
    state: "Maharashtra",
    city: "Mumbai",
    region: "West & Central India",
    circuit: ["Iconic"],
    latitude: 19.0169,
    longitude: 72.8304,
    built_by: "Laxman Vithu & Deubai Patil (1801)",
    timings: "05:30 AM – 10:00 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "Iconic Mumbai Ganesha shrine with a rare right-tilted trunk (Siddhi Vinayak) and gold-plated dome.",
    full_history: "Originally a small brick structure built in 1801 in Prabhadevi, it has grown into one of India's most revered Ganesha temples.",
    travel: {
      nearest_railway_code: "DDR",
      nearest_railway_name: "Dadar Station (1.5 km)",
      nearest_airport: "Chhatrapati Shivaji Maharaj Intl Airport (BOM) - 12 km",
      bus_connectivity: "15-min walk or cab from Dadar Western/Central station."
    },
    stays: [
      { stay_name: "Dadar & Prabhadevi Backpacker Hostels", stay_type: "Budget Hostel", price_per_night: "₹700 - ₹1,200", booking_link_or_contact: "Dadar West" }
    ]
  },
  {
    id: "mh-shirdi",
    name: "Shirdi Sai Baba Temple",
    deity: "Sai Baba",
    state: "Maharashtra",
    city: "Shirdi",
    region: "West & Central India",
    circuit: ["Iconic"],
    latitude: 19.7668,
    longitude: 74.4774,
    built_by: "Shreemant Gopalrao Buti (1922)",
    timings: "04:00 AM – 11:00 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "Samadhi Mandir of Saint Sai Baba, welcoming millions of devotees across all faiths.",
    full_history: "Includes Dwarkamai mosque, Chavadi, Gurusthan, and Sai Prasadalaya—one of India's largest solar-powered free/subsidized meal halls.",
    travel: {
      nearest_railway_code: "SNSI",
      nearest_railway_name: "Sainagar Shirdi Station (3 km)",
      nearest_airport: "Shirdi Airport (SAG) - 14 km",
      bus_connectivity: "Frequent MSRTC buses from Pune, Nashik, and Mumbai."
    },
    stays: [
      { stay_name: "Sai Ashram Bhaktaniwas (1,500+ Rooms)", stay_type: "Temple Trust", price_per_night: "₹200 - ₹600", booking_link_or_contact: "online.sai.org.in" }
    ]
  },
  {
    id: "mh-trimbakeshwar",
    name: "Trimbakeshwar Temple",
    deity: "Shiva",
    state: "Maharashtra",
    city: "Nashik",
    region: "West & Central India",
    circuit: ["Jyotirlinga"],
    latitude: 19.9322,
    longitude: 73.5307,
    built_by: "Peshwa Balaji Baji Rao (Nanasaheb - 18th Century)",
    timings: "05:30 AM – 09:00 PM",
    dress_code: "Silk/Cotton Dhoti Mandatory for Garbhagriha",
    history_summary: "Jyotirlinga at the origin of River Godavari (Brahmagiri Hills) with a 3-faced Lingam (Brahma-Vishnu-Shiva).",
    full_history: "Built in black basalt stone in Maratha-Hemadpanthi style, this is also one of the four Kumbh Mela host towns.",
    travel: {
      nearest_railway_code: "NK",
      nearest_railway_name: "Nashik Road Station (38 km)",
      nearest_airport: "Ozar Nashik Airport (ISK) - 52 km",
      bus_connectivity: "Frequent MSRTC buses from Nashik CBS."
    },
    stays: [
      { stay_name: "Gajanan Maharaj Sansthan Bhakt Niwas", stay_type: "Dharamshala", price_per_night: "₹350 - ₹700", booking_link_or_contact: "Trimbak Town" }
    ]
  },
  {
    id: "mh-bhimashankar",
    name: "Bhimashankar Temple",
    deity: "Shiva",
    state: "Maharashtra",
    city: "Pune",
    region: "West & Central India",
    circuit: ["Jyotirlinga"],
    latitude: 19.0721,
    longitude: 73.5357,
    built_by: "Nana Phadnavis (18th Century Nagara Spire)",
    timings: "04:30 AM – 09:30 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "Jyotirlinga nestled inside the Sahyadri hills and Bhimashankar Wildlife Sanctuary.",
    full_history: "Source of the Bhima River, the temple blends ancient Hemadpanthi stonework with a tall Nagara shikhara added by Nana Phadnavis.",
    travel: {
      nearest_railway_code: "PUNE",
      nearest_railway_name: "Pune Junction (110 km)",
      nearest_airport: "Pune Airport (PNQ) - 105 km",
      bus_connectivity: "Direct MSRTC buses from Pune Shivajinagar Bus Stand."
    },
    stays: [
      { stay_name: "Bhimashankar Trust Bhakta Niwas", stay_type: "Temple Trust", price_per_night: "₹400 - ₹800", booking_link_or_contact: "bhimashankar.in" }
    ]
  },
  {
    id: "mh-grishneshwar",
    name: "Grishneshwar Temple",
    deity: "Shiva",
    state: "Maharashtra",
    city: "Chhatrapati Sambhajinagar (Ellora)",
    region: "West & Central India",
    circuit: ["Jyotirlinga"],
    latitude: 20.0249,
    longitude: 75.1698,
    built_by: "Maharani Ahilyabai Holkar (18th Century)",
    timings: "05:30 AM – 09:30 PM",
    dress_code: "Men must be bare-chested inside Garbhagriha",
    history_summary: "12th Jyotirlinga located right next to the UNESCO Ellora Caves, built in red volcanic rock.",
    full_history: "Reconstructed by Ahilyabai Holkar, the temple features intricate carvings of Dashavatara and Maratha craftsmanship.",
    travel: {
      nearest_railway_code: "AWB",
      nearest_railway_name: "Aurangabad / Chhatrapati Sambhajinagar (30 km)",
      nearest_airport: "Aurangabad Airport (IXU) - 36 km",
      bus_connectivity: "Buses towards Ellora Caves stop right near the temple."
    },
    stays: [
      { stay_name: "Ellora & Sambhajinagar Budget Hotels", stay_type: "Budget Hostel", price_per_night: "₹500 - ₹900", booking_link_or_contact: "Near Ellora" }
    ]
  },

  // Madhya Pradesh
  {
    id: "mp-mahakaleshwar",
    name: "Mahakaleshwar Temple",
    deity: "Shiva",
    state: "Madhya Pradesh",
    city: "Ujjain",
    region: "West & Central India",
    circuit: ["Jyotirlinga"],
    latitude: 23.1828,
    longitude: 75.7682,
    built_by: "Maratha General Ranoji Shinde (1734)",
    timings: "03:00 AM – 11:00 PM (Bhasma Aarti at 4 AM)",
    dress_code: "Dhoti & Saree Mandatory for Bhasma Aarti",
    history_summary: "Only Dakshinamukhi (south-facing) Jyotirlinga, world-famous for the pre-dawn Bhasma Aarti.",
    full_history: "Situated beside Rudra Sagar lake and the newly built Mahakal Lok Corridor, the idol is believed to be Swayambhu.",
    travel: {
      nearest_railway_code: "UJN",
      nearest_railway_name: "Ujjain Junction (2 km)",
      nearest_airport: "Devi Ahilya Bai Holkar Airport, Indore (IDR) - 55 km",
      bus_connectivity: "Frequent buses & trains from Indore (1 hr)."
    },
    stays: [
      { stay_name: "Mahakaleshwar Bhakt Niwas", stay_type: "Temple Trust", price_per_night: "₹400 - ₹800", booking_link_or_contact: "shrimahakaleshwar.com" }
    ]
  },
  {
    id: "mp-omkareshwar",
    name: "Omkareshwar Temple",
    deity: "Shiva",
    state: "Madhya Pradesh",
    city: "Khandwa",
    region: "West & Central India",
    circuit: ["Jyotirlinga"],
    latitude: 22.2455,
    longitude: 76.1510,
    built_by: "Paramara Kings of Malwa",
    timings: "05:00 AM – 09:30 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "Jyotirlinga on Mandhata Island in the Narmada River, naturally shaped like the sacred 'Om' symbol.",
    full_history: "Pilgrims visit both Omkareshwar on the island and Amareshwar on the southern bank of Narmada.",
    travel: {
      nearest_railway_code: "OM",
      nearest_railway_name: "Omkareshwar Road (12 km) / Khandwa (77 km)",
      nearest_airport: "Indore Airport (IDR) - 82 km",
      bus_connectivity: "Direct buses from Indore and Ujjain."
    },
    stays: [
      { stay_name: "Gajanan Maharaj Sansthan Omkareshwar", stay_type: "Dharamshala", price_per_night: "₹300 - ₹600", booking_link_or_contact: "Near Mamleshwar Ghat" }
    ]
  },
  {
    id: "mp-khajuraho",
    name: "Kandariya Mahadeva Temple",
    deity: "Shiva",
    state: "Madhya Pradesh",
    city: "Khajuraho",
    region: "West & Central India",
    circuit: ["UNESCO"],
    latitude: 24.8530,
    longitude: 79.9196,
    built_by: "Chandela King Vidyadhara (1030 CE)",
    timings: "06:00 AM – 06:00 PM",
    dress_code: "Modest Wear",
    history_summary: "Tallest and most ornate sandstone temple in the UNESCO Khajuraho Western Group.",
    full_history: "Rising 31 meters high with 84 subsidiary spires resembling Mount Kailash, it features over 800 finely sculpted sandstone figures.",
    travel: {
      nearest_railway_code: "KURJ",
      nearest_railway_name: "Khajuraho Station (9 km)",
      nearest_airport: "Khajuraho Airport (HJR) - 5 km",
      bus_connectivity: "Autos & cycle rentals available across Khajuraho."
    },
    stays: [
      { stay_name: "Zostel Khajuraho", stay_type: "Budget Hostel", price_per_night: "₹500 - ₹850", booking_link_or_contact: "zostel.com" }
    ]
  },

  // Rajasthan
  {
    id: "rj-pushkar",
    name: "Jagatpita Brahma Temple",
    deity: "Brahma",
    state: "Rajasthan",
    city: "Pushkar",
    region: "West & Central India",
    circuit: ["Iconic"],
    latitude: 26.4874,
    longitude: 74.5514,
    built_by: "Adi Shankaracharya & Maharaja Jawat Raj (14th Century)",
    timings: "06:00 AM – 08:30 PM",
    dress_code: "Modest Wear",
    history_summary: "One of the very few prominent temples in the world dedicated to Lord Brahma, beside Pushkar Lake.",
    full_history: "Recognizable by its red pinnacle (shikhara) and hamsa (swan) motif, built of marble and stone slabs inlaid with silver coins.",
    travel: {
      nearest_railway_code: "AII",
      nearest_railway_name: "Ajmer Junction (15 km)",
      nearest_airport: "Kishangarh Airport (KQH) - 40 km",
      bus_connectivity: "Frequent RSRTC buses from Ajmer over Nag Pahar."
    },
    stays: [
      { stay_name: "Zostel Pushkar / Ghat Dharamshalas", stay_type: "Budget Hostel", price_per_night: "₹450 - ₹800", booking_link_or_contact: "zostel.com" }
    ]
  },
  {
    id: "rj-khatushyam",
    name: "Khatu Shyam Ji Temple",
    deity: "Vishnu",
    state: "Rajasthan",
    city: "Sikar",
    region: "West & Central India",
    circuit: ["Iconic"],
    latitude: 27.3698,
    longitude: 75.4024,
    built_by: "Roopsingh Chauhan (1027 CE) & Diwan Abhaisingh",
    timings: "04:30 AM – 10:00 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "Shrine of Barbarika (grandson of Bhima), blessed by Krishna to be worshipped as Shyam in Kaliyuga.",
    full_history: "Built in Makrana marble, lakhs of devotees walk bare-foot carrying Nishan flags during the Phalguna Mela.",
    travel: {
      nearest_railway_code: "RGS",
      nearest_railway_name: "Ringas Junction (17 km)",
      nearest_airport: "Jaipur Intl Airport (JAI) - 95 km",
      bus_connectivity: "Shared jeeps & buses from Ringas and Jaipur."
    },
    stays: [
      { stay_name: "Shyam Mandir Committee Dharamshalas", stay_type: "Dharamshala", price_per_night: "₹300 - ₹700", booking_link_or_contact: "shrishyamdarshan.in" }
    ]
  },
  {
    id: "rj-karnimata",
    name: "Karni Mata Temple",
    deity: "Shakti",
    state: "Rajasthan",
    city: "Deshnoke (Bikaner)",
    region: "West & Central India",
    circuit: ["Iconic"],
    latitude: 27.7912,
    longitude: 73.3409,
    built_by: "Maharaja Ganga Singh of Bikaner (20th Century)",
    timings: "04:00 AM – 10:00 PM",
    dress_code: "Modest Wear (Socks allowed inside)",
    history_summary: "Famous marble shrine housing over 25,000 sacred rats (Kabbas); spotting a white rat is auspicious.",
    full_history: "Features magnificent carved marble facades and solid silver gates donated by Maharaja Ganga Singh.",
    travel: {
      nearest_railway_code: "DSO",
      nearest_railway_name: "Deshnoke Station (0.5 km) / Bikaner (30 km)",
      nearest_airport: "Bikaner Nal Airport (BKB) - 45 km",
      bus_connectivity: "Frequent buses & trains on the Bikaner-Jodhpur route."
    },
    stays: [
      { stay_name: "Deshnoke & Bikaner Budget Stays", stay_type: "Dharamshala", price_per_night: "₹400 - ₹750", booking_link_or_contact: "Bikaner City" }
    ]
  },
  {
    id: "rj-dilwara",
    name: "Dilwara Jain Temples",
    deity: "Jain Tirthankaras",
    state: "Rajasthan",
    city: "Mount Abu",
    region: "West & Central India",
    circuit: ["Iconic"],
    latitude: 24.6093,
    longitude: 72.7229,
    built_by: "Vimal Shah & Vastupal-Tejpal (11th – 13th Century)",
    timings: "12:00 PM – 05:00 PM (For Tourists)",
    dress_code: "Strict Modest Wear (No leather items allowed)",
    history_summary: "World-renowned for translucent white marble carvings so fine they resemble lacework.",
    full_history: "Comprises five temples—Vimal Vasahi and Luna Vasahi being the finest examples of Solanki-Jain marble craftsmanship.",
    travel: {
      nearest_railway_code: "ABR",
      nearest_railway_name: "Abu Road Station (29 km)",
      nearest_airport: "Udaipur Airport (UDR) - 175 km",
      bus_connectivity: "RSRTC hill buses & shared taxis from Abu Road."
    },
    stays: [
      { stay_name: "Jain Dharamshalas (Mount Abu)", stay_type: "Dharamshala", price_per_night: "₹350 - ₹750", booking_link_or_contact: "Near Nakki Lake" }
    ]
  },

  // ==================== EAST & NORTH-EAST INDIA ====================
  // Odisha
  {
    id: "od-puri",
    name: "Shree Jagannath Temple",
    deity: "Vishnu",
    state: "Odisha",
    city: "Puri",
    region: "East & North-East India",
    circuit: ["Char Dham"],
    latitude: 19.8049,
    longitude: 85.8179,
    built_by: "King Anantavarman Chodaganga Deva (12th Century)",
    timings: "05:00 AM – 11:00 PM",
    dress_code: "Strict Traditional Wear (Dhoti/Kurta/Saree)",
    history_summary: "Char Dham shrine famous for Rath Yatra, the flag flying against the wind, and Mahaprasad kitchen.",
    full_history: "Unlike stone idols, Lord Jagannath, Balabhadra, and Subhadra are carved from sacred Neem wood (Daru Brahma) and renewed every 12–19 years during Nabakalebara.",
    travel: {
      nearest_railway_code: "PURI",
      nearest_railway_name: "Puri Railway Station (2.5 km)",
      nearest_airport: "Biju Patnaik Intl Airport, Bhubaneswar (BBI) - 60 km",
      bus_connectivity: "Direct trains from Visakhapatnam (VSKP), Howrah, and New Delhi."
    },
    stays: [
      { stay_name: "Neeladri & Gundicha Bhakta Nivas", stay_type: "Temple Trust", price_per_night: "₹400 - ₹700", booking_link_or_contact: "shreejagannatha.in" }
    ]
  },
  {
    id: "od-konark",
    name: "Konark Sun Temple",
    deity: "Surya",
    state: "Odisha",
    city: "Konark",
    region: "East & North-East India",
    circuit: ["UNESCO"],
    latitude: 19.8876,
    longitude: 86.0945,
    built_by: "Eastern Ganga King Narasimhadeva I (1250 CE)",
    timings: "06:00 AM – 08:00 PM",
    dress_code: "Modest Wear",
    history_summary: "UNESCO 13th-century stone chariot of Sun God Surya with 24 sundial wheels drawn by 7 horses.",
    full_history: "Designed so the first rays of sunrise hit the main entrance; its 24 intricately carved wheels act as accurate sundials.",
    travel: {
      nearest_railway_code: "PURI",
      nearest_railway_name: "Puri Station (35 km)",
      nearest_airport: "Bhubaneswar Airport (BBI) - 65 km",
      bus_connectivity: "Scenic Marine Drive buses from Puri and Bhubaneswar."
    },
    stays: [
      { stay_name: "OTDC Yatri Nivas Konark", stay_type: "Budget Hostel", price_per_night: "₹600 - ₹1,000", booking_link_or_contact: "odishatourism.gov.in" }
    ]
  },
  {
    id: "od-lingaraja",
    name: "Lingaraja Temple",
    deity: "Shiva",
    state: "Odisha",
    city: "Bhubaneswar",
    region: "East & North-East India",
    circuit: ["Iconic"],
    latitude: 20.2382,
    longitude: 85.8338,
    built_by: "Somavamsi King Jajati Keshari (11th Century)",
    timings: "05:00 AM – 09:00 PM",
    dress_code: "Traditional Wear",
    history_summary: "Pinnacle of Kalinga architecture with a 180-ft Rekha Deula spire worshipping Harihara (Shiva + Vishnu).",
    full_history: "Located in Old Town Bhubaneswar beside Bindusagar Lake, surrounded by over 50 smaller shrines inside a fortified compound.",
    travel: {
      nearest_railway_code: "BBS",
      nearest_railway_name: "Bhubaneswar Station (4 km)",
      nearest_airport: "Bhubaneswar Airport (BBI) - 4 km",
      bus_connectivity: "Mo Bus routes from Bhubaneswar Railway Station & Airport."
    },
    stays: [
      { stay_name: "Old Town Pilgrim Guest Houses", stay_type: "Dharamshala", price_per_night: "₹450 - ₹800", booking_link_or_contact: "Near Bindusagar" }
    ]
  },

  // Jharkhand
  {
    id: "jh-baidyanath",
    name: "Baba Baidyanath Temple",
    deity: "Shiva",
    state: "Jharkhand",
    city: "Deoghar",
    region: "East & North-East India",
    circuit: ["Jyotirlinga", "Shakti Peetha"],
    latitude: 24.4925,
    longitude: 86.7000,
    built_by: "Raja Puran Mal (1596)",
    timings: "04:00 AM – 09:00 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "Both a Jyotirlinga and Shakti Peetha (Jaya Durga); culmination of the 105-km Shravani Kanwar Yatra.",
    full_history: "Legend says Ravana carried this Jyotirlinga from Kailash before placing it at Deoghar; topped with a rare Panchashula trident instead of a Trishul.",
    travel: {
      nearest_railway_code: "JSME",
      nearest_railway_name: "Jasidih Junction (7 km) / Baidyanathdham (1 km)",
      nearest_airport: "Deoghar Airport (DGH) - 10 km",
      bus_connectivity: "Autos & e-rickshaws from Jasidih Junction."
    },
    stays: [
      { stay_name: "Deoghar Panda Dharamshalas", stay_type: "Dharamshala", price_per_night: "₹300 - ₹650", booking_link_or_contact: "babadham.org" }
    ]
  },

  // Bihar
  {
    id: "br-mahabodhi",
    name: "Mahabodhi Temple",
    deity: "Buddha",
    state: "Bihar",
    city: "Bodh Gaya",
    region: "East & North-East India",
    circuit: ["UNESCO"],
    latitude: 24.6961,
    longitude: 84.9914,
    built_by: "Emperor Ashoka (3rd Century BCE) & Gupta Dynasty",
    timings: "05:00 AM – 09:00 PM",
    dress_code: "Modest Wear (No phones/shoes inside inner sanctum)",
    history_summary: "UNESCO World Heritage site marking the exact spot where Siddhartha Gautama attained Enlightenment.",
    full_history: "Houses the sacred Bodhi Tree (direct descendant of the original tree) and the Vajrasana (Diamond Throne) installed by Emperor Ashoka.",
    travel: {
      nearest_railway_code: "GAYA",
      nearest_railway_name: "Gaya Junction (16 km)",
      nearest_airport: "Gaya Airport (GAY) - 10 km",
      bus_connectivity: "Shared autos & buses from Gaya Junction."
    },
    stays: [
      { stay_name: "Buddhist Monastery Guest Houses (Tibetan / Thai / Japanese)", stay_type: "Dharamshala", price_per_night: "₹300 - ₹700", booking_link_or_contact: "Bodh Gaya" }
    ]
  },
  {
    id: "br-vishnupad",
    name: "Vishnupad Temple",
    deity: "Vishnu",
    state: "Bihar",
    city: "Gaya",
    region: "East & North-East India",
    circuit: ["Iconic"],
    latitude: 24.7775,
    longitude: 85.0081,
    built_by: "Maharani Ahilyabai Holkar (1787)",
    timings: "05:00 AM – 09:00 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "Enshrines a 40-cm footprint of Lord Vishnu imprinted in solid basalt rock beside the Falgu River.",
    full_history: "Constructed in grey granite by Queen Ahilyabai Holkar, Gaya is the foremost site for Pind Daan ancestral rituals.",
    travel: {
      nearest_railway_code: "GAYA",
      nearest_railway_name: "Gaya Junction (4 km)",
      nearest_airport: "Gaya Airport (GAY) - 9 km",
      bus_connectivity: "15-min auto ride from Gaya Railway Station."
    },
    stays: [
      { stay_name: "Gaya Pilgrim Dharamshalas", stay_type: "Dharamshala", price_per_night: "₹350 - ₹650", booking_link_or_contact: "Near Vishnupad Ghat" }
    ]
  },

  // West Bengal
  {
    id: "wb-dakshineswar",
    name: "Dakshineswar Kali Temple",
    deity: "Shakti",
    state: "West Bengal",
    city: "Kolkata",
    region: "East & North-East India",
    circuit: ["Iconic"],
    latitude: 22.6548,
    longitude: 88.3575,
    built_by: "Rani Rashmoni (1855)",
    timings: "06:00 AM – 08:30 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "Navaratna (9-spired) temple on the Hooghly River where Sri Ramakrishna Paramahamsa served as priest.",
    full_history: "Features Goddess Bhavatarini (Kali), 12 Shiva temples along the river ghat, and Sri Ramakrishna's preserved living quarters.",
    travel: {
      nearest_railway_code: "DAKE",
      nearest_railway_name: "Dakshineswar Station (0.5 km) / Howrah (12 km)",
      nearest_airport: "Netaji Subhas Chandra Bose Airport (CCU) - 14 km",
      bus_connectivity: "Direct Kolkata Metro Blue Line to Dakshineswar Station."
    },
    stays: [
      { stay_name: "Dakshineswar Guest House / Kolkata Hostels", stay_type: "Dharamshala", price_per_night: "₹400 - ₹750", booking_link_or_contact: "Near Skywalk" }
    ]
  },
  {
    id: "wb-kalighat",
    name: "Kalighat Kali Temple",
    deity: "Shakti",
    state: "West Bengal",
    city: "Kolkata",
    region: "East & North-East India",
    circuit: ["Shakti Peetha"],
    latitude: 22.5200,
    longitude: 88.3422,
    built_by: "Sabarna Roy Choudhury Family (1809)",
    timings: "05:00 AM – 10:30 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "One of the 51 Shakti Peethas where the toes of Goddess Sati's right foot fell; gave Kolkata its name.",
    full_history: "Built in traditional Bengal Atchala architecture on the banks of Adi Ganga, famous for its distinctive three-eyed touchstone Kali idol.",
    travel: {
      nearest_railway_code: "HWH",
      nearest_railway_name: "Howrah (9 km) / Sealdah (7 km)",
      nearest_airport: "Kolkata Airport (CCU) - 24 km",
      bus_connectivity: "Kalighat Metro Station (500m walk)."
    },
    stays: [
      { stay_name: "Kalighat & Park Street Backpacker Hostels", stay_type: "Budget Hostel", price_per_night: "₹550 - ₹900", booking_link_or_contact: "South Kolkata" }
    ]
  },

  // Assam & North-East
  {
    id: "as-kamakhya",
    name: "Kamakhya Temple",
    deity: "Shakti",
    state: "Assam",
    city: "Guwahati",
    region: "East & North-East India",
    circuit: ["Shakti Peetha"],
    latitude: 26.1664,
    longitude: 91.7055,
    built_by: "Mlechchha Dynasty & Koch King Nara Narayana (1565)",
    timings: "08:00 AM – 05:30 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "Oldest and foremost of the 51 Shakti Peethas atop Nilachal Hill; renowned for Ambubachi Mela.",
    full_history: "Has no sculpted idol; instead, devotees worship a natural rock fissure fed by an underground spring inside the cave sanctum.",
    travel: {
      nearest_railway_code: "KYQ",
      nearest_railway_name: "Kamakhya Junction (4 km) / Guwahati (GHY - 8 km)",
      nearest_airport: "Lokpriya Gopinath Bordoloi Airport (GAU) - 20 km",
      bus_connectivity: "ASTC shuttle buses & shared taxis up Nilachal Hill."
    },
    stays: [
      { stay_name: "Kamakhya Debutter Board Guest House", stay_type: "Temple Trust", price_per_night: "₹400 - ₹800", booking_link_or_contact: "kamakhyatemple.org" }
    ]
  },
  {
    id: "tr-tripurasundari",
    name: "Tripura Sundari Temple (Matabari)",
    deity: "Shakti",
    state: "Tripura",
    city: "Udaipur",
    region: "East & North-East India",
    circuit: ["Shakti Peetha"],
    latitude: 23.5110,
    longitude: 91.4981,
    built_by: "Maharaja Dhanya Manikya (1501)",
    timings: "06:00 AM – 09:00 PM",
    dress_code: "Modest / Traditional Wear",
    history_summary: "Shakti Peetha built on a tortoise-shaped hill (Kurma Pitha) beside Kalyan Sagar lake.",
    full_history: "Marks where Goddess Sati's right foot fell; the shrine houses two identical black stone idols—Tripura Sundari and Chhoti Ma.",
    travel: {
      nearest_railway_code: "UDPU",
      nearest_railway_name: "Udaipur Tripura Station (4 km)",
      nearest_airport: "Maharaja Bir Bikram Airport, Agartala (IXA) - 65 km",
      bus_connectivity: "Frequent buses & shared jeeps from Agartala (55 km)."
    },
    stays: [
      { stay_name: "Matabari Pilgrim Guest House", stay_type: "Temple Trust", price_per_night: "₹350 - ₹700", booking_link_or_contact: "Udaipur Tripura" }
    ]
  }
];