///////////////////global variables
 //this is from 6am - 8pm
let hours = ["6am","7am","8am","9am","10am", "11am", "12pm",
                "1pm","2pm","3pm","4pm","5pm","6pm","7pm"];

let body = document.getElementById('shops');
let totalPerHourCookies = totalPerHourCookiesArr();
let totalsFinal = 0;
//array to hold constructors. constructors are written in functions in js
let citiesObj = [];//will be filled later.
//get form from dom
let myForm = document.getElementById('city-form');

/////////////constructor implementation//////////////
function City(name, min, max, avg)
{
    this.name = name;
    this.max = max;
    this.min = min;
    this.avg = avg;

    this.costumers = [];
    this.cookies = [];//averages with customers and min max
    this.trackerTotalCookies = 0;

    //init the constructore here js way
    citiesObj.push(this);
    return; 
}
////////////////////////protype for Constructor///////////////////////
//method implementation is done out of function using prototype keyword.
City.prototype.setCustomers = function()
{
    for(let i of hours)
    {
        this.costumers.push(random(this.min, this.max));
    }
}
City.prototype.setCookies = function()
{
    let len = this.costumers.length;
    for(let i = 0; i < len; ++i)
    {
        const hour = Math.ceil(this.costumers[i] * this.avg);
        this.cookies.push(hour);
        this.trackerTotalCookies += hour;
        totalsFinal += hour;
    }
}

City.prototype.render = function()
//function createTbody(stores)
{
    let body = document.getElementById('shops');
    const trElem = document.createElement('tr');
    const tdElem = document.createElement('td');

    body.appendChild(trElem);
    tdElem.textContent= this.name;
    trElem.appendChild(tdElem);
    
    //creating content
    const len = hours.length;
    for(let i = 0; i< len; ++i)
    {
        const tdElem2 = document.createElement('td');
        tdElem2.textContent = this.cookies[i];
        trElem.appendChild(tdElem2);
    }
    //must add newCity here
    let finalListItem = document.createElement('td');
    finalListItem.textContent = this.trackerTotalCookies;
    trElem.appendChild(finalListItem);
}

    

/////////////////////function implementation//////////////////
//function that returns a random number with min and max arguements
function random(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createTheader()
{
    const table = document.getElementById('shops');
    const th1 = document.createElement('th');
    const trElement = document.createElement('tr');

    table.appendChild(trElement);
    th1.textContent = "Location";
    trElement.appendChild(th1);

    const len = hours.length;
    for(let j = 0; j< len; ++j)
    {
        const thElem = document.createElement('th');
        thElem.textContent = hours[j];
        trElement.appendChild(thElem);
    }
    thElem = document.createElement('th');
    thElem.textContent = 'total';
    trElement.appendChild(thElem);

}

function totalsPerHour()
{
    for(i = 0; i < hours.length; ++i)
    {
        let total = 0;
        for(j = 0; j < citiesObj.length; ++j)
        {
            totalPerHourCookies[i] += citiesObj[j].cookies[i];
            //total += citiesObj[j].cookies[i];
        }
    }
}


//each hour we will have the average
function totalPerHourCookiesArr()
{
    let container = [];
    for(hour of hours)
    {container.push(0);}
    return container;
}

function createTFoot()
{
    const tFoot = document.getElementById('shops');
    const tfootElem = document.createElement('tfoot');
    const thElem = document.createElement('th')

    tFoot.appendChild(tfootElem);
    thElem.textContent = 'total gross'
    tfootElem.appendChild(thElem);

    const len = hours.length;
    for(let i = 0; i < len; ++i)
    {
        const thElem2 = document.createElement('th');
        thElem2.textContent = totalPerHourCookies[i];
        //thElem2.textContent = totalsPerHour();
        tfootElem.appendChild(thElem2);
    }

    let thElem3 = document.createElement('th');
    thElem3.textContent = totalsFinal;//global variable
    tfootElem.appendChild(thElem3);

}


//Instantiate
    //City  name  -   min - max - avg
                    
new City(   "Seattle"  ,23, 65, 6.3);
new City(   "Tokyo"    ,03, 24, 1.2);
new City(   "Dubai"    ,11, 38, 3.7);
new City(   "Paris"    ,20, 38, 2.3);
new City(   "Lima"     ,02, 16, 4.6);
//define handler / callback function




function handleSubmit(event)
{
    let cityString, minString, maxString, avgString;

    //body.innerHTML='';//resets the html id getter body is global
    //CAUTION: this can make code vaulnerable.
    body.remove(); //--removes all table element . wont add new table
    let newBody = document.createElement('table');
    newBody.id = 'shops';
    document.querySelector('body').appendChild(newBody);

    //body = document.getElementById('shops');
    //safeway: dom.remove
    //prevent issues . browser from sending my info away
    event.preventDefault();


    //getting info from myform
    let newCity = event.target.cityName.value;//string from user
    //will be a array
    //dont need this unless you expect string from user with commas
    newCity = newCity.split(',');//will pull info from client  and seperate by comma
    cityString = newCity[0];
    minString = parseInt(newCity[1]);
    maxString = parseInt(newCity[2]);
    avgString = parseInt(newCity[3]);


    new City(cityString, minString, maxString, avgString);
    main();//although I shouldn't call this main, this will re-render and use a table
    return;

}
// add event listeners
//myForm is global getelementbyid

myForm.addEventListener('submit', handleSubmit);


function main()
{

    //local declarations

    //create a heater element in html with createHeader
    //for loop that takes cities object and uses the content in each
    //city inside forloop is one object in citiesObj array
    createTheader();
    for(city of citiesObj)
    {
        city.setCustomers();//sets the costumer array using random()
        city.setCookies();//sets the cookies array using the math for avg per hour
        city.render();//renders all to the html 
    }
    totalsPerHour();
    createTFoot();
    return;
}

main();

