# Quotes JSON API

## Table of contents

- [Quotes JSON API](#quotes-json-api)
  - [Table of contents](#table-of-contents)
  - [General Information](#general-information)
  - [Technologies](#technologies)
  - [Project Objectives](#project-objectives)
  - [Setup](#setup)
  - [Endpoints](#endpoints)

## General Information

This is a practice Back-end Engineer project. For this project, I built an API that allows clients to create and access different quotes about computers, coding and technology.

## Technologies

- JavaScript
- Node.js
- Express.js
- HTML & CSS

## Project Objectives

- Build an API using Node.js and Express
- Be able to create and serve quotes
- Create endpoint(s) to create and retrieve quotes
- Use Git version control to keep track of works
- Use the command line to navigate your files and folders
- Use Postman to test API endpoints
- Use HTML and CSS to display user interface

## Setup

In order to run the program, you need to install Node.js on your computer:

- [Download](https://nodejs.org/en/download/) the binaries
- Once installed, you can then start the Express server by typing `node server.js`

## Endpoints

Once you have the server up and running, the following end points will be reachable in `http://localhost:4001/`:

GET

- `/api/quotes/random` - retrieve a random quote from the data
- `/api/quotes?person={name}` - retrieve all quotes by the author

POST

- `/api/quotes?quote={quote}&person={person}` - create new quote
