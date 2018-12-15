var nav_exp = '';
var double_deleg = false;
var deleg1_info = {};
var deleg2_info = {};
var preference1 = {};
var preference2 = {};
const firbase_base = "https://jumun2019-9c834.firebaseio.com/";

var country_maps = {
    aippm: {
        head: 'Portfolio',
        countries: [
            "Narendra Damodardas Modi - Bharatiya Janata Party",
            "Rajnath Singh - Bharatiya Janata Party",
            "Amit Shah - Bharatiya Janata Party",
            "Sushma Swaraj - Bharatiya Janata Party",
            "Arun Jaitley - Bharatiya Janata Party",
            "Manohar Parrikar - Bharatiya Janata Party",
            "Ananth Kumar - Bharatiya Janata Party",
            "Lal Krishna Advani - Bharatiya Janata Party",
            "Dr.Jitendra Singh - Bharatiya Janata Party",
            "Subramanian Swamy - Bharatiya Janata Party",
            "Rajyavardhan Singh Rathore - Bharatiya Janata Party",
            "Ravi Shankar Prasad - Bharatiya Janata Party",
            "Gen. V. K. Singh - Bharatiya Janata Party",
            "Yogi Adityanath - Bharatiya Janata Party",
            "Nirmala Sitharaman - Bharatiya Janata Party",
            "Sonia Gandhi - Indian National Congress",
            "Rahul Gandhi - Indian National Congress",
            "Mallikarjun Khadge - Indian National Congress",
            "Ghulam Nabi Azad - Indian National Congress",
            "Manmohan Singh - Indian National Congress",
            "Anand Sharma - Indian National Congress",
            "P.Chidambaram - Indian National Congress",
            "Digvijay Singh - Indian National Congress",
            "Dr. Shashi Tharoor - Indian National Congress",
            "Kamal Nath - Indian National Congress",
            "Randeep Surjewala - Indian National Congress",
            "Mamta Banerjee - All India Trinamool Congress",
            "Sudeep Banerjee - All India Trinamool Congress",
            "Derek ’O’ Brion - All India Trinamool Congress",
            "Mayawati - Bahujan Samaj Party",
            "Shri Satish Chandra Mishra - Bahujan Samaj Party",
            "S.Sudhakar Reddy - Communist Party of India",
            "C.N.Jayadevan - Communist Party of India",
            "D.Raja - Communist Party of India",
            "Kanam Rajendran - Communist Party of India",
            "Prakash Karat - Communist Party of India(Marxist)",
            "P.Karunakaran - Communist Party of India(Marxist)",
            "Sitaram Yechury - Communist Party of India(Marxist)",
            "Uddhav Thackrey - Shivsena",
            "Sanjay Raut - Shivsena",
            "Aditya Thackrey - Shivsena",
            "Raj Thackeray - Maharashtra Navnirman Sena",
            "Mehbooba Mufti - J&K People's Democratic Party",
            "Nazir Ahmad Laway - J&K People's Democratic Party",
            "Farooq Abdullah - J&K National Conference",
            "Umar Abdullah - J&K National Conference",
            "Mulayam Singh Yadav - Samajwadi Party",
            "Akhilesh Yadav - Samajwadi Party",
            "Asaduddin Owaisi - All India Majlis-e-Ittehul Muslimeen",
            "Nitish Kumar - Janta Dal (United)",
            "K. C. Tyagi - Janta Dal (United)",
            "Arvind Kejriwal - Aam Aadmi Party",
            "Bhagwant Mann - Aam Aadmi Party",
            "Manish Sisodia - Aam Aadmi Party",
            "Sukhbir Singh Badal - Shiromani Akali Dal",
            "Prakash Singh Badal - Shiromani Akali Dal",
            "Naveen Patnaik - Biju Janta Dal",
            "Kalpataru Das - Biju Janta Dal",
            "Baijyant ‘Jay’ Panda - Biju Janta Dal"
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
            "Bolivia",
            "Bosnia and Herzegovina",
            "Botswana",
            "Brazil",
            "Brunei",
            "Bulgaria",
            "Burkina Faso",
            "Burma (Myanmar)",
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
            "Congo, Rep. of",
            "Congo, Dem. Rep. of",
            "Costa Rica",
            "Côte d'Ivoire",
            "Croatia",
            "Cuba",
            "Cyprus",
            "Czech Republic3",
            "Denmark",
            "Djibouti",
            "Dominica",
            "Dominican Republic",
            "East Timor4",
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
            "Grenada",
            "Guatemala",
            "Guinea",
            "Guinea-Bissau",
            "Guyana",
            "Haiti",
            "Honduras",
            "Hungary",
            "Iceland",
            "India",
            "Indonesia",
            "Iran",
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
            "Korea, North",
            "Korea, South",
            "Kuwait",
            "Kyrgyzstan",
            "Laos",
            "Latvia",
            "Lebanon",
            "Lesotho",
            "Liberia",
            "Libya",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Macedonia",
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
            "Micronesia",
            "Moldova",
            "Monaco",
            "Mongolia",
            "Montenegro4, 6",
            "Morocco",
            "Mozambique",
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
            "Romania",
            "Russia",
            "Rwanda",
            "St. Kitts and Nevis",
            "St. Lucia",
            "St. Vincent and the Grenadines",
            "Samoa",
            "San Marino",
            "São Tomé and Príncipe",
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
            "Swaziland",
            "Sweden",
            "Switzerland",
            "Syria",
            "Tajikistan",
            "Tanzania",
            "Thailand",
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
            "United Kingdom",
            "United States",
            "Uruguay",
            "Uzbekistan",
            "Vanuatu",
            "Venezuela",
            "Vietnam",
            "Yemen",
            "Zambia",
            "Zimbabwe"
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
            "United Kingdom of Great Britain and",
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
}

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
                send_notif('s', 'Application successful!');
            } else {
                send_notif('e', 'Application Failed! (Error code: '+dcc+')');
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
            experience: deleg1_info.exp,
            preference1,
            preference2
        }, firbase_base+"single_deleg/"+preference1.committee+".json", function() { del_commit = true; check_done(); }, function() { del_commit = false; check_done(); });
    } else {
        xhr(tries, {
            delegate1: {
                name: deleg1_info.name,
                email: deleg1_info.email,
                phone: deleg1_info.phone,
                experience: deleg1_info.exp,
            },
            delegate2: {
                name: deleg2_info.name,
                email: deleg2_info.email,
                phone: deleg2_info.phone,
                experience: deleg2_info.exp,
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
});

function send_notif(type, message) {
    console.log(type, message);
}

function validate_name(name) {
    if (name !== "") {
        return true;
    }
    send_notif("e", "Please enter name");
    return false;
}

function validate_phone(p) {
    var valid = true;
    if (p === "") {
        send_notif("e", "Please enter a phone number");
        valid = false;
    } else if (p.length !== 10) {
        send_notif("e", "Please enter a 10 digit phone number");
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
        send_notif("e", "Please select if you need accomodation");
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
    const food = this_form["del_1_food"].value;
    const accom = this_form["del_1_accom"].value;
    const merch = this_form["del_1_merch"].value;
    if (validate_name(name) && validate_email(email) && validate_phone(phone) && validate_food(food) && validate_accom(accom) && validate_merch(merch)) {
        deleg1_info = {
            name,
            email,
            phone,
            exp: this_form["del_1_exp"].value,
            food,
            accom,
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
    const food = this_form["del_2_food"].value;
    const accom = this_form["del_2_accom"].value;
    const merch = this_form["del_2_merch"].value;
    if (validate_name(name) && validate_email(email) && validate_phone(phone) && validate_food(food) && validate_accom(accom) && validate_merch(merch)) {
        deleg2_info = {
            name,
            email,
            phone,
            exp: this_form["del_2_exp"].value,
            food,
            accom,
            merch };
        swap_forms(this_form, document.forms['del_pref1']);
    }
    return false;
}

function clear_options(selectbox) {
    for(var i = selectbox.options.length - 1 ; i > 0 ; i--) {
        selectbox.remove(i);
    }
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
    rename_labels(
        document.getElementById('label_del_pref'+n+'_country1'),
        document.getElementById('label_del_pref'+n+'_country2'),
        country_maps[select.value].head);
    populate_country_options(
        select1,
        country_maps[select.value].countries);
    select1.options[0].selected = true;
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
    } else if (country1 === "") {
        send_notif("e", "Please select "+document.getElementById("label_del_pref1_country1").innerHTML)
    } else if (country2 === "") {
        send_notif("e", "Please select "+document.getElementById("label_del_pref1_country2").innerHTML)
    } else {
        preference1 = {
            committee: commit,
            country1: country1,
            country2: country2
        }
        const next_commit = next_form['pref2_committee'];
        for (var i = next_commit.options.length-1; i >= 0; --i) {
            if (next_commit.options[i].value === commit)
                next_commit.options[i].style.display = 'none';
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
    } else if (country1 === "") {
        send_notif("e", "Please select "+document.getElementById("label_del_pref2_country1").innerHTML)
    } else if (country2 === "") {
        send_notif("e", "Please select "+document.getElementById("label_del_pref2_country2").innerHTML)
    } else {
        preference2 = {
            committee: commit,
            country1: country1,
            country2: country2
        }
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
