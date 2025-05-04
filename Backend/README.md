# Uber Project API Documentation

## Table of Contents
- [User API](#user-api)
  - [Register User](#register-user)
  - [Login User](#login-user)
  - [Get User Profile](#get-user-profile)
  - [Logout User](#logout-user)
- [Captain API](#captain-api)
  - [Register Captain](#register-captain)
  - [Login Captain](#login-captain)
  - [Get Captain Profile](#get-captain-profile)
  - [Logout Captain](#logout-captain)

---

# User API

## Register User

**Endpoint:** `/users/register`  
**Method:** `POST`  
**Description:** Register a new user account

### Request Body
```json
{
  "fullname": {
    "firstname": "John",     // Required, minimum 3 characters
    "lastname": "Doe"        // Required, minimum 3 characters
  },
  "email": "john.doe@example.com",  // Required, must be valid email format
  "password": "password123"         // Required, minimum 6 characters
}
```

### Responses

**201 Created**
```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
    // Password is not included in the response
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."  // JWT token valid for 24 hours
}
```

**400 Bad Request**
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

**409 Conflict**
```json
{
  "message": "User already exists"  // Email is already registered
}
```

**500 Internal Server Error**
```json
{
  "message": "Internal server error"
}
```

## Login User

**Endpoint:** `/users/login`  
**Method:** `POST`  
**Description:** Authenticate a user and get a JWT token

### Request Body
```json
{
  "email": "john.doe@example.com",  // Required, must be valid email format
  "password": "password123"         // Required, minimum 6 characters
}
```

### Responses

**200 OK**
```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
    // Password is not included in the response
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."  // JWT token valid for 24 hours
}
```

**401 Unauthorized**
```json
{
  "message": "Invalid credentials"  // Email not found or password doesn't match
}
```

**422 Unprocessable Entity**
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

**500 Internal Server Error**
```json
{
  "message": "Internal server error"
}
```

## Get User Profile

**Endpoint:** `/users/profile`  
**Method:** `GET`  
**Description:** Get the authenticated user's profile details  
**Authentication:** Required (JWT token in Authorization header)

### Request
No request body needed. Authentication via token is required:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Responses

**200 OK**
```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
    // Password is not included in the response
  }
}
```

**401 Unauthorized**
```json
{
  "message": "Unauthorized"  // No valid token provided or token expired
}
```

**500 Internal Server Error**
```json
{
  "message": "Internal server error"
}
```

## Logout User

**Endpoint:** `/users/logout`  
**Method:** `GET`  
**Description:** Logout a user by invalidating their token  
**Authentication:** Required (JWT token in Authorization header)

### Request
No request body needed. Authentication via token is required:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Responses

**200 OK**
```json
{
  "message": "Logged out successfully"  // Token is blacklisted and cookie is cleared
}
```

**401 Unauthorized**
```json
{
  "message": "Unauthorized token not available"  // No token provided
}
```

**500 Internal Server Error**
```json
{
  "message": "Internal server error"
}
```

---

# Captain API

## Table of Contents
- [Register Captain](#register-captain)
- [Login Captain](#login-captain)
- [Get Captain Profile](#get-captain-profile)
- [Logout Captain](#logout-captain)

## Register Captain

**Endpoint:** `/captains/register`  
**Method:** `POST`  
**Description:** Register a new captain account

### Request Body
```json
{
  "fullname": {
    "firstname": "John",     // Required, minimum 3 characters
    "lastname": "Doe"        // Optional, but if provided, minimum 3 characters
  },
  "email": "john.doe@example.com",  // Required, must be valid email format
  "password": "password123",        // Required, minimum 6 characters
  "vehicle": {
    "color": "Black",        // Required, minimum 3 characters
    "plate": "ABC1234",      // Required, minimum 3 characters
    "capacity": 4,           // Required, must be a number
    "vehicleType": "car"     // Required, must be one of: "car", "motorcycle", "auto"
  }
}
```

### Responses

**201 Created**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",  // JWT token valid for 24 hours
  "captain": {
    "_id": "60d0fe4f5311236168a109ca", 
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC1234",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",  // Default status for new captains
    "createdAt": "2023-06-22T12:34:56.789Z"
  }
}
```

**409 Conflict**
```json
{
  "message": "Captain already exists"  // Email is already registered
}
```

**422 Unprocessable Entity**
```json
{
  "errors": [
    {
      "msg": "Invalid Email",  // Email must be in valid format
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
    // Other validation errors as applicable
  ]
}
```

**500 Internal Server Error**
```json
{
  "message": "Internal server error"
}
```

## Login Captain

**Endpoint:** `/captains/login`  
**Method:** `POST`  
**Description:** Authenticate a captain and get a JWT token

### Request Body
```json
{
  "email": "john.doe@example.com",  // Required, must be valid email format
  "password": "password123"         // Required, minimum 6 characters
}
```

### Responses

**200 OK**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",  // JWT token set in cookies, valid for 24 hours
  "captain": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC1234",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",
    "createdAt": "2023-06-22T12:34:56.789Z"
    // Password is not included in the response
  }
}
```

**401 Unauthorized**
```json
{
  "message": "Invalid credentials"  // Email not found or password doesn't match
}
```

**422 Unprocessable Entity**
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

**500 Internal Server Error**
```json
{
  "message": "Internal server error"
}
```

## Get Captain Profile

**Endpoint:** `/captains/profile`  
**Method:** `GET`  
**Description:** Get the authenticated captain's profile details  
**Authentication:** Required (JWT token in Authorization header or cookies)

### Request
No request body needed. Authentication via token is required:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Responses

**200 OK**
```json
{
  "captain": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC1234",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",
    "createdAt": "2023-06-22T12:34:56.789Z",
    "location": {  // May be null if location is not set
      "lat": 37.7749,
      "long": -122.4194
    }
  }
}
```

**401 Unauthorized**
```json
{
  "message": "Unauthorized"  // No valid token provided or token expired
}
```

**500 Internal Server Error**
```json
{
  "message": "Internal server error"
}
```

## Logout Captain

**Endpoint:** `/captains/logout`  
**Method:** `GET`  
**Description:** Logout a captain by invalidating their token  
**Authentication:** Required (JWT token in Authorization header or cookies)

### Request
No request body needed. Authentication via token is required:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Responses

**200 OK**
```json
{
  "message": "Logged out successfully"  // Token is blacklisted and cookie is cleared
}
```

**401 Unauthorized**
```json
{
  "message": "Unauthorized token not available"  // No token provided
}
```

**500 Internal Server Error**
```json
{
  "message": "Internal server error"
}
```






