AOS.init();
const data = [
    {
        title:"Basil",
        classes:["food", "veg",  "herb"],
        price:8
    },
    {
        title:"Lavender",
        classes:["food", "veg", "floral", "herb"],
        price:8
    },
    {
        title:"Strawberry",
        classes:["food", "fruit"],
        price:8
    },
    {
        title:"Pasta",
        classes:["food", "grain"],
        price:8
    },
    {
        title:"Oregeno",
        classes:["food", "herb"],
        price:8
    },
    {
        title:"Microgreens",
        classes:["food", "herb"],
        price:8
    },
    {
        title:"Water",
        classes:["drink"],
        price:8
    },
    {
        title:"Grape Wine",
        classes:["drink", "fruit", "alcohol"],
        price:8
    },
    {
        title:"Smoothie",
        classes:["drink", "fruit", "juice"],
        price:8
    },
    {
        title:"Sunny-D",
        classes:["drink", "fruit", "juice"],
        price:8
    },
    {
        title:"Pespi",
        classes:["drink", "soda"],
        price:8
    },
    {
        title:"Twizzlers",
        classes:["fruit", "candy"],
        price:8
    },
    {
        title:"Sour Patch Kids",
        classes:[, "candy", "sour"],
        price:8
    },
];

const checkboxes = document.querySelectorAll("input[type='checkbox']"),
cardContainer = document.getElementById('wrapper');

var checkboxValues = [];

populateCards();

checkboxes.forEach( box => { 
    //ensures that all checkboxes are unchecked when the window reloads
    box.checked = false;
    box.addEventListener('change', () => filterCards()) 
})

function populateCards(){
    cardContainer.innerHTML = '';
    var time  = 100;
    data.forEach(obj => {
        
        var card = 
        `
            <div data-aos="fade-up" data-aos-duration=${time} class="card" style="padding:10px; min-width:400px;  background-color:#CCC; margin:10px;">
            <h1 class="title">${obj.title}</h1>
            </div>
        `;
        
        time += 50;
        cardContainer.innerHTML += card;
    });
}

function grabCheckboxValues(){

    var checkboxValues = [];
    checkboxes.forEach(checkbox => {
        if(checkbox.checked) checkboxValues.push(checkbox.value)
    });
    return checkboxValues;
};

function filterCards(){
    cardContainer.innerHTML = ""
    checkboxValues = grabCheckboxValues();
  
    data.forEach(item => {
        
        let classes = item.classes;
        let result = (arr, target) => target.every(v => arr.includes(v))

        let isMatch = result(classes, checkboxValues)
        if(isMatch){
            var card = 
        `
            <div data-aos="flip-down" data-aos-duration=500 class="card" style="padding:10px; min-width:400px;  background-color:#CCC; margin:10px;">
            <h1 class="title">${item.title}</h1>
            </div>
        `;
        cardContainer.innerHTML += card;
        }
       
    });

    if(!cardContainer.children.length){
        cardContainer.innerHTML = 'Sorry, there are no results based on your search'
    }
};