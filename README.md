# Project overview.
This is a booking app to buy tickets for various shows. This project contains client app of the booking platform,
It is build with vanila JS, html and css.


# Setup and local run instructions.

To run the app, open index.html in browser.

# Explanation of design and technical decisions.

##File strucure

+--- index.html
|
+---+ style
|   |
|   +--- style.css
|
+---+ script
|   |
|   +--- index.js & other js files
|
+---+ assets
    |
    +--- images
    |
    +--- icons

##Infinite scrolling of upcoming shows
For infinite scrolling, intersection observer is used to figure out if the last element is visible inside view port. 
If the element is present the viewport, next page data will be fetched and appended with the existing data.

