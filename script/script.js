/**/
let mp = [
["Hon. Anthony Albanese","Labor","Grayndler","NSW","1996–present","Division_of_Grayndler"],
["John Alexander OAM","Liberal","Bennelong","NSW","2010–2017;2017–present","Division_of_Bennelong"],
["Katie Allen","Liberal","Higgins","VIC","2019–present","Division_of_Higgins"],
["Anne Aly","Labor","Cowan","WA","2016–present","Division_of_Cowan"],
["Hon. Karen Andrews","Liberal National","McPherson","QLD","2010–present","Division_of_McPherson"],
["Hon. Kevin Andrews","Liberal","Menzies","VIC","1991–present","Division_of_Menzies"],
["Bridget Archer","Liberal","Bass","TAS","2019–present","Division_of_Bass"],
["Adam Bandt","Greens","Melbourne","VIC","2010–present","Division_of_Melbourne"],
["Angie Bell","Liberal National","Moncrieff","QLD","2019–present","Division_of_Moncrieff"],
["Hon. Sharon Bird","Labor","Cunningham","NSW","2004–present","Division_of_Cunningham"],
["Hon. Chris Bowen","Labor","McMahon","NSW","2004–present","Division_of_McMahon"],
["Russell Broadbent","Liberal","Monash","VIC","1990–1993;1996–1998;2004–present","Division_of_Monash"],
["Hon. Scott Buchholz","Liberal National","Wright","QLD","2010–present","Division_of_Wright"],
["Hon. Tony Burke","Labor","Watson","NSW","2004–present","Division_of_Watson"],
["Hon. Linda Burney","Labor","Barton","NSW","2016–present","Division_of_Barton"],
["Josh Burns","Labor","Macnamara","VIC","2019–present","Division_of_Macnamara"],
["Hon. Mark Butler","Labor","Hindmarsh","SA","2007–present","Division_of_Hindmarsh"],
["Terri Butler","Labor","Griffith","QLD","2014–present","Division_of_Griffith"],
["Hon. Anthony Byrne","Labor","Holt","VIC","1999–present","Division_of_Holt"],
["Jim Chalmers","Labor","Rankin","QLD","2013–present","Division_of_Rankin"],
["Nick Champion","Labor","Spence","SA","2007–present","Division_of_Spence"],
["Hon. Darren Chester","National","Gippsland","VIC","2008–present","Division_of_Gippsland"],
["Lisa Chesters","Labor","Bendigo","VIC","2013–present","Division_of_Bendigo"],
["George Christensen","Liberal National","Dawson","QLD","2010–present","Division_of_Dawson"],
["Hon. Jason Clare","Labor","Blaxland","NSW","2007–present","Division_of_Blaxland"],
["Sharon Claydon","Labor","Newcastle","NSW","2013–present","Division_of_Newcastle"],
["Libby Coker","Labor","Corangamite","VIC","2019–present","Division_of_Corangamite"],
["Hon. David Coleman","Liberal","Banks","NSW","2013–present","Division_of_Banks"],
["Hon. Julie Collins","Labor","Franklin","TAS","2007–present","Division_of_Franklin"],
["Pat Conaghan","National","Cowper","NSW","2019–present","Division_of_Cowper"],
["Vince Connelly","Liberal","Stirling","WA","2019–present","Division_of_Stirling"],
["Pat Conroy","Labor","Shortland","NSW","2013–present","Division_of_Shortland"],
["Hon. Mark Coulton","National","Parkes","NSW","2007–present","Division_of_Parkes"],
["Milton Dick","Labor","Oxley","QLD","2016–present","Division_of_Oxley"],
["Hon. Mark Dreyfus QC","Labor","Isaacs","VIC","2007–present","Division_of_Isaacs"],
["Hon. Damian Drum","National","Nicholls","VIC","2016–present","Division_of_Nicholls"],
["Hon. Peter Dutton","Liberal National","Dickson","QLD","2001–present","Division_of_Dickson"],
["Hon. Justine Elliot","Labor","Richmond","NSW","2004–present","Division_of_Richmond"],
["Hon. Warren Entsch","Liberal National","Leichhardt","QLD","1996–2007;2010–present","Division_of_Leichhardt"],
["Hon. Trevor Evans","Liberal National","Brisbane","QLD","2016–present","Division_of_Brisbane"],
["Jason Falinski","Liberal","Mackellar","NSW","2016–present","Division_of_Mackellar"],
["Hon. Joel Fitzgibbon","Labor","Hunter","NSW","1996–present","Division_of_Hunter"],
["Hon. Paul Fletcher","Liberal","Bradfield","NSW","2009–present","Division_of_Bradfield"],
["Nicolle Flint","Liberal","Boothby","SA","2016–present","Division_of_Boothby"],
["Mike Freelander","Labor","Macarthur","NSW","2016–present","Division_of_Macarthur"],
["Hon. Josh Frydenberg","Liberal","Kooyong","VIC","2010–present","Division_of_Kooyong"],
["Andrew Gee","National","Calare","NSW","2016–present","Division_of_Calare"],
["Steve Georganas","Labor","Adelaide","SA","2004–2013;2016–present","Division_of_Adelaide"],
["Andrew Giles","Labor","Scullin","VIC","2013–present","Division_of_Scullin"],
["David Gillespie","National","Lyne","NSW","2013–present","Division_of_Lyne"],
["Ian Goodenough","Liberal","Moore","WA","2013–present","Division_of_Moore"],
["Patrick Gorman","Labor","Perth","WA","2018–present","Division_of_Perth"],
["Luke Gosling OAM","Labor","Solomon","NT","2016–present","Division_of_Solomon"],
["Helen Haines","Independent","Indi","VIC","2019–present","Division_of_Indi"],
["Garth Hamilton","Liberal National","Groom","QLD","2020–present","Division_of_Groom"],
["Celia Hammond","Liberal","Curtin","WA","2019–present","Division_of_Curtin"],
["Andrew Hastie","Liberal","Canning","WA","2015–present","Division_of_Canning"],
["Hon. Alex Hawke","Liberal","Mitchell","NSW","2007–present","Division_of_Mitchell"],
["Chris Hayes","Labor","Fowler","NSW","2005–present","Division_of_Fowler"],
["Julian Hill","Labor","Bruce","VIC","2016–present","Division_of_Bruce"],
["Kevin Hogan","National","Page","NSW","2013–present","Division_of_Page"],
["Hon. Luke Howarth","Liberal National","Petrie","QLD","2013–present","Division_of_Petrie"],
["Hon. Greg Hunt","Liberal","Flinders","VIC","2001–present","Division_of_Flinders"],
["Hon. Ed Husic","Labor","Chifley","NSW","2010–present","Division_of_Chifley"],
["Hon. Steve Irons","Liberal","Swan","WA","2007–present","Division_of_Swan"],
["Stephen Jones","Labor","Whitlam","NSW","2010–present","Division_of_Whitlam"],
["Hon. Barnaby Joyce","National","New England","NSW","2013–2017;2017–present","Division_of_New_England"],
["Hon. Bob Katter","Katter's Australian","Kennedy","QLD","1993–present","Division_of_Kennedy"],
["Ged Kearney","Labor","Cooper","VIC","2018–present","Division_of_Cooper"],
["Craig Kelly","Independent","Hughes","NSW","2010–present","Division_of_Hughes"],
["Matt Keogh","Labor","Burt","WA","2016–present","Division_of_Burt"],
["Peter Khalil","Labor","Wills","VIC","2016–present","Division_of_Wills"],
["Hon. Catherine King","Labor","Ballarat","VIC","2001–present","Division_of_Ballarat"],
["Madeleine King","Labor","Brand","WA","2016–present","Division_of_Brand"],
["Andrew Laming","Liberal National","Bowman","QLD","2004–present","Division_of_Bowman"],
["Hon. Michelle Landry","Liberal National","Capricornia","QLD","2013–present","Division_of_Capricornia"],
["Julian Leeser","Liberal","Berowra","NSW","2016–present","Division_of_Berowra"],
["Hon. Andrew Leigh","Labor","Fenner","ACT","2010–present","Division_of_Fenner"],
["Hon. Sussan Ley","Liberal","Farrer","NSW","2001–present","Division_of_Farrer"],
["Hon. David Littleproud","Liberal National","Maranoa","QLD","2016–present","Division_of_Maranoa"],
["Gladys Liu","Liberal","Chisholm","VIC","2019–present","Division_of_Chisholm"],
["Hon. Nola Marino","Liberal","Forrest","WA","2007–present","Division_of_Forrest"],
["Hon. Richard Marles","Labor","Corio","VIC","2007–present","Division_of_Corio"],
["Fiona Martin","Liberal","Reid","NSW","2019–present","Division_of_Reid"],
["Kristy McBain","Labor","Eden-Monaro","NSW","2020–present","Division_of_Eden-Monaro"],
["Emma McBride","Labor","Dobell","NSW","2016–present","Division_of_Dobell"],
["Hon. Michael McCormack","National","Riverina","NSW","2010–present","Division_of_Riverina"],
["Melissa McIntosh","Liberal","Lindsay","NSW","2019–present","Division_of_Lindsay"],
["Brian Mitchell","Labor","Lyons","TAS","2016–present","Division_of_Lyons"],
["Rob Mitchell","Labor","McEwen","VIC","2010–present","Division_of_McEwen"],
["Hon. Scott Morrison","Liberal","Cook","NSW","2007–present","Division_of_Cook"],
["Hon. Ben Morton","Liberal","Tangney","WA","2016–present","Division_of_Tangney"],
["Daniel Mulino","Labor","Fraser","VIC","2019–present","Division_of_Fraser_(Victoria)"],
["Peta Murphy","Labor","Dunkley","VIC","2019–present","Division_of_Dunkley"],
["Hon. Shayne Neumann","Labor","Blair","QLD","2007–present","Division_of_Blair"],
["Llew O'Brien","Liberal National","Wide Bay","QLD","2016–present","Division_of_Wide_Bay"],
["Ted O'Brien","Liberal National","Fairfax","QLD","2016–present","Division_of_Fairfax"],
["Hon. Brendan O'Connor","Labor","Gorton","VIC","2001–present","Division_of_Gorton"],
["Ken O'Dowd","Liberal National","Flynn","QLD","2010–present","Division_of_Flynn"],
["Clare O'Neil","Labor","Hotham","VIC","2013–present","Division_of_Hotham"],
["Julie Owens","Labor","Parramatta","NSW","2004–present","Division_of_Parramatta"],
["Tony Pasin","Liberal","Barker","SA","2013–present","Division_of_Barker"],
["Alicia Payne","Labor","Canberra","ACT","2019–present","Division_of_Canberra"],
["Gavin Pearce","Liberal","Braddon","TAS","2019–present","Division_of_Braddon"],
["Graham Perrett","Labor","Moreton","QLD","2007–present","Division_of_Moreton"],
["Fiona Phillips","Labor","Gilmore","NSW","2019–present","Division_of_Gilmore"],
["Hon. Keith Pitt","Liberal National","Hinkler","QLD","2013–present","Division_of_Hinkler"],
["Hon. Tanya Plibersek","Labor","Sydney","NSW","1998–present","Division_of_Sydney"],
["Hon. Christian Porter","Liberal","Pearce","WA","2013–present","Division_of_Pearce"],
["Hon. Melissa Price","Liberal","Durack","WA","2013–present","Division_of_Durack"],
["Rowan Ramsey","Liberal","Grey","SA","2007–present","Division_of_Grey"],
["Hon. Amanda Rishworth","Labor","Kingston","SA","2007–present","Division_of_Kingston"],
["Hon. Stuart Robert","Liberal National","Fadden","QLD","2007–present","Division_of_Fadden"],
["Michelle Rowland","Labor","Greenway","NSW","2010–present","Division_of_Greenway"],
["Joanne Ryan","Labor","Lalor","VIC","2013–present","Division_of_Lalor"],
["Rebekha Sharkie","Centre Alliance","Mayo","SA","2016–2018;2018–present","Division_of_Mayo"],
["Dave Sharma","Liberal","Wentworth","NSW","2019–present","Division_of_Wentworth"],
["Hon. Bill Shorten","Labor","Maribyrnong","VIC","2007–present","Division_of_Maribyrnong"],
["Julian Simmonds","Liberal National","Ryan","QLD","2019–present","Division_of_Ryan"],
["David Smith","Labor","Bean","ACT","2019–present","Division_of_Bean"],
["Hon. Tony Smith","Liberal","Casey","VIC","2001–present","Division_of_Casey"],
["Hon. Warren Snowdon","Labor","Lingiari","NT","1987–1996;1998–present","Division_of_Lingiari"],
["Anne Stanley","Labor","Werriwa","NSW","2016–present","Division_of_Werriwa"],
["Zali Steggall OAM","Independent","Warringah","NSW","2019–present","Division_of_Warringah"],
["James Stevens","Liberal","Sturt","SA","2019–present","Division_of_Sturt"],
["Michael Sukkar","Liberal","Deakin","VIC","2013–present","Division_of_Deakin"],
["Meryl Swanson","Labor","Paterson","NSW","2016–present","Division_of_Paterson"],
["Hon. Angus Taylor","Liberal","Hume","NSW","2013–present","Division_of_Hume"],
["Hon. Dan Tehan","Liberal","Wannon","VIC","2010–present","Division_of_Wannon"],
["Susan Templeman","Labor","Macquarie","NSW","2016–present","Division_of_Macquarie"],
["Hon. Matt Thistlethwaite","Labor","Kingsford Smith","NSW","2013–present","Division_of_Kingsford_Smith"],
["Phillip Thompson OAM","Liberal National","Herbert","QLD","2019–present","Division_of_Herbert"],
["Kate Thwaites","Labor","Jagajaga","VIC","2019–present","Division_of_Jagajaga"],
["Hon. Alan Tudge","Liberal","Aston","VIC","2010–present","Division_of_Aston"],
["Maria Vamvakinou","Labor","Calwell","VIC","2001–present","Division_of_Calwell"],
["Bert van Manen","Liberal National","Forde","QLD","2010–present","Division_of_Forde"],
["Ross Vasta","Liberal National","Bonner","QLD","2004–2007;2010–present","Division_of_Bonner"],
["Andrew Wallace","Liberal National","Fisher","QLD","2016–present","Division_of_Fisher"],
["Tim Watts","Labor","Gellibrand","VIC","2013–present","Division_of_Gellibrand"],
["Anne Webster","National","Mallee","VIC","2019–present","Division_of_Mallee"],
["Anika Wells","Labor","Lilley","QLD","2019–present","Division_of_Lilley"],
["Lucy Wicks","Liberal","Robertson","NSW","2013–present","Division_of_Robertson"],
["Andrew Wilkie","Independent","Clark","TAS","2010–present","Division_of_Clark"],
["Josh Wilson","Labor","Fremantle","WA","2016–2018;2018–present","Division_of_Fremantle"],
["Rick Wilson","Liberal","O'Connor","WA","2013–present","Division_of_O%27Connor"],
["Tim Wilson","Liberal","Goldstein","VIC","2016–present","Division_of_Goldstein"],
["Hon. Jason Wood","Liberal","La Trobe","VIC","2004–2010;2013–present","Division_of_La_Trobe"],
["Hon. Ken Wyatt AM","Liberal","Hasluck","WA","2010–present","Division_of_Hasluck"],
["Terry Young","Liberal National","Longman","QLD","2019–present","Division_of_Longman"],
["Tony Zappia","Labor","Makin","SA","2007–present","Division_of_Makin"],
["Trent Zimmerman","Liberal","North Sydney","NSW","2015–present","Division_of_North_Sydney"]
]
/**/

