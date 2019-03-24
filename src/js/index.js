var nav_exp = '';
var double_deleg = false;
var deleg1_info = {};
var deleg2_info = {};
var preference1 = {};
var preference2 = {};
var country_req = {
    pref1: true,
    pref2: true,
};
const firbase_base = "https://jumun2019-9c834.firebaseio.com/round4/";

function hidenav() {
    console.log('Hiding nav');
    const nav = document.getElementById('nav');
    const cast = document.getElementById('nav-undercast');
    nav.style.transform = '';
    cast.classList.remove('show');
}

function shownav() {
    console.log('Showing nav');
    const nav = document.getElementById('nav');
    const cast = document.getElementById('nav-undercast');
    nav.style.transform = 'translateX(0)';
    cast.classList.add('show');
}

function lazyLoadImages() {
    const lazyImages = document.getElementsByClassName('lazy');
    for(var i=0; i<lazyImages.length; ++i) {
        const oldImg = lazyImages[i];
        const newImg = new Image();
        newImg.onload = function() {
            oldImg.parentNode.insertBefore(newImg, oldImg);
            oldImg.style.opacity = '0';
        }
        newImg.src = oldImg.dataset.src;
    }
}

var country_maps = {
    aippm: {
        head: 'Portfolio',
        countries: [
            "Bharatiya Janata Party(BJP) - Varanasi(Uttar Pradesh) - Narendra Modi",
            "Bharatiya Janata Party(BJP) - Lucknow(Uttar Pradesh) - Rajnath Singh",
            "Bharatiya Janata Party(BJP) - Vidisha(Madhya Pradesh) - Sushma Swaraj",
            "Bharatiya Janata Party(BJP) - Rajya Sabha Member - Arun Jaitley",
            "Bharatiya Janata Party(BJP) - Nagpur(Maharashtra) - Nitin Gadkari",
            "Bharatiya Janata Party(BJP) - Bangalore North(Karnataka) - D. V. Sadananda Gowda",
            "Bharatiya Janata Party(BJP) - Jhansi(Uttar Pradesh) - Uma Bharti",
            "Bharatiya Janata Party(BJP) - Pilibhit(Uttar Pradesh) - Maneka Gandhi",
            "Bharatiya Janata Party(BJP) - Bangalore South(Karnataka) - Vacant",
            "Bharatiya Janata Party(BJP) - Rajya Sabha Member - Ravi Shankar Prasad",
            "Bharatiya Janata Party(BJP) - Jaipur Rural - Col. Rajyavardhan Singh Rathore",
            "Bharatiya Janata Party(BJP) - Rajya Sabha Member - Thawar Chand Gehlot",
            "Bharatiya Janata Party(BJP) - Deoria(Uttar Pradesh) - Kalraj Mishra",
            "Bharatiya Janata Party(BJP) - Purvi Champaran (Bihar) - Radha Mohan Singh",
            "Bharatiya Janata Party(BJP) - Chandni Chowk - Harsh Vardhan",
            "Bharatiya Janata Party(BJP) - Rajya Sabha Member - Smriti Irani",
            "Bharatiya Janata Party(BJP) - Ghaziabad(Uttar Pradesh) - General VK singh",
            "Bharatiya Janata Party(BJP) - Gurgaon(Haryana) - Inderjit Singh Rao",
            "Bharatiya Janata Party(BJP) - Rajya Sabha Member - Prakash Javadekar",
            "Bharatiya Janata Party(BJP) - Rajya Sabha Member - Piyush Goyal",
            "Bharatiya Janata Party(BJP) - Udhampur(Jammu and Kashmir) - Dr. Jitendra Singh",
            "Bharatiya Janata Party(BJP) - Rajya Sabha Member - Jagat Prakash Nadda",
            "Bharatiya Janata Party(BJP) - Rajya Sabha Member - Nirmala Sitharaman",
            "Bharatiya Janata Party(BJP) - Gandhinagar(Gujarat) - L.K.Advani",
            "Bharatiya Janata Party(BJP) - Sultanpur(Uttar Pradesh) - Feroze Varun Gandhi",
            "Bharatiya Janata Party(BJP) - Kanpur(Uttar Pradesh) - Dr.Murli Manohar Joshi",
            "Bharatiya Janata Party(BJP) - Pataliputra(Bihar) - Ram Kripal Yadav",
            "Bharatiya Janata Party(BJP) - Rajya Sabha - Vijay Goel",
            "Bharatiya Janata Party(BJP) - Hamirpur(Himachal Pradesh) - Anurag Singh Thakur",
            "Bharatiya Janata Party(BJP) - Karnal(Haryana) - Ashwini Kumar Chopra",
            "Bharatiya Janata Party(BJP) - Ballia(Uttar Pradesh) - Bharat Singh",
            "Bharatiya Janata Party(BJP) - Mathura(Uttar Pradesh) - Hema Malini",
            "Bharatiya Janata Party(BJP) - Jammu(Jammu and Kashmir) - Jugal Kishore Sharma",
            "Bharatiya Janata Party(BJP) - Chandigarh(Chandigarh) - Kirron Anupam Kher",
            "Bharatiya Janata Party(BJP) - Buxar(Bihar) - Ashwini Kumar Choubey",
            "Bharatiya Janata Party(BJP) - Gaya(Bihar) - Hari Manjhi",
            "Bharatiya Janata Party(BJP) - Karakat - Upendra Kushwaha",
            "Bharatiya Janata Party(BJP) - Saran(Bihar) - Rajiv Pratap Rudy",
            "Bharatiya Janata Party(BJP) - Uttara Kannada - Anantkumar Hegde",
            "Bharatiya Janata Party(BJP) - New Delhi - Meenakshi Lekhi",
            "Bharatiya Janata Party(BJP) - North East Delhi - Manoj Tiwari",
            "Bharatiya Janata Party(BJP) - Hazaribagh - Jayant Sinha",
            "Bharatiya Janata Party(BJP) - Dhanbad(jharkhand) - Pashupati Nath Singh",
            "Bharatiya Janata Party(BJP) - Mumbai North East - Sri kirit Somaiya",
            "Bharatiya Janata Party(BJP) - Gwalior - Sri Narendra Singh Tomar",
            "Bharatiya Janata Party(BJP) - Faizabad - Lallu Singh",
            "Bharatiya Janata Party(BJP) - Asansol(WB) - Babul Supriyo",
            "Bharatiya Janata Party(BJP) - Hardwar(Uttarakhand) - Dr Ramesh Pokhariyal 'Nishank'",
            "Bharatiya Janata Party(BJP) - Palitana - Mansukh L. Mandaviya",
            "Indian National Congress(INC) - Rae Bareli(Uttar Pradesh) - Sonia Gandhi",
            "Indian National Congress(INC) - Amethi(Uttar Pradesh) - Rahul Gandhi",
            "Indian National Congress(INC) - Guna(Madhya Pradesh) - Jyotiraditya M Scindia",
            "Indian National Congress(INC) - Chhindwara(Madhya Pradesh) - Kamal Nath",
            "Indian National Congress(INC) - Chikkballapur(Karnataka) - M Veerappa Moily",
            "Indian National Congress(INC) - Gulbarga(Karnataka) - Mallikarjun Kharge",
            "Indian National Congress(INC) - Ernakulam(Kerala) - Prof.. K.V. Thomas",
            "Indian National Congress(INC) - Jangipur(West Bengal) - Abhijit Mukherjee",
            "Indian National Congress(INC) - Rohtak(Haryana) - Deepender Singh Hooda",
            "Indian National Congress(INC) - Thiruvananthapuram(kerala) - Shashi Tharoor",
            "Indian National Congress(INC) - Kaliabor(Assam) - Gourav Gogoi",
            "Indian National Congress(INC) - Nanded(Maharashtra) - Ashok Shankarrao Chavan",
            "Indian National Congress(INC) - Kozhikode - M. K. Raghavan",
            "Indian National Congress(INC) - Hingoli - Rajeev Satav",
            "Indian National Congress(INC) - Ludhiana - Ravneet Singh Bittu",
            "Indian National Congress(INC) - Silchar(Assam) - Sushmita Dev",
            "Indian National Congress(INC) - Supaul(Bihar) - Ranjeet Ranjan",
            "Indian National Congress(INC) - Raichur(Karnataka) - BV Nayak",
            "Indian National Congress(INC) - Bangalore Rural - DK Suresh",
            "Indian National Congress(INC) - Jalandhar - Santokh Singh Choudhary",
            "Indian National Congress(INC) - Gurdaspur(Punjab) - Sunil Jakhar",
            "All India Anna Dravida Munnetra Kazhagam(AIADMK) - Kallakurichi(Tamil Nadu) - K. Kamaraj",
            "All India Anna Dravida Munnetra Kazhagam(AIADMK) - Madurai(Tamil Nadu) - R.Gopalakrishnan",
            "All India Anna Dravida Munnetra Kazhagam(AIADMK) - Chennai Central - S.R. Vijayakumar",
            "All India Anna Dravida Munnetra Kazhagam(AIADMK) - Vellore(Tamil Nadu) - B Sengultuvan",
            "All India Anna Dravida Munnetra Kazhagam(AIADMK) - Coimbatore(Tamil Nadu) - P Nagarajan",
            "All India Trinamool Congress(AITC) - Cooch Behar(West Bengal) - Partha Pratim Ray",
            "All India Trinamool Congress(AITC) - Barrackpur(West Bengal) - Dinesh Trivedi",
            "All India Trinamool Congress(AITC) - Dumdum(West Bengal) - Sugata Roy",
            "All India Trinamool Congress(AITC) - Jadavpur(West Bengal) - Sugata Bose",
            "Biju Janata Dal(BJD) - Puri(Odisha) - Pinaki Misra",
            "Biju Janata Dal(BJD) - Bhubaneswar(Odisha) - Prasanna Kumar Patasani",
            "Biju Janata Dal(BJD) - Cuttack(Odisha) - Bhartruhari Mahtab",
            "Biju Janata Dal(BJD) - Sambalpur (Odisha) - Nagendra Kumar Pradhan",
            "Shiv Sena (SS) - Raigad(Maharashtra) - Anant Geete",
            "Shiv Sena (SS) - Nashik (Maharashtra) - Hemant Tukaram Godse",
            "Shiv Sena (SS) - Mumbai South - Arvind Sawant",
            "Telugu Desam Party(TDP) - Vizianagaram(Andhra Pradesh) - Ashok Gajapathi Raju",
            "Telugu Desam Party(TDP) - Guntur - Jayadev Galla",
            "Communist Party of India (Marxist)(CPI(M)) - Raiganj(West Bengal) - Md. Salim",
            "Lok Jan Shakti Party(LJP) - Hajipur(Bihar) - RamVilas Paswan",
            "Nationalist Congress Party(NCP) - Baramati(Maharashtra) - Supriya Sule",
            "Nationalist Congress Party(NCP) - Lakshwadeep (Lakshwadeep) - Mohammed Faizal P.P.",
            "Nationalist Congress Party(NCP) - Madha (Maharashtra) - Vijaysinh Mohite–Patil",
            "Nationalist Congress Party(NCP) - Satara (Maharashtra) - Udayanraje Bhosale",
            "Nationalist Congress Party(NCP) - Kolhapur (Maharashtra) - Dhananjay Bhimrao Mahadik",
            "Aam Aadmi Party(AAP) - Sangrur(Punjab) - Bhagwant Mann",
            "Jammu and Kashmir Peoples Democratic Party(J&KPDP) - Anantnag(Jammu and Kashmir)",
            "Jammu and Kashmir Peoples Democratic Party(J&KPDP) - Baramulla(Jammu and Kashmir) - Muzaffar Hussain Baig",
            "Shiromani Akali Dal(SAD) - Bathinda(Punjab) - Harsimrat Kaur Badal",
            "Samajwadi Party(SP) - Azamgarh(Uttar Pradesh) - Mulayam Singh Yadav",
            "Jharkhand Mukti Morcha(JMM) - Dumka(Jharkhand) - Shibu Soren",
            "Rashtriya Janta Dal(RJD) - Arariya(Bihar) - Sarfaraz Alam",
            "Janta Dal United (JDU) - Nalanda - Kaushlendra Kumar",
            "Rashtriya Lok Samta Party(RLSP) - Jehanabad - Dr Arun Kumar",
            "YSR Congress Party(YSRC) - Nandyal - S.P.Y. Reddy",
            "All India Majlis-e-Ittehadul Muslimeen(AIMIM) - Hyderabad - Assaduddin Owaisi",
            "Telangana Rashtra Samiti - Nizamabad (Telangana) - Kalvakuntla Kavitha",
            "Telangana Rashtra Samiti - Karimnagar (Telangana) - Vinod Kumar Boianapalli",
            "Telangana Rashtra Samiti - Zahirabad (Telangana)  - B. B. Patil",
            "National Democratic Progressive Party (NDPP) - Nagaland (Nagaland) - Tokheho Yepthomi",
            "Sikkim Democratic Front (SDF) - Sikkim (Sikkim) - Prem Das Rai",
            "Independent - Chalakudy (Kerala) - Innocent Vareed Thekkethala",
            "Independent - Idukki (Kerala) - Joice George"
        ]
    },
    disec: {
        head: 'Country',
        countries: [
            "Afghanistan",
            "Albania",
            "Algeria",
            "Andorra",
            "Angola",
            "Antigua and Barbuda",
            "Argentina",
            "Armenia",
            "Australia",
            "Austria",
            "Azerbaijan",
            "Bahamas",
            "Bahrain",
            "Bangladesh",
            "Barbados",
            "Belarus",
            "Belgium",
            "Belize",
            "Benin",
            "Bhutan",
            "Bolivia (Plurinational State of)",
            "Bosnia and Herzegovina",
            "Botswana",
            "Brazil",
            "Brunei Darussalam",
            "Bulgaria",
            "Burkina Faso",
            "Burundi",
            "Cabo Verde",
            "Cambodia",
            "Cameroon",
            "Canada",
            "Central African Republic",
            "Chad",
            "Chile",
            "China",
            "Colombia",
            "Comoros",
            "Congo",
            "Costa Rica",
            "Côte D'Ivoire",
            "Croatia",
            "Cuba",
            "Cyprus",
            "Czech Republic",
            "Democratic People's Republic of Korea",
            "Democratic Republic of the Congo",
            "Denmark",
            "Djibouti",
            "Dominica",
            "Dominican Republic",
            "Ecuador",
            "Egypt",
            "El Salvador",
            "Equatorial Guinea",
            "Eritrea",
            "Estonia",
            "Eswatini",
            "Ethiopia",
            "Fiji",
            "Finland",
            "France",
            "Gabon",
            "Gambia (Republic of The)",
            "Georgia",
            "Germany",
            "Ghana",
            "Greece",
            "Grenada",
            "Guatemala",
            "Guinea",
            "Guinea Bissau",
            "Guyana",
            "Haiti",
            "Honduras",
            "Hungary",
            "Iceland",
            "India",
            "Indonesia",
            "Iran (Islamic Republic of)",
            "Iraq",
            "Ireland",
            "Israel",
            "Italy",
            "Jamaica",
            "Japan",
            "Jordan",
            "Kazakhstan",
            "Kenya",
            "Kiribati",
            "Kuwait",
            "Kyrgyzstan",
            "Lao People’s Democratic Republic",
            "Latvia",
            "Lebanon",
            "Lesotho",
            "Liberia",
            "Libya",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Madagascar",
            "Malawi",
            "Malaysia",
            "Maldives",
            "Mali",
            "Malta",
            "Marshall Islands",
            "Mauritania",
            "Mauritius",
            "Mexico",
            "Micronesia (Federated States of)",
            "Monaco",
            "Mongolia",
            "Montenegro",
            "Morocco",
            "Mozambique",
            "Myanmar",
            "Namibia",
            "Nauru",
            "Nepal",
            "Netherlands",
            "New Zealand",
            "Nicaragua",
            "Niger",
            "Nigeria",
            "Norway",
            "Oman",
            "Pakistan",
            "Palau",
            "Panama",
            "Papua New Guinea",
            "Paraguay",
            "Peru",
            "Philippines",
            "Poland",
            "Portugal",
            "Qatar",
            "Republic of Korea",
            "Republic of Moldova",
            "Romania",
            "Russian Federation",
            "Rwanda",
            "Saint Kitts and Nevis",
            "Saint Lucia",
            "Saint Vincent and the Grenadines",
            "Samoa",
            "San Marino",
            "Sao Tome and Principe",
            "Saudi Arabia",
            "Senegal",
            "Serbia",
            "Seychelles",
            "Sierra Leone",
            "Singapore",
            "Slovakia",
            "Slovenia",
            "Solomon Islands",
            "Somalia",
            "South Africa",
            "South Sudan",
            "Spain",
            "Sri Lanka",
            "Sudan",
            "Suriname",
            "Sweden",
            "Switzerland",
            "Syrian Arab Republic",
            "Tajikistan",
            "Thailand",
            "The former Yugoslav Republic of Macedonia",
            "Timor-Leste",
            "Togo",
            "Tonga",
            "Trinidad and Tobago",
            "Tunisia",
            "Turkey",
            "Turkmenistan",
            "Tuvalu",
            "Uganda",
            "Ukraine",
            "United Arab Emirates",
            "United Kingdom of Great Britain and Northern Ireland",
            "United Republic of Tanzania",
            "United States of America",
            "Uruguay",
            "Uzbekistan",
            "Vanuatu",
            "Venezuela, Bolivarian Republic of",
            "Vietnam",
            "Yemen",
            "Zambia",
            "Zimbabwe",
        ]
    },
    hcr: {
        head: 'Member',
        countries: [
            "Afghanistan",
            "Algeria",
            "Argentina",
            "Armenia",
            "Australia",
            "Austria",
            "Azerbaijan",
            "Bangladesh",
            "Belarus",
            "Belgium",
            "Benin",
            "Brazil",
            "Bulgaria",
            "Cameroon",
            "Canada",
            "Chad",
            "Chile",
            "China",
            "Colombia",
            "Congo",
            "Costa Rica",
            "Côte d\'Ivoire",
            "Croatia",
            "Cyprus",
            "Czech Republic",
            "Democratic Republic of the Congo",
            "Denmark",
            "Djibouti",
            "Ecuador",
            "Egypt",
            "Estonia",
            "Ethiopia",
            "Fiji",
            "Finland",
            "France",
            "Georgia",
            "Germany",
            "Ghana",
            "Greece",
            "Guinea",
            "Holy See",
            "Hungary",
            "India",
            "Iran (Islamic Republic of)",
            "Ireland",
            "Israel",
            "Italy",
            "Japan",
            "Jordan",
            "Kenya",
            "Latvia",
            "Lebanon",
            "Lesotho",
            "Lithuania",
            "Luxembourg",
            "Madagascar",
            "Mexico",
            "Montenegro",
            "Morocco",
            "Mozambique",
            "Namibia",
            "Netherlands",
            "New Zealand",
            "Nicaragua",
            "Nigeria",
            "Norway",
            "Pakistan",
            "Paraguay",
            "Peru",
            "Philippines",
            "Poland",
            "Portugal",
            "Republic of Korea",
            "Republic of Moldova",
            "Romania",
            "Russian Federation",
            "Rwanda",
            "Senegal",
            "Serbia",
            "Slovakia",
            "Slovenia",
            "Somalia",
            "South Africa",
            "Spain",
            "Sudan",
            "Sweden",
            "Switzerland",
            "Thailand",
            "the former Yugoslav Republic of Macedonia",
            "Togo",
            "Tunisia",
            "Turkey",
            "Turkmenistan",
            "Uganda",
            "United Kingdom",
            "United Republic of Tanzania",
            "United States of America",
            "Uruguay",
            "Venezuela (Bolivarian Republic of)",
            "Yemen",
            "Zambia",
            "Zimbabwe",
        ]
    },
    sfc: {
        head: 'Member',
        countries: [
            "Afghanistan",
            "Albania",
            "Algeria",
            "Andorra",
            "Angola",
            "Antigua and Barbuda",
            "Argentina",
            "Armenia",
            "Australia",
            "Austria",
            "Azerbaijan",
            "Bahamas",
            "Bahrain",
            "Bangladesh",
            "Barbados",
            "Belarus",
            "Belgium",
            "Belize",
            "Benin",
            "Bhutan",
            "Bolivia",
            "Brazil",
            "Brunei Darussalam",
            "Bulgaria",
            "Burkina Faso",
            "Burundi",
            "Cambodia",
            "Cameroon",
            "Canada",
            "Cape Verde",
            "Central African Republic",
            "Chad",
            "Chile",
            "China",
            "Colombia",
            "Comoros",
            "Congo",
            "Cook Islands",
            "Costa Rica",
            "Côte d’Ivoire",
            "Croatia",
            "Cuba",
            "Cyprus",
            "Czech Republic",
            "Democratic People’s Republic of Korea",
            "Denmark",
            "Djibouti",
            "Dominica",
            "Dominican Republic",
            "Ecuador",
            "Egypt",
            "El Salvador",
            "Equatorial Guinea",
            "Eritrea",
            "Estonia",
            "Ethiopia",
            "Fiji",
            "Finland",
            "France",
            "Gabon",
            "Gambia",
            "Georgia",
            "Germany",
            "Ghana",
            "Greece",
            "Guatemala",
            "Guinea",
            "Guinea-Bissau",
            "Guyana",
            "Haiti",
            "Holy See",
            "Honduras",
            "Hungary",
            "Iceland",
            "India",
            "Indonesia",
            "Iran (Islamic Republic of)",
            "Iraq",
            "Ireland",
            "Israel",
            "Italy",
            "Jamaica",
            "Japan",
            "Jordan",
            "Kazakstan",
            "Kenya",
            "Kiribati",
            "Kuwait",
            "Kyrgyzstan",
            "Lao People’s Democratic Republic",
            "Latvia",
            "Lebanon",
            "Lesotho",
            "Liberia",
            "Libyan Arab Jamahiriya",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Madagascar",
            "Malawi",
            "Malaysia",
            "Maldives",
            "Mali",
            "Malta",
            "Marshall Islands",
            "Mauritania",
            "Mauritius",
            "Mexico",
            "Micronesia (Federated States of)",
            "Monaco",
            "Mongolia",
            "Morocco",
            "Mozambique",
            "Myanmar",
            "Namibia",
            "Nauru",
            "Nepal",
            "Netherlands",
            "New Zealand",
            "Nicaragua",
            "Niger",
            "Nigeria",
            "Niue",
            "Norway",
            "Oman",
            "Pakistan",
            "Palau",
            "Panama",
            "Papua New Guinea",
            "Paraguay",
            "Peru",
            "Philippines",
            "Poland",
            "Portugal",
            "Qatar",
            "Republic of Korea",
            "Republic of Moldova",
            "Romania",
            "Russian Federation",
            "Rwanda",
            "Seychelles",
            "Sierra Leone",
            "Singapore",
            "Slovakia",
            "Slovenia",
            "Solomon Islands",
            "South Africa",
            "Spain",
            "Sri Lanka",
            "Sudan",
            "Suriname",
            "Swaziland",
            "Sweden",
            "Switzerland",
            "Syrian Arab Republic",
            "Tajikistan",
            "Ukraine",
            "United Arab Emirates",
            "United Kingdom",
            "Turkey",
            "United Republic of Tanzania",
            "United States of America",
            "Uruguay",
            "Uzbekistan",
        ]
    },
    unctad: {
        head: 'Country',
        countries: [
            "Afghanistan",
            "Albania",
            "Algeria",
            "Andorra",
            "Angola",
            "Antigua and Barbuda",
            "Argentina",
            "Armenia",
            "Australia",
            "Austria",
            "Azerbaijan",
            "Bahamas",
            "Bahrain",
            "Bangladesh",
            "Barbados",
            "Belarus",
            "Belgium",
            "Belize",
            "Benin",
            "Bhutan",
            "Bolivia",
            "Bosnia and Herzegovina",
            "Botswana",
            "Brazil",
            "Brunei Darussalam",
            "Bulgaria",
            "Burkina Faso",
            "Burundi",
            "Cambodia",
            "Cameroon",
            "Canada",
            "Cabo Verde",
            "Central African Republic",
            "Chad",
            "Chile",
            "China",
            "Colombia",
            "Comoros",
            "Congo",
            "Costa Rica",
            "Côte d'Ivoire",
            "Croatia",
            "Cuba",
            "Cyprus",
            "Czechia",
            "Democratic People's Republic of Korea",
            "Democratic Republic of the Congo",
            "Denmark",
            "Djibouti",
            "Dominica",
            "Dominican Republic",
            "Ecuador",
            "Egypt",
            "El Salvador",
            "Equatorial Guinea",
            "Eritrea",
            "Estonia",
            "Eswatini",
            "Ethiopia",
            "Fiji",
            "Finland",
            "France",
            "Gabon",
            "Gambia",
            "Georgia",
            "Germany",
            "Ghana",
            "Greece",
            "Grenada",
            "Guatemala",
            "Guinea",
            "Guinea-Bissau",
            "Guyana",
            "Haiti",
            "Holy See",
            "Honduras",
            "Hungary",
            "Iceland",
            "India",
            "Indonesia",
            "Iran (Islamic Republic of)",
            "Iraq",
            "Ireland",
            "Israel",
            "Italy",
            "Jamaica",
            "Japan",
            "Jordan",
            "Kazakhstan",
            "Kenya",
            "Kiribati",
            "Kuwait",
            "Kyrgyzstan",
            "Lao People's Democratic Republic",
            "Latvia",
            "Lebanon",
            "Lesotho",
            "Liberia",
            "Libya",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Madagascar",
            "Malawi",
            "Malaysia",
            "Maldives",
            "Mali",
            "Malta",
            "Marshall Islands",
            "Mauritania",
            "Mauritius",
            "Mexico",
            "Micronesia (Federated States of)",
            "Monaco",
            "Mongolia",
            "Montenegro",
            "Morocco",
            "Mozambique",
            "Myanmar",
            "Namibia",
            "Nauru",
            "Nepal",
            "Netherlands",
            "New Zealand",
            "Nicaragua",
            "Niger",
            "Nigeria",
            "Norway",
            "Oman",
            "Pakistan",
            "Palau",
            "Panama",
            "Papua New Guinea",
            "Paraguay",
            "Peru",
            "Philippines",
            "Poland",
            "Portugal",
            "Qatar",
            "Republic of Korea",
            "Republic of Moldova",
            "Romania",
            "Russian Federation",
            "Rwanda",
            "Saint Kitts and Nevis",
            "Saint Lucia",
            "Saint Vincent and the Grenadines",
            "Samoa",
            "San Marino",
            "Sao Tome and Principe",
            "Saudi Arabia",
            "Senegal",
            "Serbia",
            "Seychelles",
            "Sierra Leone",
            "Singapore",
            "Slovakia",
            "Slovenia",
            "Solomon Islands",
            "Somalia",
            "South Africa",
            "South Sudan",
            "Spain",
            "Sri Lanka",
            "State of Palestine",
            "Sudan",
            "Suriname",
            "Sweden",
            "Switzerland",
            "Syrian Arab Republic",
            "Tajikistan",
            "Thailand",
            "The former Yugoslav Republic of Macedonia",
            "Timor-Leste",
            "Togo",
            "Tonga",
            "Trinidad and Tobago",
            "Tunisia",
            "Turkey",
            "Turkmenistan",
            "Tuvalu",
            "Uganda",
            "Ukraine",
            "United Arab Emirates",
            "United Kingdom of Great Britain and Northern Ireland",
            "United Republic of Tanzania",
            "United States of America",
            "Uruguay",
            "Uzbekistan",
            "Vanuatu",
            "Venezuela (Bolivarian Republic of)",
            "Viet Nam",
            "Yemen",
            "Zambia",
            "Zimbabwe",
        ]
    },
    asecs: {
        head: 'Portfolio',
        countries: [
            "Australia - Scott Morrison",
            "Myanmar - Win Myint",
            "Canada - Justin Trudeau",
            "China - Xi Jinping",
            "France - Emmanuel Macron",
            "Germany - Angela Merkel",
            "India - Narendra Modi",
            "Japan - Shinzo Abe",
            "Pakistan - Imran Khan",
            "Malaysia - Mahathir Mohammed",
            "UK - Theresa May",
            "USA - Donald Trump",
            "Vietnam - Nguyen Phu Trong",
            "Russia - Vladimir Putin",
            "Republic of Korea - Moon Jae-in",
            "Singapore - Lee Hsien Loong",
            "Thailand - Prayut Chan-o-cha",
            "Sweden - Stefan Lofven (acting PM, will change)",
            "Sri Lanka - Maithripala Sirisena",
            "New Zealand - Jacinda Ardern",
            "East Timor - Francisco Guterres",
            "Philippines - Rodrigo Duterte",
        ]
    }
}

