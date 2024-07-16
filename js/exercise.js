/* 1. Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/
function question1(){
    let today = new Date();
    let dayList = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];

    let day = today.getDay();
    console.log("Today is:", dayList[day]);

    let hrs = today.getHours(),
        mins = today.getMinutes(),
        secs = today.getSeconds();
    let prepand = hrs > 12 ? 'PM' : 'AM';
    hrs = hrs > 12 ? hrs-12 : hrs;
    console.log("Current time is:", `${hrs} ${prepand} : ${mins} : ${secs}`);
}



/*2. Write a JavaScript program to print the current window contents.  */
let question2 = () => {
    window.print();
}



/*3. Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

function question3(){
    let now = new Date();

    let date = now.getDate(),
        month = now.getMonth(),
        year = now.getFullYear();

    date = date < 10 ? `0${date}` : date;
    month = month < 10 ? `0${month}` : month;

    console.log(`${date}-${month}-${year}`);
}



/* 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  */

function question4(){
    let a=5,b=6,c=7;

    let s = (a+b+c)/2; //semiperimeter
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));

    console.log(area);
}

/* 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.  */

function question5(){
    let str = 'w3resource';
    setInterval(()=>{
        //logic1
        /*
        str = str.split('');
        let ltr = str.pop();
        str.unshift(ltr);
        str = str.join('')
        console.log(str);
        */

        //logic2
        let len = str.length;
        str = str[len-1] + str.substring(0,len-1);
        console.log(str);
    },100);
}

/*6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  */
function question6(){
    let year = 1904;

    let isLeapYr = ( year % 100 == 0 ) ? (year % 400 == 0 ) : ( year % 4 == 0);

    isLeapYr ? ( console.log("Yes!! It is a Leap yr") ) : ( console.log("Sorry!! Not a leap yr") );
}

/* 7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  */

function question7(){
    for( let year = 2014; year <= 2050 ; year++){
        let date = new Date(year,0,1);
        if( date.getDay() == 0) {
            console.log(year);
        }
    }
}

/* 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  */
function question8() {
    function getRandomNo() {
        return Math.floor(Math.random() * 11);
    }

    const readline = require("readline");
    const rl =
    readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.question('Guess a number within 1 to 10? \n', num => {
        let ran = getRandomNo();
        console.log( ( ran === num ) ? " Good Work " : " Not Matched " );
        rl.close();
      });
}

/* 9. Write a JavaScript program to calculate the days left before Christmas. */

function question9(){
    let presentDate = new Date();
    let christmas_date = new Date(presentDate.getFullYear(),11,25);
    
    if(presentDate.getMonth() == 11 && presentDate.getDate() > 25){
        christmas_date.setFullYear(christmas_date.getFullYear() + 1)
    }

    let timeDiff = christmas_date.getTime() - presentDate.getTime();

    let days = Math.round( timeDiff / (1000 * 3600 * 24) );// one day time in ms
    
    console.log(days); 
}

question9();


// promise

// function getList(onSucess,OnError){
//     return new Promise((resolve,reject)=>{
//         fetch('url') // api for the get request
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => OnError(error))
//     })
// }

// function onSucess(data="Sucess") {
//     console.log(data);
// }

// function OnError(error = "fail") {
//     console.log(error);
// }

// getList(onSucess,OnError);