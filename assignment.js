//https://github.com/Jubayer777/Assignment-3



//Problem-1: Convert distance from Kilometer to meter.

function kilometerToMeter(kilometer) {
    if (kilometer > 0) {
        //checking input whether it is valid or not

        var meter = kilometer * 1000; //convert kilometer to meter.
        return meter;
    } else {
        return 'Invalid input';
    }
}
var km = 5;
var result1 = kilometerToMeter(km); //calling function by passing value to perameter
console.log(result1);




//Problem-2:Calculating budget for electronic devices like Watch,Phone and Laptop.

function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {
          
    //Checking validation of input values.
    if (watchQuantity >= 0 && phoneQuantity >= 0 && laptopQuantity >= 0) {

        var watchBudget = watchQuantity * 50;
        var phoneBudget = phoneQuantity * 100; //Calculating budget for each of three items.
        var laptopBudget = laptopQuantity * 500;
        var totalBudget = watchBudget + phoneBudget + laptopBudget; // Calculating the total budget cost.
        return totalBudget;

    } else {
        return 'Invalid Input'; 
    } 
}
var watch = 8;
var phone = 5;
var laptop = 2;
var result2 = budgetCalculator(watch, phone, laptop); //calling function by passing value to perameter
console.log(result2);




//Prblem-3: Calculate the cost for hotel room reservation. cost for 1-10 days=100/day, 11-20 days=80/day, 21-above=50/day.

function hotelCost(days) {

    //Checking validation of input values.
    if (days > 0) {
        
        var cost = 0;
        if (days <= 10) {     

            cost = days * 100; //calculate cost for less than 10 days.

        } else if (days <= 20) {

            var firstTenDays = 10 * 100; //cost for first 10 days that means 1-10th days
            var remainDays = days - 10;   //subtract first 10 days from total days
            var secondTenDays = remainDays * 80; //cost for days after first 10 days that means 11-20th days
            cost = firstTenDays + secondTenDays; //calculate total cost for staying 1-20th days

        } else {

            var firstTenDays = 10 * 100; //cost for first 10 days that means 1-10th days
            var secondTenDays = 10 * 80; //cost for 2nd 10 days that means 11 -20th days
            var remainDays = days - 20;   //subtract (first 10 + second 10=20) days from total days
            var daysAboveTwenty = remainDays * 50; //cost for days after 20 days that means 21th-above days.
            cost = firstTenDays + secondTenDays + daysAboveTwenty; //calculate total cost

        }
        return cost;
    } else {
        return 'Invalid Input';
    }
}
var numberOfDays = 21;
var result3 = hotelCost(numberOfDays); //calling function by passing value to perameter
console.log(result3);




//Problem-4:Write a program that return the longest string from an array of string.

function megaFriend(nameList) {
    
    //Counting number of string in the array.
    var stringCount = 0;
    for (var i = 0; i < nameList.length; i++) {
        
        if (typeof nameList[i] == 'string') {

            stringCount++; //if the element of array is string than increment the stringCounter

        }
    }

      // check whether the array have elements or not and checking stringCount is equal to the length of array or not.
        
    if (nameList.length != 0 && stringCount == nameList.length) {
        
        var maximumLength = nameList[0].length; //initialize the maximumLength with the length of first element of array.
        var longestName = nameList[0]; // assume that 1st element is longest.

        for (var j = 0; j < nameList.length; j++) {

            if (nameList[j].length > maximumLength) {

                maximumLength = nameList[j].length; //update the value of maximumLength if there is any element that's length is larger than maximumLength.
                longestName = nameList[j]; //update the longestName with new element that have long length.

            }
        }
        return longestName;

    } else {
        return 'Invalid Input'; 
    }
}
var friends = ['Jubayer', 'Rashed', 'Abdullah'];
var result4 = megaFriend(friends); //calling function by passing value to perameter
console.log(result4);