var only_single_deleg = ['aippm', 'unsc', 'asecs', 'ip-report', 'ip-photo'];

function xhr(tries, data, url, s_callback, f_callback) {
    if (tries > 0) {
        var req = new XMLHttpRequest();
        req.addEventListener("load", function(e) {
            if (req.status === 200) {
                s_callback();
            } else {
                xhr(--tries, data, url, s_callback, f_callback);
            }
        });
        req.addEventListener("error", function(e) {
            console.log("Error:", e);
            xhr(--tries, data, url, s_callback, f_callback);
        });
        req.open("POST", url);
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        var send_data = JSON.stringify(data);
        req.send(send_data);
    } else {
        f_callback();
    }
}

function send_firebase() {
    const tries = 5;
    var raw_success = null,
        del1_accom = null,
        del2_accom = null,
        del1_food = null,
        del2_food = null,
        del1_merch = null,
        del2_merch = null,
        del_commit = null;
    function check_done() {
        if (raw_success != null && del1_accom != null && del2_accom != null && del1_food != null && del2_food != null && del1_merch != null && del2_merch != null && del_commit != null) {
            var code = [];
            raw_success ? code.push(1) : code.push(0);
            del1_accom ? code.push(1) : code.push(0);
            del2_accom ? code.push(1) : code.push(0);
            del1_food ? code.push(1) : code.push(0);
            del2_food ? code.push(1) : code.push(0);
            del1_merch ? code.push(1) : code.push(0);
            del2_merch ? code.push(1) : code.push(0);
            del_commit ? code.push(1) : code.push(0);
            var dcc = parseInt(code.join(''),2);
            console.log("Database consistency code:", dcc, "(", code.join(''), ")");
            if (dcc === 255) {
                document.getElementById("del_final_loader").style.display = 'none';
                document.getElementById("del_final_message").style.display = 'block';
            } else {
                document.getElementById("del_final_loader").style.display = 'none';
                const error_msg = document.getElementById("del_final_error");
                error_msg.innerHTML = error_msg.innerHTML + "<small>(Error code: "+dcc+")</small>"
                error_msg.style.display = 'block';
            }
        }
    }
    xhr(tries, {
        deleg1_info,
        deleg2_info,
        preference1,
        preference2
    }, firbase_base+"data_dump.json", function() { raw_success = true; check_done(); }, function() { raw_success = false; check_done(); });
    if (deleg1_info.accom === "yes") {
        xhr(tries, {
            name: deleg1_info.name,
            email: deleg1_info.email,
            phone: deleg1_info.phone
        }, firbase_base+"accom.json", function() { del1_accom = true; check_done(); }, function() { del1_accom = false; check_done(); });
    } else { del1_accom = true; check_done(); }
    if (deleg2_info.accom === "yes") {
        xhr(tries, {
            name: deleg2_info.name,
            email: deleg2_info.email,
            phone: deleg2_info.phone
        }, firbase_base+"accom.json", function() { del2_accom = true; check_done(); }, function() { del2_accom = false; check_done(); });
    } else { del2_accom = true; check_done(); }
    if (deleg1_info.merch === "yes") {
        xhr(tries, {
            name: deleg1_info.name,
            email: deleg1_info.email,
            phone: deleg1_info.phone
        }, firbase_base+"merch.json", function() { del1_merch = true; check_done(); }, function() { del1_merch = false; check_done(); });
    } else { del1_merch = true; check_done(); }
    if (deleg2_info.merch === "yes") {
        xhr(tries, {
            name: deleg2_info.name,
            email: deleg2_info.email,
            phone: deleg2_info.phone
        }, firbase_base+"merch.json", function() { del2_merch = true; check_done(); }, function() { del2_merch = false; check_done(); });
    } else { del2_merch = true; check_done(); }
    if (deleg1_info.food === "veg") {
        xhr(tries, {
            name: deleg1_info.name,
            email: deleg1_info.email,
            phone: deleg1_info.phone,
        }, firbase_base+"veg.json", function() { del1_food = true; check_done(); }, function() { del1_food = false; check_done(); });
    } else if (deleg1_info.food === "nonveg") {
        xhr(tries, {
            name: deleg1_info.name,
            email: deleg1_info.email,
            phone: deleg1_info.phone,
        }, firbase_base+"nonveg.json", function() { del1_food = true; check_done(); }, function() { del1_food = false; check_done(); });
    } else { del1_food = true; check_done(); }
    if (deleg2_info.food === "veg") {
        xhr(tries, {
            name: deleg2_info.name,
            email: deleg2_info.email,
            phone: deleg2_info.phone,
        }, firbase_base+"veg.json", function() { del2_food = true; check_done(); }, function() { del2_food = false; check_done(); });
    } else if (deleg2_info.food === "nonveg") {
        xhr(tries, {
            name: deleg2_info.name,
            email: deleg2_info.email,
            phone: deleg2_info.phone,
        }, firbase_base+"nonveg.json", function() { del2_food = true; check_done(); }, function() { del2_food = false; check_done(); });
    } else { del2_food = true; check_done(); }
    if (!double_deleg) {
        xhr(tries, {
            name: deleg1_info.name,
            email: deleg1_info.email,
            phone: deleg1_info.phone,
            institution: deleg1_info.inst,
            experience: deleg1_info.exp,
            ambassador: deleg1_info.amba,
            referrer: deleg1_info.ref,
            preference1,
            preference2
        }, firbase_base+"single_deleg/"+preference1.committee+".json", function() { del_commit = true; check_done(); }, function() { del_commit = false; check_done(); });
    } else {
        xhr(tries, {
            delegate1: {
                name: deleg1_info.name,
                email: deleg1_info.email,
                phone: deleg1_info.phone,
                institution: deleg1_info.inst,
                experience: deleg1_info.exp,
                ambassador: deleg1_info.amba,
                referrer: deleg1_info.ref,
            },
            delegate2: {
                name: deleg2_info.name,
                email: deleg2_info.email,
                phone: deleg2_info.phone,
                institution: deleg2_info.inst,
                experience: deleg2_info.exp,
                ambassador: deleg2_info.amba,
                referrer: deleg2_info.ref,
            },
            preference1,
            preference2
        }, firbase_base+"double_deleg/"+preference1.committee+".json", function() { del_commit = true; check_done(); }, function() { del_commit = false; check_done(); });
    }
}

