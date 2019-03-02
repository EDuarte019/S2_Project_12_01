"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Evelyn Duarte
   Date:  2/28/19
   
   Filename: tc_cart.js
	
*/

// The variable or orderTotal has the initial value of 0.
var orderTotal = 0;
// The variable cartHTML is equal to all the code for it to be used later .
var cartHTML = "<table> <tr> <th>Item</th> <th>Description</th> <th>Price</th> <th>Qty</th> <th>Total</th> </tr>";

// a for loop was created for HTML with all the values and code concatinated. The index begins at 1, and i is less than or equal to 3 and addss by 1.
for (var i = 0; i <= 3; i++) {
    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "'/> </td>";
    cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";
    var itemCost = itemPrice[i] * itemQty[i];
    cartHTML += "<td>$" + itemCost + "</td> </tr>";
    orderTotal = orderTotal + itemCost;
}
// cartHTML is shortened into javascript.
cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>$" + orderTotal + "</td> </tr> </table>";
// The document gets the element by cart. The code has a property of innerHTML which grabs the code that is within the main opening and closing.
document.getElementById("cart").innerHTML = cartHTML;