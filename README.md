# API Documentation

## Overview

The Donation System API facilitates secure and efficient donation management for a charity platform. It provides endpoints for users to browse and filter charities, make donations through an integrated payment gateway, and track their donation history with downloadable receipts. Charities can manage profiles, set donation goals, and share impact reports with donors. The system ensures secure data handling with authentication, and email notifications for transactions and updates.

## Base URL
`https://localhost:3000/api`

## Key Features

### User Authentication and Profiles
- **User Registration and Login**: Users can register and log in to the platform.
- **Profile Management**: Users can manage their profiles, view their donation history, and update personal information.

### Charity Management
- **Charity Registration**: Charitable organizations can register on the platform and create a profile.
- **Profile Information**: Charities can provide detailed information, including their mission, goals, and projects.

### Donation Process
- **Browse and Search**: Users can browse and search for charities based on categories, location, and other criteria.
- **Donation Page**: Each charity has a dedicated donation page where users can make donations.
- **Payment Integration**: Integration with payment gateways (e.g., Stripe, Razorpay) to process donations securely.

### Donation Tracking and Reporting
- **Donation History**: Users can view their past donations and download receipts.
- **Impact Reports**: Charities can provide updates on how donations are being used and their impact.

### Admin Dashboard
- **User Management**: Admins can manage users and charities, including approving or rejecting charity registrations.

### Notifications
- **Email Notifications**: Automatic email notifications for donation confirmations, updates from charities, and reminders.

## Technologies Used

-Framework: Node.js with Express 
-Database: SQL DB
-Authentication: JWT (JSON Web Tokens) for user authentication
-Payment Integration: Stripe or Razorpay
-Email Service: SendGrid for sending email notification

## Authentication
API requires authentication using token. Include the token in the headers of our requests.
- `Authorization: ${token}`

## Endpoints

### Users Endpoints

1. **POST /api/users/register**
   - register a new user

   **Parameters**
   ```json
   {
      "name": "sima",
      "email": "sima@gmail.com",
      "phone": "910547898",
      "address": "ranchi Jh",
      "password": "12345"
   }
   ```
1. **POST /api/users/login**
   - login a user

   **Parameters**
   ```json
   {
    "email": "sima@gmail.com",
    "password": "12345"
   }
   ```

### Book Endpoints

1. **POST /api/books**
      - create a new book

    **Parameters**
    ```json
   {
   "title": "The Great Gatsby",
   "publication_year": 1925,
   "genre": "Fiction",
   "description": "A classic novel about the power of love and the pursuit of wealth."
   }
   ```

   **expample request**
   ```bash
   post /api/books
   Authorization: Bearer access token
   ```

   **example response**
   ```json
   {
   "title": "The Great Gatsby",
   "publication_year": 1925,
   "genre": "Fiction",
   "description": "A classic novel about the power of love and the pursuit of wealth."
   }
   ```

1. **GET /api/books/allbook**
   - get all books

   **expample request**
   ```bash
   get /api/books/allbook
   ```

   **example response**
   ```json
   [
   {
   "_id": "662fd8bedef628e1177*****",
   "title": "The Catcher in the Rye",
   "author": "662f6cb65c68cc7dde7*****",
   "author_name": "vishal",
   "publication_year": 1951,
   "genre": "Fiction",
   "description": "The Catcher in the Rye is a novel by J.D. Salinger published in 1951. It follows the experiences of Holden Caulfield, a teenager who is expelled from his prep school and goes on a journey of self-discovery in New York City.",
   "createdAt": "2024-04-29T17:28:30.542Z",
   "updatedAt": "2024-04-29T17:28:30.542Z",
   "__v": 0
   },
   {
   "_id": "662fd8f8def628e1177*****",
   "title": "The Hobbit",
   "author": "662f6cb65c68cc7dde7*****",
   "author_name": "vishal",
   "publication_year": 1937,
   "genre": "Fantasy",
   "description": "The Hobbit, or There and Back Again, is a children's fantasy novel by J.R.R. Tolkien published in 1937. It follows the journey of Bilbo Baggins, a hobbit who embarks on an adventure to reclaim treasure guarded by the dragon Smaug.",
   "createdAt": "2024-04-29T17:29:28.047Z",
   "updatedAt": "2024-04-29T17:29:28.047Z",
   "__v": 0
   }
   ]
   ```

1. **GET /api/books/book/:id**
   - get specific book

   **expample request**
   ```bash
   get /api/books/book/662fd8bedef628e1177******
   ```

   **example response**
   ```json
   {
   "_id": "662fd8bedef628e1177*****",
   "title": "The Catcher in the Rye",
   "author": "662f6cb65c68cc7dde7*****",
   "author_name": "vishal",
   "publication_year": 1951,
   "genre": "Fiction",
   }
   ```

1. **PUT /api/books/:id**
   - update book

   **parameters**
   ```json
   {
   "title": "The Catcher in the Rye",
   "publication_year": 1951,
   "genre": "Fiction",
   "description": "A classic novel about the power of love and the pursuit of wealth."
   }
   ```

   **expample request**
   ```bash
   put /api/books/662fd8bedef628e1177******
   Authorization: Bearer access token
   ```

   **example response**
   ```json
   {
   "_id": "662fd8bedef628e1177******",
   "title": "The Catcher in the Rye",
   "author": "662f6cb65c68cc7dde7******",
   "author_name": "vishal",
   "publication_year": 1951,
   "genre": "Fiction",
   "description": "A classic novel about the power of love and the pursuit of wealth."
   }
   ```

1. **DELETE /api/books/:id**
   - delete book

   **expample request**
   ```bash
   delete /api/books/662fd8bedef628e1177******
   Authorization: Bearer access token
   ```

   **example response**
   ```json
   {
   "message": "Book deleted successfully"
   }
   ```

1. **GET /api/books/search/filter**
   - filter book by author or publication year

   **parameters**
   ```json
   {
   "author": "vishal",
   }
   ```

   **expample request**
   ```bash
   get /api/books/search/filter
   ```

   **example response**
   ```json
   [
   {
   "_id": "662fd8bedef628e1177*****",
   "title": "The Catcher in the Rye",
   "author": "662f6cb65c68cc7dde7*****",
   "author_name": "vishal",
   "publication_year": 1951,
   "genre": "Fiction",
   "description": "A classic novel about the power of love and the pursuit of wealth."
   }
   ]
   ```

## Error Handling

The API returns standard HTTP status codes to indicate the success or failure of a request.

- `200 OK`: The request was successful.
- `201 Created`: The resource was created successfully.
- `400 Bad Request`: The request was malformed or missing parameters.
- `401 Unauthorized`: Authentication credentials were missing or invalid.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An error occurred on the server.

## :hammer_and_wrench: how to run
### Prerequisites
1. **generate JWT secret key**
1. **create razorpay account**
1. **create Brevo SMPT account**
1. **create AWS account and get s3**
**Node version 18.x.x**

### Cloning the repository

```shell
https://github.com/Vishal101022/nodejs-charity-api.git
```

### Install packages

```shell
npm i
```

### Setup .env file

Create a .env file and add the following variables:

```bash
DB_NAME = ""
DB_USER = ""
DB_PASS = ""
DB_HOST = ""
PORT = 
JWT_SECRET = ""
RAZORPAY_KEY_ID = ""
RAZORPAY_KEY_SECRET = ""
AWS_BUCKET_NAME = ""
AWS_ACCESS_KEY = ""
AWS_SECRET_ACCESS_KEY = ""
SMPT_API_KEY = ""
```

### Start the app

```shell
npm start
```
