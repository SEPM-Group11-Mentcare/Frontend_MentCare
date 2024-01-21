# Frontend

# Group 11: MindHeal - Online mental counseling platform

**_Disclaimer: As we are using a free tier service, you will need to wait around a minute when you first open the link. After that, the link works smoothly. For more information, refer to Technologies section below._**
<br />

<hr>
- Project start date: 30/10/2023
<br />
- Project end date: 21/01/2024

## Project Structure

```
FRONTEND_MENTCARE/
├── src/
|   ├── assets/
|   ├── components/
|   ├── context/
|   ├── pages/
|   ├── routes/
|   ├── service/
|   ├── utils/    
├── .env
├── App.js
├── App.css
├── index.css
├── index.js
├── package-lock.json
├── package.json
├── README.md
```

1. `assets/`
This directory stores images needed to build the website UI

2. `componets/`
The views directory contains all the components on the website

3. `context`
This directory store the context of each function, mainly supporting the useContext for fetching data 

4. `pages`
The directory contains files related to that website pages, such as homepage, dashboard, etc.

5. `routes`
This stores the public and private routes of the layouts. It works with the `controllers` and `middleware` to define the page route and control user access to each pages.

6. `service`
This directory store the integrate of backend and frontend, using axios to fetch data. 

7. `utils`
This directory's purpose is to create tokens, connect with and validate MongoDB ID

8. `.env`
   This file contains ENVIRONMENT VARIABLES such as ACCESS KEY, which is meant to be hidden and ignored by `.gitignore`

9. `package.json` & `package-lock.json`
   Manage dependencies and package versions.

10. `README.md`
   A text file containing useful reference information about this project.

## About:

This is an assignment project for ISYS2101 Software Engineering Project Management offered at RMIT University Vietnam during Semester 2023C.

- Campus: Saigon South (SGS), Vietnam

- Lecturer: Dr. Tran Minh Tuan 

### Technologies used:

**MERN Stack**

- Frontend: ReactJS, TailwindCSS
- Backend: NodeJS, ExpressJS
- Database: MongoDB
- Deployment: Netlify + Vercel

### Supporting tools used

- UI Prototype: Figma
- Management: Jira Software
- Other resources:TailWindCSS docs, RMIT Canvas, NPM Package, ChatGPT, Packages' Docs
- Packages: Refer to package.json and package-lock.json

## Build

To clone and run this project, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](https://npmjs.com)) installed on your computer.

- Prequisite: VSCode or Other IDE / Editor

- From your CLI, Terminal or SHELL:

```bash
# Clone this repository
$ git clone https://github.com/SEPM-Group11-Mentcare/Frontend_MentCare.git

# Install dependencies
$ npm install

# Start with npm
$ npm start

## Test accounts

1. Patient:

```
username: patient1
password: Patient@1234
```

2. Therapist:

```
username: therapist1
password: Therapist@1234
```

3. Admin:

```
username: admin1
password: Admin@1234
```

## License

This software is licensed under the MIT License ©
