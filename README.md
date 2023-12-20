
# NextJS Prisma ReactQuery Postgresql

<img src="https://github.com/Shaban-Eissa/NextJS-Prisma-ReactQuery-Blog/assets/49924090/24e967f7-ff4b-4a3f-9da3-75cbaa87f19d" width="900" height="450" />


A Fullstack Blog built with Next.js, Prisma, and Postgresql, ReactQuery.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)


## Features

- **Create Posts:** Allow users to create posts that stored on remote database on Vercel.
- **Delete Posts:** Allow users to delete posts that stored on remote database on Vercel.
- **Edit Posts:** Allow users to edit posts that stored on remote database on Vercel.


## Demo

<img src="https://github.com/Shaban-Eissa/NextJS-Prisma-ReactQuery-Blog/assets/49924090/6aa34ad6-faf6-41dd-9ae4-a08027cc0508" width="900" height="400" />

Check out the live demo https://next-js-prisma-react-query.vercel.app

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Shaban-Eissa/NextJS-Airbnb-Clone.git
   ```

2. Navigate to the project directory:
    
    ```bash
    cd NextJS-Airbnb-Clone
    ```
    
3. Install dependencies:
    
    ```bash
    npm install
    ```

4. Create Postgres Database on Vercel to make database available on remote site, use this guide:
    - https://vercel.com/docs/storage/vercel-postgres/quickstart
  
5. Create .env file:
    ```bash
    POSTGRES_URL=your_postgres_url
    POSTGRES_PRISMA_URL=your_postgres_prisma_url
    POSTGRES_URL_NON_POOLING=your_postgres_url_non_pooling
    POSTGRES_USER=your_postgres_user
    POSTGRES_HOST=your_postgres_host
    POSTGRES_PASSWORD=your_postgres_password
    POSTGRES_DATABASE=your_postgres_database
    ```
    replace ```your_postgres_url```, ```your_postgres_prisma_url```, etc. with your credentials that you get from Postgres Database on Vercel.

5. Open terminal and write ```npx prisma db push```. used to update the database schema to match your Prisma schema.
   It creates tables in the database if they don't exist, and updates existing tables if they are different.

6. Open terminal ans write ```npx prisma generate```. used to generate the Prisma Client based on your Prisma schema.

## Usage

1. Start the development server:
    
    ```bash
    npm run dev
    ```
    
2. Open your browser and visit [http://localhost:3000](http://localhost:3000).
    

## Technologies

This project utilizes a robust stack of modern technologies for efficient development and optimal user experience:

- Next
- Prisma
- React-Query
- React-Hook-Form
- TailwindCSS
- Typescript
  
## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature/bugfix: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

