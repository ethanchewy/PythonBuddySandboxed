
# [PythonBuddySandboxed][]

Uses [Docker Python Sandbox][] library to Sandbox [PythonBuddy][]

Inspiration comes from christophetd's [code-execution-api-demo][]

##  Uses [Docker][] containers to run Pylint + PythonBuddy


## Requirements 
  
   * Self-host or run on a Linux Server 
   * Node.js
   * Docker containers with:
      * 4GB of Storage
      * 1GB of RAM

## Installing

```shell
  git clone https://github.com/ethanchewy/PythonBuddySandbox
  git clone https://github.com/ethanchewy/PythonBuddySandboxed
  
  cd PythonBuddySandbox/container && docker build -t christophetd/docker-sandbox .
  
  npm install --save docker-python-sandbox-pythonbuddy 
  
  cd PythonBuddySandboxed && cp api/config.js.sample api/config.js
```

## Configuration

Changes need to be made to the `config.security.secret` in two file locations:

   * [config.js.sample]("api/config.js.sample") 
   * [javascript.js]("www/static/js/javascript.js")


## Running

```shell
  cd PythonBuddySandboxed

  sudo npm start  # start
```

Navigate to "http://localhost:3000" for self-hosted or "http://ServerExternalFacingIP:3000" to see PythonBuddy Dockerized!

  [PythonBuddySandboxed]: https://github.com/ethanchewy/PythonBuddySandboxed
  [Docker Python Sandbox]: https://github.com/christophetd/docker-python-sandbox
  [PythonBuddy]: https://github.com/ethanchewy/PythonBuddy
  [Docker]: https://github.com/christophetd/docker-python-sandbox
  [code-execution-api-demo]: https://github.com/christophetd/code-execution-api-demo
