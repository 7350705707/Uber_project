/**
 * /users/register Endpoint Documentation
 *
 * Description:
 * The `/users/register` endpoint lets clients register a new user. On a successful registration, it returns a JSON object with a JWT token and the user information.
 *
 * Endpoint:
 * POST `/users/register`
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
 * ```json
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
 * ```
 */