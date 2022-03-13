'use strict'


let hoursAndAverages = {
    timeArr : [],
    CalcAverage : [],
    toSetAverage : [],
    hourlyCustomers : [] ,
    averageCookies : [], 

    setTime: function(min, max)//sets time using military time
    {
        let len = max - min;
        this.timeArr[len];
        for(let i = 0; i < len; ++i)
        {
            this.timeArr[i] = min;
            ++min;
        }
        return this.timeArr;
    },

    setAverage: function(min, max, cookiesOrCustomer)
    {
        this.setTime(6,20);//sets time for fixed hours of day
        let len = this.timeArr.length;
        let randomBuff;
        this.CalcAverage[len]
        this.toSetAverage[2];
        for(let i = 0; i < len; ++i)
        {
            for(let j = 0; j < 2; ++j)
            { 
                randomBuff = this.randoFunc(min, max)
                //tuple array TODO: map
                this.toSetAverage[j] = randomBuff;
            }
            //main buffer array for setting array with average
            this.CalcAverage[i] = this.toSetAverage;

        }
        if(cookiesOrCustomer === "cookies")
        {
            //sets cookie average
            //this.averageCookies[len];
            this.averageCookies = this.CalcAverage;
            return this.averageCookies;
        }
        else //!== "cookies  instead the string customers is expected here" 
        {
            //sets customer average
            this.hourlyCustomers[len];
            for(let i = 0; i < len; ++i)
            this.hourlyCustomers[i] = this.CalcAverage[i][0];

            return this.hourlyCustomers;
        }

    },
    randoFunc: function(min, max)//returns the average of five random numbers
    {
        let randomBuff = 0 ;
        let arr = []
        for(let i = 0; i < 5; ++i)
        {

            //TODO: 1. don't need array. 2. this needs time.sleep() because it gives same number

            arr[i] = parseInt(Math.random() * (max - min) + min);// ALERT: for every hour. doesn't need a floor because in return statemetn
            randomBuff += arr[i];
        }

        return Math.floor(randomBuff /= 5);
    }
}
//sets all to default
let storeObj = {
    timer : hoursAndAverages.setTime(6, 20),
    hourlyCustomers : hoursAndAverages.setAverage(0, 10, "customers"),
    averageCookies : hoursAndAverages.setAverage(23, 65, "cookies"),
/*
    setValues: function() {
        this.timer = hoursAndAverages.setTime(min, max);
    }
*/
}

//sets values passed in by argument. similar to constructor
let storeInit1 = {
    hourlyCustomers : 0,
    clientAverage : 0,
    timer : hoursAndAverages.setTime(6,20),

    setValues: function(clientHour, clientAverage) 
    {
        this.timer = hoursAndAverages.setTime(min, max);
        if (clientAverage > 0 && !clientHour) {
            this.hourlyCustomers = clientHour;
        }
        else if (clientHour > 0 && !clientAverage) {
            this.clientAverage = clientAverage;
        }
        else if (clientAverage, clientHour) {
            this.averageCookies = clientAverage;
            this.hourlyCustomers = clientHour;
        }
    }
/*
*/
};
/*
*/
//copies an object similar parameters. although now i know we can just add into it
let storeInit2 = {
    averageCookies : 0,
    hourlyCustomers : 0,
    timer : 0,

    setValues : function(toCpyObj){
        if(toCpyObj)//if it exists
        {
            this.timer = toCpyObj.timer;
            this.averageCookies = toCpyObj.averageCookies;
            this.hourlyCustomers = toCpyObj.hourlyCustomers;
        }
        return;
    }
};

function main()//works similar to main in other programming languages. for simplicity all work will be here.
{
    let aCompany = storeObj;
    let costumersPurchased = aCompany.hourlyCustomers;
    let hoursOfOperation = aCompany.timer;
    let cookiesPurchased = aCompany.averageCookies;

    /*array that hass all the values needed. 
    all are arrays except cookiesPurchased. 
    cookiesPurchase is a 2d Array/map*/
    const storeArr = [
        "Seattle", `${hoursOfOperation}`, `${cookiesPurchased}`, `${costumersPurchased}`,
        "Tokyo", `${hoursOfOperation}`, `${cookiesPurchased}`, `${costumersPurchased}`,
        "Dubai", `${hoursOfOperation}`, `${cookiesPurchased}`, `${costumersPurchased}`,
        "Paris", `${hoursOfOperation}`, `${cookiesPurchased}`, `${costumersPurchased}`,
        "Lima", `${hoursOfOperation}`, `${cookiesPurchased}`, `${costumersPurchased}`
    ];

    return 0;
}

main();