function expand(elem_id) {
    const elem = document.getElementById(elem_id);
    if (elem) {
        if (nav_exp === elem_id) {
            elem.style.maxHeight = '2.6em';
            nav_exp = '';
            return;
        } else if (nav_exp !== '') {
            const exp_elem = document.getElementById(nav_exp);
            exp_elem.style.maxHeight = '2.6em';
        }
        nav_exp = elem_id;
        elem.style.maxHeight = 'none';
        const elem_h = elem.clientHeight;
        elem.style.maxHeight = '2.6em';
        window.setTimeout(function() {
            elem.style.maxHeight = elem_h + 'px';
        }, 5);
    } else {
        console.log(elem_id, "not found");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('nav');
    nav.classList.add('js');
    const form1 = document.forms['del_type'];
    if (form1 !== undefined) {
        form1.style.display = 'block';
    }
    lazyLoadImages();
});

function send_notif(type, message) {
    console.log(type, message);
    var elem = document.createElement('div');
    elem.innerHTML = message;
    var list;
    if (type == 's')
        list = document.getElementById("success-list");
    else
        list = document.getElementById("error-list");
    list.appendChild(elem);
    window.setTimeout(function() {
        elem.parentNode.removeChild(elem);
    }, 2500);
}

function validate_name(name) {
    if (name !== "") {
        return true;
    }
    send_notif("e", "Please enter name");
    return false;
}

