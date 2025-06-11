# Next.js Dashboard and Auth Example

## Overview

This is a simple authentication and dashboard example built with **Next.js**.  
Users can log in by entering their phone number (validated for Iranian format), and upon successful login, they are redirected to the dashboard page.  
The dashboard displays the user's full name and profile picture, and includes a logout button.

## Features

- Phone number validation for Iranian phone numbers
- User information saved temporarily in `localStorage`
- Dashboard shows user's name and avatar
- Automatic redirect to login if user is not authenticated
- Responsive design for mobile and desktop devices
- Submit login form on Enter key press
- Customizable button component with different styles (e.g., red logout button)

## Technologies

- Next.js (App Router, React Server & Client Components)
- React (with hooks and client-side state)
- CSS Modules / SCSS for styling
- Fetch API for getting user data from external API

## Getting Started

1. Clone the repository:

```bash
git clone [https://github.com/AliNikseresht/decamond-task]

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Project Structure

- /app/auth — Login page with phone input and validation

- /app/dashboard — User dashboard page displaying welcome message and avatar

- /components/Button — Reusable button component with style variants

- /components/Input — Custom input component with error display

## Usage Notes

- The phone number must be valid according to Iranian phone number format (/^(\+98|0)?9\d{9}$/).

- User data is stored in the browser’s localStorage for session persistence.

- Pressing Enter submits the login form automatically.

- The UI is fully responsive and adapts to different screen sizes.
