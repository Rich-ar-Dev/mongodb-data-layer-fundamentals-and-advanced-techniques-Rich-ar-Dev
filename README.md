

## 🚀 **STEP 1: Add Screenshots**

Copy your screenshot files to the current directory:

```bash
# Copy all screenshot files (adjust the path as needed)
cp ~/path/to/your/screenshots/*.png .
```

## 🚀 **STEP 2: Update README.md**

Let's update the README.md to include your actual work:

```bash
cat > README.md << 'EOF'
# MongoDB Bookstore Assignment

This project demonstrates MongoDB fundamentals including CRUD operations, aggregation pipelines, and indexing.

## 📁 Project Structure
```
mongodb-data-layer-fundamentals-and-advanced-techniques-Rich-ar-Dev/
├── insert_books.js          # Script to populate the database
├── queries.js               # All MongoDB queries for the assignment
├── README.md                # This file
└── screenshots/             # Screenshots of database and queries
    ├── database-connection.png
    ├── sample-data.png
    └── query-results.png
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB Atlas account
- MongoDB Compass (optional, for GUI)

### 1. Database Setup
- MongoDB Atlas cluster: `cluster0.cu946q7.mongodb.net`
- Database: `plp_bookstore`
- Collection: `books`

### 2. Install Dependencies
```bash
npm install mongodb
```

### 3. Populate the Database
```bash
node insert_books.js
```
This will insert 12 sample books into your `books` collection.

### 4. Run Queries
Connect to MongoDB using `mongosh`:
```bash
mongosh "mongodb+srv://username:password@cluster0.cu946q7.mongodb.net/"
```

Then run the queries:
```javascript
use plp_bookstore
load("queries.js")
```

## 📊 Assignment Tasks Completed

### ✅ Task 1: MongoDB Setup
- MongoDB Atlas cluster setup
- Database: `plp_bookstore`
- Collection: `books`
- 12 books inserted using provided script

### ✅ Task 2: Basic CRUD Operations
- Find books by genre, year, author
- Update book prices
- Delete books by title

### ✅ Task 3: Advanced Queries
- Complex filters with multiple conditions
- Field projection
- Sorting (ascending/descending)
- Pagination with limit and skip

### ✅ Task 4: Aggregation Pipeline
- Average price by genre
- Author with most books
- Books count by publication decade

### ✅ Task 5: Indexing
- Single index on title field
- Compound index on author and published_year
- Performance analysis with explain()

## 📸 Screenshots Included
- MongoDB Compass showing database connection
- Books collection with sample data
- Query results from various operations

## 🔗 Connection Details
- **Database**: MongoDB Atlas
- **Cluster**: cluster0.cu946q7.mongodb.net
- **Database Name**: plp_bookstore
- **Collection**: books
EOF
```

## 🚀 **STEP 3: Add Everything and Push**

```bash
# Add all files including screenshots
git add .

# Check what will be committed
git status

# Commit with descriptive message
git commit -m "Complete MongoDB assignment: scripts, queries, screenshots, and documentation"

# Push to GitHub
git push origin main
```