/***/
let qldmp = {
	"Barron River":["Electoral_district_of_Barron_River","Craig Crawford","Labor","T C Barron, police clerk",37492,568],
	"Cairns":["Electoral_district_of_Cairns","Michael Healy","Labor Party","Cairns",36789,60],
	"Cook":["Electoral_district_of_Cook","Cynthia Lui","Labor Party","James Cook",33912,196836],
	"Hill":["Electoral_district_of_Hill","Shane Knuth","Katter's Australian Party","Dorothy Hill",37987,19752],
	"Mulgrave":["Electoral_district_of_Mulgrave_(Queensland)","Curtis Pitt","Labor","Mulgrave River",35635,819],
	"Burdekin":["Electoral_district_of_Burdekin","Dale Last","Liberal National","Burdekin River",34920,78681],
	"Hinchinbrook":["Electoral_district_of_Hinchinbrook","Nick Dametto","Katter's Australian Party","Hinchinbrook Island",35050,6497],
	"Mundingburra":["Electoral_district_of_Mundingburra","Les Walker","Labor","Mundingburra",33405,122],
	"Thuringowa":["Electoral_district_of_Thuringowa","Aaron Harper","Labor","City of Thuringowa",36034,261],
	"Townsville":["Electoral_district_of_Townsville","Scott Stewart","Labor Party","Townsville",35337,251],
	"Traeger":["Electoral_district_of_Traeger","Robbie Katter","Katter's Australian Party","Alfred Traeger",26386,428911],
	"Whitsunday":["Electoral_district_of_Whitsunday","Amanda Camm","Liberal National","Whitsunday Island",34824,4898],
	"Bundaberg":["Electoral_district_of_Bundaberg","Tom Smith","Labor","Bundaberg",35296,108],
	"Burnett":["Electoral_district_of_Burnett","Stephen Bennett","Liberal National","Burnett River",35928,7687],
	"Callide":["Electoral_district_of_Callide","Colin Boyce","Liberal National","Callide Creek in the Coalfields",33907,74199],
	"Gladstone":["Electoral_district_of_Gladstone","Glenn Butcher","Labor Party","Gladstone",33589,2814],
	"Gregory":["Electoral_district_of_Gregory","Lachlan Millar","Liberal National","Augustus Charles Gregory",24785,459681],
	"Hervey Bay":["Electoral_district_of_Hervey_Bay","Adrian Tantari","Labor","Hervey Bay",39626,1809],
	"Keppel":["Electoral_district_of_Keppel","Brittany Lauga","Labor","Great Keppel Island",37052,3763],
	"Mackay":["Electoral_district_of_Mackay","Julieanne Gilbert","Labor","Mackay",38199,80],
	"Maryborough":["Electoral_district_of_Maryborough_(Queensland)","Bruce Saunders","Labor","Maryborough",38267,4705],
	"Mirani":["Electoral_district_of_Mirani","Stephen Andrew","One Nation","Mirani",34141,63290],
	"Rockhampton":["Electoral_district_of_Rockhampton","Barry O'Rourke","Labor","Rockhampton",36524,174],
	"Condamine":["Electoral_district_of_Condamine","Pat Weir","Liberal National Party","Condamine River",37883,6563],
	"Southern Downs":["Electoral_district_of_Southern_Downs","James Lister","Liberal National","Darling Downs",36029,30951],
	"Toowoomba North":["Electoral_district_of_Toowoomba_North","Trevor Watts","Liberal National","Toowoomba",37423,111],
	"Toowoomba South":["Electoral_district_of_Toowoomba_South","David Janetzki","Liberal National Party","Toowoomba",37750,44],
	"Warrego":["Electoral_district_of_Warrego","Ann Leahy","Liberal National","Warrego River",29307,337812],
	"Aspley":["Electoral_district_of_Aspley","Bart Mellish","Labor","Aspley",37792,36],
	"Bancroft":["Electoral_district_of_Bancroft","Chris Whiting","Labor Party","Joseph Bancroft",36462,74],
	"Clayfield":["Electoral_district_of_Clayfield","Tim Nicholls","Liberal National","Clayfield",40218,71],
	"Cooper":["Electoral_district_of_Cooper","Jonty Bush","Labor Party","Lilian Violet Cooper",37386,63],
	"Everton":["Electoral_district_of_Everton","Tim Mander","Liberal National","Everton Park",37520,48],
	"Ferny Grove":["Electoral_district_of_Ferny_Grove","Mark Furner","Labor","Ferny Grove",36224,49],
	"Kurwongbah":["Electoral_district_of_Kurwongbah","Shane King","Labor Party","Lake Kurwongbah",36693,125],
	"Mcconnel":["Electoral_district_of_McConnel","Grace Grace","Labor Party","Mary McConnel",39448,13],
	"Morayfield":["Electoral_district_of_Morayfield","Mark Ryan","Labor","Morayfield",36991,69],
	"Murrumba":["Electoral_district_of_Murrumba","Steven Miles","Labor","An Aboriginal word for good",41071,63],
	"Nudgee":["Electoral_district_of_Nudgee","Leanne Linard","Labor","Nudgee",37845,42],
	"Pine Rivers":["Electoral_district_of_Pine_Rivers","Nikki Boyd","Labor","Pine Rivers",37943,539],
	"Pumicestone":["Electoral_district_of_Pumicestone","Ali King","Labor","Pumicestone Passage",38286,337],
	"Redcliffe":["Electoral_district_of_Redcliffe","Yvette D'Ath","Labor","Redcliffe",38589,200],
	"Sandgate":["Electoral_district_of_Sandgate","Stirling Hinchliffe","Labor","Sandgate",36858,35],
	"Stafford":["Electoral_district_of_Stafford","Jimmy Sullivan","Labor Party","Stafford",38928,21],
	"Algester":["Electoral_district_of_Algester","Leeanne Enoch","Labor","Suburb of Algester",35108,66],
	"Bulimba":["Electoral_district_of_Bulimba","Di Farmer","Labor","Bulimba",39571,29],
	"Chatsworth":["Electoral_district_of_Chatsworth","Steve Minnikin","Liberal National","Chatsworth Road",35668,57],
	"Greenslopes":["Electoral_district_of_Greenslopes","Joe Kelly","Labor Party","Greenslopes",37368,18],
	"Inala":["Electoral_district_of_Inala","Annastacia Palaszczuk","Labor","The suburb of Inala",35716,52],
	"Lytton":["Electoral_district_of_Lytton","Joan Pease","Labor Party","Lytton",37369,65],
	"Maiwar":["Electoral_district_of_Maiwar","Michael Berkman","Greens","Indigenous name of the Brisbane River",38663,38],
	"Mansfield":["Electoral_district_of_Mansfield","Corrine McMillan","Labor Party","Mansfield",35064,70],
	"Miller":["Electoral_district_of_Miller","Mark Bailey","Labor Party","Emma Miller",35607,27],
	"Moggill":["Electoral_district_of_Moggill","Christian Rowan","Liberal National","Moggill",34935,307],
	"Mount Ommaney":["Electoral_district_of_Mount_Ommaney","Jess Pugh","Labor Party","Mount Ommaney",35577,31],
	"South Brisbane":["Electoral_district_of_South_Brisbane","Amy MacMahon","Greens","South Brisbane",38892,12],
	"Stretton":["Electoral_district_of_Stretton","James Martin","Labor","Stretton",33961,41],
	"Toohey":["Electoral_district_of_Toohey","Peter Russo","Labor Party","Toohey Forest Park",34022,36],
	"Buderim":["Electoral_district_of_Buderim","Brent Mickelberg","Liberal National","Buderim",36918,67],
	"Caloundra":["Electoral_district_of_Caloundra","Jason Hunt","Labor","Caloundra",38503,227],
	"Glass House":["Electoral_district_of_Glass_House","Andrew Powell","Liberal National","Glass House Mountains",34748,1768],
	"Gympie":["Electoral_district_of_Gympie","Tony Perrett","Liberal National","Gympie",39141,4628],
	"Kawana":["Electoral_district_of_Kawana","Jarrod Bleijie","Liberal National","Kawana Waters",36772,47],
	"Maroochydore":["Electoral_district_of_Maroochydore","Fiona Simpson","Liberal National Party","Maroochydore",36020,45],
	"Nanango":["Electoral_district_of_Nanango","Deb Frecklington","Liberal National","Nanango",37170,18122],
	"Nicklin":["Electoral_district_of_Nicklin","Robert Skelton","Labor","Frank Nicklin",35007,686],
	"Ninderry":["Electoral_district_of_Ninderry","Dan Purdie","Liberal National Party","Ninderry, Queensland",38836,301],
	"Noosa":["Electoral_district_of_Noosa","Sandy Bolton","Independent","Noosa Heads",36797,728],
	"Bonney":["Electoral_district_of_Bonney","Sam O'Connor","Liberal National Party","Maude Bonney",35534,29],
	"Broadwater":["Electoral_district_of_Broadwater","David Crisafulli","Liberal National Party","Nerang River Estuary",35120,130],
	"Burleigh":["Electoral_district_of_Burleigh","Michael Hart","Liberal National","Burleigh Heads",36107,30],
	"Coomera":["Electoral_district_of_Coomera","Michael Crandon","Liberal National Party","Coomera",45715,340],
	"Currumbin":["Electoral_district_of_Currumbin","Laura Gerber","Liberal National","Currumbin",36059,137],
	"Gaven":["Electoral_district_of_Gaven","Meaghan Scanlon","Labor Party","Gaven Way (a section of the Pacific Motorway)",33051,77],
	"Mudgeeraba":["Electoral_district_of_Mudgeeraba","Ros Bates","Liberal National","Mudgeeraba",38319,402],
	"Mermaid Beach":["Electoral_district_of_Mermaid_Beach","Ray Stevens","Liberal National","Mermaid Beach",35823,23],
	"Southport":["Electoral_district_of_Southport","Rob Molhoek","Liberal National","Southport",34899,33],
	"Surfers Paradise":["Electoral_district_of_Surfers_Paradise","John-Paul Langbroek","Liberal National","Surfers Paradise",35065,24],
	"Theodore":["Electoral_district_of_Theodore","Mark Boothman","Liberal National Party","Ted Theodore",35641,106],
	"Redlands":["Electoral_district_of_Redlands","Kim Richards","Labor Party","Redland Bay",37638,121],
	"Capalaba":["Electoral_district_of_Capalaba","Don Brown","Labor","Capalaba",36176,45],
	"Oodgeroo":["Electoral_district_of_Oodgeroo","Mark Robinson","Liberal National Party","Oodgeroo Noonuccal",33034,308],
	"Ipswich":["Electoral_district_of_Ipswich","Jennifer Howard","Labor","Ipswich",33668,86],
	"Bundamba":["Electoral_district_of_Bundamba","Lance McCallum","Labor","Bundamba",38035,150],
	"Ipswich West":["Electoral_district_of_Ipswich_West","Jim Madden","Labor","West Ipswich",35994,365],
	"Jordan":["Electoral_district_of_Jordan","Charis Mullen","Labor Party","Vi Jordan",39041,314],
	"Logan":["Electoral_district_of_Logan","Linus Power","Labor","Logan River",37695,356],
	"Macalister":["Electoral_district_of_Macalister","Melissa McMahon","Labor Party","Arthur Macalister",36912,91],
	"Springwood":["Electoral_district_of_Springwood","Mick de Brenni","Labor","Springwood",35376,99],
	"Lockyer":["Electoral_district_of_Lockyer","Jim McDonald","Liberal National","Lockyer Valley",34938,2568],
	"Waterford":["Electoral_district_of_Waterford","Shannon Fentiman","Labor","Waterford",34157,56],
	"Woodridge":["Electoral_district_of_Woodridge","Cameron Dick","Labor","Woodridge",36787,39],
	"Scenic Rim":["Electoral_district_of_Scenic_Rim","Jon Krause","Liberal National Party","Scenic Rim",37878,4809]
}
/***/

