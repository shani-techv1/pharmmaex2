import { CITY_LIST, getCityEvent } from "@/src/data/cityEvents";

const STATES_DISTRICTS = {
  "West Bengal": [
    "Alipurduar",
    "Bankura",
    "Birbhum",
    "Cooch Behar",
    "Dakshin Dinajpur",
    "Darjeeling",
    "Hooghly",
    "Howrah",
    "Jalpaiguri",
    "Jhargram",
    "Kalimpong",
    "Kolkata",
    "Malda",
    "Murshidabad",
    "Nadia",
    "North 24 Parganas",
    "Paschim Bardhaman",
    "Paschim Medinipur",
    "Purba Bardhaman",
    "Purba Medinipur",
    "Purulia",
    "South 24 Parganas",
    "Uttar Dinajpur",
  ],
  Jharkhand: [
    "Bokaro",
    "Chatra",
    "Deoghar",
    "Dhanbad",
    "Dumka",
    "East Singhbhum",
    "Garhwa",
    "Giridih",
    "Godda",
    "Gumla",
    "Hazaribagh",
    "Jamtara",
    "Khunti",
    "Koderma",
    "Latehar",
    "Lohardaga",
    "Pakur",
    "Palamu",
    "Ramgarh",
    "Ranchi",
    "Sahibganj",
    "Seraikela-Kharsawan",
    "Simdega",
    "West Singhbhum",
  ],
  Odisha: [
    "Angul",
    "Balangir",
    "Balasore (Baleswar)",
    "Bargarh",
    "Bhadrak",
    "Boudh",
    "Cuttack",
    "Deogarh (Debagarh)",
    "Dhenkanal",
    "Gajapati",
    "Ganjam",
    "Jagatsinghpur",
    "Jajpur",
    "Jharsuguda",
    "Kalahandi",
    "Kandhamal",
    "Kendrapara",
    "Kendujhar (Keonjhar)",
    "Khordha",
    "Koraput",
    "Malkangiri",
    "Mayurbhanj",
    "Nabarangpur",
    "Nayagarh",
    "Nuapada",
    "Puri",
    "Rayagada",
    "Sambalpur",
    "Subarnapur (Sonepur)",
    "Sundargarh",
  ],
  Bihar: [
    "Araria",
    "Arwal",
    "Aurangabad",
    "Banka",
    "Begusarai",
    "Bhagalpur",
    "Bhojpur",
    "Buxar",
    "Darbhanga",
    "East Champaran (Motihari)",
    "Gaya",
    "Gopalganj",
    "Jamui",
    "Jehanabad",
    "Kaimur (Bhabua)",
    "Katihar",
    "Khagaria",
    "Kishanganj",
    "Lakhisarai",
    "Madhepura",
    "Madhubani",
    "Munger",
    "Muzaffarpur",
    "Nalanda",
    "Nawada",
    "Patna",
    "Purnia",
    "Rohtas",
    "Saharsa",
    "Samastipur",
    "Saran (Chhapra)",
    "Sheikhpura",
    "Sheohar",
    "Sitamarhi",
    "Siwan",
    "Supaul",
    "Vaishali",
    "West Champaran (Bettiah)",
  ],
  Assam: [
    "Bajali",
    "Baksa",
    "Barpeta",
    "Biswanath",
    "Bongaigaon",
    "Cachar",
    "Charaideo",
    "Chirang",
    "Darrang",
    "Dhemaji",
    "Dhubri",
    "Dibrugarh",
    "Dima Hasao",
    "Goalpara",
    "Golaghat",
    "Hailakandi",
    "Hojai",
    "Jorhat",
    "Kamrup",
    "Kamrup Metropolitan",
    "Karbi Anglong",
    "Karbi Anglong West",
    "Karimganj",
    "Kokrajhar",
    "Lakhimpur",
    "Majuli",
    "Morigaon",
    "Nagaon",
    "Nalbari",
    "Sivasagar",
    "Sonitpur",
    "South Salmara-Mankachar",
    "Tamulpur",
    "Tinsukia",
    "Udalguri",
  ],
  Nagaland: [
    "Chümoukedima",
    "Dimapur",
    "Kiphire",
    "Kohima",
    "Longleng",
    "Mokokchung",
    "Mon",
    "Niuland",
    "Noklak",
    "Peren",
    "Phek",
    "Shamator",
    "Tuensang",
    "Tseminyü",
    "Wokha",
    "Zunheboto",
  ],
  "Arunachal Pradesh": [
    "Anjaw",
    "Capital Complex (Itanagar)",
    "Changlang",
    "Dibang Valley",
    "East Kameng",
    "East Siang",
    "Kamle",
    "Kra Daadi",
    "Kurung Kumey",
    "Leparada",
    "Lohit",
    "Longding",
    "Lower Dibang Valley",
    "Lower Siang",
    "Lower Subansiri",
    "Namsai",
    "Pakke-Kessang",
    "Papum Pare",
    "Shi Yomi",
    "Siang",
    "Tawang",
    "Tirap",
    "Upper Siang",
    "Upper Subansiri",
    "West Kameng",
    "West Siang",
  ],
  Mizoram: [
    "Aizawl",
    "Champhai",
    "Hnahthial",
    "Khawzawl",
    "Kolasib",
    "Lawngtlai",
    "Lunglei",
    "Mamit",
    "Saiha (Siaha)",
    "Saitual",
    "Serchhip",
  ],
  Manipur: [
    "Bishnupur",
    "Chandel",
    "Churachandpur",
    "Imphal East",
    "Imphal West",
    "Jiribam",
    "Kakching",
    "Kamjong",
    "Kangpokpi",
    "Noney",
    "Pherzawl",
    "Senapati",
    "Tamenglong",
    "Tengnoupal",
    "Thoubal",
    "Ukhrul",
  ],
  Meghalaya: [
    "East Garo Hills",
    "East Jaintia Hills",
    "East Khasi Hills",
    "North Garo Hills",
    "Ri-Bhoi",
    "South Garo Hills",
    "South West Garo Hills",
    "South West Khasi Hills",
    "West Garo Hills",
    "West Jaintia Hills",
    "West Khasi Hills",
    "Eastern West Khasi Hills",
  ],
  Tripura: [
    "Dhalai",
    "Gomati",
    "Khowai",
    "North Tripura",
    "Sepahijala",
    "South Tripura",
    "Unakoti",
    "West Tripura",
  ],
};

