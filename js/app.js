
 //this is from 6am - 8pm
let hours = ["6am","7am","8am","9am","10am", "11am", "12pm",
                "1pm","2pm","3pm","4pm","5pm","6pm","7pm","Total"];
    
//let mainElem = document.getElementById("shops");

//function that returns a random number with min and max arguements
function random(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//array to hold constructors. constructors are written in functions in js
let citiesObj = [];//will be filled later.

//constructor implementation
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
//function createTbody(stores)
{
    const body = document.getElementById('shops');
    const trElem = document.createElement('tr');
    const tdElem = document.createElement('td');

    body.appendChild(trElem);
    tdElem.textContent= this.name;
    trElem.appendChild(tdElem);
    

    //creating content
    for(let i = 0; i< (hours.length -1); ++i)
    {
        const tdElem2 = document.createElement('td');
        tdElem2.textContent = this.cookies[i];
        trElem.appendChild(tdElem2);
        if(i === hours.length -2)//need to get to the last element before leaving loop to add total
        {
            let finalListItem = document.createElement('td');
            finalListItem.textContent = this.trackerTotalCookies;
            trElem.appendChild(finalListItem);

            break;
        }
    }
    

}





function createTheader()
{
    const table = document.getElementById('shops');
    const th1 = document.createElement('th');
    const trElement = document.createElement('tr');

    table.appendChild(trElement);
    th1.textContent = "Location";
    trElement.appendChild(th1);

    for(let j = 0; j< hours.length; j++)
    {
        const thElem = document.createElement('th');
        thElem.textContent = hours[j];
        trElement.appendChild(thElem);
    }

}


//Instantiate
    //City  name  -   min - max - avg
                    
new City(   "Seattle"  ,23, 65, 6.3);
new City(   "Tokyo"    ,3, 24, 1.2);
new City(   "Dubai"    ,11, 38, 3.7);
new City(   "Paris"    ,20, 38, 2.3);
new City(   "Lima"     ,2, 16, 4.6);
/*
*/

function main()
{
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
    return;
}

main();