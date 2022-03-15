'use strict'


let hours = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];//this is from 6am - 8pm

let seattle = {
        name: "Seattle",
        min: 23,
        max: 65,
        avg: 6.3,

        customers : [],
        cookies : [],//average per hour
        trackerTotalCookies: 0,//total cookies
        setCustomers: function()
        {
            for(let i of hours)
            {
                //loops through array 
                this.customers.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
            }
        },

        setCookies: function()
        {

            this.setCustomers();//calls this to init
            let len = this.customers.length;
            //must be set before using 
            //do a loop to init 
            for(let i = 0; i < len; ++i)
            {
                const hour = Math.ceil(this.customers[i] * this.avg);
                this.cookies.push(hour);
                this.trackerTotalCookies += hour;
            }

        },

        renderer: function(anhtmlElement)
        {
            //sets to the dom
            //renders to html
            this.setCookies();//sets all 
            let len = this.cookies.length;
            document.getElementById("sName").innerHTML = this.name;//title for ul 
            let list = document.getElementById(anhtmlElement) 
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
    }

let tokyo = {
        name: "Tokyo",
        min: 3,
        max: 24,
        avg: 1.2,

        customers : [],
        cookies : [],//average per hour
        trackerTotalCookies: 0,//total cookies
        setCustomers: function()
        {
            for(let i of hours)
            {
                //loops through array 
                this.customers.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
            }
        },

        setCookies: function()
        {

            this.setCustomers();//calls this to init
            let len = this.customers.length;
            //must be set before using 
            //do a loop to init 
            for(let i = 0; i < len; ++i)
            {
                const hour = Math.ceil(this.customers[i] * this.avg);
                this.cookies.push(hour);
                this.trackerTotalCookies += hour;
            }

        },

        renderer: function(anhtmlElement)
        {
            //sets to the dom
            //renders to html
            this.setCookies();//sets all 
            let len = this.cookies.length;
            document.getElementById("tName").innerHTML = this.name;//title for ul 
            let list = document.getElementById(anhtmlElement);
            for(let i = 0; i < len; ++i)
            {
                //create
                //by tag
                let listItem = document.createElement('li');
                //
                listItem.textContent=hours[i] + " : " + this.cookies[i] + " Cookies";
                //append to list
                list.appendChild(listItem);
            }
            let finalListItem = document.createElement('li');
            finalListItem.textContent = "total: " + this.trackerTotalCookies;
            list.appendChild(finalListItem);

        }
    }

let dubai = {
        name: "Dubai",
        min: 11,
        max: 38,
        avg: 3.7,

        customers : [],
        cookies : [],//average per hour
        trackerTotalCookies: 0,//total cookies
        setCustomers: function()
        {
            for(let i of hours)
            {
                //loops through array 
                this.customers.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
            }
        },

        setCookies: function()
        {

            this.setCustomers();//calls this to init
            let len = this.customers.length;
            document.getElementById("dName").innerHTML = this.name;//title for ul 
            //must be set before using 
            //do a loop to init 
            for(let i = 0; i < len; ++i)
            {
                const hour = Math.ceil(this.customers[i] * this.avg);
                this.cookies.push(hour);
                this.trackerTotalCookies += hour;
            }

        },

        renderer: function(anhtmlElement)
        {
            //sets to the dom
            //renders to html
            this.setCookies();//sets all 
            document.getElementById("dName").innerHTML = this.name;//title for ul 
            let len = this.cookies.length;
            let list = document.getElementById(anhtmlElement);
            for(let i = 0; i < len; ++i)
            {
                //create
                //by tag
                let listItem = document.createElement('li');
                //
                listItem.textContent=hours[i] + " : " + this.cookies[i] +"Cookies";
                //append to list
                list.appendChild(listItem);
            }
            let finalListItem = document.createElement('li');
            finalListItem.textContent = "total: " + this.trackerTotalCookies;
            list.appendChild(finalListItem);

        }
    }

let paris = {
        name: "Paris",
        min: 20,
        max: 38,
        avg: 2.3,

        customers : [],
        cookies : [],//average per hour
        trackerTotalCookies: 0,//total cookies
        setCustomers: function()
        {
            for(let i of hours)
            {
                //loops through array 
                this.customers.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
            }
        },

        setCookies: function()
        {

            this.setCustomers();//calls this to init
            let len = this.customers.length;
            //must be set before using 
            //do a loop to init 
            for(let i = 0; i < len; ++i)
            {
                const hour = Math.ceil(this.customers[i] * this.avg);
                this.cookies.push(hour);
                this.trackerTotalCookies += hour;
            }

        },

        renderer: function(anhtmlElement)
        {
            //sets to the dom
            //renders to html
            this.setCookies();//sets all 
            document.getElementById("pName").innerHTML = this.name;//title for ul 
            let len = this.cookies.length;
            let list = document.getElementById(anhtmlElement);
            for(let i = 0; i < len; ++i)
            {
                //create
                //by tag
                let listItem = document.createElement('li');
                //
                listItem.textContent=hours[i] + " : " + this.cookies[i] +"Cookies";
                //append to list
                list.appendChild(listItem);
            }
            let finalListItem = document.createElement('li');
            finalListItem.textContent = "total: " + this.trackerTotalCookies;
            list.appendChild(finalListItem);

        }
    }

let lima = {
        name: "Lima",
        min: 2,
        max: 16,
        avg: 4.6,

        customers : [],
        cookies : [],//average per hour
        trackerTotalCookies: 0,//total cookies
        setCustomers: function()
        {
            for(let i of hours)
            {
                //loops through array 
                this.customers.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
            }
        },

        setCookies: function()
        {

            this.setCustomers();//calls this to init
            let len = this.customers.length;
            //must be set before using 
            //do a loop to init 
            for(let i = 0; i < len; ++i)
            {
                const hour = Math.ceil(this.customers[i] * this.avg);
                this.cookies.push(hour);
                this.trackerTotalCookies += hour;
            }

        },

        renderer: function(anhtmlElement)
        {
            //sets to the dom
            //renders to html
            this.setCookies();//sets all 
            document.getElementById("lName").innerHTML = this.name;//title for ul 
            let len = this.cookies.length;
            let list = document.getElementById(anhtmlElement);
            for(let i = 0; i < len; ++i)
            {
                //create
                //by tag
                let listItem = document.createElement('li');
                //
                listItem.textContent=hours[i] + " : " + this.cookies[i] +"Cookies";
                //append to list
                list.appendChild(listItem);
            }
            let finalListItem = document.createElement('li');
            finalListItem.textContent = "total: " + this.trackerTotalCookies;
            list.appendChild(finalListItem);

        }
    }

function main()
{
    seattle.renderer("seattle");
    tokyo.renderer("tokyo");
    dubai.renderer("dubai");
    paris.renderer("paris");
    lima.renderer("lima")
    
    return ;
}

main();