/*MAP SETUP*/
//Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxY2JiMDhjMS1jODcyLTQxYWQtYmJiOC1hNTUyNDE0Zjg2N2YiLCJpZCI6NjQ3MDIsImlhdCI6MTYyOTQyMjY0OX0.XrBfYMVmvrlNeNuAdbcCyVHJ44KMq_yCGptHtZ1F9VY';
const extent = Cesium.Rectangle.fromDegrees(112.921124550164,-43.7429686004967,153.660861,-9.14118954253052);//(W,S,E,N)
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = extent;
// Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;

const osm = new Cesium.OpenStreetMapImageryProvider({
	// url:'https://a.tile.openstreetmap.org/'
	// url:'http://tile.stamen.com/watercolor'
	// url:'http://tile.stamen.com/toner-background'
	// url:'https://tile.stamen.com/toner-background'
	url:'https://{s}.basemaps.cartocdn.com/light_nolabels'
	// url:'mapbox://styles/mapbox/light-v10'
});
// Cesium.OpenStreetMapImageryProvider({url : 'https://a.tile.openstreetmap.org/'})
const viewer = new Cesium.Viewer('cesiumContainer', {
	// imageryProvider: new Cesium.IonImageryProvider({ assetId: 3954 }),//asset added to account
	imageryProvider: osm,
	// imageryProvider: false,
	// terrainProvider: Cesium.createWorldTerrain(),
	timeline: false,
	animation: false,
	geocoder: false,
	baseLayerPicker: false,////////////////////////
	sceneModePicker: false,
	navigationHelpButton: false,
	homeButton: false,
	fullscreenButton: false,
	skyBox: false,

	// imageryProvider: Cesium.createWorldImagery({
	// 	style: Cesium.IonWorldImageryStyle.AERIAL_WITH_LABELS,
	// }),

	// selectionIndicator : false,
	// infoBox : false,

	// sceneMode: Cesium.SceneMode.SCENE2D,
	// mapMode2D: Cesium.MapMode2D.ROTATE,
});