function validate_inst(inst) {
    if (inst !== "") {
        return true;
    }
    send_notif("e", "Please enter institution name");
    return false;
}

function validate_phone(p) {
    var valid = true;
    if (p === "") {
        send_notif("e", "Please enter a phone number");
        valid = false;
    } else if (!(p.length > 9 && p.length < 12)) {
        send_notif("e", "Please enter a 10/11 digit phone number");
        valid = false;
    } else if (!/^\d+$/.test(p)) {
        send_notif("e", "Please enter a valid phone number");
        valid = false;
    }
    return valid;
}

function validate_email(e) {
    var valid = true;
    if (e === "") {
        send_notif("e", "Please enter an email address");
        valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(e)) {
        send_notif("e", "Please enter a valid email address");
        valid = false;
    }
    return valid;
}

function validate_food(o) {
    if (o === "") {
        send_notif("e", "Please select food preference");
        return false;
    }
    return true;
}

function validate_merch(o) {
    if (o === "") {
        send_notif("e", "Please select if you want JUMUN merchandise");
        return false;
    }
    return true;
}

function validate_accom(o) {
    if (o === "") {
        send_notif("e", "Please select if you need accommodation");
        return false;
    }
    return true;
}

function validate_amba(o) {
    if (o !== '' && !/^[a-zA-Z0-9]{7}$/.test(o)) {
        send_notif('e', 'Please enter a valid campus ambassador code');
        return false;
    }
    return true;
}

