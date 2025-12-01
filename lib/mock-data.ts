export interface ProvinceData {
  id: string; // BPS Code matches GeoJSON
  name: string;
  travel_score: number; // 1-100
  econ_score: number;   // 1-100
  tags: string[];
  description_travel: string;
  description_econ: string;
  actions: string[];
  coordinates: [number, number]; // Lat, Lng
}

export const PROVINCE_DB: ProvinceData[] = [
  // --- SUMATRA ---
  {
    id: "11",
    name: "Aceh",
    travel_score: 80,
    econ_score: 70,
    tags: ["religious", "diving", "coffee", "gas", "nature"],
    description_travel: "The porch of Mecca, offering world-class diving in Sabang and rich Islamic heritage.",
    description_econ: "Special economic zone with focus on Oil & Gas, and high-quality Gayo Coffee export.",
    actions: ["Diving in Pulau Weh", "Visit Baiturrahman Grand Mosque", "Sourcing Gayo Arabica Coffee"],
    coordinates: [4.6951, 96.7494]
  },
  {
    id: "12",
    name: "North Sumatra",
    travel_score: 88,
    econ_score: 85,
    tags: ["nature", "lake", "plantation", "export", "culture"],
    description_travel: "Home to Lake Toba (world's largest volcanic lake) and orangutan sanctuaries in Bukit Lawang.",
    description_econ: "A massive plantation hub (Palm Oil, Rubber) with the strategic port of Belawan.",
    actions: ["Stay on Samosir Island", "Orangutan trekking", "Visit Medan Industrial Estate"],
    coordinates: [2.1154, 99.5451]
  },
  {
    id: "13",
    name: "West Sumatra",
    travel_score: 90,
    econ_score: 75,
    tags: ["food", "culture", "nature", "agriculture", "halal"],
    description_travel: "The land of Minangkabau culture, stunning canyons, and the world-famous Rendang cuisine.",
    description_econ: "Strong in agriculture, cement production, and growing Halal tourism industry.",
    actions: ["Culinary tour in Padang", "Visit Jam Gadang Bukittinggi", "Explore Sianok Canyon"],
    coordinates: [-0.7399, 100.8000]
  },
  {
    id: "14",
    name: "Riau",
    travel_score: 60,
    econ_score: 92,
    tags: ["oil", "palm oil", "business", "history"],
    description_travel: "Historical Malay architecture and the Siak Palace, though primarily an industrial region.",
    description_econ: "The energy powerhouse of Indonesia, dominating in petroleum and palm oil production.",
    actions: ["Visit Siak Sri Indrapura Palace", "Palm Oil plantation tour", "Business meeting in Pekanbaru"],
    coordinates: [0.2933, 101.7068]
  },
  {
    id: "15",
    name: "Jambi",
    travel_score: 65,
    econ_score: 72,
    tags: ["history", "temple", "plantation", "coal"],
    description_travel: "Home to the Muaro Jambi Temple Complex, one of the largest archaeological sites in Southeast Asia.",
    description_econ: "Economy driven by oil, gas, coal mining, and rubber plantations.",
    actions: ["Explore Muaro Jambi Temple", "Kerinci Seblat National Park", "Rubber commodity sourcing"],
    coordinates: [-1.6101, 103.6131]
  },
  {
    id: "16",
    name: "South Sumatra",
    travel_score: 75,
    econ_score: 82,
    tags: ["food", "history", "coal", "infrastructure"],
    description_travel: "Famous for Pempek cuisine and the iconic Ampera Bridge over the Musi River.",
    description_econ: "Rich in coal and natural gas, with excellent infrastructure connecting to Java.",
    actions: ["Culinary tour (Pempek)", "Photo at Ampera Bridge", "Visit Coal Mining sites"],
    coordinates: [-3.3194, 104.9144]
  },
  {
    id: "17",
    name: "Bengkulu",
    travel_score: 70,
    econ_score: 65,
    tags: ["history", "nature", "gold", "coffee"],
    description_travel: "Historic British colonial ties (Fort Marlborough) and home to the giant Rafflesia flower.",
    description_econ: "Potential in gold mining, coffee, and palm oil, with a growing coastal economy.",
    actions: ["Visit Fort Marlborough", "Track Rafflesia Arnoldii", "Robusta Coffee tasting"],
    coordinates: [-3.5778, 102.3464]
  },
  {
    id: "18",
    name: "Lampung",
    travel_score: 78,
    econ_score: 76,
    tags: ["surfing", "wildlife", "coffee", "agriculture"],
    description_travel: "The gateway to Sumatra, famous for Krui surfing spots and Way Kambas Elephant Reserve.",
    description_econ: "Major producer of Robusta coffee, sugar cane, and pineapples (Great Giant Pineapple).",
    actions: ["Surf trip to Krui", "See Elephants at Way Kambas", "Coffee plantation visit"],
    coordinates: [-4.5586, 105.4068]
  },
  {
    id: "19",
    name: "Bangka Belitung",
    travel_score: 85,
    econ_score: 78,
    tags: ["beach", "tin", "film", "geopark"],
    description_travel: "Stunning granite rock beaches made famous by the movie 'Laskar Pelangi'.",
    description_econ: "The world's second-largest tin producer, now diversifying into marine tourism.",
    actions: ["Island hopping in Belitung", "Visit Tin Museum", "Enjoy seafood in Pangkal Pinang"],
    coordinates: [-2.7411, 106.4406]
  },
  {
    id: "21",
    name: "Riau Islands (Kepri)",
    travel_score: 82,
    econ_score: 90,
    tags: ["resort", "manufacturing", "trade", "singapore", "electronics"],
    description_travel: "Luxury resorts in Bintan and shopping in Batam, a short ferry ride from Singapore.",
    description_econ: "A Free Trade Zone (FTZ) specializing in electronics manufacturing and shipyards.",
    actions: ["Luxury stay in Bintan", "Factory visit in Batamindo", "Golfing weekend"],
    coordinates: [3.9456, 108.1428]
  },

  // --- JAVA ---
  {
    id: "31",
    name: "DKI Jakarta",
    travel_score: 75,
    econ_score: 99,
    tags: ["city", "finance", "tech", "shopping", "luxury", "startup"],
    description_travel: "A sprawling metropolis offering high-end shopping, history, and vibrant nightlife.",
    description_econ: "The economic engine of Indonesia. Best for fintech, corporate HQs, and retail franchises.",
    actions: ["Visit Indonesia Stock Exchange", "Luxury retail tour at Grand Indonesia", "Meeting at SCBD"],
    coordinates: [-6.2088, 106.8456]
  },
  {
    id: "32",
    name: "West Java",
    travel_score: 88,
    econ_score: 95,
    tags: ["manufacturing", "nature", "tea", "textile", "auto"],
    description_travel: "Cool highlands of Bandung, tea plantations, and surfing in Pangandaran.",
    description_econ: "The manufacturing hub of Indonesia (Bekasi/Karawang) for automotive and textiles.",
    actions: ["Glamping in Ciwidey", "Factory visit in Cikarang", "Shopping at Bandung Factory Outlets"],
    coordinates: [-6.9175, 107.6191]
  },
  {
    id: "33",
    name: "Central Java",
    travel_score: 92,
    econ_score: 88,
    tags: ["culture", "heritage", "manufacturing", "cheap", "furniture"],
    description_travel: "Home to Borobudur and rich Javanese heritage. Very affordable cost of living.",
    description_econ: "Center of furniture manufacturing (Jepara) and textile industries with competitive labor.",
    actions: ["Sunrise at Borobudur", "Furniture sourcing in Jepara", "Culinary tour in Solo"],
    coordinates: [-7.1510, 110.1403]
  },
  {
    id: "34",
    name: "DI Yogyakarta",
    travel_score: 95,
    econ_score: 80,
    tags: ["culture", "student", "art", "digital nomad", "cheap"],
    description_travel: "The soul of Java. A hub for artists, students, and digital nomads seeking culture.",
    description_econ: "Creative economy hub, strong in education, handicrafts, and digital startups.",
    actions: ["Visit Kraton Palace", "Silver crafting in Kotagede", "Walk Malioboro Street"],
    coordinates: [-7.7956, 110.3695]
  },
  {
    id: "35",
    name: "East Java",
    travel_score: 93,
    econ_score: 94,
    tags: ["volcano", "industry", "tobacco", "logistics"],
    description_travel: "Dramatic landscapes like Mount Bromo and Ijen Crater. Surabaya is a major historic city.",
    description_econ: "Indonesia's second economic hub. Heavy industry, tobacco, and the busiest port in the East.",
    actions: ["Jeep tour at Bromo", "Port visit in Surabaya", "Tobacco plantation tour"],
    coordinates: [-7.5360, 112.2384]
  },
  {
    id: "36",
    name: "Banten",
    travel_score: 75,
    econ_score: 88,
    tags: ["steel", "airport", "beach", "industrial"],
    description_travel: "Ujung Kulon National Park (Rhinos) and beaches close to Jakarta.",
    description_econ: "Home to Soekarno-Hatta Airport and heavy steel/chemical industries in Cilegon.",
    actions: ["See Rhinos at Ujung Kulon", "Visit Cilegon Steel Plant", "Tanjung Lesung Resort"],
    coordinates: [-6.4058, 106.0640]
  },

  // --- NUSA TENGGARA ---
  {
    id: "51",
    name: "Bali",
    travel_score: 99,
    econ_score: 85,
    tags: ["tourism", "culture", "creative", "luxury", "digital nomad"],
    description_travel: "The world's premier island destination blending deep Hindu culture with tropical luxury.",
    description_econ: "Investment magnet for hospitality, villas, and export-grade handicrafts.",
    actions: ["Scout land in Northern Bali", "Visit Ubud art markets", "Sunset at Uluwatu"],
    coordinates: [-8.4095, 115.1889]
  },
  {
    id: "52",
    name: "West Nusa Tenggara (NTB)",
    travel_score: 92,
    econ_score: 78,
    tags: ["nature", "beach", "mining", "moto gp"],
    description_travel: "Lombok is 'The New Bali' with pristine beaches and the Mandalika MotoGP circuit.",
    description_econ: "Growing tourism sector (Mandalika SEZ) and massive gold/copper mining (Newmont/Amman).",
    actions: ["Watch MotoGP at Mandalika", "Trek Mount Rinjani", "Visit Pearl Farms"],
    coordinates: [-8.6529, 117.3616]
  },
  {
    id: "53",
    name: "East Nusa Tenggara (NTT)",
    travel_score: 95,
    econ_score: 70,
    tags: ["komodo", "marine", "nature", "conservation"],
    description_travel: "Home to the Komodo Dragon and world-class diving in Labuan Bajo and Alor.",
    description_econ: "Emerging premium tourism destination designated as a 'Super Priority' zone.",
    actions: ["Liveaboard in Komodo NP", "See Kelimutu Lakes", "Visit Weaving Villages"],
    coordinates: [-8.6574, 121.0794]
  },

  // --- KALIMANTAN ---
  {
    id: "61",
    name: "West Kalimantan",
    travel_score: 70,
    econ_score: 75,
    tags: ["equator", "border", "plantation", "river"],
    description_travel: "Pontianak lies precisely on the Equator. Known for river houseboats and Singkawang culture.",
    description_econ: "Major producer of rubber and palm oil, with cross-border trade potential with Malaysia.",
    actions: ["Visit Equator Monument", "Cap Go Meh in Singkawang", "River cruise"],
    coordinates: [-0.2787, 111.4753]
  },
  {
    id: "62",
    name: "Central Kalimantan",
    travel_score: 80,
    econ_score: 76,
    tags: ["orangutan", "forest", "coal", "river"],
    description_travel: "The best place to see wild Orangutans in Tanjung Puting National Park.",
    description_econ: "Economy relies on vast coal reserves and palm oil estates.",
    actions: ["Klotok boat tour Tanjung Puting", "Dayak culture tour", "Coal mine visit"],
    coordinates: [-1.6815, 113.3824]
  },
  {
    id: "63",
    name: "South Kalimantan",
    travel_score: 75,
    econ_score: 80,
    tags: ["market", "coal", "gemstones", "river"],
    description_travel: "Famous for the Lok Baintan Floating Market and diamond mining in Martapura.",
    description_econ: "The coal capital of Borneo, with a busy port supporting energy exports.",
    actions: ["Sunrise floating market", "Buy diamonds in Martapura", "Bamboo rafting"],
    coordinates: [-3.0926, 115.2838]
  },
  {
    id: "64",
    name: "East Kalimantan",
    travel_score: 80,
    econ_score: 95,
    tags: ["capital", "ikn", "oil", "investment", "future"],
    description_travel: "Home to the Derawan islands (diving) and near the new capital site.",
    description_econ: "The site of Indonesia's new capital (Nusantara/IKN). Massive construction and energy investment.",
    actions: ["Visit IKN (New Capital) site", "Diving in Derawan", "Oil & Gas business meeting"],
    coordinates: [0.5387, 116.4194]
  },
  {
    id: "65",
    name: "North Kalimantan",
    travel_score: 70,
    econ_score: 82,
    tags: ["green energy", "hydro", "border", "future"],
    description_travel: "Pristine rivers and Kayan Mentarang National Park.",
    description_econ: "Developing the world's largest Green Industrial Park powered by hydro energy.",
    actions: ["Visit Kayan Mentarang", "Green Industrial Park tour", "Border crossing check"],
    coordinates: [3.0731, 116.0414]
  },

  // --- SULAWESI ---
  {
    id: "71",
    name: "North Sulawesi",
    travel_score: 88,
    econ_score: 78,
    tags: ["diving", "marine", "geothermal", "spices"],
    description_travel: "Bunaken is a global diving legend. Manado offers spicy cuisine and highlands.",
    description_econ: "Strong in fisheries, coconut exports, and geothermal energy.",
    actions: ["Dive Bunaken Marine Park", "Eat Manado Porridge", "Tomohon Flower Festival"],
    coordinates: [0.6247, 123.9750]
  },
  {
    id: "72",
    name: "Central Sulawesi",
    travel_score: 75,
    econ_score: 92,
    tags: ["nickel", "industry", "megalith", "nature"],
    description_travel: "Mysterious ancient megaliths in Lore Lindu and pristine beaches.",
    description_econ: "Global hub for Nickel processing (Morowali), critical for the EV battery supply chain.",
    actions: ["Visit Morowali Industrial Park", "See Lore Lindu Megaliths", "Lake Poso trip"],
    coordinates: [-1.4300, 121.4456]
  },
  {
    id: "73",
    name: "South Sulawesi",
    travel_score: 90,
    econ_score: 88,
    tags: ["culture", "hub", "agriculture", "cacao", "marine"],
    description_travel: "Toraja highlands offer unique funeral rites. Makassar is the gateway to the East.",
    description_econ: "The main logistics hub for Eastern Indonesia. Strong in cacao, cement, and agriculture.",
    actions: ["Attend Funeral in Toraja", "Visit Fort Rotterdam", "Explore Rammang-Rammang"],
    coordinates: [-3.6687, 119.9740]
  },
  {
    id: "74",
    name: "Southeast Sulawesi",
    travel_score: 88,
    econ_score: 85,
    tags: ["diving", "nickel", "asphalt", "marine"],
    description_travel: "Wakatobi is a UNESCO biosphere reserve and a diver's paradise.",
    description_econ: "Rich in Nickel and Asphalt (Buton). Heavy mining investment area.",
    actions: ["Liveaboard in Wakatobi", "Visit Buton Asphalt mines", "Labengki Island trip"],
    coordinates: [-4.1449, 122.1746]
  },
  {
    id: "75",
    name: "Gorontalo",
    travel_score: 78,
    econ_score: 65,
    tags: ["marine", "corn", "peaceful", "sharks"],
    description_travel: "Famous for swimming with friendly Whale Sharks close to the shore.",
    description_econ: "Agricultural producer known as the 'Corn Province' with untapped potential.",
    actions: ["Swim with Whale Sharks", "Saronde Island trip", "Corn export sourcing"],
    coordinates: [0.6999, 122.4467]
  },
  {
    id: "76",
    name: "West Sulawesi",
    travel_score: 65,
    econ_score: 68,
    tags: ["agriculture", "cacao", "nature", "developing"],
    description_travel: "Off the beaten path, offering authentic Mandar culture.",
    description_econ: "High potential in cacao and coffee production, currently developing infrastructure.",
    actions: ["Sandeq boat festival", "Cacao plantation tour", "Mamuju city tour"],
    coordinates: [-2.8441, 119.2321]
  },

  // --- MALUKU ---
  {
    id: "81",
    name: "Maluku",
    travel_score: 85,
    econ_score: 70,
    tags: ["spice", "history", "beach", "fish"],
    description_travel: "The original 'Spice Islands' with incredible history and the pristine Ora Beach.",
    description_econ: "Focus on marine fisheries and nutmeg/clove spices.",
    actions: ["Stay at Ora Beach", "Visit Banda Neira Fort", "Spice plantation tour"],
    coordinates: [-3.2385, 130.1453]
  },
  {
    id: "82",
    name: "North Maluku",
    travel_score: 82,
    econ_score: 88,
    tags: ["nickel", "volcano", "history", "mining"],
    description_travel: "Ternate and Tidore offer volcanic landscapes and colonial forts.",
    description_econ: "Booming due to massive Nickel mining operations (Weda Bay).",
    actions: ["Climb Mount Gamalama", "Visit Weda Bay Industrial Park", "Explore Fort Oranje"],
    coordinates: [1.5700, 127.8080]
  },

  // --- PAPUA (Updated to 6 Provinces) ---
  {
    id: "91",
    name: "Papua",
    travel_score: 75,
    econ_score: 75,
    tags: ["culture", "lake", "hub", "development"],
    description_travel: "Jayapura and Lake Sentani offer unique Papuan lake-dwelling culture.",
    description_econ: "The administrative and service hub for the region.",
    actions: ["Lake Sentani Festival", "Visit Skouw Border", "Jayapura City Tour"],
    coordinates: [-2.5330, 140.7012]
  },
  {
    id: "92",
    name: "West Papua",
    travel_score: 85,
    econ_score: 82,
    tags: ["gas", "diving", "nature", "investment"],
    description_travel: "Gateway to amazing nature and history in Fakfak and Kaimana.",
    description_econ: "Host to the massive Tangguh LNG (Gas) project.",
    actions: ["Swim with Whale Sharks in Kaimana", "Visit Tangguh LNG", "Triton Bay diving"],
    coordinates: [-1.3361, 133.1747]
  },
  {
    id: "93",
    name: "South Papua",
    travel_score: 60,
    econ_score: 78,
    tags: ["agriculture", "food estate", "border", "flat"],
    description_travel: "Wasur National Park is known as the 'Serengeti of Papua'.",
    description_econ: "Planned as the national 'Food Estate' (rice bowl) of Eastern Indonesia.",
    actions: ["Wasur National Park Safari", "Visit Musamus Anthills", "Rice field survey"],
    coordinates: [-7.5398, 139.6917] // Merauke area
  },
  {
    id: "94",
    name: "Central Papua",
    travel_score: 70,
    econ_score: 95,
    tags: ["gold", "mining", "snow", "mountain"],
    description_travel: "Home to Puncak Jaya, the only snowy peak in Indonesia (Carstensz Pyramid).",
    description_econ: "Contains the Grasberg Mine (Freeport), one of the world's largest gold/copper mines.",
    actions: ["Climb Carstensz Pyramid", "Visit Timika", "Mining industry tour"],
    coordinates: [-4.0323, 136.2627] // Near Timika/Puncak Jaya
  },
  {
    id: "95",
    name: "Highland Papua",
    travel_score: 88,
    econ_score: 60,
    tags: ["tribal", "culture", "trekking", "festival"],
    description_travel: "The Baliem Valley offers the most authentic tribal cultural experience in Indonesia.",
    description_econ: "Economy based on sweet potatoes and unique highland agriculture.",
    actions: ["Baliem Valley Festival", "Trek in Wamena", "See Mummy of Jiwika"],
    coordinates: [-4.0863, 139.0872] // Wamena area
  },
  {
    id: "96",
    name: "Southwest Papua",
    travel_score: 99,
    econ_score: 80,
    tags: ["raja ampat", "diving", "oil", "birds"],
    description_travel: "Home to Raja Ampat, arguably the world's best marine biodiversity site.",
    description_econ: "Sorong is a major oil/gas logistics base and port.",
    actions: ["Liveaboard Raja Ampat", "Bird of Paradise watching", "Port of Sorong visit"],
    coordinates: [-1.0825, 131.2684] // Sorong/Raja Ampat area
  }
];