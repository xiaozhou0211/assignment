DEAD LINE - 14/03/2025 12:00 - please give me the github link to check, and only within a JS file

Library Book Management

Scenario:

You are helping manage a small personal library where books are stored in an object (library) where the keys are book categories (like "Fiction", "Science", "History"), and each category contains an array of book titles. Please see the library object in answer23032025.

Tasks:

1. Write a function getBooks(category) that takes a category name and returns all books in that category. 
Notes: between each bookTile, you can separate with join(", ") - check yourself online
If the category does exist, return 'Books in "Science": [bookTitle], [bookTitle]...'
If the category doesn't exist, return 'Category [category] not found'


2. Write a function addBook(category, bookTitle) that adds a new book to a specific category. 
If the category does exist, return 'Book [bookTitle] has been added to category [category]'
If the category doesn't exist, create it and add the book, then return 'Category [category] didn't exist, so it was created. Book [bookTitle] added.'

3. Write a function removeBook(category, bookTitle) that removes a book from a specific category.
Notes: when you check if the book exist, use indexOf() - check yourself online
If the category exist, then you need to remove the book, then return 'Book [bookTitle] has been removed from category [category]', otherwise return 'Book [bookTitle] not found in category [category]'
If the category doesn't exist, return 'Category [category] not found'

