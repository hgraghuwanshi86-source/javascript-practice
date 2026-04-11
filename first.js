//q)for a given array with marks of the students [85,97,44 , 37, 76, 60] find average marks of entire class
/*let marks = [85,97,44,37, 76, 60] 
let sum=0
for (let mark=0;mark<marks.length ; mark++)
{sum= sum+marks[mark]}
console.log(sum/marks.length)*/
// next question) - for a given array with prices of 5 items [250,645,300,900,50] all items have an offer of 10% off on them . c hange the array to store final price after applying offer.
let prices = [250,645,300,900,50]
for(let price=0;price<prices.length;price++)
{let discount = prices[price]*10/100;
    prices[price]=prices[price]-discount;
}
console.log(prices)
    




 

