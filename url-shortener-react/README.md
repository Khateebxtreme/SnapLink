# SnapLink

**SnapLink** is a powerful URL shortener app designed for both personal and professional use. It not only shortens links but also provides detailed usage analytics. Built with security in mind, SnapLink ensures that all shortened links are protected, offering features like password protection and expiration dates to control access.

## Table of Contents

- [Features](#features)
- [TechStack](#techstack)
- [Screens](#screens)
- [Authors](#authors)
- [Roadmap](#roadmap)

## Features

- Developed SnapLink, a full-stack URL shortener web app using React.js, Spring Boot, and MySQL, with a
  focus on scalability and mobile-first responsive design.
- Implemented secure JWT-based authentication with Spring Security, enabling safe user registration, login, and
  link management.
- Integrated real-time link analytics using Chart.js, offering users insights into total clicks and link performance
  via interactive dashboards.
- Deployed the application using Netlify (frontend), Render (backend), Neon database, and Docker for backend
  containerization, ensuring efficient cloud hosting and CI/CD workflows.
- Built a QR code generation feature on the React frontend, allowing users to easily create, preview, and share
  QR codes for their Long URLs.
- Enhanced user experience with responsive UI components built using Material-UI and Tailwind CSS, ensuring mobile and desktop compatibility.

## TechStack

**Client:** React.js, Tailwind-CSS, Axios, React-Hook-Forms, Material-UI, Chart.js, Vite.js

**Server:** SpringBoot, Docker, JWT, MySQL, Spring Security, Spring Data JPA

**Hosting Services:** Netlify (Front-End), Render (Back-End), Neon's Cloud Database (SQL Database)

## Screens

### 1) <ins>Homepage</ins>

![localhost_5173_(Nest Hub Max)](https://github.com/user-attachments/assets/aaf1be57-361a-4676-8bbb-b4a4d7215aeb)

&nbsp;

### 2) <ins>QRify Page</ins>

![Qrify](https://github.com/user-attachments/assets/550aa1c2-a600-4d80-b008-9f26da563cd4)

&nbsp;

### 3) <ins>Sign-Up Page</ins>

![Register_page](https://github.com/user-attachments/assets/d8f8b34d-00be-4b42-91b2-c61ad7513ae2)

&nbsp;

### 4) <ins>Login Page</ins>

![Sign_in](https://github.com/user-attachments/assets/ba407cae-dcce-4d5a-a69c-9fe4a913210f)

&nbsp;

### 5) <ins>Dashboard Page - Total Clicks Analytics / Short URL Creation button</ins>

![Dashboard_graph](https://github.com/user-attachments/assets/ee31b686-8a31-4715-9b25-46df9d5ee5b2)

&nbsp;

### 6) <ins>Dashboard Page - List of Created URLs (by a user)</ins>

![List_of_Created_Urls](https://github.com/user-attachments/assets/79a243d7-65c8-412a-8cfe-cc2f88989eca)

&nbsp;

### 7) <ins>Dashboard Page - Click Analytics Per URL</ins>

![per_url](https://github.com/user-attachments/assets/e664c9de-cfbc-4a26-9658-d54d4c128bf6)

&nbsp;

## Authors

- [@Khateebxtreme](https://github.com/Khateebxtreme)

## Roadmap

1.  🗑️ Delete Functionality for User-Created URLs
    We have implemented the ability for users to delete their own shortened URLs. This feature :

         - Removes the selected URL from the user’s link list.
         - Deletes all associated data from the database, including analytics and redirection history.
         - Ensures full cleanup of records to maintain data integrity and privacy.

    ✅ This feature is now officially released in the codebase and will be available on the web application soon.

&nbsp;

2.  🎨 Visual Theme Update
    The platform has received a major UI enhancement with a new visual theme that:

         - Improves color contrast and readability for better accessibility.
         - Refines visual hierarchy to make navigation and usage more intuitive.
         - Aligns the interface with modern design standards for a cleaner, more professional look.

    ✅ The updated theme is now live on the website.

&nbsp;

3.  📱 Temporary QR Code Generation for Guest Users
    Guest users can now generate temporary QR codes for any URL, enabling quick and convenient sharing or access without needing to log in. This feature is designed to enhance usability for casual visitors and one-time users by:

         - Allowing QR generation directly from the homepage or extension.
         - Creating non-persistent codes that are not stored in the user database.
         - Ensuring fast, frictionless access for immediate use cases.

    ✅ This feature is now live as part of the V1.0.2 update.

&nbsp;

4.  🔗 Chrome Extension ->
    We are developing a lightweight Google Chrome extension to integrate the core features of the URL shortener directly into the browser. Planned capabilities include:

         - A popup interface for quickly shortening the current tab's URL.
         - One-click copy and open options for shortened links.

    ✅ URL Validity Checking->
    To improve reliability and user experience, we will implement automatic URL validation before shortening:

         - Checks for malformed or unreachable URLs.
         - HTTP status verification to ensure links are active and responsive.

    🔒 Malicious Link Detection (Planned)
    To enhance safety, we will integrate link scanning using threat detection services such as Google Safe Browsing or VirusTotal:

         - Automatic scanning of URLs to detect phishing, malware, or other malicious content.
         - Warnings or alerts when suspicious links are detected.
         - Optionally block or flag high-risk links before shortening.

    These features are currently under development and will be rolled out in stages. We welcome feedback and contributions from the community as we continue to build a safer and more convenient link management tool. Planned Release Date for an upcoming feature -> <b>Release Date : 30th May, 2025</b>