function swap_forms(form1, form2) {
    if (form1 === undefined || form2 === undefined)
        return;
    form1.style.display = 'none';
    form2.style.display = 'block';
    window.scrollTo(0, document.getElementById('apply-sec').offsetTop);
}

function del_type_submit() {
    const this_form = document.forms['del_type'];
    const value = this_form['del_type_opt'].value;
    if (value === "") {
        send_notif("e", "Please select a delegation type");
    } else {
        const next_form = document.forms['del1_info'];
        if (value === "single") {
            double_deleg = false;
            document.getElementById("del_text").innerHTML = "Delegate Info";
        } else {
            double_deleg = true;
        }
        swap_forms(this_form, next_form);
    }
    return false;
}

function del1_info_submit() {
    const this_form = document.forms['del1_info'];
    const name = this_form["del_1_name"].value;
    const email = this_form["del_1_email"].value;
    const phone = this_form["del_1_phone"].value;
    const inst = this_form["del_1_inst"].value;
    const food = this_form["del_1_food"].value;
    const accom = this_form["del_1_accom"].value;
    const merch = this_form["del_1_merch"].value;
    const amba = this_form["del_1_amba"].value;
    const ref = this_form["del_1_ref"].value;
    if (validate_name(name) && validate_email(email) && validate_phone(phone) && validate_inst(inst) && validate_food(food) && validate_accom(accom) && validate_merch(merch) && validate_amba(amba)) {
        deleg1_info = {
            name,
            email,
            phone,
            inst,
            exp: this_form["del_1_exp"].value,
            food,
            accom,
            amba,
            ref,
            merch };
        if (double_deleg) {
            swap_forms(this_form, document.forms['del2_info']);
        } else {
            swap_forms(this_form, document.forms['del_pref1']);
        }
    }
    return false;
}