let localities = new Cesium.CustomDataSource("localities")
let lgas = new Cesium.CustomDataSource("lgas")
let stateDivisions = new Cesium.CustomDataSource("stateDivisions")
let federal = new Cesium.CustomDataSource("federal")
let zones = new Cesium.CustomDataSource("zones")
let broadcast = new Cesium.CustomDataSource("broadcast")

viewer.dataSources.add(localities);
viewer.dataSources.add(lgas);
viewer.dataSources.add(stateDivisions);
viewer.dataSources.add(federal);
viewer.dataSources.add(zones);
viewer.dataSources.add(broadcast);


//viewer.scene.globe.depthTestAgainstTerrain = true;//https://community.cesium.com/t/render-polygons-on-ground/7096//2109101041

lgas.show = false;
stateDivisions.show = false;
federal.show = false;
// zones.show = true;
zones.show = false;
broadcast.show = false;
// localities.show = false;
/*MAP SETUP*/

/*GLOBAL VARIABLES*/
const colours = [[255,0,0],[255,106,0],[255,213,0],[191,255,0],[84,255,0],[0,255,22],[0,255,128],[0,255,234],[0,169,255],[0,63,255],[42,0,255],[148,0,255],[254,0,253],[255,0,147],[255,0,41],[255,64,0],[255,170,0],[233,255,0],[127,255,0],[21,255,0],[0,255,86],[0,255,192],[0,211,255],[0,105,255],[0,0,255],[106,0,255],[212,0,255],[255,0,190],[255,0,83],[255,21,0],[255,128,0],[255,234,0],[169,255,0],[63,255,0],[0,255,43],[0,255,149],[0,254,255],[0,148,255],[0,41,255],[63,0,255],[169,0,255],[255,0,232],[255,0,126],[255,0,20],[255,85,0],[255,191,0],[212,255,0],[106,255,0],[1,255,1],[0,255,107],[0,255,213],[0,190,255],[0,84,255],[21,0,255],[127,0,255],[233,0,255],[255,0,168],[255,0,62],[255,43,0],[255,149,0]]

const stateBox = {//W,S,E,N
	// NSW:[140.999286483091,-37.5052674371251,159.105448901665,-28.157007484129],
	NSW:[140.999286483091,-37.5052674371251,153.660861,-28.157007484129],
	QLD:[137.99596539614,-29.1778849996844,153.555247484414,-9.14118954253052],
	VIC:[140.961865804717,-39.1591796902753,149.976504105742,-33.980636405904],
	TAS:[143.818576726639,-43.7429686004967,148.50313834661,-39.1919773009046],
	SA:[129.001348803946,-38.0625895910114,141.002962544954,-25.996363071308],
	WA:[112.921124550164,-35.134832521502,129.001862438231,-13.6894781340124],
	NT:[129.000484929137,-25.9986044823092,138.001207833215,-10.965900135588],
	ACT:[148.762795689483,-35.920517211112,149.399292549604,-35.1244029421091],

	AUS:[112.921124550164,-43.7429686004967,153.660861,-9.14118954253052]
}

