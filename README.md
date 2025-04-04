
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
- Users can see all of the shortened links created by them on their dashboard page.
- Ensures the app works seamlessly across mobile devices and desktops.


## TechStack

**Client:** React.js, Tailwind-CSS, Axios, React-Hook-Forms, Material-UI, Chart.js, Vite.js

**Server:** SpringBoot, Docker, JWT, MySQL, Spring Security, Spring Data JPA

**Hosting Services:** Netlify (Front-End), Render (Back-End), Neon's Cloud Database (SQL Database)

## Screens

### 1) <ins>Homepage</ins>

![snaplink-url-shortener netlify app_ (2)](https://github.com/user-attachments/assets/3b20f35a-c2f4-472b-ba1f-20fb18c3b2d3)

&nbsp;

### 2) <ins>About Page</ins>

![snaplink-url-shortener netlify app_about](https://github.com/user-attachments/assets/6b0827d9-8c76-41be-85bc-3ce62df0dfeb)

&nbsp;

### 3) <ins>Sign-Up Page</ins>

![register page](https://github.com/user-attachments/assets/a7ec705f-d9cf-41ac-bb0d-6b8bc8965c6f)

&nbsp;

### 4) <ins>Login Page</ins>

![login page](https://github.com/user-attachments/assets/db695849-1585-4727-b2ca-4aad26d40cf3)

&nbsp;

### 5) <ins>Dashboard Page - Total Clicks Analytics / Short URL Creation button</ins>

![Dashboard Analytics data](https://github.com/user-attachments/assets/46454af2-8060-44d6-929d-cdb452f214f8)

&nbsp;

### 6) <ins>Dashboard Page - List of Created URLs (by a user)</ins>

![Created urls in Dashboard](https://github.com/user-attachments/assets/42338b00-8557-443c-8355-0d03ab1ea1ba)

&nbsp;

### 7) <ins>Dashboard Page - Click Analytics Per URL</ins>

![Per url analytics](https://github.com/user-attachments/assets/60ad4f10-35dd-46a1-86f7-9e62f3770ed9)

&nbsp;

## Authors

- [@Khateebxtreme](https://github.com/Khateebxtreme)

## Roadmap

- Adding Anon functionalities to short links (only available for a particular session) next.
- Adding Delete functionality for user created URLs -> (will remove the url from the given link list, will also remove anything from the database concerning this URL including analytics and mapping history)




