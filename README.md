# Monolithic Node Backend boilerplate

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Monolithic Node Backend boilerplate is an express boilerplate used to build powerful modern monolithic backend apis and web applications. It is generated with the help of express generator (https://expressjs.com/en/starter/generator.html). It is based on `monolithic software architechture` and uses `Service Layer Architechture` design pattern. 

It consists following layers:-

- routes
- validators
- middlewares
- controllers
- services
- models

Along with above main layers, it also contains various other sub-layers like:-

- constants
- lib
- providers
- utils
- scripts
- database / migrations

## Installation
- Pre-requisites
    > node-backend-monolithic-boilerplate requires Node.js v10+ to run.

    > node-backend-monolithic-boilerplate requires PostgreSQL v9+ to run.
    
    Clone the project by copying below mentioned command into your directory :-

    ```sh
    git clone https://gitlab.com/quoted-infotech/node-backend-monolithic-boilerplate.git
    ```

    Change directory to ems by typing below mentioned command :-

    ```sh
    cd node-backend-monolithic-boilerplate
    ```

    Now run below mentioned command to install neccessary dependencies into your project :-

    ```sh
    npm install
    ```

    ## Configuring the Environment
    In order to properly run the system, you have to first configure `.env` file as per the guidelines given in `example.env` or as per your project requirement.

     ## Important
    Install nodemon as a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. Install it using below command :-

    ```sh
    npm install -g nodemon
    ```

    ## Executing the server

    In order to start the server to work, you can execute the command which is mentioned below :-

    * Run the app(For development) by

        ```
        npm run dev
        ```

    * Run the app by(For production)

        ```
        npm start
        ```

    This would execute the code from ems/bin/www directory

## Makefile Commands

1) Display linting for all files

    ```sh
    make all
    ```

2) Autofix fixable errors for linting for all files

    ```sh
    make all_fix
    ```

3) Display linting for staged files

    ```sh
    make lint
    ```

4) Autofix fixable errors for linting in staged files

    ```sh
    make lint_fix
    ```