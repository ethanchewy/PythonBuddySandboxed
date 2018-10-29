Uses [Docker Python Sandbox](https://github.com/christophetd/docker-python-sandbox) library to Sandbox [PythonBuddy](https://github.com/ethanchewy/PythonBuddy).

Created off of [christophetd/code-execution-api-demo](https://github.com/christophetd/code-execution-api-demo)

# Uses Docker containers to run Pylint + PythonBuddy

Prereqs:
* Install Docker and Node.js
* Running on Linux Server

System requirements:
* 4GB of Storage
* 1GB of RAM

Steps:
1. `git clone https://github.com/ethanchewy/PythonBuddySandbox`
2. `git clone https://github.com/ethanchewy/PythonBuddySandboxed`
3. `cd PythonBuddySandbox/container`
4. `docker build -t christophetd/docker-sandbox .`
5. `cd`
6. `npm install --save docker-python-sandbox-pythonbuddy`
7. `cd PythonBuddySandboxed`
8. `cp api/config.js.sample api/config.js`
9. `sudo npm start`

Remember!!
Change `config.js`'s `config.security.secret`to something different and change static/js/javascript.js in PythonBuddySandboxed to the same secret!!

Navigate to `localhost:3000 `to see PythonBuddy Dockerized!

(Or if you are hosting, navigate to `ExternalIP:3000 `to see PythonBuddy Dockerized!)


More documentation coming...