let selections = {
	clear:{},
	lgas:{},
	stateDivisions:{},
	federal:{},
	zones:{},
	broadcast:{},
	localities:{},
}
/*GLOBAL VARIABLES*/

/*FUNCTIONS*/
viewer.trackedEntityChanged.addEventListener((e)=>{
	// console.log(e)
})
viewer.selectedEntityChanged.addEventListener((e)=>{

	viewer.trackedEntity = undefined;

	/*alpha channel*/
	if(window['polygon'] != undefined){
		let p = window['polygon']
		let rgba = p['_polygon']['_material']['_color']['_value']
		let R = rgba['red']
		let G = rgba['green']
		let B = rgba['blue']
		let nc = new Cesium.Color(R,G,B,0.25)
		p.polygon.material = nc
		p.polygon.outline = false
		// p.polygon.outlineColor = Cesium.Color.BLACK
	}
	/*alpha channel*/
	
	if(e == undefined){
		let b = stateBox[$('.stateSelect').val()];

		$('.areaFocus').val('clear')

		viewer.camera.flyTo({
			destination : Cesium.Rectangle.fromDegrees(b[0],b[1],b[2],b[3])
		});
		return false
	}else{

		/*selection indicator*/
		switch(!e['_polygon']){
			case false: $('.cesium-viewer-selectionIndicatorContainer').addClass('displayNone'); break;
			case true:
			setTimeout(()=>{
				$('.cesium-viewer-selectionIndicatorContainer').removeClass('displayNone')
			},250);
			break;
		}
		/*selection indicator*/

		let id = e['_id'], name = e['_name'], owner = e['entityCollection']['_owner']['_name']

		switch(owner){
			case 'lgas':
			case 'stateDivisions':
			case 'federal':
			case 'zones':
			case 'broadcast':
			
			$('.areaFocus').val(id)
			
			let b = e['_boundingBox']
			
			/*alpha channel*/
			let rgba = e['_polygon']['_material']['_color']['_value']
			let R = rgba['red']
			let G = rgba['green']
			let B = rgba['blue']
			let nc = new Cesium.Color(R,G,B,0.5)

			window['polygon'] = e
			e.polygon.material = nc
			e.polygon.outline = true
			// e.polygon.outlineColor = Cesium.Color.RED
			// e.polygon.outlineColor = new Cesium.Color(0,1,0,1)
			/*alpha channel*/
			
			viewer.camera.flyTo({
				destination : Cesium.Rectangle.fromDegrees(b['W'],b['S'],b['E'],b['N'])
			});

			break;			
		}
	}
})

const toTitleCase = (str)=>{
	return str.replace(
		/\w\S*/g,
		(txt)=>{
			// return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			return (txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()).replace(/Mcc/g,'McC');
		}
	);
}

const wordWrap = (str)=>{

	str = toTitleCase(str)

	let words = str.split(' ')
	let len = words.length
	let out;

	if(len > 1){

		let parity = len % 2;

		let lo = Math.floor(len / 2) - 1;
		let hi = Math.ceil(len / 2) - 1;

		let a = words[0]
		let aa = words[0]
		let b = '';
		let bb = '';

		for(let i = 1; i < len; i++){

			if(i <= lo){
				a += ` ${words[i]}`
				aa += ` ${words[i]}`
			}
			if(i == hi && parity == 1){
				aa += ` ${words[i]}`
				bb += `${words[i]}`
			}
			if(i > hi){
				b += ` ${words[i]}`
				bb += ` ${words[i]}`
			}
		}

		if(Math.abs(a.length - bb.length) < Math.abs(aa.length - b.length)){
			out = `${a}\n${bb}`;
		}else{
			out = `${aa}\n${b}`;
		}
	}else{
		// console.log(toTitleCase(str))
		return toTitleCase(str)
	}

	return out.replace(/\n /g,'\n')
}

