**IhuZA Inventory Management System**
---
A React.js-based user interface for inventory management and product assignment tracking.

**Project Overview**
---
This is a frontend implementation of an inventory management system that allows users to monitor inventory status, track product assignments, and manage user roles. The interface features a clean light theme with real-time data visualization.

**Features**
---
Dashboard Overview: View system status and recent activity

User Management: Browse users with roles (Admin, Manager, Staff) and status tracking

Inventory Tracking: Monitor product stock levels and recent additions

Activity Log: Track recent system events and assignments

Responsive Design: Works on desktop and mobile devices

**Demo Login**
---
To test the interface, use these credentials:

Email: john.smith@ihuza.com

Password: 123

Technology Stack
React.js

Context API for state management

tailwindCSS for styling

Component-based architecture

**Project Structure**
---
text
---
src/
---
├── components/     # Reusable UI components
---
├── contexts/       # React Context providers
---
├── pages/          # Main view components
---
├── styles/         # CSS files
---
└── utils/          # Helper functions
---
Getting Started
---
Clone the repository

Install dependencies: npm install

Start the development server: npm start

Open http://localhost:3000 in your browser

**Login with the demo credentials**
---
Available Scripts
npm start - Runs the app in development mode

npm build - Builds the app for production

npm test - Launches the test runner

User Roles
The system supports three user roles:

Admin: Full system access

Manager: Staff and inventory management

Staff: Limited access for viewing assignments

Components
---
Login authentication interface

Dashboard with system overview

User management table

Inventory tracking display

Recent activity timeline

Quick action navigation

**Note**
---
This is a frontend-only implementation with simulated authentication for demonstration purposes. All data is static and mock for UI/UX testing.
