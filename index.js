
const data_Cities = {
    'TelAviv': {
        id: 'TelAviv',
        name: 'Tel Aviv',
        imageURL: 'https://www.carlton.co.il/wp-content/uploads/2022/10/shutterstock_224970538.jpg',
        images: [
            `https://static.timesofisrael.com/www/uploads/2020/02/Untitled-4-6-640x400.jpg`,
            `https://res.cloudinary.com/globes/image/upload/t_desktop_article_content_header_800%2A392/v1666254419/direct/shutterstock_2195220139_wohw01.jpg`,
            `https://res.cloudinary.com/globes/image/upload/t_800X392/v1694593882/one%20time%20use%20only/shutterstock_2186588259_ucktul.jpg`,
            `https://media.timeout.com/images/105323224/750/422/image.webp`,
            `https://media.timeout.com/images/105576067/750/422/image.webp`,
            `https://upload.wikimedia.org/wikipedia/commons/b/b3/Yehudit_Bridge_3.jpg`
        ],
        description: `A CITY THAT NEVER SLEEPS
        Tel Aviv is known as one of the most beautiful vacation spots in the world, but its epic entrepreneurial spirit takes the cake for its true value. Openness and innovation can be felt anywhere, from coffee shops to the ubiquitous shared workspaces on every block, the Silicon Wadi would make any founder feel at home. The vibrant city also is home to various cultures, unique attitudes and innovative technologies. The eclectic population will intrigue even the most conservative individual and the food that results from this melting pot of cultures can�t be beat. The  is wild, the beaches are breathtaking and the Saturday morning silence makes even the atheists feel spiritual. Overall, Tel Aviv is definitely a city you�ll want to visit (and likely return to) in your lifetime.
        Tel Aviv-Yafo (Hebrew: תֵּל אָבִיב-יָפוֹ, romanized: Tēl ʾĀvīv-Yāfō, IPA: [tel aˈviv jaˈfo]; Arabic: تَلّ أَبِيب – يَافَا, romanized: Tall ʾAbīb-Yāfā), usually referred to as just Tel Aviv, is the most populous city in the Gush Dan metropolitan area of Israel. Located on the Israeli Mediterranean coastline and with a population of 474,530, it is the economic and technological center of the country. If East Jerusalem is considered part of Israel, Tel Aviv is the country's second-most-populous city, after Jerusalem; if not, Tel Aviv is the most populous city, ahead of West Jerusalem.[a]

Tel Aviv is governed by the Tel Aviv-Yafo Municipality, headed by Mayor Ron Huldai, and is home to most of Israel's foreign embassies.[b] It is a beta+ world city and is ranked 57th in the 2022 Global Financial Centres Index. Tel Aviv has the third- or fourth-largest economy and the largest economy per capita in the Middle East.[11][12] The city currently has the highest cost of living in the world.[13][14] Tel Aviv receives over 2.5 million international visitors annually.[15][16] A "party capital" in the Middle East, it has a lively nightlife and 24-hour culture.[17][18] The city is gay-friendly, with a large LGBT community.[19] Tel Aviv is home to Tel Aviv University, the largest university in the country with more than 30,000 students.`
    },
    'Jerusalem': {
        id: 'Jerusalem',
        name: 'Jerusalem', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Jerusalem_infobox_image.JPG/800px-Jerusalem_infobox_image.JPG',
        images: [
            `https://www.isrotel.com/media/28950/jerusalem_old-city_damascus-gate_shaar-shkhem-_2_noam-chen.jpg`,
            `https://www.hillel.org/wp-content/uploads/college-images/Hebrew_University.jpg`,
            `https://h24-original.s3.amazonaws.com/127443/12992075-Y8xRu.jpg`,
            `https://images.globes.co.il/Images/NewGlobes/big_image/2014/050862575.jpg`
        ],
        description:
            `Jerusalem (/dʒəˈruːsələm/; Hebrew: יְרוּשָׁלַיִם Yerushaláyim, pronounced [jeʁuʃaˈlajim] ⓘ; Arabic: القُدس al-Quds, pronounced [al.quds] ⓘ, local pronunciation: [il.ʔuds][5][6][7][note 2]) is a city in West Asia, on a plateau in the Judaean Mountains between the Mediterranean and the Dead Sea. It is one of the oldest cities in the world, and is considered holy to the three major Abrahamic religions—Judaism, Christianity, and Islam. Both the State of Israel and Palestine claim Jerusalem as their capital; Israel maintains its primary governmental institutions there, and Palestine ultimately foresees it as its seat of power. Neither claim, however, is widely recognized internationally`
    },
    'Haifa': {
        id: 'Haifa',
        name: 'Haifa', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Hadar_and_Carmel.jpg/1280px-Hadar_and_Carmel.jpg',
        images: [
            `https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Downtown_Haifa_including_the_port_and_the_sail_tower.jpg/220px-Downtown_Haifa_including_the_port_and_the_sail_tower.jpg`,
            `https://res.cloudinary.com/hotels-co-il/image/upload/q_100,c_scale,w_900/v1649067658/media/haifa2022.webp`,
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzp_UOxYovl-3iS71nkvKSVPvTstXWjnzYoI87WvgPWWV1ykF-E9LZ9Umm8iF6MdpzqcU&usqp=CAU`
        ],
        description: `Haifa (/ˈhaɪfə/ HY-fə; Hebrew: חֵיפָה, romanized: Ḥēyfā, IPA: [χeˈfa]; Arabic: حَيْفَا, romanized: Ḥayfā)[2] is the third-largest city in Israel—after Jerusalem and Tel Aviv—with a population of 290,306 in 2022. The city of Haifa forms part of the Haifa metropolitan area, the third-most populous metropolitan area in Israel.[3] It is home to the Baháʼí Faith's Baháʼí World Centre, and is a UNESCO World Heritage Site and a destination for Baháʼí pilgrimage.[4]

        Built on the slopes of Mount Carmel, the settlement has a history spanning more than 3,000 years. The earliest known settlement in the vicinity was Tell Abu Hawam, a small port city established in the Late Bronze Age (14th century BCE).[5] In the 3rd century CE, Haifa was known as a dye-making center. Over the millennia, the Haifa area has changed hands: being conquered and ruled by the Canaanites, Israelites, Phoenicians, Assyrians, Babylonians, Persians, Hasmoneans, Romans, Byzantines, Arabs, Crusaders, Ottomans, and the British. During the Battle of Haifa in the 1948 Palestine war, most of the city's predominantly Arab population fled or were expelled. That year, the city became part of the then-newly-established state of Israel.`
    }
};

function fillCitiesSelect() {
    var cityOptionDataHTML = "";
    for (var key in data_Cities) {
        cityOptionDataHTML += `<option value="${key}">${data_Cities[key].name}</option>`;
    }
    document.querySelector("#selectCity").innerHTML = cityOptionDataHTML;
}

fillCitiesSelect();

function onChangeCity() {
    var cityName = document.querySelector("#selectCity").value;
    console.log(`you chose ${cityName}`);
    var cityData = eval(`data_Cities.${cityName}`);
    document.querySelector("#cityImg").setAttribute("src", cityData.imageURL);
    document.querySelector("#cityDescription").innerHTML = cityData.description;

    var images = eval(`data_Cities.${cityName}.images`);
    var imagesHTML = "";
    for (item in images) {
        imagesHTML += `<img src=${images[item]}>`;
    }
    document.querySelector("#cityGallery").innerHTML = imagesHTML;
}

