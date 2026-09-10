// ==============================================================================
// JavaScript Practice Assignment - 10 Problem Statements
// ==============================================================================

// ------------------------------------------------------------------------------
// 1. WAP if the person age is greater than 18 then he can vote
// ------------------------------------------------------------------------------
function checkVotingEligibility(age) {
    if (age >= 18) {
        return `Age ${age}: Eligible to vote`;
    } else {
        return `Age ${age}: Not eligible to vote (Must be 18 or older)`;
    }
}

console.log("--- Question 1: Voting Eligibility ---");
console.log(checkVotingEligibility(21)); // Eligible
console.log(checkVotingEligibility(16)); // Not eligible
console.log(checkVotingEligibility(18)); // Eligible


// ------------------------------------------------------------------------------
// 2. Grade system: 90, 80, 60, 55, 33 pass/fail and grade
// ------------------------------------------------------------------------------
function checkGrade(marks) {
    if (marks < 0 || marks > 100) {
        return "Invalid marks! Please enter marks between 0 and 100.";
    }

    if (marks >= 90) {
        return `Marks: ${marks} -> Grade A (Pass)`;
    } else if (marks >= 80) {
        return `Marks: ${marks} -> Grade B (Pass)`;
    } else if (marks >= 60) {
        return `Marks: ${marks} -> Grade C (Pass)`;
    } else if (marks >= 55) {
        return `Marks: ${marks} -> Grade D (Pass)`;
    } else if (marks >= 33) {
        return `Marks: ${marks} -> Grade E (Pass)`;
    } else {
        return `Marks: ${marks} -> Fail`;
    }
}

console.log("\n--- Question 2: Grade System ---");
console.log(checkGrade(95)); // Grade A (Pass)
console.log(checkGrade(82)); // Grade B (Pass)
console.log(checkGrade(65)); // Grade C (Pass)
console.log(checkGrade(58)); // Grade D (Pass)
console.log(checkGrade(40)); // Grade E (Pass)
console.log(checkGrade(25)); // Fail


// ------------------------------------------------------------------------------
// 3. Check number is even or odd number
// ------------------------------------------------------------------------------
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return `${num} is an Even number`;
    } else {
        return `${num} is an Odd number`;
    }
}

console.log("\n--- Question 3: Even or Odd ---");
console.log(checkEvenOdd(14)); // Even
console.log(checkEvenOdd(27)); // Odd


// ------------------------------------------------------------------------------
// 4. Find temperature: 30 above is hot, less than 30 is cold
// ------------------------------------------------------------------------------
function checkTemperature(temp) {
    if (temp > 30) {
        return `${temp}°C is Hot (Above 30)`;
    } else if (temp < 30) {
        return `${temp}°C is Cold (Less than 30)`;
    } else {
        return `${temp}°C is Moderate / Normal (Exactly 30)`;
    }
}

console.log("\n--- Question 4: Temperature Check ---");
console.log(checkTemperature(38)); // Hot
console.log(checkTemperature(18)); // Cold
console.log(checkTemperature(30)); // Exactly 30


// ------------------------------------------------------------------------------
// 5. Selling price for profit or loss (condition: measure how much profit or loss or 0)
// ------------------------------------------------------------------------------
function checkProfitOrLoss(costPrice, sellingPrice) {
    if (sellingPrice > costPrice) {
        let profit = sellingPrice - costPrice;
        return `Profit of ${profit} (Cost Price: ${costPrice}, Selling Price: ${sellingPrice})`;
    } else if (sellingPrice < costPrice) {
        let loss = costPrice - sellingPrice;
        return `Loss of ${loss} (Cost Price: ${costPrice}, Selling Price: ${sellingPrice})`;
    } else {
        return `No Profit, No Loss: 0 (Cost Price: ${costPrice}, Selling Price: ${sellingPrice})`;
    }
}

console.log("\n--- Question 5: Profit or Loss ---");
console.log(checkProfitOrLoss(500, 650)); // Profit of 150
console.log(checkProfitOrLoss(500, 420)); // Loss of 80
console.log(checkProfitOrLoss(500, 500)); // 0 (No Profit, No Loss)


// ------------------------------------------------------------------------------
// 6. Check number is +ve (Positive) or -ve (Negative)
// ------------------------------------------------------------------------------
function checkPositiveNegative(num) {
    if (num > 0) {
        return `${num} is Positive (+ve)`;
    } else if (num < 0) {
        return `${num} is Negative (-ve)`;
    } else {
        return `${num} is neither positive nor negative (Zero)`;
    }
}

console.log("\n--- Question 6: Positive or Negative ---");
console.log(checkPositiveNegative(15));  // Positive
console.log(checkPositiveNegative(-8));  // Negative
console.log(checkPositiveNegative(0));   // Zero


// ------------------------------------------------------------------------------
// 7. Number is divisible by 3 or not
// ------------------------------------------------------------------------------
function checkDivisibleBy3(num) {
    if (num % 3 === 0) {
        return `${num} is divisible by 3`;
    } else {
        return `${num} is NOT divisible by 3 (Remainder: ${num % 3})`;
    }
}

console.log("\n--- Question 7: Divisible by 3 ---");
console.log(checkDivisibleBy3(18)); // Divisible
console.log(checkDivisibleBy3(22)); // Not divisible


// ------------------------------------------------------------------------------
// 8. Year is a leap year or not
// ------------------------------------------------------------------------------
function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a Leap Year`;
    } else {
        return `${year} is NOT a Leap Year`;
    }
}

console.log("\n--- Question 8: Leap Year ---");
console.log(checkLeapYear(2024)); // Leap Year
console.log(checkLeapYear(2023)); // Not a Leap Year
console.log(checkLeapYear(1900)); // Not a Leap Year (Divisible by 100 but not 400)
console.log(checkLeapYear(2000)); // Leap Year (Divisible by 400)


// ------------------------------------------------------------------------------
// 9. Check number is zero or not zero
// ------------------------------------------------------------------------------
function checkZeroOrNot(num) {
    if (num === 0) {
        return `${num} is Zero`;
    } else {
        return `${num} is NOT Zero`;
    }
}

console.log("\n--- Question 9: Zero or Not Zero ---");
console.log(checkZeroOrNot(0));  // Zero
console.log(checkZeroOrNot(45)); // Not Zero
console.log(checkZeroOrNot(-7)); // Not Zero


// ------------------------------------------------------------------------------
// 10. Boolean enter kro aur agar sahi ho toh true nahi toh false
// ------------------------------------------------------------------------------
function checkBooleanValue(value) {
    if (value === true || value === "true" || value === 1) {
        return true;
    } else {
        return false;
    }
}

console.log("\n--- Question 10: Boolean Check ---");
console.log("Input true:", checkBooleanValue(true));       // true
console.log("Input false:", checkBooleanValue(false));     // false
console.log("Input 'true':", checkBooleanValue("true"));   // true
console.log("Input 'false':", checkBooleanValue("false")); // false