function del2_info_submit() {
    const this_form = document.forms['del2_info'];
    const name = this_form["del_2_name"].value;
    const email = this_form["del_2_email"].value;
    const phone = this_form["del_2_phone"].value;
    const inst = this_form["del_2_inst"].value;
    const food = this_form["del_2_food"].value;
    const accom = this_form["del_2_accom"].value;
    const merch = this_form["del_2_merch"].value;
    const amba = this_form["del_2_amba"].value;
    const ref = this_form["del_2_ref"].value;
    if (validate_name(name) && validate_email(email) && validate_phone(phone) && validate_inst(inst) && validate_food(food) && validate_accom(accom) && validate_merch(merch) && validate_amba(amba)) {
        deleg2_info = {
            name,
            email,
            phone,
            inst,
            exp: this_form["del_2_exp"].value,
            food,
            accom,
            amba,
            ref,
            merch };
        const next_form = document.forms['del_pref1'];
        const next_commit = next_form['pref1_committee'];
        for (var i = next_commit.options.length-1; i > 0; --i) {
            if (only_single_deleg.indexOf(next_commit.options[i].value) >= 0) {
                next_commit.options[i].style.display = 'none';
            }
        }
        swap_forms(this_form, next_form);
    }
    return false;
}

function clear_options(selectbox) {
    for(var i = selectbox.options.length - 1 ; i > 0 ; i--) {
        selectbox.remove(i);
    }
    selectbox.options[0].selected = true;
}

