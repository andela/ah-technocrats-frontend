const COUNTRY_OPTIONS = [{
  text: 'Afghanistan', key: 'AF', value: 'Afghanistan', flag: 'af',
}, {
  text: 'Åland Islands', key: 'AX', value: 'Åland Islands', flag: 'ax',
}, {
  text: 'Albania', key: 'AL', value: 'Albania', flag: 'al',
}, {
  text: 'Algeria', key: 'DZ', value: 'Algeria', flag: 'dz',
}, {
  text: 'American Samoa', key: 'AS', value: 'American Samoa', flag: 'as',
}, {
  text: 'Andorra', key: 'AD', value: 'Andorra', flag: 'ad',
}, {
  text: 'Angola', key: 'AO', value: 'Angola', flag: 'ao',
}, {
  text: 'Anguilla', key: 'AI', value: 'Anguilla', flag: 'ai',
}, {
  text: 'Antigua and Barbuda', key: 'AG', value: 'Antigua and Barbuda', flag: 'ag',
}, {
  text: 'Argentina', key: 'AR', value: 'Argentina', flag: 'ar',
}, {
  text: 'Armenia', key: 'AM', value: 'Armenia', flag: 'am',
}, {
  text: 'Aruba', key: 'AW', value: 'Aruba', flag: 'aw',
}, {
  text: 'Australia', key: 'AU', value: 'Australia', flag: 'au',
}, {
  text: 'Austria', key: 'AT', value: 'Austria', flag: 'at',
}, {
  text: 'Azerbaijan', key: 'AZ', value: 'Azerbaijan', flag: 'az',
}, {
  text: 'Bahamas', key: 'BS', value: 'Bahamas', flag: 'bs',
}, {
  text: 'Bahrain', key: 'BH', value: 'Bahrain', flag: 'bh',
}, {
  text: 'Bangladesh', key: 'BD', value: 'Bangladesh', flag: 'bd',
}, {
  text: 'Barbados', key: 'BB', value: 'Barbados', flag: 'bb',
}, {
  text: 'Belarus', key: 'BY', value: 'Belarus', flag: 'by',
}, {
  text: 'Belgium', key: 'BE', value: 'Belgium', flag: 'be',
}, {
  text: 'Belize', key: 'BZ', value: 'Belize', flag: 'bz',
}, {
  text: 'Benin', key: 'BJ', value: 'Benin', flag: 'bj',
}, {
  text: 'Bermuda', key: 'BM', value: 'Bermuda', flag: 'bm',
}, {
  text: 'Bhutan', key: 'BT', value: 'Bhutan', flag: 'bt',
}, {
  text: 'Bolivia, Plurinational State of', key: 'BO', value: 'Bolivia, Plurinational State of', flag: 'bo',
}, {
  text: 'Bosnia and Herzegovina', key: 'BA', value: 'Bosnia and Herzegovina', flag: 'ba',
}, {
  text: 'Botswana', key: 'BW', value: 'Botswana', flag: 'bw',
}, {
  text: 'Bouvet Island', key: 'BV', value: 'Bouvet Island', flag: 'bv',
}, {
  text: 'Brazil', key: 'BR', value: 'Brazil', flag: 'br',
}, {
  text: 'British Indian Ocean Territory', key: 'IO', value: 'British Indian Ocean Territory', flag: 'io',
}, {
  text: 'Brunei Darussalam', key: 'BN', value: 'Brunei Darussalam', flag: 'bn',
}, {
  text: 'Bulgaria', key: 'BG', value: 'Bulgaria', flag: 'bg',
}, {
  text: 'Burkina Faso', key: 'BF', value: 'Burkina Faso', flag: 'bf',
}, {
  text: 'Burundi', key: 'BI', value: 'Burundi', flag: 'bi',
}, {
  text: 'Cambodia', key: 'KH', value: 'Cambodia', flag: 'kh',
}, {
  text: 'Cameroon', key: 'CM', value: 'Cameroon', flag: 'cm',
}, {
  text: 'Canada', key: 'CA', value: 'Canada', flag: 'ca',
}, {
  text: 'Cape Verde', key: 'CV', value: 'Cape Verde', flag: 'cv',
}, {
  text: 'Cayman Islands', key: 'KY', value: 'Cayman Islands', flag: 'ky',
}, {
  text: 'Central African Republic', key: 'CF', value: 'Central African Republic', flag: 'cf',
}, {
  text: 'Chad', key: 'TD', value: 'Chad', flag: 'td',
}, {
  text: 'Chile', key: 'CL', value: 'Chile', flag: 'cl',
}, {
  text: 'China', key: 'CN', value: 'China', flag: 'cn',
}, {
  text: 'Christmas Island', key: 'CX', value: 'Christmas Island', flag: 'cx',
}, {
  text: 'Cocos (Keeling) Islands', key: 'CC', value: 'Cocos (Keeling) Islands', flag: 'cc',
}, {
  text: 'Colombia', key: 'CO', value: 'Colombia', flag: 'co',
}, {
  text: 'Comoros', key: 'KM', value: 'Comoros', flag: 'km',
}, {
  text: 'Congo', key: 'CG', value: 'Congo', flag: 'cg',
}, {
  text: 'Congo, the Democratic Republic of the', key: 'CD', value: 'Congo, the Democratic Republic of the', flag: 'cd',
}, {
  text: 'Cook Islands', key: 'CK', value: 'Cook Islands', flag: 'ck',
}, {
  text: 'Costa Rica', key: 'CR', value: 'Costa Rica', flag: 'cr',
}, {
  text: "Côte d'Ivoire", key: 'CI', value: "Côte d'Ivoire", flag: 'ci',
}, {
  text: 'Croatia', key: 'HR', value: 'Croatia', flag: 'hr',
}, {
  text: 'Cuba', key: 'CU', value: 'Cuba', flag: 'cu',
}, {
  text: 'Cyprus', key: 'CY', value: 'Cyprus', flag: 'cy',
}, {
  text: 'Czech Republic', key: 'CZ', value: 'Czech Republic', flag: 'cz',
}, {
  text: 'Denmark', key: 'DK', value: 'Denmark', flag: 'dk',
}, {
  text: 'Djibouti', key: 'DJ', value: 'Djibouti', flag: 'dj',
}, {
  text: 'Dominica', key: 'DM', value: 'Dominica', flag: 'dm',
}, {
  text: 'Dominican Republic', key: 'DO', value: 'Dominican Republic', flag: 'do',
}, {
  text: 'Ecuador', key: 'EC', value: 'Ecuador', flag: 'ec',
}, {
  text: 'Egypt', key: 'EG', value: 'Egypt', flag: 'eg',
}, {
  text: 'El Salvador', key: 'SV', value: 'El Salvador', flag: 'sv',
}, {
  text: 'Equatorial Guinea', key: 'GQ', value: 'Equatorial Guinea', flag: 'gq',
}, {
  text: 'Eritrea', key: 'ER', value: 'Eritrea', flag: 'er',
}, {
  text: 'Estonia', key: 'EE', value: 'Estonia', flag: 'ee',
}, {
  text: 'Ethiopia', key: 'ET', value: 'Ethiopia', flag: 'et',
}, {
  text: 'Falkland Islands (Malvinas)', key: 'FK', value: 'Falkland Islands (Malvinas)', flag: 'fk',
}, {
  text: 'Faroe Islands', key: 'FO', value: 'Faroe Islands', flag: 'fo',
}, {
  text: 'Fiji', key: 'FJ', value: 'Fiji', flag: 'fj',
}, {
  text: 'Finland', key: 'FI', value: 'Finland', flag: 'fi',
}, {
  text: 'France', key: 'FR', value: 'France', flag: 'fr',
}, {
  text: 'French Guiana', key: 'GF', value: 'French Guiana', flag: 'gf',
}, {
  text: 'French Polynesia', key: 'PF', value: 'French Polynesia', flag: 'pf',
}, {
  text: 'French Southern Territories', key: 'TF', value: 'French Southern Territories', flag: 'tf',
}, {
  text: 'Gabon', key: 'GA', value: 'Gabon', flag: 'ga',
}, {
  text: 'Gambia', key: 'GM', value: 'Gambia', flag: 'gm',
}, {
  text: 'Georgia', key: 'GE', value: 'Georgia', flag: 'ge',
}, {
  text: 'Germany', key: 'DE', value: 'Germany', flag: 'de',
}, {
  text: 'Ghana', key: 'GH', value: 'Ghana', flag: 'gh',
}, {
  text: 'Gibraltar', key: 'GI', value: 'Gibraltar', flag: 'gi',
}, {
  text: 'Greece', key: 'GR', value: 'Greece', flag: 'gr',
}, {
  text: 'Greenland', key: 'GL', value: 'Greenland', flag: 'gl',
}, {
  text: 'Grenada', key: 'GD', value: 'Grenada', flag: 'gd',
}, {
  text: 'Guadeloupe', key: 'GP', value: 'Guadeloupe', flag: 'gp',
}, {
  text: 'Guam', key: 'GU', value: 'Guam', flag: 'gu',
}, {
  text: 'Guatemala', key: 'GT', value: 'Guatemala', flag: 'gt',
}, {
  text: 'Guinea', key: 'GN', value: 'Guinea', flag: 'gn',
}, {
  text: 'Guinea-Bissau', key: 'GW', value: 'Guinea-Bissau', flag: 'gw',
}, {
  text: 'Guyana', key: 'GY', value: 'Guyana', flag: 'gy',
}, {
  text: 'Haiti', key: 'HT', value: 'Haiti', flag: 'ht',
}, {
  text: 'Heard Island and McDonald Islands', key: 'HM', value: 'Heard Island and McDonald Islands', flag: 'hm',
}, {
  text: 'Holy See (Vatican City State)', key: 'VA', value: 'Holy See (Vatican City State)', flag: 'va',
}, {
  text: 'Honduras', key: 'HN', value: 'Honduras', flag: 'hn',
}, {
  text: 'Hong Kong', key: 'HK', value: 'Hong Kong', flag: 'hk',
}, {
  text: 'Hungary', key: 'HU', value: 'Hungary', flag: 'hu',
}, {
  text: 'Iceland', key: 'IS', value: 'Iceland', flag: 'is',
}, {
  text: 'India', key: 'IN', value: 'India', flag: 'in',
}, {
  text: 'Indonesia', key: 'ID', value: 'Indonesia', flag: 'id',
}, {
  text: 'Iran, Islamic Republic of', key: 'IR', value: 'Iran, Islamic Republic of', flag: 'ir',
}, {
  text: 'Iraq', key: 'IQ', value: 'Iraq', flag: 'iq',
}, {
  text: 'Ireland', key: 'IE', value: 'Ireland', flag: 'ie',
}, {
  text: 'Israel', key: 'IL', value: 'Israel', flag: 'il',
}, {
  text: 'Italy', key: 'IT', value: 'Italy', flag: 'it',
}, {
  text: 'Jamaica', key: 'JM', value: 'Jamaica', flag: 'jm',
}, {
  text: 'Japan', key: 'JP', value: 'Japan', flag: 'jp',
}, {
  text: 'Jordan', key: 'JO', value: 'Jordan', flag: 'jo',
}, {
  text: 'Kazakhstan', key: 'KZ', value: 'Kazakhstan', flag: 'kz',
}, {
  text: 'Kenya', key: 'KE', value: 'Kenya', flag: 'ke',
}, {
  text: 'Kiribati', key: 'KI', value: 'Kiribati', flag: 'ki',
}, {
  text: "Korea, Democratic People's Republic of", key: 'KP', value: "Korea, Democratic People's Republic of", flag: 'kp',
}, {
  text: 'Korea, Republic of', key: 'KR', value: 'Korea, Republic of', flag: 'kr',
}, {
  text: 'Kuwait', key: 'KW', value: 'Kuwait', flag: 'kw',
}, {
  text: 'Kyrgyzstan', key: 'KG', value: 'Kyrgyzstan', flag: 'kg',
}, {
  text: "Lao People's Democratic Republic", key: 'LA', value: "Lao People's Democratic Republic", flag: 'la',
}, {
  text: 'Latvia', key: 'LV', value: 'Latvia', flag: 'lv',
}, {
  text: 'Lebanon', key: 'LB', value: 'Lebanon', flag: 'lb',
}, {
  text: 'Lesotho', key: 'LS', value: 'Lesotho', flag: 'ls',
}, {
  text: 'Liberia', key: 'LR', value: 'Liberia', flag: 'lr',
}, {
  text: 'Libya', key: 'LY', value: 'Libya', flag: 'ly',
}, {
  text: 'Liechtenstein', key: 'LI', value: 'Liechtenstein', flag: 'li',
}, {
  text: 'Lithuania', key: 'LT', value: 'Lithuania', flag: 'lt',
}, {
  text: 'Luxembourg', key: 'LU', value: 'Luxembourg', flag: 'lu',
}, {
  text: 'Macao', key: 'MO', value: 'Macao', flag: 'mo',
}, {
  text: 'Macedonia, the Former Yugoslav Republic of', key: 'MK', value: 'Macedonia, the Former Yugoslav Republic of', flag: 'mk',
}, {
  text: 'Madagascar', key: 'MG', value: 'Madagascar', flag: 'mg',
}, {
  text: 'Malawi', key: 'MW', value: 'Malawi', flag: 'mw',
}, {
  text: 'Malaysia', key: 'MY', value: 'Malaysia', flag: 'my',
}, {
  text: 'Maldives', key: 'MV', value: 'Maldives', flag: 'mv',
}, {
  text: 'Mali', key: 'ML', value: 'Mali', flag: 'ml',
}, {
  text: 'Malta', key: 'MT', value: 'Malta', flag: 'mt',
}, {
  text: 'Marshall Islands', key: 'MH', value: 'Marshall Islands', flag: 'mh',
}, {
  text: 'Martinique', key: 'MQ', value: 'Martinique', flag: 'mq',
}, {
  text: 'Mauritania', key: 'MR', value: 'Mauritania', flag: 'mr',
}, {
  text: 'Mauritius', key: 'MU', value: 'Mauritius', flag: 'mu',
}, {
  text: 'Mayotte', key: 'YT', value: 'Mayotte', flag: 'yt',
}, {
  text: 'Mexico', key: 'MX', value: 'Mexico', flag: 'mx',
}, {
  text: 'Micronesia, Federated States of', key: 'FM', value: 'Micronesia, Federated States of', flag: 'fm',
}, {
  text: 'Moldova, Republic of', key: 'MD', value: 'Moldova, Republic of', flag: 'md',
}, {
  text: 'Monaco', key: 'MC', value: 'Monaco', flag: 'mc',
}, {
  text: 'Mongolia', key: 'MN', value: 'Mongolia', flag: 'mn',
}, {
  text: 'Montenegro', key: 'ME', value: 'Montenegro', flag: 'me',
}, {
  text: 'Montserrat', key: 'MS', value: 'Montserrat', flag: 'ms',
}, {
  text: 'Morocco', key: 'MA', value: 'Morocco', flag: 'ma',
}, {
  text: 'Mozambique', key: 'MZ', value: 'Mozambique', flag: 'mz',
}, {
  text: 'Myanmar', key: 'MM', value: 'Myanmar', flag: 'mm',
}, {
  text: 'Namibia', key: 'NA', value: 'Namibia', flag: 'na',
}, {
  text: 'Nauru', key: 'NR', value: 'Nauru', flag: 'nr',
}, {
  text: 'Nepal', key: 'NP', value: 'Nepal', flag: 'np',
}, {
  text: 'Netherlands', key: 'NL', value: 'Netherlands', flag: 'nl',
}, {
  text: 'New Caledonia', key: 'NC', value: 'New Caledonia', flag: 'nc',
}, {
  text: 'New Zealand', key: 'NZ', value: 'New Zealand', flag: 'nz',
}, {
  text: 'Nicaragua', key: 'NI', value: 'Nicaragua', flag: 'ni',
}, {
  text: 'Niger', key: 'NE', value: 'Niger', flag: 'ne',
}, {
  text: 'Nigeria', key: 'NG', value: 'Nigeria', flag: 'ng',
}, {
  text: 'Niue', key: 'NU', value: 'Niue', flag: 'nu',
}, {
  text: 'Norfolk Island', key: 'NF', value: 'Norfolk Island', flag: 'nf',
}, {
  text: 'Northern Mariana Islands', key: 'MP', value: 'Northern Mariana Islands', flag: 'mp',
}, {
  text: 'Norway', key: 'NO', value: 'Norway', flag: 'no',
}, {
  text: 'Oman', key: 'OM', value: 'Oman', flag: 'om',
}, {
  text: 'Pakistan', key: 'PK', value: 'Pakistan', flag: 'pk',
}, {
  text: 'Palau', key: 'PW', value: 'Palau', flag: 'pw',
}, {
  text: 'Palestine, State of', key: 'PS', value: 'Palestine, State of', flag: 'ps',
}, {
  text: 'Panama', key: 'PA', value: 'Panama', flag: 'pa',
}, {
  text: 'Papua New Guinea', key: 'PG', value: 'Papua New Guinea', flag: 'pg',
}, {
  text: 'Paraguay', key: 'PY', value: 'Paraguay', flag: 'py',
}, {
  text: 'Peru', key: 'PE', value: 'Peru', flag: 'pe',
}, {
  text: 'Philippines', key: 'PH', value: 'Philippines', flag: 'ph',
}, {
  text: 'Pitcairn', key: 'PN', value: 'Pitcairn', flag: 'pn',
}, {
  text: 'Poland', key: 'PL', value: 'Poland', flag: 'pl',
}, {
  text: 'Portugal', key: 'PT', value: 'Portugal', flag: 'pt',
}, {
  text: 'Puerto Rico', key: 'PR', value: 'Puerto Rico', flag: 'pr',
}, {
  text: 'Qatar', key: 'QA', value: 'Qatar', flag: 'qa',
}, {
  text: 'Réunion', key: 'RE', value: 'Réunion', flag: 're',
}, {
  text: 'Romania', key: 'RO', value: 'Romania', flag: 'ro',
}, {
  text: 'Russian Federation', key: 'RU', value: 'Russian Federation', flag: 'ru',
}, {
  text: 'Rwanda', key: 'RW', value: 'Rwanda', flag: 'rw',
}, {
  text: 'Saint Helena, Ascension and Tristan da Cunha', key: 'SH', value: 'Saint Helena, Ascension and Tristan da Cunha', flag: 'sh',
}, {
  text: 'Saint Kitts and Nevis', key: 'KN', value: 'Saint Kitts and Nevis', flag: 'kn',
}, {
  text: 'Saint Lucia', key: 'LC', value: 'Saint Lucia', flag: 'lc',
}, {
  text: 'Saint Pierre and Miquelon', key: 'PM', value: 'Saint Pierre and Miquelon', flag: 'pm',
}, {
  text: 'Saint Vincent and the Grenadines', key: 'VC', value: 'Saint Vincent and the Grenadines', flag: 'vc',
}, {
  text: 'Samoa', key: 'WS', value: 'Samoa', flag: 'ws',
}, {
  text: 'San Marino', key: 'SM', value: 'San Marino', flag: 'sm',
}, {
  text: 'Sao Tome and Principe', key: 'ST', value: 'Sao Tome and Principe', flag: 'st',
}, {
  text: 'Saudi Arabia', key: 'SA', value: 'Saudi Arabia', flag: 'sa',
}, {
  text: 'Senegal', key: 'SN', value: 'Senegal', flag: 'sn',
}, {
  text: 'Serbia', key: 'RS', value: 'Serbia', flag: 'rs',
}, {
  text: 'Seychelles', key: 'SC', value: 'Seychelles', flag: 'sc',
}, {
  text: 'Sierra Leone', key: 'SL', value: 'Sierra Leone', flag: 'sl',
}, {
  text: 'Singapore', key: 'SG', value: 'Singapore', flag: 'sg',
}, {
  text: 'Slovakia', key: 'SK', value: 'Slovakia', flag: 'sk',
}, {
  text: 'Slovenia', key: 'SI', value: 'Slovenia', flag: 'si',
}, {
  text: 'Solomon Islands', key: 'SB', value: 'Solomon Islands', flag: 'sb',
}, {
  text: 'Somalia', key: 'SO', value: 'Somalia', flag: 'so',
}, {
  text: 'South Africa', key: 'ZA', value: 'South Africa', flag: 'za',
}, {
  text: 'South Georgia and the South Sandwich Islands', key: 'GS', value: 'South Georgia and the South Sandwich Islands', flag: 'gs',
}, {
  text: 'Spain', key: 'ES', value: 'Spain', flag: 'es',
}, {
  text: 'Sri Lanka', key: 'LK', value: 'Sri Lanka', flag: 'lk',
}, {
  text: 'Sudan', key: 'SD', value: 'Sudan', flag: 'sd',
}, {
  text: 'Suriname', key: 'SR', value: 'Suriname', flag: 'sr',
}, {
  text: 'Svalbard and Jan Mayen', key: 'SJ', value: 'Svalbard and Jan Mayen', flag: 'sj',
}, {
  text: 'Swaziland', key: 'SZ', value: 'Swaziland', flag: 'sz',
}, {
  text: 'Sweden', key: 'SE', value: 'Sweden', flag: 'se',
}, {
  text: 'Switzerland', key: 'CH', value: 'Switzerland', flag: 'ch',
}, {
  text: 'Syrian Arab Republic', key: 'SY', value: 'Syrian Arab Republic', flag: 'sy',
}, {
  text: 'Taiwan, Province of China', key: 'TW', value: 'Taiwan, Province of China', flag: 'tw',
}, {
  text: 'Tajikistan', key: 'TJ', value: 'Tajikistan', flag: 'tj',
}, {
  text: 'Tanzania, United Republic of', key: 'TZ', value: 'Tanzania, United Republic of', flag: 'tz',
}, {
  text: 'Thailand', key: 'TH', value: 'Thailand', flag: 'th',
}, {
  text: 'Timor-Leste', key: 'TL', value: 'Timor-Leste', flag: 'tl',
}, {
  text: 'Togo', key: 'TG', value: 'Togo', flag: 'tg',
}, {
  text: 'Tokelau', key: 'TK', value: 'Tokelau', flag: 'tk',
}, {
  text: 'Tonga', key: 'TO', value: 'Tonga', flag: 'to',
}, {
  text: 'Trinidad and Tobago', key: 'TT', value: 'Trinidad and Tobago', flag: 'tt',
}, {
  text: 'Tunisia', key: 'TN', value: 'Tunisia', flag: 'tn',
}, {
  text: 'Turkey', key: 'TR', value: 'Turkey', flag: 'tr',
}, {
  text: 'Turkmenistan', key: 'TM', value: 'Turkmenistan', flag: 'tm',
}, {
  text: 'Turks and Caicos Islands', key: 'TC', value: 'Turks and Caicos Islands', flag: 'tc',
}, {
  text: 'Tuvalu', key: 'TV', value: 'Tuvalu', flag: 'tv',
}, {
  text: 'Uganda', key: 'UG', value: 'Uganda', flag: 'ug',
}, {
  text: 'Ukraine', key: 'UA', value: 'Ukraine', flag: 'ua',
}, {
  text: 'United Arab Emirates', key: 'AE', value: 'United Arab Emirates', flag: 'ae',
}, {
  text: 'United Kingdom', key: 'GB', value: 'United Kingdom', flag: 'gb',
}, {
  text: 'United States', key: 'US', value: 'United States', flag: 'us',
}, {
  text: 'United States Minor Outlying Islands', key: 'UM', value: 'United States Minor Outlying Islands', flag: 'um',
}, {
  text: 'Uruguay', key: 'UY', value: 'Uruguay', flag: 'uy',
}, {
  text: 'Uzbekistan', key: 'UZ', value: 'Uzbekistan', flag: 'uz',
}, {
  text: 'Vanuatu', key: 'VU', value: 'Vanuatu', flag: 'vu',
}, {
  text: 'Venezuela, Bolivarian Republic of', key: 'VE', value: 'Venezuela, Bolivarian Republic of', flag: 've',
}, {
  text: 'Viet Nam', key: 'VN', value: 'Viet Nam', flag: 'vn',
}, {
  text: 'Virgin Islands, British', key: 'VG', value: 'Virgin Islands, British', flag: 'vg',
}, {
  text: 'Virgin Islands, U.S.', key: 'VI', value: 'Virgin Islands, U.S.', flag: 'vi',
}, {
  text: 'Wallis and Futuna', key: 'WF', value: 'Wallis and Futuna', flag: 'wf',
}, {
  text: 'Western Sahara', key: 'EH', value: 'Western Sahara', flag: 'eh',
}, {
  text: 'Yemen', key: 'YE', value: 'Yemen', flag: 'ye',
}, {
  text: 'Zambia', key: 'ZM', value: 'Zambia', flag: 'zm',
}, {
  text: 'Zimbabwe', key: 'ZW', value: 'Zimbabwe', flag: 'zw',
}];

export default COUNTRY_OPTIONS;
