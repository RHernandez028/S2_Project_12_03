"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3

   Author: Gabriel Hernandez
    Date: 3/4/19   
   
   Filename: ah_report.js
   
   Functions:
   
   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable
   
   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000
      
   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/
//calculates the total amount of the donations
var donationTotal = 0;

//calculate donation total
donors.forEach(calcSum); 

// Creates table with headers 
var summaryTable = "<table> <tr><th>Donors</th><td>" + donors.length + "</td></tr> <tr><th>Total Donations</th><td>$ " + donationTotal.toLocaleString() + "</td></tr> </table>";

// Displays table by inserting it into the HTML
document.getElementById('donationSummary').innerHTML = summaryTable;


// Making a table that filiters and displays the donors that donated more than $1000 
// the following code filters the donors that donated more than $1000 then orders them in decending order using prebuilt functions
var majorDonors = donors.filter(findMajorDonors);
majorDonors.sort(donorSortDescending);

// Creates the table for the recognized donors
var donorTable = "<table> <caption>Major Donors</caption> <tr><th>Donation</th> <th>Donor ID</th> <th>Date</th><th>Name</th><th>Address</th> <th>Phone</th><th>E-mail</th></tr>";

// creates the html table rows for the table
majorDonors.forEach(writeDonorRow);

donorTable += "</table>";

// displays and inserts the html from the donorTable variable and inserts it into the html file.
document.getElementById('donorTable').innerHTML = donorTable;



function calcSum(donorAmt) {
   donationTotal += donorAmt[9];
}

function findMajorDonors(donorAmt) {
   return donorAmt[9] >= 1000;
}

function donorSortDescending(a, b) {
   return b[9] - a[9];
}

function writeDonorRow(value) {
   donorTable += "<tr>";
   donorTable += "<td>$" + value[9].toLocaleString() + "</td>";   
   donorTable += "<td>" + value[0] + "</td>";
   donorTable += "<td>" + value[10] + "</td>";   
   donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";  
   donorTable += "<td>" + value[3] + "<br />" + value[4] + ", " + value[5] + " " + value[6]  + "</td>";    
   donorTable += "<td>" + value[7] + "</td>";   
   donorTable += "<td>" + value[8] + "</td>";         
   donorTable += "</tr>";
}

