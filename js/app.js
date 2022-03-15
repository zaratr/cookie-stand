
let hours = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];//this is from 6am - 8pm

function random(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//array to hold constructors. constructors are written in functions in js
let citiesObj = [];//will be filled later.

//constructor implementation
function City(name, avg, min, max)
{
    this.name = name;
    this.max = max;
    this.min = min;
    this.avg = avg;

    this.costumers = [];
    this.cookies = [];
    this.trackerTotalCookies = 0;

    //init the constructore here js way
    citiesObj.push(this);
    return; 
}

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
    }
}

City.prototype.render = function()
{
//user defined parameter that is a string
    let userIdName;
    switch(this.name)
    {
        case "Seattle" : userIdName = "sName"; break;
        case "Tokyo"    : userIdName = "tName"; break;
        case "Dubai"    : userIdName = "dName"; break;
        case "Paris"    : userIdName = "pName"; break;
        case "Lima"     : userIdName = "lName"; break;
    }

    //renders to html
    let len = this.cookies.length;
    document.getElementById(userIdName).textContent = this.name;//title for ul 
    let list = document.getElementById(this.name); 
    for(let i = 0; i < len; ++i)
    {
        //create by tag
        let listItem = document.createElement('li');
        listItem.textContent=hours[i]  + " : " + this.cookies[i] + " Cookies";
        //append to list
        list.appendChild(listItem);
    }
    let finalListItem = document.createElement('li');
    finalListItem.textContent = "total: " + this.trackerTotalCookies;
    list.appendChild(finalListItem);
}

//Instantiate
new City("Seattle", 23, 65, 6.3);
new City("Tokyo", 3, 24, 1.2);
new City("Dubai", 11, 38, 3.7);
new City("Paris", 20, 38, 2.3);
new City("Lima", 2, 16, 4.6);

function main()
{
    for(city of citiesObj)
    {
        city.setCustomers();
        city.setCookies();
        city.render();
    }
    return;
}

main();