
// Your Code Here

async function main(){
let response = await fetch('http://localhost:3001/listBooks', {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
},
    body: JSON.stringify({
        "id": 3,
        "title": "The Legends of Arathrae",
    }),
})
let updateBook = await response.json(response);
console.log(updateBook)

// Retrieve a list of books from the server.

let response2 = await response.json('http://localhost:3001/listBooks',{
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(response2)
})
let retrieveBooks = await response2.json();
console.log(updateBook)

// Display a list of book titles to the admin.



// Place a text input next to each book title.



// Give each text input a value: the quantity of the associated book.



// Place a submit button next to each text input.



// When the submit button is clicked, retrieve the quantity from the associated text input and save the updated quantity to the server.

}