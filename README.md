# Welcome to Talker Manager project ! :zap:

## About :grey_question:

Is an application where we can manage talkers ... creating, reading, searching, editing and deleting information about them.
For that, we have an API to support us to do a CRUD.

## Tecnologies used :gear:

<strong><h3>Back-end :</h3></strong>
> Docker, Docker Compose, Node.js, JavaScript, Express, Nodemon

<strong><h3>Tests :</h3></strong>
> Jest, Mocha, Chai, Sinon, Frisby

## Running the application :computer:

1. <strong><h3>Clone the repository</h3></strong>
    ```
    git clone git@github.com:ivictorborges/talker-manager.git
    ```

2. <strong><h3>Go to folder from repository that you just been clone</h3></strong>
    ```
    cd talker-manager
    ```

3. <strong><h3>Run the conteiners</h3></strong>
    - You must be have Docker and Docker Compose installed
    - Then, run the follow command
        ```
        docker-compose up -d
        ```

4. <strong><h3>Execute the conteiners</h3></strong>
    ```
    docker exec -it talker_manager bash
    ```

5. <strong><h3>Install the dependencies</h3></strong>
    ```
    npm install
    ```

6. <strong><h3>Run the application</h3></strong>
    ```
    npm start
    ```
    or
    ```
    npm run dev
    ```
    
## Running the tests :test_tube:

- First of all, run the application with the follow command
    ```
    npm run dev
    ```

- Then, run the tests
    ```
    npm test
    ```

## Documentation :books:

<strong><h3>Routes - Login</h3></strong>

- <strong>POST</strong> <code>/login</code> : The endpoint should receive in the body of the request the <code>email</code> and <code>password</code> fields and return a random 16-character token.

    <details>
    <summary>Body request</summary><br />

    ```json
    {
        "email": "email@email.com",
        "password": "123456"
    }
    ```
    </details>

<strong><h3>Routes - Talker</h3></strong>

- <strong>GET</strong> <code>/talker</code> : The endpoint must return an array with all talkers registered.

- <strong>GET</strong> <code>/talker/:id</code> : The endpoint must return a talker by id.

- <strong>POST</strong> <code>/talker</code> : The endpoint should be able to add a new talker to its archive.

    <details>
    <summary>Body request</summary><br />

    ```json
    {
        "name": "Name Test",
        "age": 27,
        "talk": {
            "watchedAt": "22/10/2019",
            "rate": 5
           }
    }
    ```
    </details>

- <strong>PUT</strong> <code>/talker/:id</code> : The endpoint should be able to edit a talker based on the route id, without changing the registered id.

     <details>
     <summary>Body request</summary><br />

    ```json
    {
        "name": "Name Test",
        "age": 27,
        "talk": {
            "watchedAt": "22/10/2019",
            "rate": 5
           }
    }
    ```
    </details>

- <strong>DELETE</strong> <code>/talker/:id</code> : The endpoint should delete a talker by id.

- <strong>GET</strong> <code>/talker/search?q=searchTerm</code> : The endpoint should return an array of talkers that contain in their name the term searched in the URL queryParam.

