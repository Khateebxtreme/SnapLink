# SnapLink

**SnapLink** is a powerful URL shortener app designed for both personal and professional use. It not only shortens links but also provides detailed usage analytics. Built with security in mind, SnapLink ensures that all shortened links are protected, offering features like password protection and expiration dates to control access.

## Table of Contents

- [Features](#features)
- [TechStack](#techstack)
- [Screens](#screens)
- [Authors](#authors)
- [Roadmap](#roadmap)

## Features

- Users can input long URLs, and the app generates short, user-friendly links.
- Users can sign up, log in, and manage their links via a secure account system.
- Track the number of times the short link is clicked and Monitor how effective the shortened link is through analytics charts created using chart.js
- Users can see and manage all of the shortened links created by them on their dashboard page.
- Ensures the app works seamlessly across mobile devices and desktops.

## TechStack

**Client:** React.js, Tailwind-CSS, Axios, React-Hook-Forms, Material-UI, Chart.js, Vite.js

**Server:** SpringBoot, Docker, JWT, MySQL, Spring Security, Spring Data JPA

**Hosting Services:** Netlify (Front-End), Render (Back-End), Neon's Cloud Database (SQL Database)

## Screens

### 1) <ins>Homepage</ins>

![localhost_5173_(Nest Hub Max)](https://github.com/user-attachments/assets/aaf1be57-361a-4676-8bbb-b4a4d7215aeb)

&nbsp;

### 2) <ins>About Page</ins>

![About_page](https://github.com/user-attachments/assets/7a53f5bf-1233-4484-891c-c2a065ecc2d4)

&nbsp;

### 3) <ins>Sign-Up Page</ins>

![Register_Page](https://github.com/user-attachments/assets/7ed33d5a-396e-48af-921f-c60c11f0cae9)

&nbsp;

### 4) <ins>Login Page</ins>

![Login_Page](https://github.com/user-attachments/assets/ab9fbef0-5ce0-4fd3-9ba0-ef90c424d765)

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

- Adding Delete functionality for user created URLs -> (will remove the url from the given link list, will also remove anything from the database concerning this URL including analytics and mapping history) -> <b>Feature is now officially released on codebase. It will be available on the web application soon.</b>
- Visual Theme update  -> Enhance the user interface with a refined color theme that improves visual hierarchy, accessibility, and modern design consistency across the platform. -> <b>Release Date : 26th April, 2025</b>
- Temporary QR Code Generation for Guest users -> Enables users who are not logged in to create temporary QR codes for URLs, facilitating quick and easy access. -> <b>Release Date : 30th April, 2025</b>
- Adding URL validation to check (valid, is malicious or not etc) the urls before they are converted to short Urls. -> <b>Release Date : TBD</b>

