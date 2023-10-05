# sensAI
## Description
sensAI is an AI enhanced learning and management platform created as a group project during the July 2023 NorthCoders bootcamp.

### The Problem
There is a teacher retention and recruitment crisis due to high teacher workloads and this is negatively affecting student outcomes as teachers lack the time to provide quality feedback and tailored lesson plans.

### The Solution
We have created an app that utilises the power of AI to mark student work and generate assignments and lessons  on any subject, age group, and selected exam boards. sensAI can also be used to manage student lessons, assignments, and communicate between students as a teacher or to your teacher as a student. 

## Getting Started

### Prerequisites
Clone [sensAI_API](https://github.com/RonaldB123/sensAI_API) and follow instructions in readme.

### Clone repository

Paste into terminal

```
git clone https://github.com/RonaldB123/sensAI.git
```

### Installing dependencies

Paste into terminal

```
npm i
```

### Environment Variables

We need to create environment variables for the Firebase config.

Create a file called `.env` in the base root of the repository.

Paste inside the `.env` file:
```
VITE_REACT_APP_FIREBASE_KEY = 
VITE_REACT_APP_FIREBASE_DOMAIN = 
VITE_REACT_APP_FIREBASE_PROJECT = 
VITE_REACT_APP_FIREBASE_BUCKET = 
VITE_REACT_APP_FIREBASE_SENDER = 
VITE_REACT_APP_FIREBASE_APP = 
```

Populate the `.env` variables with your own Firebase config

See more about Firebase API key and configuration [Firebase](https://firebase.google.com/docs/projects/api-keys#:~:text=Creating%20API%20keys,-A%20Firebase%20project&text=Firebase%20automatically%20creates%20API%20keys,App%20%3E%20Android%20key%20auto%2Dcreated)

### Executing program

Paste in terminal

```
npm run dev
```

After executing, click the `https://localhost:` link provided in the terminal to view the website.

### Logging in

You must first sign in to either a teacher or student account to enter the website.

Teacher: email `user101.surname101@yahoo.com` and password `qwerty`

Student: email `user4.surname4@gmail.com` and password `qwerty`

