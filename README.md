




# Anti-Cheat Exam App  🌟


A Web App that aims to stop cheating in online exams with the power of AI and ML. 

This is the web version of my [Anti-Cheat Exam App](https://github.com/prathamesh-mutkure/anti-cheat-exam-app) with enhanced features, UI/UX, and performance.

<p align="center">  
<img src="https://user-images.githubusercontent.com/28570857/178106216-25d91b1c-06cf-42fa-85fc-cf3540868b1f.png"/>  
</p>



## Features and Interfaces

The demo images and screenshots are from the mobile app, I'm currently making some final changes to the web app and will soon update this document with demo images of the web app.

1. Home Page
   - Landing Page which lists all the features of the app

2. Dashboard
   - Shows all the exams assigned to the user
   - The user can start an exam only at the correct timeslot
   - Logout through the button in the app bar

3. Exam Page
   - The user can answer MCQ-based questions
   - The user can also view their progress

   - ![image](https://user-images.githubusercontent.com/28570857/179022654-f59b6b0c-77d7-48f4-9a55-32813378a696.png)


7. AI-powered face motion detector
   - I've used Google's Mediapipe library to track the motion of the user's face
   - This app can check if a user is trying to cheat by monitoring the co-ordinates of their face
   - The face detection is performed on-device without sending anything to the backend
   - Thus, the Face detection is fast and real-time 

   - ![image](https://user-images.githubusercontent.com/28570857/179022316-45cf8a11-9d5a-411f-b4ce-89d1ea02e478.png)



## Tech stack

#### Frontend
- Next.js (React)
- TypeScript


#### Backend
- Nodejs
- Express
- MongoDB

#### Other Tools
- Google Mediapipe (ML Library)

## Points to remember while testing the app

1. First setup the backend by following the instructions in this [repository](https://github.com/prathamesh-mutkure/anti-cheat-app-backend)
2. The test username and password are given in the login form
6. Allow **permissions** for camera and mic when asked
7. Make sure the `BACKEND_URL` is appended with `/api`

## Instructions


1. Clone the project
   - `https://github.com/prathamesh-mutkure/anti-cheat-app-web.git`
3. Install all the packages
   - `npm install`
5. Create a `.env` file and set the following variables or as shown in the `.env.example` file
   -  `BACKEND_URL`
   - `AUTH_SECRET`
6. Run the app
   - `npm run dev`
7. Open `http://localhost:3000` with your browser to see the app


## Useful Links

- [Mobile App](https://github.com/prathamesh-mutkure/anti-cheat-exam-app) (Android & iOS)
- [Backend Repository](https://github.com/prathamesh-mutkure/anti-cheat-app-backend)
- [Project Thesis](https://drive.google.com/file/d/1fXXXjcE74pIOEwavstTmporuOECc7cUu/view)  (Submitted mobile app as final year project for my diploma)


## Need help?

Feel free to contact me on [Twitter](https://twitter.com/Prathamesh_M009/)  or [LinkedIn](https://www.linkedin.com/in/prathamesh-mutkure/), know more about me at [prathamesh.co](https://prathamesh.co)

[![Twitter](https://img.shields.io/badge/Twitter-follow-blue.svg?logo=twitter&logoColor=white)](https://twitter.com/Prathamesh_M009/) [![Instagram](https://img.shields.io/badge/Instagram-follow-purple.svg?logo=instagram&logoColor=white)](https://www.instagram.com/prathamesh_mutkure/) 