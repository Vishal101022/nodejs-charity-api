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

1. **POST /users/register**

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

1. **POST /users/login**

   - login a user

   **Parameters**

   ```json
   {
     "email": "sima@gmail.com",
     "password": "12345"
   }
   ```

1. ** GET /users/profile/**

   - get user profile
   - `Authorization: ${token}`

   **Parameters**

   ```json

    "user": {
        "id": 1,
        "name": "neha",
        "email": "neh@gmail.com",
        "phone": "9145784785",
        "address": "ranchi Jh",
        "isAdmin": false,
        "createdAt": "2024-11-20T10:11:43.000Z"
    }
   ```

   1.** GET /users/profile/{id}**

   - get user profile by id
   - `Authorization: ${token}`

   **Parameters**

   ```json

    "user": {
        "id": 1,
        "name": "neha",
        "email": "neh@gmail.com",
        "phone": "9145784785",
        "address": "ranchi Jh",
        "isAdmin": false,
        "createdAt": "2024-11-20T10:11:43.000Z"
    }
   ```

1. **PATCH /users/profile/{id}**

   - update user profile
   - `Authorization: ${token}`

   **Parameters**

   ```json
   {
     "name": "neha",
     "phone": "9145784785",
     "address": "ranchi Jh",
     "isAdmin": true
   }
   ```

### charity Endpoints

1. **POST /charities/register**

   - create a new charity

   **Parameters**

   ```json
   {
     "name": "Green Earth Initiative",
     "email": "greenEarth@gmail.com",
     "location": "Hyderabad",
     "category": "Environment",
     "password": "1010",
     "mission": "Promoting sustainable living and reducing waste",
     "goals": "Plant 1 million trees by 2026"
   }
   ```

1. **POST /charities/login**

   - login a charity

   **Parameters**

   ```json
   {
     "email": "greenEarth@gmail.com",
     "password": "1010"
   }
   ```

1. **POST /charities/approve/{charityId}**

- approve a charity
- `Authorization: ${token}`

** response**

```json
{
  "message": "Charity approved successfully"
}
```

1. **POST /charities/reject/{charityId}**

   - reject a charity
   - `Authorization: ${token}`

   ** response**

   ```json
   {
     "message": "Charity rejected successfully"
   }
   ```

1. **GET /charities/charity?location=Hyderabad&category=Environment**

   - get charities

   **Parameters**

   ```json
   {
     "charities": [
       {
         "id": 13,
         "name": "Green Earth Initiative",
         "email": "101022workstation@gmail.com",
         "mission": "Promoting sustainable living and reducing waste",
         "goals": "Plant 1 million trees by 2026",
         "location": "Hyderabad",
         "category": "Environment",
         "isApproved": true,
         "createdAt": "2024-11-20T20:37:06.000Z"
       }
     ],
     "pagination": {
       "currentPage": 1,
       "totalPages": 1
     }
   }
   ```

1. **GET /charities/charity/{charityId}**

   - get charity by id
   - `Authorization: ${token}`

1. **PATCH /charities/profile/**

   - update charity profile
   - `Authorization: ${token}`

   **Parameters**

   ```json
   {
     "name": "Green Earth Initiative",
     "location": "Hyderabad",
     "category": "Environment",
     "mission": "Promoting sustainable living and reducing waste",
     "goals": "Plant 1 million trees by 2026"
   }
   ```

### Donation Endpoints

1. **Post /donations/create**

   - create a new donation
   - `Authorization: ${token}`

**Parameters**

```json
{
  "amount": 1000,
  "projectId": 1
}
```

2. **GET /donations/fetch**

   - get all donations
   - `Authorization: ${token}`

**response**

```json
{
  "userId": 1,
  "donations": [
    {
      "id": 2,
      "order_id": "order_PNZNxuTgz2qqFm",
      "amount": 5412,
      "status": "pending",
      "createdAt": "2024-11-20T13:06:44.000Z"
    },
    {
      "id": 1,
      "order_id": "order_PNZD5lkOHtIOol",
      "amount": 100,
      "status": "pending",
      "createdAt": "2024-11-20T12:56:27.000Z"
    }
  ]
}
```

3. **GET donations/fetchHistory**

   -get donation history
   - `Authorization: ${token}`

**response**

```json
{
    "userId": 1,
    "donations": [
        {
            "order_id": "order_PNZNxuTgz2qqFm",
            "amount": 5412,
            "status": "pending",
            "createdAt": "2024-11-20T13:06:44.000Z",
            "project": {
                "title": "School Construction",
                "description": "Building schools in rural areas"
            }
        },
        {
            "order_id": "order_PNZD5lkOHtIOol",
            "amount": 100,
            "status": "pending",
            "createdAt": "2024-11-20T12:56:27.000Z",
            "project": {
                "title": "School Construction",
                "description": "Building schools in rural areas"
            }
        }
    ]
}
```

4. **POST /api/donations/updateTransaction**

   - update transaction status
   - `Authorization: ${token}`

**Parameters**

```json
{
  "razorpay_order_id": "order_PNZNxuTgz2qqFm",
  "razorpay_payment_id": "pay_LWQh8aE7r5H7Zx",
  "razorpay_signature": "14d94b39b1ab4c7a88b89456a9f1dcb74a1f6c9e"
}
```

### Project Endpoints

1. **POST /projects/create**

   - create a new project
   - `Authorization: ${token}`

**Parameters**

```json
{
  "title": "School Construction",
  "description": "Building schools in rural areas",
  "donationGoal": 50000.0
}
```

1. **GET /projects/fetch**

   - get all projects

1. **GET /projects/fetch/{projectId}**

   - get project by id

1. **PATCH /projects/update/{projectId}**

   - update project
   - `Authorization: ${token}`

** Parameters**

```json
{
  "title": "School Construction",
  "description": "Building schools in rural areas",
  "donationGoal": 50000.0
}
```

### Receipt Endpoints

1. **POST /api/download**

   - download receipt
   - `Authorization: ${token}`

### Impact Report Endpoints

1. **POST /api/reports/create**

   - create impact report
   - `Authorization: ${token}`

**Parameters**

```json
{
  "projectId": 1,
  "title": "Building 5 Schools",
  "description": "We successfully built 5 schools in rural areas, thanks to your support!"
}
```

1. **GET /api/reports/fetch**

   - get all impact reports

** Parameters**

```json
{
  "projectId": 1
}
```

### Error Handling

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
