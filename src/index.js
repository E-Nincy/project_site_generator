// src/index.js


const COOKING_SITE = {
  "sections": [
    {
      "type": "header",
      "header": "Cooking with Matt",
      "images": [
        "https://raw.githubusercontent.com/CodingNomads/js_201_labs/master/resources/site_generator/p1_cooking_1.jpg",
        "https://raw.githubusercontent.com/CodingNomads/js_201_labs/master/resources/site_generator/p1_cooking_2.jpg",
        "https://raw.githubusercontent.com/CodingNomads/js_201_labs/master/resources/site_generator/p1_cooking_3.jpg"
      ]
    },
    {
      "type": "text",
      "header": "Delicious Meals For You",
      "text": "Lorem ipsum dolor sit amet..."
    },
    {
      "type": "gallery",
      "images": [
        "https://raw.githubusercontent.com/CodingNomads/js_201_labs/master/resources/site_generator/p1_cooking_4.jpg",
        "https://raw.githubusercontent.com/CodingNomads/js_201_labs/master/resources/site_generator/p1_cooking_5.jpg",
        "https://raw.githubusercontent.com/CodingNomads/js_201_labs/master/resources/site_generator/p1_cooking_6.jpg",
        "https://raw.githubusercontent.com/CodingNomads/js_201_labs/master/resources/site_generator/p1_cooking_7.jpg"
      ]
    }
  ]
};


function buildSite(site) {
  buildSections(site.sections);
}

buildSite(COOKING_SITE);


