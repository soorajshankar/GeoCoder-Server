(window["webpackJsonpgoogle-maps"]=window["webpackJsonpgoogle-maps"]||[]).push([[0],{120:function(e,a,o){e.exports=o(206)},125:function(e,a,o){},204:function(e,a,o){},206:function(e,a,o){"use strict";o.r(a);var n=o(1),d=o.n(n),c=o(4),i=o.n(c),t={isMapLoaded:!1,mapInstance:null,markers:[],mapLoaded:function(){t.isMapLoaded=!0},setMapObject:function(e){t.mapInstance=e},addMarker:function(e){t.markers.push(e)},removeMarker:function(e){},removeAllMarkers:function(){for(var e=0;e<t.markers.length;e++)t.markers[e]&&t.markers[e].setMap(null)},setMapOnAll:function(e){for(var a=0;a<t.markers.length;a++)t.markers[a]&&t.markers[a].setMap(e)},editMarker:function(e){}},l=d.a.createContext({}),r=(o(125),o(111)),m=o(55),s=o(56),u=o(66),_=o(57),p=o(67),M={EDIT_MODE:"EDIT_MODE",NORMAL_MODE:"NORMAL_MODE",ADD_MODE:"ADD_MODE"},f={SUCCESS:"success",ERROR:"error",INFO:"info",WARNING:"warning"},E={lat:52.527744,lng:13.24112},h=function(e){return d.a.createElement("div",{className:"c-mapview ".concat(e.viewMode===(M.EDIT_MODE||M.ADD_MODE\u00ce)?"c-mapview--expanded":"c-mapview--collapse")},e.children)},g=function(e){return d.a.createElement("div",{className:"c-sideview ".concat(e.viewMode===(M.EDIT_MODE||M.ADD_MODE)?"c-sideview--collapse":"c-sideview--expanded")},e.children)},k=function(e){return new window.google.maps.Map(document.getElementById("map"),{zoom:12,center:e,mapTypeId:"terrain"})},S=function(e,a){return e.map(function(e,o){var n=new window.google.maps.Marker({position:{lat:e.lat,lng:e.lng},map:a});return n.addListener("click",function(){new window.google.maps.InfoWindow({content:v(e)}).open(a,n)}),n})},v=function(e){var a=e.name,o=e.lat,n=e.lng;return'<div id="content"><h3 id="firstHeading" class="firstHeading">'.concat(a,"</h3><p>lat : ").concat(o,"</p><p>lng : ").concat(n,"</p></div>")},O=[{name:"Afghanistan",dial_code:"+93",code:"AF"},{name:"Aland Islands",dial_code:"+358",code:"AX"},{name:"Albania",dial_code:"+355",code:"AL"},{name:"Algeria",dial_code:"+213",code:"DZ"},{name:"AmericanSamoa",dial_code:"+1684",code:"AS"},{name:"Andorra",dial_code:"+376",code:"AD"},{name:"Angola",dial_code:"+244",code:"AO"},{name:"Anguilla",dial_code:"+1264",code:"AI"},{name:"Antarctica",dial_code:"+672",code:"AQ"},{name:"Antigua and Barbuda",dial_code:"+1268",code:"AG"},{name:"Argentina",dial_code:"+54",code:"AR"},{name:"Armenia",dial_code:"+374",code:"AM"},{name:"Aruba",dial_code:"+297",code:"AW"},{name:"Australia",dial_code:"+61",code:"AU"},{name:"Austria",dial_code:"+43",code:"AT"},{name:"Azerbaijan",dial_code:"+994",code:"AZ"},{name:"Bahamas",dial_code:"+1242",code:"BS"},{name:"Bahrain",dial_code:"+973",code:"BH"},{name:"Bangladesh",dial_code:"+880",code:"BD"},{name:"Barbados",dial_code:"+1246",code:"BB"},{name:"Belarus",dial_code:"+375",code:"BY"},{name:"Belgium",dial_code:"+32",code:"BE"},{name:"Belize",dial_code:"+501",code:"BZ"},{name:"Benin",dial_code:"+229",code:"BJ"},{name:"Bermuda",dial_code:"+1441",code:"BM"},{name:"Bhutan",dial_code:"+975",code:"BT"},{name:"Bolivia, Plurinational State of",dial_code:"+591",code:"BO"},{name:"Bosnia and Herzegovina",dial_code:"+387",code:"BA"},{name:"Botswana",dial_code:"+267",code:"BW"},{name:"Brazil",dial_code:"+55",code:"BR"},{name:"British Indian Ocean Territory",dial_code:"+246",code:"IO"},{name:"Brunei Darussalam",dial_code:"+673",code:"BN"},{name:"Bulgaria",dial_code:"+359",code:"BG"},{name:"Burkina Faso",dial_code:"+226",code:"BF"},{name:"Burundi",dial_code:"+257",code:"BI"},{name:"Cambodia",dial_code:"+855",code:"KH"},{name:"Cameroon",dial_code:"+237",code:"CM"},{name:"Canada",dial_code:"+1",code:"CA"},{name:"Cape Verde",dial_code:"+238",code:"CV"},{name:"Cayman Islands",dial_code:"+ 345",code:"KY"},{name:"Central African Republic",dial_code:"+236",code:"CF"},{name:"Chad",dial_code:"+235",code:"TD"},{name:"Chile",dial_code:"+56",code:"CL"},{name:"China",dial_code:"+86",code:"CN"},{name:"Christmas Island",dial_code:"+61",code:"CX"},{name:"Cocos (Keeling) Islands",dial_code:"+61",code:"CC"},{name:"Colombia",dial_code:"+57",code:"CO"},{name:"Comoros",dial_code:"+269",code:"KM"},{name:"Congo",dial_code:"+242",code:"CG"},{name:"Congo, The Democratic Republic of the Congo",dial_code:"+243",code:"CD"},{name:"Cook Islands",dial_code:"+682",code:"CK"},{name:"Costa Rica",dial_code:"+506",code:"CR"},{name:"Cote d'Ivoire",dial_code:"+225",code:"CI"},{name:"Croatia",dial_code:"+385",code:"HR"},{name:"Cuba",dial_code:"+53",code:"CU"},{name:"Cyprus",dial_code:"+357",code:"CY"},{name:"Czech Republic",dial_code:"+420",code:"CZ"},{name:"Denmark",dial_code:"+45",code:"DK"},{name:"Djibouti",dial_code:"+253",code:"DJ"},{name:"Dominica",dial_code:"+1767",code:"DM"},{name:"Dominican Republic",dial_code:"+1849",code:"DO"},{name:"Ecuador",dial_code:"+593",code:"EC"},{name:"Egypt",dial_code:"+20",code:"EG"},{name:"El Salvador",dial_code:"+503",code:"SV"},{name:"Equatorial Guinea",dial_code:"+240",code:"GQ"},{name:"Eritrea",dial_code:"+291",code:"ER"},{name:"Estonia",dial_code:"+372",code:"EE"},{name:"Ethiopia",dial_code:"+251",code:"ET"},{name:"Falkland Islands (Malvinas)",dial_code:"+500",code:"FK"},{name:"Faroe Islands",dial_code:"+298",code:"FO"},{name:"Fiji",dial_code:"+679",code:"FJ"},{name:"Finland",dial_code:"+358",code:"FI"},{name:"France",dial_code:"+33",code:"FR"},{name:"French Guiana",dial_code:"+594",code:"GF"},{name:"French Polynesia",dial_code:"+689",code:"PF"},{name:"Gabon",dial_code:"+241",code:"GA"},{name:"Gambia",dial_code:"+220",code:"GM"},{name:"Georgia",dial_code:"+995",code:"GE"},{name:"Germany",dial_code:"+49",code:"DE"},{name:"Ghana",dial_code:"+233",code:"GH"},{name:"Gibraltar",dial_code:"+350",code:"GI"},{name:"Greece",dial_code:"+30",code:"GR"},{name:"Greenland",dial_code:"+299",code:"GL"},{name:"Grenada",dial_code:"+1473",code:"GD"},{name:"Guadeloupe",dial_code:"+590",code:"GP"},{name:"Guam",dial_code:"+1671",code:"GU"},{name:"Guatemala",dial_code:"+502",code:"GT"},{name:"Guernsey",dial_code:"+44",code:"GG"},{name:"Guinea",dial_code:"+224",code:"GN"},{name:"Guinea-Bissau",dial_code:"+245",code:"GW"},{name:"Guyana",dial_code:"+595",code:"GY"},{name:"Haiti",dial_code:"+509",code:"HT"},{name:"Holy See (Vatican City State)",dial_code:"+379",code:"VA"},{name:"Honduras",dial_code:"+504",code:"HN"},{name:"Hong Kong",dial_code:"+852",code:"HK"},{name:"Hungary",dial_code:"+36",code:"HU"},{name:"Iceland",dial_code:"+354",code:"IS"},{name:"India",dial_code:"+91",code:"IN"},{name:"Indonesia",dial_code:"+62",code:"ID"},{name:"Iran, Islamic Republic of Persian Gulf",dial_code:"+98",code:"IR"},{name:"Iraq",dial_code:"+964",code:"IQ"},{name:"Ireland",dial_code:"+353",code:"IE"},{name:"Isle of Man",dial_code:"+44",code:"IM"},{name:"Israel",dial_code:"+972",code:"IL"},{name:"Italy",dial_code:"+39",code:"IT"},{name:"Jamaica",dial_code:"+1876",code:"JM"},{name:"Japan",dial_code:"+81",code:"JP"},{name:"Jersey",dial_code:"+44",code:"JE"},{name:"Jordan",dial_code:"+962",code:"JO"},{name:"Kazakhstan",dial_code:"+77",code:"KZ"},{name:"Kenya",dial_code:"+254",code:"KE"},{name:"Kiribati",dial_code:"+686",code:"KI"},{name:"Korea, Democratic People's Republic of Korea",dial_code:"+850",code:"KP"},{name:"Korea, Republic of South Korea",dial_code:"+82",code:"KR"},{name:"Kuwait",dial_code:"+965",code:"KW"},{name:"Kyrgyzstan",dial_code:"+996",code:"KG"},{name:"Laos",dial_code:"+856",code:"LA"},{name:"Latvia",dial_code:"+371",code:"LV"},{name:"Lebanon",dial_code:"+961",code:"LB"},{name:"Lesotho",dial_code:"+266",code:"LS"},{name:"Liberia",dial_code:"+231",code:"LR"},{name:"Libyan Arab Jamahiriya",dial_code:"+218",code:"LY"},{name:"Liechtenstein",dial_code:"+423",code:"LI"},{name:"Lithuania",dial_code:"+370",code:"LT"},{name:"Luxembourg",dial_code:"+352",code:"LU"},{name:"Macao",dial_code:"+853",code:"MO"},{name:"Macedonia",dial_code:"+389",code:"MK"},{name:"Madagascar",dial_code:"+261",code:"MG"},{name:"Malawi",dial_code:"+265",code:"MW"},{name:"Malaysia",dial_code:"+60",code:"MY"},{name:"Maldives",dial_code:"+960",code:"MV"},{name:"Mali",dial_code:"+223",code:"ML"},{name:"Malta",dial_code:"+356",code:"MT"},{name:"Marshall Islands",dial_code:"+692",code:"MH"},{name:"Martinique",dial_code:"+596",code:"MQ"},{name:"Mauritania",dial_code:"+222",code:"MR"},{name:"Mauritius",dial_code:"+230",code:"MU"},{name:"Mayotte",dial_code:"+262",code:"YT"},{name:"Mexico",dial_code:"+52",code:"MX"},{name:"Micronesia, Federated States of Micronesia",dial_code:"+691",code:"FM"},{name:"Moldova",dial_code:"+373",code:"MD"},{name:"Monaco",dial_code:"+377",code:"MC"},{name:"Mongolia",dial_code:"+976",code:"MN"},{name:"Montenegro",dial_code:"+382",code:"ME"},{name:"Montserrat",dial_code:"+1664",code:"MS"},{name:"Morocco",dial_code:"+212",code:"MA"},{name:"Mozambique",dial_code:"+258",code:"MZ"},{name:"Myanmar",dial_code:"+95",code:"MM"},{name:"Namibia",dial_code:"+264",code:"NA"},{name:"Nauru",dial_code:"+674",code:"NR"},{name:"Nepal",dial_code:"+977",code:"NP"},{name:"Netherlands",dial_code:"+31",code:"NL"},{name:"Netherlands Antilles",dial_code:"+599",code:"AN"},{name:"New Caledonia",dial_code:"+687",code:"NC"},{name:"New Zealand",dial_code:"+64",code:"NZ"},{name:"Nicaragua",dial_code:"+505",code:"NI"},{name:"Niger",dial_code:"+227",code:"NE"},{name:"Nigeria",dial_code:"+234",code:"NG"},{name:"Niue",dial_code:"+683",code:"NU"},{name:"Norfolk Island",dial_code:"+672",code:"NF"},{name:"Northern Mariana Islands",dial_code:"+1670",code:"MP"},{name:"Norway",dial_code:"+47",code:"NO"},{name:"Oman",dial_code:"+968",code:"OM"},{name:"Pakistan",dial_code:"+92",code:"PK"},{name:"Palau",dial_code:"+680",code:"PW"},{name:"Palestinian Territory, Occupied",dial_code:"+970",code:"PS"},{name:"Panama",dial_code:"+507",code:"PA"},{name:"Papua New Guinea",dial_code:"+675",code:"PG"},{name:"Paraguay",dial_code:"+595",code:"PY"},{name:"Peru",dial_code:"+51",code:"PE"},{name:"Philippines",dial_code:"+63",code:"PH"},{name:"Pitcairn",dial_code:"+872",code:"PN"},{name:"Poland",dial_code:"+48",code:"PL"},{name:"Portugal",dial_code:"+351",code:"PT"},{name:"Puerto Rico",dial_code:"+1939",code:"PR"},{name:"Qatar",dial_code:"+974",code:"QA"},{name:"Romania",dial_code:"+40",code:"RO"},{name:"Russia",dial_code:"+7",code:"RU"},{name:"Rwanda",dial_code:"+250",code:"RW"},{name:"Reunion",dial_code:"+262",code:"RE"},{name:"Saint Barthelemy",dial_code:"+590",code:"BL"},{name:"Saint Helena, Ascension and Tristan Da Cunha",dial_code:"+290",code:"SH"},{name:"Saint Kitts and Nevis",dial_code:"+1869",code:"KN"},{name:"Saint Lucia",dial_code:"+1758",code:"LC"},{name:"Saint Martin",dial_code:"+590",code:"MF"},{name:"Saint Pierre and Miquelon",dial_code:"+508",code:"PM"},{name:"Saint Vincent and the Grenadines",dial_code:"+1784",code:"VC"},{name:"Samoa",dial_code:"+685",code:"WS"},{name:"San Marino",dial_code:"+378",code:"SM"},{name:"Sao Tome and Principe",dial_code:"+239",code:"ST"},{name:"Saudi Arabia",dial_code:"+966",code:"SA"},{name:"Senegal",dial_code:"+221",code:"SN"},{name:"Serbia",dial_code:"+381",code:"RS"},{name:"Seychelles",dial_code:"+248",code:"SC"},{name:"Sierra Leone",dial_code:"+232",code:"SL"},{name:"Singapore",dial_code:"+65",code:"SG"},{name:"Slovakia",dial_code:"+421",code:"SK"},{name:"Slovenia",dial_code:"+386",code:"SI"},{name:"Solomon Islands",dial_code:"+677",code:"SB"},{name:"Somalia",dial_code:"+252",code:"SO"},{name:"South Africa",dial_code:"+27",code:"ZA"},{name:"South Sudan",dial_code:"+211",code:"SS"},{name:"South Georgia and the South Sandwich Islands",dial_code:"+500",code:"GS"},{name:"Spain",dial_code:"+34",code:"ES"},{name:"Sri Lanka",dial_code:"+94",code:"LK"},{name:"Sudan",dial_code:"+249",code:"SD"},{name:"Suriname",dial_code:"+597",code:"SR"},{name:"Svalbard and Jan Mayen",dial_code:"+47",code:"SJ"},{name:"Swaziland",dial_code:"+268",code:"SZ"},{name:"Sweden",dial_code:"+46",code:"SE"},{name:"Switzerland",dial_code:"+41",code:"CH"},{name:"Syrian Arab Republic",dial_code:"+963",code:"SY"},{name:"Taiwan",dial_code:"+886",code:"TW"},{name:"Tajikistan",dial_code:"+992",code:"TJ"},{name:"Tanzania, United Republic of Tanzania",dial_code:"+255",code:"TZ"},{name:"Thailand",dial_code:"+66",code:"TH"},{name:"Timor-Leste",dial_code:"+670",code:"TL"},{name:"Togo",dial_code:"+228",code:"TG"},{name:"Tokelau",dial_code:"+690",code:"TK"},{name:"Tonga",dial_code:"+676",code:"TO"},{name:"Trinidad and Tobago",dial_code:"+1868",code:"TT"},{name:"Tunisia",dial_code:"+216",code:"TN"},{name:"Turkey",dial_code:"+90",code:"TR"},{name:"Turkmenistan",dial_code:"+993",code:"TM"},{name:"Turks and Caicos Islands",dial_code:"+1649",code:"TC"},{name:"Tuvalu",dial_code:"+688",code:"TV"},{name:"Uganda",dial_code:"+256",code:"UG"},{name:"Ukraine",dial_code:"+380",code:"UA"},{name:"United Arab Emirates",dial_code:"+971",code:"AE"},{name:"United Kingdom",dial_code:"+44",code:"GB"},{name:"United States",dial_code:"+1",code:"US"},{name:"Uruguay",dial_code:"+598",code:"UY"},{name:"Uzbekistan",dial_code:"+998",code:"UZ"},{name:"Vanuatu",dial_code:"+678",code:"VU"},{name:"Venezuela, Bolivarian Republic of Venezuela",dial_code:"+58",code:"VE"},{name:"Vietnam",dial_code:"+84",code:"VN"},{name:"Virgin Islands, British",dial_code:"+1284",code:"VG"},{name:"Virgin Islands, U.S.",dial_code:"+1340",code:"VI"},{name:"Wallis and Futuna",dial_code:"+681",code:"WF"},{name:"Yemen",dial_code:"+967",code:"YE"},{name:"Zambia",dial_code:"+260",code:"ZM"},{name:"Zimbabwe",dial_code:"+263",code:"ZW"}],w=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BASE_SERVICE_URL||"",b="GOOGLE",A={GOOGLE_MAP_API_KEY:"AIzaSyAMQ_lokx5I3FFYafAuC1B2VcxCIuX13Gs",serviceUrls:{marker:"".concat(w,"/api/markers"),geoCoder:"".concat(w,"/api/geoCoder")}},C=function(e){function a(e){var o;return Object(m.a)(this,a),(o=Object(u.a)(this,Object(_.a)(a).call(this,e))).initMap=function(){o.setState({isMapLoaded:!0});var e=o.props,a=e.focusLocation,n=e.markers;window.google&&(o.context.mapInstance=k(a),o.context.removeAllMarkers(),o.context.markers=S(n,o.context.mapInstance))},o.state={isMapLoaded:!1},o}return Object(p.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){window.initMap=this.initMap,function(e){var a=window.document.getElementsByTagName("script")[0],o=window.document.createElement("script");o.src=e,o.async=!0,a&&a.parentNode.insertBefore(o,a)}(function(e,a){switch(a){case b:default:return"https://maps.googleapis.com/maps/api/js?key=".concat(e,"&callback=initMap")}}(this.props.apiKey,b))}},{key:"componentDidUpdate",value:function(e){if(this.props.markers!==e.markers){var a=this.props.markers;this.context.mapInstance&&(window.mapppp=this.context.mapInstance,this.context.removeAllMarkers(),this.context.markers=S(a,this.context.mapInstance))}Object.is(this.props.focusLocation,e.focusLocation)||this.context.mapInstance&&this.context.mapInstance.setCenter(this.props.focusLocation)}},{key:"render",value:function(){var e=this.state.isMapLoaded;return d.a.createElement(d.a.Fragment,null,!e&&d.a.createElement(I,null),d.a.createElement("div",{id:"map"}))}}]),a}(n.PureComponent);C.contextType=l;var I=function(){return d.a.createElement("div",{className:"c-loading"},"Loading...")},N=function(e){var a=e.onRemove,o=e.onEdit;return d.a.createElement("div",{className:"c-list"},e.markers&&e.markers.map(function(n,c){return d.a.createElement("article",{key:c,className:"c-list__card"},d.a.createElement("header",{className:"cursor-zoom",onClick:function(){return e.onItemClick(n)}},n.name),d.a.createElement("p",null,"lat :",n.lat),d.a.createElement("p",null,"lng :",n.lng),d.a.createElement("footer",null,d.a.createElement("button",{onClick:function(){return o(n,c)}},"Edit"),d.a.createElement("span",null,"or"),d.a.createElement("button",{onClick:function(){return a(n,c)}},"Remove")))}))},y=function(e){var a=e.onClick;return d.a.createElement("div",{className:"c-add-marker"},d.a.createElement("button",{className:"c-add-marker__btn",onClick:a},"Add Marker"))},D=o(41),R=o.n(D),L=A.serviceUrls,G=function(e,a){return R.a.get("".concat(L.geoCoder,"/").concat(e,"/").concat(a))},T=function(e){return R.a.post(L.marker,e)},B=function(e){return R.a.put("".concat(L.marker,"/").concat(e._id),e)},P=function(e){return R.a.delete("".concat(L.marker,"/").concat(e._id))},j=o(42),K=o(208),U=o(207),F=o(209),V=o(211),x=o(212),H=o(26),z=o(213),J=K.a.Group,W=U.a.Option,Z=function(e){var a=e.edittingMarker,o=Object(n.useState)(a&&a.name||void 0),c=Object(j.a)(o,2),i=c[0],t=c[1],l=Object(n.useState)(a&&[a]||[]),r=Object(j.a)(l,2),m=r[0],s=r[1],u=Object(n.useState)(void 0),_=Object(j.a)(u,2),p=_[0],M=_[1],f=Object(n.useState)(!1),E=Object(j.a)(f,2),h=E[0],g=E[1],k=Object(n.useState)(a&&a.country||"DE"),S=Object(j.a)(k,2),v=S[0],w=S[1],b=function(){i&&e.searchAddress(i,v).then(function(e,a){g(!1),a||(s(e.data.data||[]),M(e.data.data&&e.data.data.length?void 0:"No Results found"))}).catch(function(e){g(!1),s([]),M("Oops Something went wrong !")}),g(!0)};return d.a.createElement(F.a,{className:"find-address",title:"Add Marker",visible:!0,onCancel:e.onClose,footer:[null]},d.a.createElement(V.a,null,d.a.createElement(x.a,{span:19},d.a.createElement(J,{compact:!0},d.a.createElement(U.a,{defaultValue:v,onChange:w},O.map(function(e,a){return d.a.createElement(W,{key:a,value:e.code},e.name)})),d.a.createElement(K.a,{style:{width:"60%"},placeholder:"Search address here..",value:i,onChange:function(e){return t(e.target.value)},onKeyDown:function(e){return"Enter"===e.key&&b()}}))),d.a.createElement(x.a,{span:5},d.a.createElement(H.a,{type:"primary",icon:h?"loading":void 0,onClick:b},"Look Up"))),d.a.createElement(V.a,{className:"search-list"},m.map(function(o,n){return d.a.createElement("article",{key:n,className:"c-list__card"},d.a.createElement("header",null,o.name),d.a.createElement("p",null,"lat :",o.lat),d.a.createElement("p",null,"lng :",o.lng),d.a.createElement("footer",null,d.a.createElement("button",{onClick:function(){return e.onSubmit(o,a)}},a?"Update Marker":"Add to Map")))}),p&&d.a.createElement(z.a,{type:"warning",message:p})))},Y=o(210);function Q(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),o.push.apply(o,n)}return o}function q(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?Q(o,!0).forEach(function(a){Object(r.a)(e,a,o[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Q(o).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))})}return e}var X=function(e){function a(e){var o;return Object(m.a)(this,a),(o=Object(u.a)(this,Object(_.a)(a).call(this,e))).findMarker=function(e,a){return a.find(function(a){return a.lat===e.lat&&a.lat===e.lat})},o.addToMarkers=function(e){var a=o.state.markers;if(o.findMarker(e,a))return o.showNotfication("error","Marker already exist!","".concat(e.name," already exist"));T(e).then(function(a){200===a.status&&o.setState({markers:a.data,viewMode:M.NORMAL_MODE,focusLoc:e})}).catch(function(e){return o.showNotfication(f.ERROR,"Oops something went wrong!")})},o.onRemoveMarker=function(e,a){P(e).then(function(e){200===e.status&&o.setState({markers:e.data})}).catch(function(e){return o.showNotfication(f.ERROR,"Oops something went wrong!")})},o.onEditMarker=function(e,a){o.setState({viewMode:M.EDIT_MODE,edittingMarker:q({index:a},e)})},o.showNotfication=function(e,a,o){Y.a[e]({message:a||void 0,description:o||void 0})},o.onEditConfirm=function(e){B(e).then(function(e){200===e.status&&o.setState({markers:e.data,edittingMarker:void 0,viewMode:M.NORMAL_MODE})}).catch(function(e){return o.showNotfication(f.ERROR,"Oops something went wrong!")})},o.toggleViewMode=function(){return o.setState({viewMode:M.ADD_MODE})},o.onItemClick=function(e){return o.setState({focusLoc:e})},o.state={markers:[],edittingMarker:void 0,viewMode:M.NORMAL_MODE,focusLoc:E},o}return Object(p.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;R.a.get(L.marker).then(function(a){200===a.status&&e.setState({markers:a.data||[],focusLoc:a.data[0]||E})}).catch(function(a){return e.showNotfication(f.ERROR,"Oops something went wrong!")})}},{key:"render",value:function(){var e=this,a=this.state,o=a.markers,n=a.edittingMarker,c=a.viewMode,i=a.focusLoc;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"c-layout"},d.a.createElement(h,{viewMode:c},d.a.createElement(C,{apiKey:A.GOOGLE_MAP_API_KEY,focusLocation:i,markers:o,viewMode:c})),d.a.createElement(g,{viewMode:c},d.a.createElement(y,{onClick:function(){return e.toggleViewMode()}}),d.a.createElement(N,{markers:o,onRemove:this.onRemoveMarker,onEdit:this.onEditMarker,onItemClick:this.onItemClick})),c===M.ADD_MODE&&d.a.createElement(Z,{searchAddress:G,onClose:function(){return e.setState({viewMode:M.NORMAL_MODE})},onSubmit:this.addToMarkers}),c===M.EDIT_MODE&&n&&d.a.createElement(Z,{edittingMarker:n,searchAddress:G,onClose:function(){return e.setState({viewMode:M.NORMAL_MODE})},onSubmit:function(a){e.onEditConfirm(q({},n,{},a))}})))}}]),a}(n.Component);o(204),o(205);var $=function(){return d.a.createElement("div",{className:"App"},d.a.createElement(X,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(d.a.createElement(l.Provider,{value:t},d.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[120,1,2]]]);
//# sourceMappingURL=main.dd86337f.chunk.js.map