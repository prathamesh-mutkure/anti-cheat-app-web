


  
  
  
  
  <a id="about"> </a>

# Anti-Cheat Exam App 🌟

  
  

A platform that aims to stop cheating in online exams with the power of AI and ML.

  

This is the web version of my [Anti-Cheat Exam App](https://github.com/prathamesh-mutkure/anti-cheat-exam-app) with enhanced features, UI/UX, and performance.

  

<p  align="center">

<img  src="https://user-images.githubusercontent.com/28570857/178106216-25d91b1c-06cf-42fa-85fc-cf3540868b1f.png"/>

</p>

- <a href="https://anti-cheat-exam-app.vercel.app/" target="_blank">Demo</a>

- [About Project](#about)

- [Features and Interfaces](#features)
  - [Home](#home)
  - [Login and Authentication](#auth)
  - [Dashboard](#dashboard)
  - [Exam](#exam)
  - [Face Detection](#face)

- [Tech Stack](#tech-stack)
  - [Front-end](#frontend)
  - [Backend](#backend)
  - [Mobile App](#mobile)
  - [Other Tools](#other)

- [Important Points](#imp-points)
- [Getting Started Instructions](#instructions)
- [Test Cases](#test-cases)
- [Links](#links)
- [Contact](#contact)

  
  
  
  <a id="features"> </a>

## Features and Interfaces

  

I'm currently making some final changes to the web app and will soon update this document with the latest demo images of the web app.



1. Home Page   <a id="home"> </a>

   - [Landing Page](https://anti-cheat-exam-app.vercel.app/) which lists all the features of the app
  
   <img width="1835" alt="Screenshot 2022-11-13 at 4 36 11 PM" src="https://user-images.githubusercontent.com/28570857/201518806-155ea557-79cd-4c81-948a-af9575cbff57.png">

   <img width="1835" alt="Screenshot 2022-11-13 at 6 04 36 PM" src="https://user-images.githubusercontent.com/28570857/201521938-de2f9979-7490-471e-b6be-0642f982b700.png">

 
 2.  Login Page (Authentication)  <a id="auth"> </a>
 
     - Fast and secure authentication 
     - JWT tokens used to persist the authentication state

     <img width="1835" alt="Screenshot 2022-11-13 at 4 35 42 PM" src="https://user-images.githubusercontent.com/28570857/201518738-83d0e340-9394-42c5-b0fe-6770eea2009d.png">
  
2. Dashboard <a id="dashboard"> </a>

	- Shows bried information about all the exams assigned to the user

	- The user can start an exam only at the correct timeslot

    <img width="1835" alt="Screenshot 2022-11-13 at 4 37 01 PM" src="https://user-images.githubusercontent.com/28570857/201518882-8cdf77fb-25a1-4427-b3d5-d015d47a8829.png">

  
  
3. Exam Page <a id="exam"> </a>

   - Simple and minimalistic exam page where the user can answer MCQ-based questions

   - The user can view and track their progress
  

   <img width="1835" alt="Screenshot 2022-11-13 at 5 59 55 PM" src="https://user-images.githubusercontent.com/28570857/201521732-02537090-8757-451a-9d31-49df9bd6aad3.png">

   <img width="1801" alt="Screenshot 2022-11-13 at 6 19 48 PM" src="https://user-images.githubusercontent.com/28570857/201522628-e2007a34-fe57-44cf-bc45-a6a17963ed4c.png">

  
  
  
7. AI-powered face motion detector <a id="face"> </a>

   - I've used Google's Mediapipe library to track the motion of the user's face

   - This app can check if a user is trying to cheat by monitoring the co-ordinates of their face

   - The face detection is performed on-device without sending anything to the backend

   - Thus, Face detection is fast and real-time

  

      https://user-images.githubusercontent.com/28570857/205257552-5aa0235b-ddee-463a-b746-2ecc06ba8c4f.mp4

  
  
  

## Tech stack

  
  <a id="frontend"> </a>
#### Frontend

- Next.js (React)

- TypeScript
- Redux

  
  
<a id="backend"> </a>
#### Backend

- Nodejs

- Express

- MongoDB

  <a id="mobile"> </a>
#### Mobile App
- Flutter
- MobX + Provider


<a id="other"> </a>
#### Other Tools

- Google Mediapipe (Web)
- Google on-device ML-Kit (Mobile)

  

<a id="imp-points"> </a>
## Points to remember while testing the app

  

1. First setup the backend by following the instructions in this [repository](https://github.com/prathamesh-mutkure/anti-cheat-app-backend)

2. The test username and password are given in the login form

6. Allow **permissions** for camera and mic when asked

7. Make sure the `BACKEND_URL` is appended with `/api`

  

<a id="instructions"> </a>
## Instructions

  
  

1. Clone the project

   -  `https://github.com/prathamesh-mutkure/anti-cheat-app-web.git`

3. Install all the packages

   -  `npm install`

5. Create a `.env` file and set the following variables or as shown in the `.env.example` file

   -  `BACKEND_URL`

   -  `AUTH_SECRET`

6. Run the app

   -  `npm run dev`

7. Open `http://localhost:3000` with your browser to see the app


## Test Cases <a  id="test-cases">  </a>


To make sure your changes don't break anything, run `npm run dev` to run unit tests. 
  
 
<a id="links"> </a>
## Useful Links

  

- [Project Demo](https://anti-cheat-exam-app.vercel.app/)
- [Mobile App](https://github.com/prathamesh-mutkure/anti-cheat-exam-app) (Android & iOS)

- [Backend Repository](https://github.com/prathamesh-mutkure/anti-cheat-app-backend)

- [Project Thesis](https://drive.google.com/file/d/1fXXXjcE74pIOEwavstTmporuOECc7cUu/view) (Submitted mobile app as final year project for my diploma)

  
  
<a id="contact"> </a>
## Need help?

  

Feel free to contact me on [Twitter](https://twitter.com/prathamesh_io/) or [LinkedIn](https://www.linkedin.com/in/prathamesh-mutkure/), know more about me at [prathamesh.co](https://prathamesh.co)

  

[![Twitter](https://img.shields.io/badge/Twitter-follow-blue.svg?logo=twitter&logoColor=white)](https://twitter.com/prathamesh_io/) [![Instagram](https://img.shields.io/badge/Instagram-follow-purple.svg?logo=instagram&logoColor=white)](https://www.instagram.com/prathamesh_mutkure/)