// CHAPTER-30: Controlling the length of decimals

// METHOD WE'RE LOOKING AT
// toFixed(lengthOfDecimals)

// GENERAL EXAMPLES
// var testNumber = 45.1284;
// console.log(testNumber.toFixed());

// SALES TAX EXAMPLE
// var itemPrice = 1750.765;
// var salesTax = 0.02;
// var salesTaxAmount = itemPrice * salesTax;
// console.log({ salesTaxAmount });

// var totalPrice = itemPrice + salesTaxAmount;
// console.log(totalPrice);

// limiting the length of decimals
// console.log(totalPrice);
// totalPrice = totalPrice.toFixed(2);
// console.log(totalPrice);
// console.log({ itemPrice, salesTaxAmount, totalPrice });

// SCHOOL MARKS PERCENTAGE EXAMPLE
// var totalMarks = 1100;
// var obtainedMarks = 953;

// before limiting the length
// var percentage = (obtainedMarks / totalMarks) * 100;
// console.log(percentage);

// after limiting the length
// var percentage = ((obtainedMarks / totalMarks) * 100).toFixed(2);
// console.log(percentage);

// PROBLEM
// console.log((1.555).toFixed(2));

// fixing the above problem (jugaar)
// var num = 1.555;

// var str = num.toString();
// console.log(str);

// console.log(str.charAt(str.length - 1));

// if (str.charAt(str.length - 1) === "5") {
//     str = str.slice(0, str.length - 1) + "6";
// }

// console.log(str);
// num = Number(str);
// num = num.toFixed(2);
// console.log(num);