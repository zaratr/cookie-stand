'use strict'


class storeMinMax {
    hourlyCustomers;
    averageCookies;
    random;
    constructor() {
        this.hourlyCustomers = 0;//use random here
        this.averageCookies = 0;//use this with random
        this.random = Math.floor(Math.random() * (65 - 23) + 23);// for every hour
    }
}
class storeInit1 extends storeMinMax {

    constructor(clientHour, clientAverage) {
        super();
        if(clientAverage > 0 && !clientHour)
        this.hourlyCustomers = clientHour;
        else if(clientHour > 0 && !clientAverage)
        this.clientAverage = clientAverage;
        else if(clientAverage, clientHour)
        {
            this.averageCookies = clientAverage;
            this.hourlyCustomers = clientHour;
        }
    }
}

class storeInit2 extends storeMinMax
{
    constructor(toCpyObj)
    {
        super();
        if(toCpyObj)//if it exists
        {
            this.averageCookies = toCpyObj.averageCookies;
            this.hourlyCustomers = toCpyObj.hourlyCustomers;
        }
        //else //(!tocpyObj) - we dont need to do anything because obj doesn't exist for copy
        //return; //TODO: try using try catches..
    }
}

function main()//works similar to main in other programming languages. for simplicity all work will be here.
{
    let obj1 = new storeInit1(1,2);
    let obj2 = new storeInit2(obj1);

    return 0;

}

main();




