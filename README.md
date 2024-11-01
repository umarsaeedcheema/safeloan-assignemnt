# Student-Teacher Booking App

An online platform that connects students with teachers. Students can log in to view available teachers, while teachers can log in to view their students.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Folder Structure](#folder-structure)
- [Usage](#usage)

---

## Features

- **Student Login and Dashboard**: Students can log in to view a list of available teachers.
- **Teacher Cards**: Each teacher is displayed on a card with their name, subject, and a "Book Class" button (non-functional for now).
- **Authentication with Firebase**: Secure authentication for both students and teachers.
- **Sign-Up Option**: Users can sign up with an email and password to create an account.
- **Logout Functionality**: Authenticated users can log out, which ends their session on Firebase.

## Technologies Used

- **Next.js** (with App Router)
- **Firebase** (Authentication)
- **React** (with functional components and hooks)
- **Material-UI** (for styling the components)

## Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your local machine

### Installation Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/umarsaeedcheema/safeloan-assignemnt.git
   cd safeloan-assignment
   ```

2. **Install Dependencies** :
    ```bash
    npm install
    ```
3. Run the Application:
    ```bash
    npm run dev
    ```
4. Access the Application:

    Open http://localhost:3000 in your browser.


## Folder Structure : 
```
src/
├── app/
│   ├── layout.tsx                  # Root layout component
│   ├── page.tsx                    # Home page with authentication check
│   ├── login/page.tsx              # Student login page
│   └── student-dashboard/page.tsx  # Dashboard displaying teacher cards
├── components/
│   └── TeacherCard.tsx             # Component for displaying teacher details
├── firebase-config.js              # Firebase configuration
└── globals.css                     # Global CSS styles
```

## Usage

### Logging In as a Student

1. Go to `/login` to access the student login page.
2. Enter the student credentials:
   - **Email**: `student@example.com`
   - **Password**: `password123`
3. Upon successful login, you’ll be redirected to the dashboard where you can view all teachers.

### Logging Out

1. While on the dashboard, click the **Logout** button.
2. You will be signed out and redirected to the login page.
