# phase-3-project 
# Broken Library 
Broken Library is  an app where users can browse a large selection of books, add any to their personal collection, and add book-specific notes to their collection.

## Technologies Used

- JavaScript
- React
- React Router
- Ruby
- ActiveRecord
- Sinatra
- Material-UI

## How to Use
First, fork or clone the repository:
```
git clone git@github.com:KlajdoQ/phase-3-project.git
```

Next, install and run the backend:
```
cd backend
bundle install
rake db:migrate
rake db:seed
rake server
```

Next, open a new terminal to install and run the frontend:
```
cd frontend
npm install
npm start
```

## Backend Relationships
### Reader
- have many books
- have many notes
- have one collection
### Book (join table)
- belongs to a reader
- belongs to a collection
- have many notes through a reader
### Collection
- has many books
- has many notes
- belongs to a reader
### Note
- belongs to a book
- belongs to a reader
- belongs to a collection
<img width="554" alt="Screen Shot 2023-02-17 at 12 00 50 AM" src="https://user-images.githubusercontent.com/114179757/219553525-93cd62d4-e8b2-4a03-a9cd-712dc50fe9c1.png">


## Backend API Endpoints
<img width="610" alt="Screen Shot 2023-02-16 at 8 11 16 PM" src="https://user-images.githubusercontent.com/114179757/219536585-22969efa-fe67-4ac8-bae4-b7007150aef4.png">
