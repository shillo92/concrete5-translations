var locale = {
	decode: function(code) {
		var chunks, languageCode, countryCode, r;
		if(typeof(code) == "string") {
			chunks = code.replace(/^\s+|\s+$/g, "").replace(/-/g, "_").split("_");
			countryCode = languageCode = "";
			switch(chunks.length) {
				case 1:
					languageCode = chunks[0].replace(/^\s+|\s+$/g, "").toLowerCase();
					break;
				case 2:
					languageCode = chunks[0].replace(/^\s+|\s+$/g, "").toLowerCase();
					countryCode = chunks[1].replace(/^\s+|\s+$/g, "").toUpperCase();
					break;
			}
			if(languageCode.length && languageCode in locale.languages) {
				r = locale.languages[languageCode];
				if((!countryCode.length) || (countryCode in locale.countries)) {
					if(countryCode.length) {
						r += " (" + locale.countries[countryCode] + ")";
					}
					return r;
				}
			}
			return code;
		}
		return "";
	},
	languages: {
		aa: "Afar",
		ab: "Abkhazian",
		ace: "Achinese",
		ae: "Avestan",
		af: "Afrikaans",
		ak: "Akan",
		am: "Amharic",
		an: "Aragonese",
		ar: "Arabic",
		as: "Assamese",
		av: "Avaric",
		awa: "Awadhi",
		ay: "Aymara",
		az: "Azerbaijani",
		ba: "Bashkir",
		bal: "Baluchi",
		ban: "Balinese",
		be: "Belarusian",
		bej: "Beja; Bedawiyet",
		bem: "Bemba",
		bg: "Bulgarian",
		bh: "Bihari",
		bho: "Bhojpuri",
		bi: "Bislama",
		bik: "Bikol",
		bin: "Bini; Edo",
		bm: "Bambara",
		bn: "Bengali; Bangla",
		bo: "Tibetan",
		br: "Breton",
		bs: "Bosnian",
		bug: "Buginese",
		ca: "Catalan",
		ce: "Chechen",
		ceb: "Cebuano",
		ch: "Chamorro",
		co: "Corsican",
		cr: "Cree",
		cs: "Czech",
		cu: "Church Slavic",
		cv: "Chuvash",
		cy: "Welsh",
		da: "Danish",
		de: "German",
		din: "Dinka",
		doi: "Dogri",
		dv: "Divehi; Maldivian",
		dz: "Dzongkha; Bhutani",
		ee: "Éwé",
		el: "Greek",
		en: "English",
		eo: "Esperanto",
		es: "Spanish",
		et: "Estonian",
		eu: "Basque",
		fa: "Persian",
		ff: "Fulah",
		fi: "Finnish",
		fil: "Filipino; Pilipino",
		fj: "Fijian; Fiji",
		fo: "Faroese",
		fon: "Fon",
		fr: "French",
		fy: "Western Frisian",
		ga: "Irish",
		gd: "Scottish Gaelic",
		gl: "Galician",
		gn: "Guarani",
		gon: "Gondi",
		gsw: "Swiss German; Alemannic; Alsatian",
		gu: "Gujarati",
		gv: "Manx",
		ha: "Hausa",
		he: "Hebrew (formerly iw)",
		hi: "Hindi",
		hil: "Hiligaynon",
		hmn: "Hmong",
		ho: "Hiri Motu",
		hr: "Croatian",
		ht: "Haitian; Haitian Creole",
		hu: "Hungarian",
		hy: "Armenian",
		hz: "Herero",
		ia: "Interlingua",
		id: "Indonesian (formerly in)",
		ie: "Interlingue; Occidental",
		ig: "Igbo",
		ii: "Sichuan Yi; Nuosu",
		ik: "Inupiak; Inupiaq",
		ilo: "Iloko",
		io: "Ido",
		is: "Icelandic",
		it: "Italian",
		iu: "Inuktitut",
		ja: "Japanese",
		jv: "Javanese",
		ka: "Georgian",
		kab: "Kabyle",
		kam: "Kamba",
		kbd: "Kabardian",
		kg: "Kongo",
		ki: "Kikuyu; Gikuyu",
		kj: "Kuanyama; Kwanyama",
		kk: "Kazakh",
		kl: "Kalaallisut; Greenlandic",
		km: "Central Khmer; Cambodian",
		kmb: "Kimbundu",
		kn: "Kannada",
		ko: "Korean",
		kok: "Konkani",
		kr: "Kanuri",
		kru: "Kurukh",
		ks: "Kashmiri",
		ku: "Kurdish",
		kv: "Komi",
		kw: "Cornish",
		ky: "Kirghiz",
		la: "Latin",
		lb: "Letzeburgesch; Luxembourgish",
		lg: "Ganda",
		li: "Limburgish; Limburger; Limburgan",
		ln: "Lingala",
		lo: "Lao; Laotian",
		lt: "Lithuanian",
		lu: "Luba-Katanga",
		lua: "Luba-Lulua",
		luo: "Luo (Kenya and Tanzania)",
		lv: "Latvian; Lettish",
		mad: "Madurese",
		mag: "Magahi",
		mai: "Maithili",
		mak: "Makasar",
		man: "Mandingo",
		men: "Mende",
		mg: "Malagasy",
		mh: "Marshallese",
		mi: "Maori",
		min: "Minangkabau",
		mk: "Macedonian",
		ml: "Malayalam",
		mn: "Mongolian",
		mni: "Manipuri",
		mo: "Moldavian",
		mos: "Mossi",
		mr: "Marathi",
		ms: "Malay",
		mt: "Maltese",
		mwr: "Marwari",
		my: "Burmese",
		na: "Nauru",
		nap: "Neapolitan",
		nb: "Norwegian Bokmål",
		nd: "Ndebele, North",
		ne: "Nepali",
		ng: "Ndonga",
		nl: "Dutch",
		nn: "Norwegian Nynorsk",
		no: "Norwegian",
		nr: "Ndebele, South",
		nso: "Pedi; Sepedi; Northern Sotho",
		nv: "Navajo; Navaho",
		ny: "Chichewa; Nyanja",
		nym: "Nyamwezi",
		nyn: "Nyankole",
		oc: "Occitan; Provençal",
		oj: "Ojibwa",
		om: "(Afan) Oromo",
		or: "Oriya",
		os: "Ossetian; Ossetic",
		pa: "Panjabi; Punjabi",
		pag: "Pangasinan",
		pam: "Pampanga; Kapampangan",
		pi: "Pali",
		pl: "Polish",
		ps: "Pashto; Pushto",
		pt: "Portuguese",
		qu: "Quechua",
		raj: "Rajasthani",
		rm: "Romansh",
		rn: "Rundi; Kirundi",
		ro: "Romanian",
		ru: "Russian",
		rw: "Kinyarwanda",
		sa: "Sanskrit",
		sas: "Sasak",
		sat: "Santali",
		sc: "Sardinian",
		scn: "Sicilian",
		sd: "Sindhi",
		se: "Northern Sami",
		sg: "Sango; Sangro",
		shn: "Shan",
		si: "Sinhala; Sinhalese",
		sid: "Sidamo",
		sk: "Slovak",
		sl: "Slovenian",
		sm: "Samoan",
		sn: "Shona",
		so: "Somali",
		sq: "Albanian",
		sr: "Serbian",
		srr: "Serer",
		ss: "Swati; Siswati",
		st: "Sesotho; Sotho, Southern",
		su: "Sundanese",
		suk: "Sukuma",
		sus: "Susu",
		sv: "Swedish",
		sw: "Swahili",
		ta: "Tamil",
		te: "Telugu",
		tem: "Timne",
		tg: "Tajik",
		th: "Thai",
		ti: "Tigrinya",
		tiv: "Tiv",
		tk: "Turkmen",
		tl: "Tagalog",
		tn: "Tswana; Setswana",
		to: "Tonga",
		tr: "Turkish",
		ts: "Tsonga",
		tt: "Tatar",
		tum: "Tumbuka",
		tw: "Twi",
		ty: "Tahitian",
		ug: "Uighur",
		uk: "Ukrainian",
		umb: "Umbundu",
		ur: "Urdu",
		uz: "Uzbek",
		ve: "Venda",
		vi: "Vietnamese",
		vo: "Volapük; Volapuk",
		wa: "Walloon",
		wal: "Walamo",
		war: "Waray",
		wo: "Wolof",
		xh: "Xhosa",
		yao: "Yao",
		yi: "Yiddish (formerly ji)",
		yo: "Yoruba",
		za: "Zhuang",
		zh: "Chinese",
		zu: "Zulu"
	},
	countries: {
		AD: "Andorra",
		AE: "United Arab Emirates",
		AF: "Afghanistan",
		AG: "Antigua and Barbuda",
		AI: "Anguilla",
		AL: "Albania",
		AM: "Armenia",
		AN: "Netherlands Antilles",
		AO: "Angola",
		AQ: "Antarctica",
		AR: "Argentina",
		AS: "Samoa (American)",
		AT: "Austria",
		AU: "Australia",
		AW: "Aruba",
		AX: "Aaland Islands",
		AZ: "Azerbaijan",
		BA: "Bosnia and Herzegovina",
		BB: "Barbados",
		BD: "Bangladesh",
		BE: "Belgium",
		BF: "Burkina Faso",
		BG: "Bulgaria",
		BH: "Bahrain",
		BI: "Burundi",
		BJ: "Benin",
		BM: "Bermuda",
		BN: "Brunei",
		BO: "Bolivia",
		BR: "Brazil",
		BS: "Bahamas",
		BT: "Bhutan",
		BV: "Bouvet Island",
		BW: "Botswana",
		BY: "Belarus",
		BZ: "Belize",
		CA: "Canada",
		CC: "Cocos (Keeling) Islands",
		CD: "Congo (Dem.  Rep.)",
		CF: "Central African Republic",
		CG: "Congo (Rep.)",
		CH: "Switzerland",
		CI: "Côte d’Ivoire",
		CK: "Cook Islands",
		CL: "Chile",
		CM: "Cameroon",
		CN: "China",
		CO: "Colombia",
		CR: "Costa Rica",
		CU: "Cuba",
		CV: "Cape Verde",
		CX: "Christmas Island",
		CY: "Cyprus",
		CZ: "Czech Republic",
		DE: "Germany",
		DJ: "Djibouti",
		DK: "Denmark",
		DM: "Dominica",
		DO: "Dominican Republic",
		DZ: "Algeria",
		EC: "Ecuador",
		EE: "Estonia",
		EG: "Egypt",
		EH: "Western Sahara",
		ER: "Eritrea",
		ES: "Spain",
		ET: "Ethiopia",
		FI: "Finland",
		FJ: "Fiji",
		FK: "Falkland Islands",
		FM: "Micronesia",
		FO: "Faeroe Islands",
		FR: "France",
		GA: "Gabon",
		GB: "Britain (United Kingdom)",
		GD: "Grenada",
		GE: "Georgia",
		GF: "French Guiana",
		GG: "Guernsey",
		GH: "Ghana",
		GI: "Gibraltar",
		GL: "Greenland",
		GM: "Gambia",
		GN: "Guinea",
		GP: "Guadeloupe",
		GQ: "Equatorial Guinea",
		GR: "Greece",
		GS: "South Georgia and the South Sandwich Islands",
		GT: "Guatemala",
		GU: "Guam",
		GW: "Guinea-Bissau",
		GY: "Guyana",
		HK: "Hong Kong",
		HM: "Heard Island and McDonald Islands",
		HN: "Honduras",
		HR: "Croatia",
		HT: "Haiti",
		HU: "Hungary",
		ID: "Indonesia",
		IE: "Ireland",
		IL: "Israel",
		IM: "Isle of Man",
		IN: "India",
		IO: "British Indian Ocean Territory",
		IQ: "Iraq",
		IR: "Iran",
		IS: "Iceland",
		IT: "Italy",
		JE: "Jersey",
		JM: "Jamaica",
		JO: "Jordan",
		JP: "Japan",
		KE: "Kenya",
		KG: "Kyrgyzstan",
		KH: "Cambodia",
		KI: "Kiribati",
		KM: "Comoros",
		KN: "St Kitts and Nevis",
		KP: "Korea (North)",
		KR: "Korea (South)",
		KW: "Kuwait",
		KY: "Cayman Islands",
		KZ: "Kazakhstan",
		LA: "Laos",
		LB: "Lebanon",
		LC: "St Lucia",
		LI: "Liechtenstein",
		LK: "Sri Lanka",
		LR: "Liberia",
		LS: "Lesotho",
		LT: "Lithuania",
		LU: "Luxembourg",
		LV: "Latvia",
		LY: "Libya",
		MA: "Morocco",
		MC: "Monaco",
		MD: "Moldova",
		ME: "Montenegro",
		MG: "Madagascar",
		MH: "Marshall Islands",
		MK: "Macedonia",
		ML: "Mali",
		MM: "Myanmar (Burma)",
		MN: "Mongolia",
		MO: "Macao",
		MP: "Northern Mariana Islands",
		MQ: "Martinique",
		MR: "Mauritania",
		MS: "Montserrat",
		MT: "Malta",
		MU: "Mauritius",
		MV: "Maldives",
		MW: "Malawi",
		MX: "Mexico",
		MY: "Malaysia",
		MZ: "Mozambique",
		NA: "Namibia",
		NC: "New Caledonia",
		NE: "Niger",
		NF: "Norfolk Island",
		NG: "Nigeria",
		NI: "Nicaragua",
		NL: "Netherlands",
		NO: "Norway",
		NP: "Nepal",
		NR: "Nauru",
		NU: "Niue",
		NZ: "New Zealand",
		OM: "Oman",
		PA: "Panama",
		PE: "Peru",
		PF: "French Polynesia",
		PG: "Papua New Guinea",
		PH: "Philippines",
		PK: "Pakistan",
		PL: "Poland",
		PM: "St Pierre and Miquelon",
		PN: "Pitcairn",
		PR: "Puerto Rico",
		PS: "Palestine",
		PT: "Portugal",
		PW: "Palau",
		PY: "Paraguay",
		QA: "Qatar",
		RE: "Reunion",
		RO: "Romania",
		RS: "Serbia",
		RU: "Russia",
		RW: "Rwanda",
		SA: "Saudi Arabia",
		SB: "Solomon Islands",
		SC: "Seychelles",
		SD: "Sudan",
		SE: "Sweden",
		SG: "Singapore",
		SH: "St Helena",
		SI: "Slovenia",
		SJ: "Svalbard and Jan Mayen",
		SK: "Slovakia",
		SL: "Sierra Leone",
		SM: "San Marino",
		SN: "Senegal",
		SO: "Somalia",
		SR: "Suriname",
		ST: "Sao Tome and Principe",
		SV: "El Salvador",
		SY: "Syria",
		SZ: "Swaziland",
		TC: "Turks and Caicos Islands",
		TD: "Chad",
		TF: "French Southern and Antarctic Lands",
		TG: "Togo",
		TH: "Thailand",
		TJ: "Tajikistan",
		TK: "Tokelau",
		TL: "Timor-Leste",
		TM: "Turkmenistan",
		TN: "Tunisia",
		TO: "Tonga",
		TR: "Turkey",
		TT: "Trinidad and Tobago",
		TV: "Tuvalu",
		TW: "Taiwan",
		TZ: "Tanzania",
		UA: "Ukraine",
		UG: "Uganda",
		UM: "US minor outlying islands",
		US: "United States",
		UY: "Uruguay",
		UZ: "Uzbekistan",
		VA: "Vatican City",
		VC: "St Vincent and the Grenadines",
		VE: "Venezuela",
		VG: "Virgin Islands (UK)",
		VI: "Virgin Islands (US)",
		VN: "Vietnam",
		VU: "Vanuatu",
		WF: "Wallis and Futuna",
		WS: "Samoa (Western)",
		YE: "Yemen",
		YT: "Mayotte",
		ZA: "South Africa",
		ZM: "Zambia",
		ZW: "Zimbabwe"
	}
};
