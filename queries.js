// queries.js - MongoDB queries for PLP Bookstore Assignment
use('plp_bookstore');

print("=== TASK 2: BASIC CRUD OPERATIONS ===");

// 1. Find all books in a specific genre
print("\n1. All Fantasy books:");
db.books.find({ genre: "Fantasy" });

// 2. Find books published after a certain year
print("\n2. Books published after 1950:");
db.books.find({ published_year: { $gt: 1950 } });

// 3. Find books by a specific author
print("\n3. Books by George Orwell:");
db.books.find({ author: "George Orwell" });

// 4. Update the price of a specific book
print("\n4. Updating price of 'The Hobbit' to 16.99:");
db.books.updateOne(
  { title: "The Hobbit" },
  { $set: { price: 16.99 } }
);

// 5. Delete a book by its title
print("\n5. Deleting 'Moby Dick':");
db.books.deleteOne({ title: "Moby Dick" });

print("\n=== TASK 3: ADVANCED QUERIES ===");

// 6. Books in stock AND published after 1950
print("\n6. In stock books published after 1950:");
db.books.find({
  in_stock: true,
  published_year: { $gt: 1950 }
});

// 7. Projection - only title, author, price fields
print("\n7. Books with projection (title, author, price only):");
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
);

// 8. Sorting by price (ascending)
print("\n8. Books sorted by price (ascending):");
db.books.find().sort({ price: 1 });

// 9. Sorting by price (descending)
print("\n9. Books sorted by price (descending):");
db.books.find().sort({ price: -1 });

// 10. Pagination - 5 books per page
print("\n10. Page 1 (5 books):");
db.books.find().limit(5).skip(0);

print("\n11. Page 2 (next 5 books):");
db.books.find().limit(5).skip(5);

print("\n=== TASK 4: AGGREGATION PIPELINE ===");

// 12. Average price by genre
print("\n12. Average price by genre:");
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" },
      count: { $sum: 1 }
    }
  }
]);

// 13. Author with most books
print("\n13. Author with most books:");
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { bookCount: -1 }
  },
  {
    $limit: 1
  }
]);

// 14. Books by publication decade
print("\n14. Books count by publication decade:");
db.books.aggregate([
  {
    $project: {
      title: 1,
      decade: {
        $subtract: [
          "$published_year",
          { $mod: ["$published_year", 10] }
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 }
  }
]);

print("\n=== TASK 5: INDEXING ===");

// 15. Create index on title field
print("\n15. Creating index on title field:");
db.books.createIndex({ title: 1 });

// 16. Create compound index on author and published_year
print("\n16. Creating compound index on author and published_year:");
db.books.createIndex({ author: 1, published_year: 1 });

// 17. Demonstrate performance improvement
print("\n17. Performance analysis for title search:");
db.books.find({ title: "The Hobbit" }).explain("executionStats");

print("\n=== ALL TASKS COMPLETED ===");
