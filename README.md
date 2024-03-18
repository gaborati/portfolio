Personal Portfolio

This personal portfolio is an application built with a PHP backend and a React frontend. It utilizes the Bootstrap framework and carousel component.

Installation

Clone the project to your local machine:

git clone <>

Install the frontend dependencies:

cd personal-portfolio2-frontend

npm install

Start the frontend application:

npm start dev 

Install the backend dependencies and configure environmental variables:

cd backend

composer install

cp .env.example .env

Create the database and run migrations:

php artisan migrate

Start the backend application:

php artisan serve
