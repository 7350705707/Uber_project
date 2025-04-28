/**
 * /users/register Endpoint Documentation
 *
 * Description:
 * The `/users/register` endpoint lets clients register a new user. On a successful registration, it returns a JSON object with a JWT token and the user information.
 *

 *
 * Request Payload:
 * The endpoint expects a JSON body with the following structure:
 *
 * {
 *   "fullname": {
 *     "firstname": "John",   // Minimum 3 characters required
 *     "lastname": "Doe"        // Required; minimum 3 characters enforced by the model
 *   },
 *   "email": "john.doe@example.com",  // Must be a valid email
 *   "password": "password123"           // Minimum 6 characters required
 * }
 *
 * Response:
 * - **400 Bad Request**  
 * If validation fails, the response will contain an `errors` array detailing the issues.
 *
 * **Example:**

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
 *
 */

  * **Endpoint Response:**
 * POST `/users/register`

    {
        user: (Object){
 *   "fullname":(Object) {
 *     "firstname":(String) "John",   // Minimum 3 characters required
 *     "lastname":(String) "Doe"        // Required; minimum 3 characters enforced by the model
 *   },
 *   "email":(String) "john.doe@example.com",  // Must be a valid email
 *   "password":String "password123"           // Minimum 6 characters required
 * },
    token: (String)
    }
    




* **/users/login Endpoint Documentation**

 * **Description:**
 * The `/users/login` endpoint lets clients login a user. On a successful login, it returns a JSON object with a JWT token and the user information.



* **Request Payload:**
* The endpoint except the a json Body with following Structure.


{
    "email":(String) "example@gmail.com",
    "password":(String) "password234"
}


* **Request Endpoint Response:**

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