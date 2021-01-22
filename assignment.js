
 //https://github.com/Jubayer777/Assignment-3



//Problem-1: Convert distance from Kilometer to meter.
function kilometerToMeter(kilometer){
    if(kilometer>0){
        var meter=kilometer*1000; //convert kilometer to meter.
        return meter;             
    }
    else{
        return 'Invalid input';   // Return warning for invalid input like- negative distance 
    }                             // return warning for wrong input data types such as array,string etc.
}
var km=5;
var result1=kilometerToMeter(km);  //calling function KilometerToMeter() with parameter km
console.log(result1);




//Problem-2:Calculating budget for electronic devices like Watch,Phone and Laptop.
function budgetCalculator(watchQuantity,phoneQuantity,laptopQuantity){
    if(watchQuantity>=0 && phoneQuantity>=0 && laptopQuantity>=0){     //Checking validation of input values.
        var watchBudget=watchQuantity*50;
        var phoneBudget=phoneQuantity*100;                             //Calculating budget for each of three items.
        var laptopBudget=laptopQuantity*500;
        var totalBudget=watchBudget+phoneBudget+laptopBudget;          // Calculating the total budget cost.
        return totalBudget;                                            
    }
    else{
        return 'Invalid Input';               //Return warning for invalid input like quantity of watch,phone or laptop can't be negative.
    }                                        //return warning for wrong input data types such as array,string etc.
}
var watch=8;
var phone=5;
var laptop=2;
var result2=budgetCalculator(watch,phone,laptop); //calling function budgetCalculator() with parameter watch,phone and laptop.
console.log(result2);




//Prblem-3: Calculate the cost for hotel room reservation. cost for 1-10 days=100/day, 11-20 days=80/day, 21-above=50/day.
function hotelCost(days){
    
    if(days>0){                     //Checking validation of input values.
        
        var cost=0;
        if(days<=10){                
            cost= days*100;         //calculate cost for less than 10 days.
        }
        else if(days<=20){            
            var firstTenDays=10*100;       //cost for first 10 days that means 1-10th days
            var remainDays=days-10;         
            var secondTenDays=remainDays*80;  //cost for days after first 10 days that means 11-20th days
            cost=firstTenDays+secondTenDays;   //calculate total cost for staying 1-20th days
        }
        else{
            var firstTenDays= 10*100;               //cost for first 10 days that means 1-10th days
            var secondTenDays=10*80;               //cost for 2nd 10 days that means 11 -20th days
            var remainDays=days-20;
            var daysAboveTwenty=remainDays*50;     //cost for days after 20 days that means 21th-above days.
            cost=firstTenDays+secondTenDays+daysAboveTwenty;  //calculate total cost 
        }
        return cost;

    }
    else{
        return 'Invalid Input';             //Return warning for invalid input like if number of days is negative or zero.
    }                                       //return warning for wrong input data types such as array,string etc.
    
}
var numberOfDays=21;
var result3=hotelCost(numberOfDays);       //calling function hotelCost() with parameter numberOfDays.
console.log(result3);






//Problem-4:Write a program that return the longest string from an array of string.
function megaFriend(nameList){
    
    var stringCount=0;
    for (var i = 0; i <= nameList.length; i++) {      //Counting number of string in the array. 
        if (typeof nameList[i] =='string'){
            stringCount++;                           //if the element of array is string than increment the stringCounter
        }
    }
   
    if(nameList.length!=0 && stringCount==nameList.length){      // check whether the array have elements or not and checking stringCount is equal to the length of array or not.
                                                                  //  perform further operation if and only if the aray is not empty and all the element of array are string.
        var maximumLength=nameList[0].length;                    //initialize the maximumLength with the length of first element of array.
        var longestName=nameList[0];                             // assume that 1st element is longest.
        for(var j=0;j<nameList.length;j++){
            if(nameList[j].length>maximumLength){
                maximumLength=nameList[j].length;                //update the value of maximumLength if there is any elemnt that's length is larger than maximumLength.
                longestName=nameList[j];                         //update the longestName with new element that have long length.
            }
        }
        return longestName;
    }
    else{
        return 'Invalid Input';                               //return warning if the array is empty or there is any other types of element of array except string.
    }
}
var friends=['Jubayer','Rashed','Abdullah'];
var result4=megaFriend(friends);                            //calling function megaFriend() with perameter of array friends.
console.log(result4);
