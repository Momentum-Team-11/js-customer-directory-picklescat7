//how do I get this stuff on the page??

// //Do I have access to the other js files here?
console.log(usStates)
console.log(customers)

// Let's make our job easier by figuring this out for ONE object instead of an array of objects
// grab just the customer object to work with. We won't need this later; this is just for development purposes!
const customer = customers[0]
console.log("hey ", customer)

// select the element that is already in the DOM where I want to insert the new content into
const customerDiv = document.getElementById('customer-blocks')
console.log(customerDiv)

// come back to do the loop last
// for loop -> loop through each item (object) so that we can create a chunk on the page with all the data we want


// access data in each menu item object (we can use dot notion)

// for loop -> loop through each item (object) so that we can create a chunk on the page with all the data we want
// access data in each menu item object (we can use dot notion)
for (let customer of customers) {
    // need to get the title of each menu item
//Picture Section
//be able to show the picture for each customer
//use the url info from the object
// let picUrl = customer.picture.large
// console.log('thumbnail picture url is:', picUrl)
//now make it show up on the page
//I still don't understand the short cut thing below but it works
customerDiv.innerHTML += `<img class='customer-img' src=${customer.picture.large} />`

//Name 
let firstName = customer.name.first; 
console.log(firstName)

let lastName = customer.name.last; 
console.log(firstName +' ' + lastName)

//create new h3 element in the Dom where I want to insert the customer's name
const h3El = document.createElement('h3')
h3El.classList.add('name-line')
console.log(h3El) // finds our new h3 class with 'name-line' as a text placeholder
//create the text to include in the element
const h3Text = document.createTextNode (firstName +' ' + lastName)
console.log('I will be inserting the following name:', h3Text)
//combine the element and text
h3El.appendChild(h3Text)
//now insert it
customerDiv.appendChild(h3El)

//E-mail
let email = customer.email; 
console.log(email)
//create new h5 element in the Dom where I want to insert the e-mail
const h5El = document.createElement('h5')
h5El.classList.add('email-line')
console.log(h5El) // finds our new h5 class with 'email-line' as a text placeholder
//create the text to include in the element
const h5Text = document.createTextNode (email)
console.log('I will be inserting the following email:', h5Text)
//combine the element and text
h5El.appendChild(h5Text)
//now insert it
customerDiv.appendChild(h5El)

// console.log(customers)//from our other js  file
// const = menuItems[0]
// // first select the element that is already in the DOM where I want to insert the new content
// const menuDiv = document.getElementById('menu-items')//run it in the console to make sure
// // need to get the title of each/one menu item
// let title = menuItem.title
// console.log("Title: ', title) //should print Title: Noodles
// // put the title into the html so it will display on the page
// // attach new DOM content to the menu items div
// //create an h2 element
// const h2El = document.createElement('h2')
// //create the text to include in that element
// const h2Text =document.createTextNode('Noodles')
// //insert this whole thing into the DOM
// //combine the element and the text
// h2El.appendChild(h2Text)
// menuDiv.appendChild(h2El) //now compare to line 30. appendChild vs. innerHTML Noodles should be displayed on teh page AND inserted into tthe DOM Compare this to line 

// //be able to show the image for each menu item -> use the url information from the object, and put it into the html so it will display on the page
// //use the url information from the object
// let srcURL = menuItem.image.srcURL
// console.log("src is", srcURL)
// let altText = menuItem.image.altText
// console.log("alt text is", altText)

// menuDiv.innerHTML += `<img class='menu-img' src=${srcURL} alt=${altText} />`

// //menuItems[0] then menuItems [1] and so on through all elements
// //access data in each menu item object (assign a menu item to its own variable so that we can use dot notation be able to access the )
// for (let menuItem of menuItems) {
//     //and then move this to the top of the page right under const menuDiv = and everything within the brackets that should loop
// }
// //be able to pull out/access specific items

// //DOM create a text node for each element that we want to add to the html 


// //for loop -> loop through each item (object) so that we can create a chunk on the page with all the dat
// //it becomes much harder to start with your loop. Leave it until the last thing. Can get the loop working rapidly if you can do it for one thing

// //(put this under for loop)access data in each menu item object (assign a menu item to its own variable so that we can use dot notation be able to access the )
}
