# Tractain FullStack Challenge - Backend

## Situation

Our users, Emerson and Roberta, are maintenance managers at Industria Freios Supremos (auto parts manufacturer), and they have 2 units and 10 assets (machines) in total. They would like to be able to register and view both the units separately, as well as have an overview that condenses the data from the two units.

## The Challenge

Build a CRUD where the user can register companies, units, assets and users.

### Important:
- Each asset must have an image, name, description, model, owner, status and health level;
- Each asset is part of a unit;
- Each unit is part of a company;
- Every user is part of a company;
- There are three types of status: Running, Alerting, Stopped;
- Health level needs to be between 0% to 100%.

### Mandatory:
- Database (MongoDB)
- Engine (NodeJS w/ Express)

### Differentials:
- Typescript;
- Design Standard (Clean Code/Clean Architecture).

## Solution

- A free tier MongoDB created on Atlas service
- A Heroku free App connected to this project and deployed from it's source code
- Backend URL: https://tractianlrc.herokuapp.com

## How to run it locally
- Dependencies: npm and git
- Clone this project
- Since inside the project folder run: `npm i && npm start`