const DISTRICT_INTRO_TEMPLATE = (district, state) => [
  {
    heading: `Why ${district} is growing as an events destination`,
    body: `${district}, ${state} is seeing rising demand for exhibitions, trade shows and business events across pharma, healthcare, manufacturing and distribution sectors. If you are searching for events in ${district}, this page helps you discover relevant opportunities and plan participation for better business outcomes.`,
  },
  {
    heading: `Upcoming events in ${district} for networking and growth`,
    body: `Upcoming events in ${district} create practical opportunities for lead generation, partnerships and market expansion. Exhibitions in ${district} and nearby regions help businesses compare suppliers, explore new products and connect with decision-makers in one place.`,
  },
  {
    heading: `How to choose the right exhibitions and expos in ${district}`,
    body: `Before attending trade shows in ${district}, review organizer credibility, expected visitor profile and exhibitor categories. The right business events in ${district} can strengthen local visibility and generate qualified leads for long-term growth.`,
  },
];

const DISTRICT_FAQ_TEMPLATE = (district) => [
  {
    question: `What are the best upcoming events in ${district} for businesses?`,
    answer:
      "The best business events are usually focused trade shows and exhibitions with relevant exhibitors and verified attendees. Prioritize events aligned with your industry and growth goals.",
  },
  {
    question: `How can I find exhibitions and trade shows in ${district}?`,
    answer:
      "Follow trusted organizer pages, city event listings and official event calendars. Check dates, venue details, and registration requirements before planning your visit.",
  },
  {
    question: `Are expos in ${district} useful for B2B networking?`,
    answer:
      "Yes. Expos and exhibitions are often one of the fastest ways to meet decision-makers, discover partners, and evaluate market demand in person.",
  },
  {
    question: `How early should I register for events in ${district}?`,
    answer:
      "It is best to register early, especially for high-demand events. Early registration helps you avoid last-minute issues and often gives better access to sessions and networking slots.",
  },
];

