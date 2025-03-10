// Write template 


const library = {
    Fiction: ["The Great Gatsby", "1984", "To Kill a Mockingbird"],
    Science: ["A Brief History of Time", "The Selfish Gene"],
    History: ["Sapiens", "Guns, Germs, and Steel"]
};

// Function to get all books in a category

// Function to add a book to a category

// Function to remove a book from a category


// Example usage:

// Function to get all books in a category
console.log(getBooks("Science"));
// Output: Books in "Science": A Brief History of Time, The Selfish Gene


// // Function to add a book to a category
console.log(addBook("Science", "The Elegant Universe"));
// Output: Book "The Elegant Universe" has been added to category "Science".

console.log(getBooks("Science"));
// Output: Books in "Science": A Brief History of Time, The Selfish Gene, The Elegant Universe

console.log(addBook("Mystery", "Sherlock Holmes"));
// Output: Category "Mystery" didn't exist, so it was created. Book "Sherlock Holmes" added.


// Function to remove a book from a category

console.log(removeBook("Science", "A Brief History of Time"));
// Output: Book "A Brief History of Time" has been removed from category "Science".

console.log(getBooks("Science"));
//  Output: Books in "Science": The Selfish Gene

console.log(removeBook("History", "Unknown Book"));
// Output: "Book "Unknown Book" not found in category "History"."

console.log(removeBook("Mystery", "Sherlock Holmes"));
// Output: "Category "Mystery" not found."

