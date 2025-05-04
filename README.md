/**
 # /users/register Endpoint Documentation
 *
 * Description:
 * The `/users/register` endpoint lets clients register a new user. On a successful registration, it returns a JSON object with a JWT token and the user information.
 *

 *
 * Request Payload:
 * The endpoint expects a JSON body with the following structure:
 *
 ```json
 * {
 *   "fullname": {
 *     "firstname": "John",   // Minimum 3 characters required
 *     "lastname": "Doe"        // Required; minimum 3 characters enforced by the model
 *   },
 *   "email": "john.doe@example.com",  // Must be a valid email
 *   "password": "password123"           // Minimum 6 characters required
 * }

 ```
 *
 * Response:
 * - **400 Bad Request**  
 * If validation fails, the response will contain an `errors` array detailing the issues.
 *
 * **Example:**
```json
 * {
 *   "errors": [
 *     {
 *       "msg": "Invalid Email",
 *       "param": "email",
 *       "location": "body"
 *     },
 *     {
 *       "msg": "First name must be at least 3 characters long",
 *       "param": "fullname.firstname",
 *       "location": "body"
 *     }
 *   ]
 * }

 ```
 *
 */

  * **Endpoint Response:**
 * POST `/users/register`

```json
    {
        user: {
    "fullname": {
      "firstname": "John",   // Minimum 3 characters required
      "lastname": "Doe"        // Required; minimum 3 characters enforced by the model
    },
    "email":"john.doe@example.com",  // Must be a valid email
    "password": "password123"           // Minimum 6 characters required
  },
    token: "faslfjdsf"
    }
```




# **/users/login Endpoint Documentation**

 * **Description:**
 * The `/users/login` endpoint lets clients login a user. On a successful login, it returns a JSON object with a JWT token and the user information.



* **Request Payload:**
* The endpoint except the a json Body with following Structure.


{
    "email":(String) "example@gmail.com",
    "password":(String) "password234"
}


* **Request Endpoint Response:**
```json
{
    "user": (Object){
        "fullname":(Object) {
            "firstname": (String) "firstname",
            "lastname" : (String) "lastname"
        },
        "email" : (String) "example@gmail.com",
        "password":(String) "password234"
    }
    "token" : (String) "djfsjg;asdlfjsdj"
}

```


# `/user/profile` Endpoint

### Desciption

Retrives the profile information of the currently authenticated user.

### HTTP Method 

`GET`

### Authentication


Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`


### Example Response

- `user` (object):
    -`fullname` (object).
        -`lastname` (string): User's first name (minimum 3 characters).
        -`lastname` (string): User's last name (minimum 3 characters).
    -`email` (string):User's password (minimum 6 characters).
    -`password` (string): User's password (minimum 6 characters).




## `/user/logout` Endpoint

### Description 

Logout the current user and blacklist the token provided in cookie or headers

### HTTP Method

`GET`

### Authentication

Require a valid JWT token in the Authorization header:




### `/captains/register` Endpoint

#### Description

The `/captains/register` endpoint allows new captains to register in the system. On successful registration, it returns a JSON object with a JWT token and the captain information.

#### HTTP Method

`POST`

#### Request Payload

The endpoint expects a JSON body with the following structure:

```json
{
    "fullname": {
        "firstname": "John",     // Minimum 3 characters required
        "lastname": "Doe"        // Minimum 3 characters required
    },
    "email": "john.doe@example.com",  // Must be a valid email
    "password": "password123",        // Minimum 6 characters required
    "vehicle": {
        "color": "Black",        // Minimum 3 characters required
        "plate": "ABC1234",      // Minimum 3 characters required
        "capacity": 4,           // Must be at least 1
        "vehicleType": "car"     // Must be one of: "car", "motorcycle", "auto"
    }
}
```

#### Response

- **201 Created**  
    Returns the registered captain details and authentication token.

    ```json
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "captain": {
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
            "_id": "60d0fe4f5311236168a109ca",
            "createdAt": "2023-06-22T12:34:56.789Z"
        }
    }
    ```

- **409 Conflict**  
    If the captain with the given email already exists.

    ```json
    {
        "message": "Captain already exists"
    }
    ```

- **422 Unprocessable Entity**  
    If validation fails, the response will contain an `errors` array detailing the issues.

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

- **500 Internal Server Error**  
    If there is a server error during registration.

    ```json
    {
        "message": "Internal server error"
    }
    ```

#### Validation Rules

- `email`: Must be a valid email format
- `fullname.firstname`: Minimum 3 characters
- `password`: Minimum 6 characters
- `vehicle.color`: Minimum 3 characters
- `vehicle.plate`: Minimum 3 characters
- `vehicle.capacity`: Must be a number (and at least 1)
- `vehicle.vehicleType`: Must be one of: "car", "motorcycle", "auto"