function toSlug(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createDistrictEntry(state, district) {
  const stateSlug = toSlug(state);
  const districtSlug = toSlug(district);

  return {
    state,
    stateSlug,
    district,
    slug: districtSlug,
    seoTitle: `Upcoming Events in ${district} | Trade Shows, Exhibitions & Business Events`,
    metaDescription: `Find upcoming events, exhibitions, expos, and trade shows in ${district}. Explore business networking events and exhibitions happening near you.`,
    h1: `Upcoming Events in ${district}`,
    subtitle: `Explore exhibitions, trade shows, business networking meets and industry expos happening in ${district}, ${state}.`,
    canonicalPath: `/${stateSlug}/${districtSlug}`,
    introSections: DISTRICT_INTRO_TEMPLATE(district, state),
    faq: DISTRICT_FAQ_TEMPLATE(district),
    relatedEventSlugs: ["kolkata", "coimbatore", "mumbai"],
    nearbyDistricts: [],
  };
}

const KOLKATA_CUSTOM = {
  state: "West Bengal",
  stateSlug: "west-bengal",
  district: "Kolkata",
  slug: "kolkata",
  seoTitle:
    "Upcoming Events in Kolkata | Trade Shows, Exhibitions & Business Events",
  metaDescription:
    "Find upcoming events, exhibitions, expos, and trade shows in Kolkata. Explore business networking events and exhibitions happening near you.",
  h1: "Upcoming Events in Kolkata",
  subtitle:
    "Explore exhibitions, trade shows, business networking meets and pharma expos happening in Kolkata, West Bengal.",
  canonicalPath: "/west-bengal/kolkata",
  introSections: [
    {
      heading: "Why Kolkata is a prime city for exhibitions and trade shows",
      body:
        "Kolkata has always been one of the strongest business gateways in eastern India. With a deep industrial base, strong healthcare and pharmaceutical distribution networks, and a growing startup ecosystem, the city attracts companies from across sectors for exhibitions, trade shows, and business summits. If you are searching for events in Kolkata, you will find a healthy mix of B2B expos, product launch showcases, dealer-distributor meets, and professional networking events happening all year round. The city also offers excellent infrastructure for large gatherings, including modern venues in New Town and central access for visitors from West Bengal, Jharkhand, Odisha, Bihar and the North-East.",
    },
    {
      heading: "Upcoming events in Kolkata for business growth",
      body:
        "For business owners, distributors, manufacturers, and professionals, upcoming events in Kolkata are more than just calendar entries - they are practical opportunities to create partnerships and generate revenue. Trade shows in Kolkata help brands showcase products directly to high-intent buyers. Exhibitions in Kolkata give attendees a chance to compare suppliers, discover market trends, and build trusted vendor relationships under one roof. Expos in Kolkata are also useful for market validation: companies can test new offerings, collect direct feedback, and understand local demand before scaling into new districts of West Bengal. In sectors like pharma, healthcare, packaging, and manufacturing, these events often lead to on-ground deal closures and long-term channel expansion.",
    },
    {
      heading: "How to choose the right exhibition or expo in Kolkata",
      body:
        "When evaluating business events in Kolkata, start by checking relevance, audience quality, and organizer credibility. The best outcomes come from events that attract decision-makers instead of generic footfall. Review exhibitor profiles, attendee categories, and the event format before planning your participation. If your goal is lead generation, choose trade shows where buyers, distributors, and procurement teams are expected. If your goal is brand visibility, prioritize high-footfall exhibitions with strong digital promotion and local media coverage. Kolkata remains one of the most strategic cities for companies looking to grow in East India, and participating in the right events can significantly accelerate sales, partnerships, and regional brand presence.",
    },
  ],
  faq: [
    {
      question: "What are the best upcoming events in Kolkata for businesses?",
      answer:
        "Top business events in Kolkata usually include sector-focused trade shows, exhibitions, and expos where manufacturers, distributors, and buyers meet directly. Events with strong exhibitor quality and verified attendee profiles usually generate better business outcomes.",
    },
    {
      question: "How can I find exhibitions and trade shows in Kolkata this year?",
      answer:
        "You can track event calendars on organizer websites and city landing pages focused on Kolkata. Check event dates, venue details, exhibitor categories, and registration links before planning your visit.",
    },
    {
      question: "Are Kolkata expos useful for networking and partnerships?",
      answer:
        "Yes. Expos in Kolkata are highly useful for networking because they bring together business owners, channel partners, and decision-makers in one place. They are especially effective for B2B lead generation and regional expansion.",
    },
    {
      question: "Which venue hosts major business exhibitions in Kolkata?",
      answer:
        "One of the key venues for large business events is the Biswa Bangla Exhibition Centre in New Town, Kolkata. It regularly hosts large-format trade exhibitions and industry events.",
    },
  ],
  relatedEventSlugs: ["kolkata", "coimbatore", "mumbai"],
  nearbyDistricts: [],
};

const generatedDistricts = Object.entries(STATES_DISTRICTS).flatMap(
  ([state, districts]) => districts.map((district) => createDistrictEntry(state, district))
);

export const DISTRICT_LANDING_DATA = generatedDistricts.map((entry) =>
  entry.stateSlug === "west-bengal" && entry.slug === "kolkata" ? KOLKATA_CUSTOM : entry
);

export function getDistrictLanding(stateSlug, districtSlug) {
  return (
    DISTRICT_LANDING_DATA.find(
      (entry) => entry.stateSlug === stateSlug && entry.slug === districtSlug
    ) || null
  );
}

export function getDistrictPaths() {
  return DISTRICT_LANDING_DATA.map((entry) => ({
    params: { state: entry.stateSlug, district: entry.slug },
  }));
}

export function getDistrictRelatedEvents(entry) {
  if (!entry?.relatedEventSlugs?.length) return [];
  return entry.relatedEventSlugs
    .map((slug) => getCityEvent(slug))
    .filter(Boolean);
}

export function getStateRelatedEvents(stateName, districtSlug) {
  if (!stateName) return [];
  return CITY_LIST.filter(
    (city) =>
      city.state?.toLowerCase() === stateName.toLowerCase() &&
      city.slug !== districtSlug
  );
}