const numberWithCommas = (x)=>{
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const decimalise = (val,dec)=>{	
	let multiplier = Number(`1e${dec}`)
	let result = Math.round(Number(val) * multiplier) / multiplier
	return numberWithCommas(result)
}

const listSelections = (a)=>{
	// console.log(a)
	if(a === null || a == 'clear' || a == 'deselect'){
		$('.areaSelect').prop('disabled',false);
		$('.areaFocus').prop('disabled',true).val('clear');//
	}else{
	
		let s = Object.keys(selections[a]).sort();
		let d;

		switch(a){
			case 'lgas': d = 'LGA'; break;
			case 'stateDivisions':d = 'Electorate'; break;
			case 'federal':d = 'Electorate'; break;
			case 'zones':d = 'Zone'; break;
		}

		$('.areaFocus').html(`
			<option selected hidden value="clear" id="dynamicOption">Select ${d}</option>
			<option value="deselect" id="clearAreaSelection">None</option>
		`)
		
		for(let i in s){
			$('.areaFocus').append(`<option value="${selections[a][s[i]]}">${toTitleCase(s[i])}</option>`)
		}

		$('.areaSelect, .areaFocus').prop('disabled',false);
	}
};

/*ENTITY FUNCTIONS*/
const loadLocalities = (state)=>{
	let propName = `localities_${state}`
	if(typeof(window[propName]) !== 'object'){
		let info = fetch(`script/localities/${state}.json`,{
			method: 'get',
			headers: {'Content-Type': 'application/json'}
		})
		.then((response) => response.json())
		.then((response) => {
			Object.defineProperty(window, propName, {
				value: response,
				configurable: false,
				writable: false
			})
		})
		.then(() => {
			appendLocalities(window[propName],state)
		})
		.catch(err => console.error('Caught error: ', err))
	}else{
		appendLocalities(window[propName],state)
	}
};

const appendLocalities = (o,state)=>{
	// console.log(o.length)
	for(let i in o){
		let description = `Population: ${numberWithCommas(o[i]['population'])}`
		let colour = Cesium.Color.GREEN;
		let pixelSize = 5;
		switch(true){
			case Number(o[i]['population']) >= 12e3:
			colour = Cesium.Color.RED;
			pixelSize = 15;
			break;
			
			case Number(o[i]['population']) >= 1500:
			colour = Cesium.Color.BLUE;
			pixelSize = 10;
			break;
		}

		localities.entities.add({
			name: o[i]['locality'],
			description: description,
			position: Cesium.Cartesian3.fromDegrees(o[i]['long'], o[i]['lat'],500),
			point: {
				pixelSize : pixelSize,
				color : colour,
				outlineColor : Cesium.Color.WHITE,
				outlineWidth : 2,
				translucencyByDistance: new Cesium.NearFarScalar(100000, 1, 5000000, 0),
				depthTestAgainstTerrain: false,
			},
			label: {
				text: o[i]['locality'],
				// style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				// style: Cesium.LabelStyle.FILL,
				// outlineWidth : 0,
				fillColor: Cesium.Color.BLACK,
				verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
				pixelOffset : new Cesium.Cartesian2(0, -9),
				scaleByDistance: new Cesium.NearFarScalar(50000, 1, 5000000, 0),
				translucencyByDistance: new Cesium.NearFarScalar(100000, 1, 5000000, 0),
				depthTestAgainstTerrain: false,
			},
			// boundingBox: {W:W,E:E,S:S,N:N}
		})
		let guid = localities['_entityCollection']['_entities']['_array'][i]['_id']
		window['currentEntities'][guid] = lgas['_entityCollection']['_entities']['_array'][i]
		selections['localities'][o[i]['locality']] = guid
	}
	// viewer.zoomTo(viewer.entities);

	// console.log(selections)
	listSelections($('.areaSelect').val())
};

const loadLGAs = (state)=>{
	let propName = `lgas_${state}`
	if(typeof(window[propName]) !== 'object'){
		let info = fetch(`script/lgas/${state}.json`,{
			method: 'get',
			headers: {'Content-Type': 'application/json'}
		})
		.then((response) => response.json())
		.then((response) => {
			Object.defineProperty(window, propName, {
				value: response['features'],
				configurable: false,
				writable: false
			})
		})
		.then(() => {
			appendLGAs(window[propName],state)
		})
		.catch(err => console.error('Caught error: ', err))
	}else{
		appendLGAs(window[propName],state)
	}
}
// let repNames = {}
const appendLGAs = (o,state)=>{

	let thisCol = 0;
	// console.log(o.length)
	for(let i in o){

		let LGA_NAME

		if(o[i]['properties']['NSW_LGA__2']){
			LGA_NAME = o[i]['properties']['NSW_LGA__2']
		}else if(o[i]['properties']['QLD_LGA__2']){
			LGA_NAME = o[i]['properties']['QLD_LGA__2']
		}else{
			LGA_NAME = o[i]['properties']['LGA_NAME']
		}

		/**/
		// if(!repNames[LGA_NAME]){
		// 	repNames[LGA_NAME] = 1
		// }else{
		// 	repNames[LGA_NAME] ++
		// }
		/**/

		let coords = o[i]['geometry']['coordinates'][0]
		let boundary = []
		
		let r = colours[thisCol][0] / 255
		let g = colours[thisCol][1] / 255
		let b = colours[thisCol][2] / 255
		let colour = new Cesium.Color(r,g,b,0.25)

		thisCol++;
		if(thisCol >= colours.length - 1){
			thisCol = 0;
		}

		let W = 180;//lower lon
		let E = -180;//higher lon
		let S = 90;//lower lat
		let N = -90;//higher lat

		for(let i in coords){
			boundary.push(coords[i][0],coords[i][1])

			if(coords[i][0] < W){W = coords[i][0]}
			if(coords[i][0] > E){E = coords[i][0]}
			if(coords[i][1] < S){S = coords[i][1]}
			if(coords[i][1] > N){N = coords[i][1]}
		}

		let midLat = (S + N) / 2
		let midLon = (W + E) / 2

		lgas.entities.add({
			name: LGA_NAME,
			polygon: {
				hierarchy: Cesium.Cartesian3.fromDegreesArray(boundary),
				height : 0,
				material : colour,
				outline : false,
				outlineColor : Cesium.Color.BLACK,
			},
			position: Cesium.Cartesian3.fromDegrees(midLon, midLat, 1000),
			label: {
				text: wordWrap(LGA_NAME),
				// style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				// outlineWidth : 2,
				fillColor: Cesium.Color.BLUE,
				scaleByDistance: new Cesium.NearFarScalar(50000, 1.5, 5000000, 0),
				translucencyByDistance: new Cesium.NearFarScalar(50000, 0, 100000, 1),
				depthTestAgainstTerrain: false,
			},
			boundingBox: {W:W,E:E,S:S,N:N}
		})

		let guid = lgas['_entityCollection']['_entities']['_array'][i]['_id']
		window['currentEntities'][guid] = lgas['_entityCollection']['_entities']['_array'][i]
		selections['lgas'][LGA_NAME] = guid
	}
	loadLocalities(state)
	// console.log(JSON.stringify(repNames))
	// let k = Object.keys(repNames)
	// for(let i in k){
	// 	if(repNames[k[i]] > 1){
	// 		console.log(k[i],repNames[k[i]])
	// 	}
	// }
}

/***/
const loadStateDivisions = (state)=>{
	let propName = `stateDivisions_${state}`
	if(typeof(window[propName]) !== 'object'){
		let info = fetch(`script/statedivisions/${state}.json`,{
			method: 'get',
			headers: {'Content-Type': 'application/json'}
		})
		.then((response) => response.json())
		.then((response) => {
			Object.defineProperty(window, propName, {
				value: response['features'],
				configurable: false,
				writable: false
			})
		})
		.then(() => {
			appendStateDivisions(window[propName],state)
		})
		.catch(err => console.error('Caught error: ', err))
	}else{
		appendStateDivisions(window[propName],state)
	}
}
let repNames = {}
const appendStateDivisions = (o,state)=>{

	let thisCol = 0;
	// console.log(o.length)
	for(let i in o){

		let NAME = o[i]['properties']['NAME']
		
		/**/
		// if(!repNames[NAME]){
		// 	repNames[NAME] = 1
		// }else{
		// 	repNames[NAME] ++
		// }
		/**/

		/***/
		// // console.log(toTitleCase(NAME))
		// // console.log(qldmp[toTitleCase(NAME)][0])
		// o[i]['properties']['wiki'] = qldmp[toTitleCase(NAME)][0]
		// o[i]['properties']['mp'] = qldmp[toTitleCase(NAME)][1]
		// o[i]['properties']['party'] = qldmp[toTitleCase(NAME)][2]
		// o[i]['properties']['namesake'] = qldmp[toTitleCase(NAME)][3]
		// o[i]['properties']['electors'] = qldmp[toTitleCase(NAME)][4]
		// o[i]['properties']['Area_SqKm'] = qldmp[toTitleCase(NAME)][5]
		/***/
		let mp = o[i]['properties']['mp']
		let party = o[i]['properties']['party']
		let namesake = o[i]['properties']['namesake']
		let electors = o[i]['properties']['electors']
		let Area_SqKm = o[i]['properties']['Area_SqKm']
		let wiki = o[i]['properties']['wiki']

		let description = `
		Area:&nbsp;${decimalise(Area_SqKm,2)}&nbsp;km<sup>2</sup><br>
		Member:&nbsp;${mp} - ${party}<br>
		<!--Electors:&nbsp;${electors}<br>-->
		<!--Namesake:&nbsp;${namesake}<br>-->
		Wiki:&nbsp;<a href="https://en.wikipedia.org/wiki/${wiki}" target="_blank">${toTitleCase(NAME)}</a>
		`
		/***/

		let coords = o[i]['geometry']['coordinates'][0]
		let boundary = []
		
		let r = colours[thisCol][0] / 255
		let g = colours[thisCol][1] / 255
		let b = colours[thisCol][2] / 255
		let colour = new Cesium.Color(r,g,b,0.25)

		thisCol++;
		if(thisCol >= colours.length - 1){
			thisCol = 0;
		}

		let W = 180;//lower lon
		let E = -180;//higher lon
		let S = 90;//lower lat
		let N = -90;//higher lat

		for(let i in coords){
			boundary.push(coords[i][0],coords[i][1])

			if(coords[i][0] < W){W = coords[i][0]}
			if(coords[i][0] > E){E = coords[i][0]}
			if(coords[i][1] < S){S = coords[i][1]}
			if(coords[i][1] > N){N = coords[i][1]}
		}

		let midLat = (S + N) / 2
		let midLon = (W + E) / 2

		stateDivisions.entities.add({
			name: `State Electorate of ${toTitleCase(NAME)}`,
			description: description,
			polygon: {
				hierarchy: Cesium.Cartesian3.fromDegreesArray(boundary),
				height : 0,
				material : colour,
				outline : false,
				outlineColor : Cesium.Color.BLACK,
			},
			position: Cesium.Cartesian3.fromDegrees(midLon, midLat, 5000),
			label: {
				text: wordWrap(NAME),
				// style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				// outlineWidth : 2,
				fillColor: Cesium.Color.BLUE,
				scaleByDistance: new Cesium.NearFarScalar(50000, 1.25, 5000000, 0.5),
				translucencyByDistance: new Cesium.NearFarScalar(50000, 0, 100000, 1),
				depthTestAgainstTerrain: false,
			},
			boundingBox: {W:W,E:E,S:S,N:N}
		})

		let guid = stateDivisions['_entityCollection']['_entities']['_array'][i]['_id']
		window['currentEntities'][guid] = stateDivisions['_entityCollection']['_entities']['_array'][i]
		selections['stateDivisions'][NAME] = guid
	}
	loadLGAs(state)
	// console.log(JSON.stringify(repNames))
	// let k = Object.keys(repNames)
	// for(let i in k){
	// 	if(repNames[k[i]] > 1){
	// 		console.log(k[i],repNames[k[i]])
	// 	}
	// }
	// console.log(JSON.stringify(o))
	// console.log(o)
}
/***/

const loadFederal = (state)=>{
	let propName = `federal_${state}`
	if(typeof(window[propName]) !== 'object'){
		let info = fetch(`script/federal/${state}.json`,{
			method: 'get',
			headers: {'Content-Type': 'application/json'}
		})
		.then((response) => response.json())
		.then((response) => {
			Object.defineProperty(window, propName, {
				value: response['features'],
				configurable: false,
				writable: false
			})
		})
		.then(()=>{
			appendFederal(window[propName],state)
		})
		.catch(err => console.error('Caught error: ', err))
	}else{
		appendFederal(window[propName],state)
	}
}

const appendFederal = (o,state)=>{

	let thisCol = 0;
	// console.log(o.length)
	for(let i in o){

		let E_div_numb = o[i]['properties']['E_div_numb']
		let Elect_div = o[i]['properties']['Elect_div']
		let Numccds = o[i]['properties']['Numccds']
		let Actual = o[i]['properties']['Actual']
		let Projected = o[i]['properties']['Projected']
		let Total_Popu = o[i]['properties']['Total_Popu']
		let Australian = o[i]['properties']['Australian']
		let Area_SqKm = o[i]['properties']['Area_SqKm']
		let Sortname = o[i]['properties']['Sortname']
		let coords = o[i]['geometry']['coordinates'][0]
		
		/*************/
		let mp = o[i]['properties']['mp']
		let party = o[i]['properties']['party']
		let tenure = o[i]['properties']['tenure']
		let wiki = o[i]['properties']['wiki']

		let description = `
		<!--Actual:&nbsp;${Actual}<br>-->
		<!--Area:&nbsp;${decimalise(Area_SqKm,2)}&nbsp;km<sup>2</sup><br>-->
		Area:&nbsp;${decimalise(Area_SqKm,0)}&nbsp;km<sup>2</sup><br>
		Member:&nbsp;${mp} - ${party}<br>
		Wiki:&nbsp;<a href="https://en.wikipedia.org/wiki/${wiki}" target="_blank">${Elect_div}</a>
		`
		/*************/

		
		let boundary = []

		/************/
		// let thisNode = o[i]
		// for(let i in mp){
		// 	if(Elect_div == mp[i][2]){
		// 		thisNode['properties']['mp'] = mp[i][0]
		// 		thisNode['properties']['party'] = mp[i][1]
		// 		thisNode['properties']['tenure'] = mp[i][4]
		// 		thisNode['properties']['wiki'] = mp[i][5]
		// 		break;
		// 	}
		// }
		/************/

		let r = colours[thisCol][0] / 255
		let g = colours[thisCol][1] / 255
		let b = colours[thisCol][2] / 255
		let colour = new Cesium.Color(r,g,b,0.25)

		let W = 180;//lower lon
		let E = -180;//higher lon
		let S = 90;//lower lat
		let N = -90;//higher lat

		thisCol++;
		if(thisCol >= colours.length - 1){
			thisCol = 0;
		}

		for(let i in coords){
			boundary.push(coords[i][0],coords[i][1])

			if(coords[i][0] < W){W = coords[i][0]}
			if(coords[i][0] > E){E = coords[i][0]}
			if(coords[i][1] < S){S = coords[i][1]}
			if(coords[i][1] > N){N = coords[i][1]}
		}

		let midLat = (S + N) / 2
		let midLon = (W + E) / 2

		federal.entities.add({
			name: `Federal Electorate of ${Elect_div}`,
			description: description,
			polygon: {
				hierarchy: Cesium.Cartesian3.fromDegreesArray(boundary),
				height: 0,
				material : colour,
				outline : false,
				outlineColor : Cesium.Color.BLACK,
			},
			position: Cesium.Cartesian3.fromDegrees(midLon, midLat, 5000),
			label: {
				text: Elect_div,
				// style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				// outlineWidth : 2,
				fillColor: Cesium.Color.BLUE,
				scaleByDistance: new Cesium.NearFarScalar(50000, 1.25, 5000000, 0.5),
				translucencyByDistance: new Cesium.NearFarScalar(50000, 0, 100000, 1),
				depthTestAgainstTerrain: false,
			},
			boundingBox: {W:W,E:E,S:S,N:N},
			colour: colour
		})
		let guid = federal['_entityCollection']['_entities']['_array'][i]['_id']
		window['currentEntities'][guid] = federal['_entityCollection']['_entities']['_array'][i]
		selections['federal'][Elect_div] = guid
	}
	loadStateDivisions(state)
	// console.log(o)
	// console.log(JSON.stringify(o))
	// console.log(viewer.dataSourceDisplay.ready)
}

const loadZones = (state)=>{
	let propName = `zones_${state}`
	if(typeof(window[propName]) !== 'object'){
		let info = fetch(`script/zones/${state}.json`,{
			method: 'get',
			headers: {'Content-Type': 'application/json'}
		})
		.then((response) => response.json())
		.then((response) => {
			Object.defineProperty(window, propName, {
				value: response['features'],
				configurable: false,
				writable: false
			})
		})
		.then(() => {
			appendZones(window[propName],state)
		})
		.catch(err => console.error('Caught error: ', err))
	}else{
		appendZones(window[propName],state)
	}
}

const appendZones = (o,state)=>{
	// console.log(o.length)
	for(let i in o){

		let zoneName = o[i]['properties']['id']
		let population = o[i]['properties']['population']
		let localities = o[i]['properties']['localities']
		let colour = o[i]['properties']['colour']

		let description = `
		Population:&nbsp;${population}
		`

		let coords = o[i]['geometry']['coordinates'][0]
		let boundary = []
		//WSEN
		let W = 180;//lower lon
		let E = -180;//higher lon
		let S = 90;//lower lat
		let N = -90;//higher lat

		for(let i in coords){
			boundary.push(coords[i][0],coords[i][1])

			if(coords[i][0] < W){W = coords[i][0]}
			if(coords[i][0] > E){E = coords[i][0]}
			if(coords[i][1] < S){S = coords[i][1]}
			if(coords[i][1] > N){N = coords[i][1]}
		}

		let midLat = (S + N) / 2
		let midLon = (W + E) / 2

		zones.entities.add({
			name: zoneName,
			description: description,
			polygon: {
				hierarchy: Cesium.Cartesian3.fromDegreesArray(boundary),
				height : 0,
				material : Cesium.Color[colour].withAlpha(0.25),
				outline : false,
				outlineColor : Cesium.Color.BLACK,
			},
			position: Cesium.Cartesian3.fromDegrees(midLon, midLat, 250000),
			label: {
				text: zoneName.replace(' - ',`\n`),
				// style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				// outlineWidth : 2,
				fillColor: Cesium.Color.BLUE,
				scaleByDistance: new Cesium.NearFarScalar(50000, 2, 5000000, 0.5),
				translucencyByDistance: new Cesium.NearFarScalar(10000, 0, 5000000, 1),
				depthTestAgainstTerrain: false,
			},
			boundingBox: {W:W,E:E,S:S,N:N}
		})
		
		let guid = zones['_entityCollection']['_entities']['_array'][i]['_id']
		window['currentEntities'][guid] = zones['_entityCollection']['_entities']['_array'][i]
		selections['zones'][zoneName] = guid
	}
	loadFederal(state)
	// console.log(o)
}

const loadBroadcast = (state)=>{
	let propName = `broadcast_${state}`
	if(typeof(window[propName]) !== 'object'){
		let info = fetch(`script/broadcast/${state}.json`,{
			method: 'get',
			headers: {'Content-Type': 'application/json'}
		})
		.then((response) => response.json())
		.then((response) => {
			Object.defineProperty(window, propName, {
				value: response['features'],
				configurable: false,
				writable: false
			})
		})
		.then(() => {
			appendBroadcast(window[propName],state)
		})
		.catch(err => console.error('Caught error: ', err))
	}else{
		appendBroadcast(window[propName],state)
	}
}

const appendBroadcast = (o,state)=>{
	// console.log(o.length)
	for(let i in o){

		let id = o[i]['properties']['id']
		let people = o[i]['properties']['people']
		let households = o[i]['properties']['households']
		let colour = o[i]['properties']['colour']
		let fta = o[i]['properties']['fta']
		let ftaStr = '<br>FTA Networks;'

		for(let i in fta){
			ftaStr += `<br>${fta[i][0]}&nbsp;-&nbsp;Affiliation:&nbsp;${fta[i][1]}`
		}

		let description = `
		People:&nbsp;${numberWithCommas(people)}<br>
		Households:&nbsp;${numberWithCommas(households)}<br>
		${ftaStr}
		`

		let coords = o[i]['geometry']['coordinates'][0]
		let boundary = []
		//WSEN
		let W = 180;//lower lon
		let E = -180;//higher lon
		let S = 90;//lower lat
		let N = -90;//higher lat

		for(let i in coords){
			boundary.push(coords[i][0],coords[i][1])

			if(coords[i][0] < W){W = coords[i][0]}
			if(coords[i][0] > E){E = coords[i][0]}
			if(coords[i][1] < S){S = coords[i][1]}
			if(coords[i][1] > N){N = coords[i][1]}
		}

		let midLat = (S + N) / 2
		let midLon = (W + E) / 2

		broadcast.entities.add({
			name: id,
			description: description,
			polygon: {
				hierarchy: Cesium.Cartesian3.fromDegreesArray(boundary),
				height : 0,
				material : Cesium.Color[colour].withAlpha(0.25),
				outline : false,
				outlineColor : Cesium.Color.BLACK,
			},
			position: Cesium.Cartesian3.fromDegrees(midLon, midLat, 250000),
			label: {
				text: id.replace(' - ',`\n`),
				// style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				// outlineWidth : 2,
				fillColor: Cesium.Color.BLUE,
				scaleByDistance: new Cesium.NearFarScalar(50000, 2, 5000000, 0.5),
				translucencyByDistance: new Cesium.NearFarScalar(10000, 0, 5000000, 1),
				depthTestAgainstTerrain: false,
			},
			boundingBox: {W:W,E:E,S:S,N:N}
		})
		
		let guid = broadcast['_entityCollection']['_entities']['_array'][i]['_id']
		window['currentEntities'][guid] = broadcast['_entityCollection']['_entities']['_array'][i]
		selections['broadcast'][id] = guid
	}
	loadZones(state)
	// console.log(o)
}
/*ENTITY FUNCTIONS*/

const baseSelect = (e)=>{
	console.log(viewer.imageryLayers)
}

const stateSelect = (e)=>{
	
	let v = e.target.value;
	let b = stateBox[v];
	
	window['currentEntities'] = {};
	
	localities.entities.removeAll();
	lgas.entities.removeAll();
	zones.entities.removeAll();
	federal.entities.removeAll();

	selections['lgas'] = {}
	selections['stateDivisions'] = {}
	selections['federal'] = {}
	selections['zones'] = {}
	selections['broadcast'] = {}
	selections['localities'] = {}

	if(v === 'AUS'){
		e.target.value = 'clear';
		$('#clearStateSelection').html('None')
		$('.areaSelect').prop('disabled',true);
		$('.areaFocus').prop('disabled',true).val('clear');//
		// $('option[value="AUS"]').prop('disabled',true);
	}else{
		// loadZones(v);
		loadBroadcast(v);
		// $('option[value="AUS"]').prop('disabled',false);
		$('#clearStateSelection').html('Clear Selection')
	}

	viewer.camera.flyTo({
		destination : Cesium.Rectangle.fromDegrees(b[0],b[1],b[2],b[3])
	});
}


const areaSelect = (e)=>{

	let v = e.target.value;
	let is_lgas = v == 'lgas'
	let is_stateDivisions = v == 'stateDivisions'
	let is_federal = v == 'federal'
	let is_zones = v == 'zones'
	let is_broadcast = v == 'broadcast'
	
	if(v == 'deselect'){
		e.target.value = 'clear';
		$('#clearDivisionSelection').html('None')
	}else{
		$('#clearDivisionSelection').html('Clear Selection')
	}
		
	lgas.show = is_lgas;
	stateDivisions.show = is_stateDivisions;
	federal.show = is_federal;
	zones.show = is_zones;
	broadcast.show = is_broadcast;		
	viewer.selectedEntity = undefined;

	listSelections(v);

	let b = stateBox[$('.stateSelect').val()];
	viewer.camera.flyTo({
		destination : Cesium.Rectangle.fromDegrees(b[0],b[1],b[2],b[3])
	});

	switch(true){
		case is_lgas: $('#dynamicOption').html('Select LGA'); break;
		case is_stateDivisions: $('#dynamicOption').html('Select Electorate'); break;
		case is_federal: $('#dynamicOption').html('Select Electorate'); break;
		case is_zones: $('#dynamicOption').html('Select Zone'); break;
		case is_broadcast: $('#dynamicOption').html('Select Market'); break;
		default: $('#dynamicOption').html('Select Division');
	}
}

/*
for switching imagery provider
https://sandcastle.cesium.com/index.html?src=Imagery%2520Layers%2520Manipulation.html
https://cesium.com/learn/cesiumjs/ref-doc/BaseLayerPicker.html
https://stackoverflow.com/questions/58490396/how-to-change-a-cesiumjs-viewers-baselayer-url
https://cesium.com/learn/cesiumjs/ref-doc/ArcGisMapServerImageryProvider.html
https://cesium.com/learn/cesiumjs/ref-doc/OpenStreetMapImageryProvider.html
https://cesium.com/learn/cesiumjs/ref-doc/ImageryProvider.html
*/

const areaFocus = (e)=>{
	let v = e.target.value;

	if(v == 'deselect'){
		e.target.value = 'clear';
		$('#clearAreaSelection').html('None')

		viewer.trackedEntity = undefined;
		viewer.selectedEntity = undefined;
	}else{
		$('#clearAreaSelection').html('Clear Selection')
	
		let b = window['currentEntities'][v]['boundingBox']
		viewer.selectedEntity = window['currentEntities'][v]
		viewer.camera.flyTo({
			destination : Cesium.Rectangle.fromDegrees(b['W'],b['S'],b['E'],b['N'])
		});
	}
}

const viewControl = (e)=>{
	let x = $(e.target)	
	let menu = $('.localityFocus')
	localities.show = !localities.show;
	menu.prop('disabled',(!menu.prop('disabled')))
	if(x.hasClass('layerOff')){
		x.removeClass('layerOff')
	}else{
		x.addClass('layerOff')
	}
}
/*FUNCTIONS*/

/*DOM*/
$('.cesium-viewer-toolbar').append(`

	<!--<select class="cesium-button baseSelect">
		<option value="1">Simple Map</option>
		<option value="2">Satellite</option>
	</select>-->

	<select class="cesium-button stateSelect" name="state" id="state">
		<option hidden selected value="clear">State / Territory</option>
		<option value="AUS" id="clearStateSelection">None</option>
		<option disabled value="NSW">New South Wales</option>
		<option value="QLD">Queensland</option>
		<option disabled value="VIC">Victoria</option>
		<option disabled value="TAS">Tasmania</option>
		<option disabled value="SA">South Australia</option>
		<option disabled value="WA">Western Australia</option>
		<option disabled value="NT">Northern Territory</option</option>
		<option disabled value="ACT">ACT</option>
	</select>

	<select disabled class="cesium-button areaSelect">
		<option selected hidden value="clear">Division Type</option>
		<option value="deselect" id="clearDivisionSelection">None</option>
		<option value="lgas">LGAs</option>
		<option value="stateDivisions">State Electorates</option>
		<option value="federal">Federal Electorates</option>
		<option value="zones">News Coverage Zones</option>
		<option value="broadcast">Aggregated Broadcast Markets</option>
	</select>

	<select disabled class="cesium-button areaFocus">
		<option selected hidden value="clear" id="dynamicOption">Select Division</option>
	</select>

	<button class="cesium-button viewControl localities layerOn" id="localities">Localities&nbsp;<span class="on">ON</span>&nbsp;<span class="off">OFF</span></button>

	<!--<select class="cesium-button localityFocus">
		<option selected disabled value="clear">Select Locality</option>
	</select>-->
`)
/*DOM*/

/*BINDINGS*/
$('.baseSelect').change(baseSelect);
$('.stateSelect').change(stateSelect);
// $('.areaSelect').bind('change mouseover mouseout touchstart touchend',areaSelect);
$('.areaSelect').change(areaSelect);
$('.viewControl').click(viewControl);
$('.areaFocus').change(areaFocus)

$(window).keyup((e)=>{
	if(e.keyCode == 27){
		viewer.trackedEntity = undefined;
		viewer.selectedEntity = undefined;
	}
})
/*BINDINGS*/