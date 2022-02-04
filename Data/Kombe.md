<!-- DETAILED INSTALLATION STEPS  -->

1. I forked the original repository of https://github.com/7AdvancedAcademy/cors-exercise-jan-2022.git into https://github.com/CKMolinga/cors-exercise-jan-2022.git

2. Next i made a local repository by clonining the original repository using "git clone" command.

3. Next i rename the original origin remote using: "git remote rename origin upstream" command.

4. Then i fetched the url of my fork (https://github.com/CKMolinga/cors-exercise-jan-2022.git) and added as origin with the command: git remote add origin https://github.com/CKMolinga/cors-exercise-jan-2022.git

5. On my git bash terminal, i navigated into my local repository and copied .env.example into a new file called .env using the command: "cp .env.example .env"

6. I then installed npm by running the command "npm install"

7. Finally i started the server by running the command: "npm run dev"

<!-- USE OF CORS IN server.js  -->
CORS allow the server.js to specify who can access the assets and which HTTP request methods are allowed from external resources.