function add_options(selectbox, option_arr, skip) {
    for (var i = 0; i < option_arr.length; ++i) {
        if (option_arr[i] === skip)
            continue;
        var opt = document.createElement('option');
        opt.value = option_arr[i];
        opt.innerHTML = option_arr[i];
        selectbox.appendChild(opt);
    }
}

function rename_labels(label1, label2, prefix) {
    label1.innerHTML = prefix + " Preference " + 1;
    label2.innerHTML = prefix + " Preference " + 2;
}

function populate_country_options(select, option_arr, skip) {
    clear_options(select);
    if (skip === undefined)
        add_options(select, option_arr, "");
    else
        add_options(select, option_arr, skip);
    select.disabled = false;
}

function del_pref_n_change(select, n) {
    const select1 = document.getElementById('del_pref'+n+'_country1');
    const select2 = document.getElementById('del_pref'+n+'_country2');
    if (select.value === 'ip-report' || select.value === 'ip-photo' || select.value === 'unsc') {
        country_req['pref'+n] = false;
        document.getElementById('label_'+'del_pref'+n+'_country1').style.display = 'none';
        select1.style.display = 'none';
        document.getElementById('label_'+'del_pref'+n+'_country2').style.display = 'none';
        select2.style.display = 'none';
    } else {
        country_req['pref'+n] = true;
        document.getElementById('label_'+'del_pref'+n+'_country1').style.display = 'block';
        select1.style.display = 'block';
        document.getElementById('label_'+'del_pref'+n+'_country2').style.display = 'block';
        select2.style.display = 'block';
        rename_labels(
            document.getElementById('label_del_pref'+n+'_country1'),
            document.getElementById('label_del_pref'+n+'_country2'),
            country_maps[select.value].head);
        populate_country_options(
            select1,
            country_maps[select.value].countries);
    }
    select1.options[0].selected = true;
    select2.options[0].selected = true;
    select2.disabled = true;
}

