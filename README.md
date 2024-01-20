Group 11: MindHeal - Online mental counseling platform

Disclaimer: As we are using a free tier service, you will need to wait around a minute when you first open the link. After that, the link works smoothly. For more information, refer to Technologies section below. 

- Project start date: 30/10/2023 
- Project end date: 21/01/2024

Project Structure

Backend/
├── src/
|   ├── assets/
|   ├── components/
|   ├── context/
|   ├── pages/
|   ├── routes/
|   ├── service/
|   ├── utils/    
├── .env
├── Dockerfile
├── index.js
├── package-lock.json
├── package.json
├── README.md

assets/ This directory stores images needed to build the website UI

componets/ The views directory contains all the components on the website

context This directory store the context of each function

pages The directory contains .ejs files related to that website pages, such as homepage, dashboard, etc.

routes This stores the routes of the layouts. It works with the controllers and middleware to define the page route and control user access to each pages.

service This directory store the integrate of backend and frontend

utils This directory's purpose is to create tokens, connect with and validate MongoDB ID

.env This file contains ENVIRONMENT VARIABLES such as ACCESS KEY, which is meant to be hidden and ignored by .gitignore

package.json & package-lock.json Manage dependencies and package versions.

README.md A text file containing useful reference information about this project.

About:

This is an assignment project for COSC2634 Building IT Systen offered at RMIT University Vietnam during Semester 2023C.

Campus: Saigon South (SGS), Vietnam

Lecturer: Mr. Nguyen Hoang Thien Phuc

Technologies used:

MERN Stack

Frontend: ReactJS, TailwindCSS
Backend: NodeJS, ExpressJS
Database: MongoDB
Deployment: Netlify + Vercel
Supporting tools used

UI Prototype: Figma
Management: Jira Software
Other resources: TailWindCSS docs, RMIT Canvas, NPM Package, ChatGPT, Packages' Docs
Packages: Refer to package.json and package-lock.json
Build

To clone and run this project, you'll need Git and Node.js (which comes with npm) installed on your computer.

Prequisite: VSCode or Other IDE / Editor

From your CLI, Terminal or SHELL:

# Clone this repository
$ git clone https://github.com/SEPM-Group11-Mentcare/Frontend_MentCare.git

# Install dependencies
$ npm install

# Start with npm
$ npm start

# OR Start with node
$ node index.js

Test accounts
Patient:
username: 
password: 

Therapist:
username: 
password: 

Admin:
username: 
password: 

License

This software is licensed under the MIT License ©
