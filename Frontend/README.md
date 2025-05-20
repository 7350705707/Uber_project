# Uber Clone Frontend

A modern ride-sharing application frontend built with React and Vite. This application provides separate interfaces for users (passengers) and captains (drivers), with authentication and protected routes.

## 📋 Features

- **User Authentication**: Secure login and signup for both users and captains
- **Protected Routes**: Authenticated access to app features
- **Dual Interface**: Separate workflows for users and captains
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Context API**: State management using React Context
- **JWT Authentication**: Secure token-based authentication
- **Form Validation**: Client-side validation for all input forms
- **Custom Components**: Specialized input fields for license plates and vehicle details
- **Error Handling**: Comprehensive error handling for API requests
- **Interactive Ride Booking**: Multi-step ride booking flow with location selection and vehicle options
- **GSAP Animations**: Smooth transitions and animations for UI elements
- **Dynamic Panels**: Interactive panels for location search, vehicle selection, and ride confirmation

## 🚀 Technologies Used

- **React**: Frontend library for building user interfaces
- **Vite**: Next-generation frontend tooling
- **React Router DOM**: Navigation and routing
- **Axios**: HTTP requests to backend API
- **Tailwind CSS**: Utility-first CSS framework
- **Context API**: State management solution
- **JWT**: JSON Web Tokens for secure authentication
- **React Hooks**: For functional component state and effects
- **LocalStorage**: For client-side token persistence

## 🛠️ Project Structure

```
src/
├── App.jsx              # Main application component with routes
├── main.jsx             # Entry point with context providers
├── index.css            # Global styles
├── components/          # Reusable UI components
│   ├── ConfirmedRide.jsx    # Ride confirmation display
│   ├── LocationSearchPanel.jsx  # Location search interface
│   ├── LookingForDriver.jsx  # Driver search display
│   ├── Riding.jsx      # Active ride interface
│   ├── VehiclePanel.jsx   # Vehicle selection interface
│   └── WaitForDriver.jsx  # Waiting for driver display
├── Context/             # React context for state management
│   ├── CaptainContext.jsx  # State for captain data
│   └── userContext.jsx     # State for user data
└── pages/               # Application pages
    ├── common/          # Shared components
    │   └── Start.jsx    # Landing page
    ├── UserPages/       # User-specific pages
    │   ├── UserLogin.jsx     # User login form
    │   ├── UserSignup.jsx    # User registration form
    │   ├── UserLogout.jsx    # User logout handling
    │   ├── UserProtectedWrapper.jsx  # Route protection
    │   └── Home.jsx          # User dashboard with ride booking
    └── CaptainPages/    # Captain-specific pages
        ├── CaptainLogin.jsx     # Captain login form
        ├── CaptainSignup.jsx    # Captain registration with vehicle details
        ├── CaptainLogout.jsx    # Captain logout handling
        ├── CaptainProtectedWrapper.jsx  # Route protection
        └── CaptainHome.jsx      # Captain dashboard
```

**Public Assets:**
```
public/
└── Logos/              # Application logos and images
    ├── traffic.jpg
    ├── uber_logo_dark.png
    └── Uber_logo.png
```

## 🔧 Installation and Setup

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd Uber_project/Frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   VITE_API_URL=http://localhost:8080
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

## 🔐 Authentication Flow

The application implements a comprehensive authentication system:

### Token Management
- JWT tokens are stored in localStorage:
  - User tokens with key "token"
  - Captain tokens with key "captainToken"
- Tokens are set with expiration and verified on the backend

### Protected Routes
- `UserProtectedWrapper` and `CaptainProtectedWrapper` components ensure:
  - Valid token exists before rendering protected content
  - Redirect to login page if token is missing or invalid
  - Automatic loading state while validating tokens

### API Authentication
- All protected API requests include the JWT token in the Authorization header
- Backend middleware validates tokens for every protected endpoint
- Token blacklisting on logout for security

### Context Management
- User and captain states are managed in separate contexts
- Authentication status is accessible throughout the application

## 👤 User vs. Captain Interfaces

The application features two separate user roles with dedicated interfaces:

### User (Passenger) Features
- Account creation with email validation
- Secure authentication and session management
- Ride requesting interface (in development)
- User dashboard to track past and current rides
- Profile management capabilities

### Captain (Driver) Features
- Specialized registration form with:
  - Vehicle details (type, capacity)
  - License plate validation (supports Indian format: MH16BA6715)
  - Vehicle categorization (car, auto, motorcycle)
- Captain dashboard for managing rides
- Fleet management capabilities

### Separation of Concerns
- Distinct authentication flows
- Role-specific protected routes
- Separate context providers for state management

## 🔄 API Integration

The frontend connects to an Express/Node.js RESTful API with the following integrations:

### Authentication Endpoints
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `POST /api/user/logout` - User logout and token blacklisting
- `POST /api/captain/register` - Captain registration with vehicle details
- `POST /api/captain/login` - Captain login
- `POST /api/captain/logout` - Captain logout and token blacklisting

### Protected Endpoints
- User-specific endpoints protected with user authentication
- Captain-specific endpoints protected with captain authentication
- Middleware-based token validation

### Error Handling
- Comprehensive client-side validation before API calls
- Proper error response handling with user feedback
- Network error detection and retry mechanisms

## 📱 Responsive Design

The UI is built with Tailwind CSS to ensure a seamless experience across devices of all sizes.

## 📝 Form Validation

The application implements comprehensive form validation:

### User Registration Validation
- Email format validation
- Password strength requirements
- Required field checks
- Real-time feedback to users

### Captain Registration Validation
- Vehicle license plate validation with regex pattern
  - Supports Indian license plate format (e.g., MH16BA6715)
  - Automatic formatting and validation
- Vehicle type selection with dropdown menu
- Capacity validation with numerical limits
- Field-level error messages

### Login Form Validation
- Credential format validation
- Comprehensive error handling for failed login attempts
- Clear user feedback messages