function del_pref_n_c1_change(select, n) {
    const value = document.forms["del_pref"+n]["pref"+n+"_committee"].value;
    const next_select = document.getElementById('del_pref'+n+'_country2');
    if (next_select.value === "" || next_select.value === select.value) {
        populate_country_options(
            next_select,
            country_maps[value].countries, select.value);
        next_select.value = "";
    }
}

function del_pref1_change(select) {
    del_pref_n_change(select, 1);
}

function del_pref1_c1_change(select) {
    del_pref_n_c1_change(select, 1);
}

function del_pref1_c2_change(select) {
    return;
}

function del_pref2_change(select) {
    del_pref_n_change(select, 2);
}

function del_pref2_c1_change(select) {
    del_pref_n_c1_change(select, 2);
}

function del_pref2_c2_change(select) {
    return;
}

function del_pref1_submit() {
    const this_form = document.forms["del_pref1"];
    const next_form = document.forms["del_pref2"];
    const commit = this_form["pref1_committee"].value;
    const country1 = this_form["pref1_country1"].value;
    const country2 = this_form["pref1_country2"].value;
    if (commit === "") {
        send_notif("e", "Please select a committee");
    } else if (country_req['pref1'] && country1 === "") {
        send_notif("e", "Please select "+document.getElementById("label_del_pref1_country1").innerHTML)
    } else if (country_req['pref1'] && country2 === "") {
        send_notif("e", "Please select "+document.getElementById("label_del_pref1_country2").innerHTML)
    } else {
        preference1 = {
            committee: commit,
            country1: country1,
            country2: country2
        }
        const next_commit = next_form['pref2_committee'];
        for (var i = next_commit.options.length-1; i >= 0; --i) {
            if (next_commit.options[i].value === commit) {
                next_commit.options[i].style.display = 'none';
            }
            if (double_deleg && only_single_deleg.indexOf(next_commit.options[i].value) >= 0) {
                next_commit.options[i].style.display = 'none';
            }
        }
        swap_forms(this_form, next_form);
    }
    return false;
}

function del_pref2_submit() {
    const this_form = document.forms["del_pref2"];
    const commit = this_form["pref2_committee"].value;
    const country1 = this_form["pref2_country1"].value;
    const country2 = this_form["pref2_country2"].value;
    if (commit === "") {
        send_notif("e", "Please select a committee");
    } else if (country_req['pref2'] && country1 === "") {
        send_notif("e", "Please select "+document.getElementById("label_del_pref2_country1").innerHTML)
    } else if (country_req['pref2'] && country2 === "") {
        send_notif("e", "Please select "+document.getElementById("label_del_pref2_country2").innerHTML)
    } else {
        preference2 = {
            committee: commit,
            country1: country1,
            country2: country2
        }
        swap_forms(this_form, document.forms["del_final"]);
        console.log("Send data to firebase", double_deleg ? "double_deleg" : "single_deleg", "database", {
            deleg1_info,
            deleg2_info,
            preference1,
            preference2,
        });
        send_firebase();
    }
    return false;
}
