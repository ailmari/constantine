# Constantine

Microservice that converts roman numerals to arabic numerals.

# Quickstart
1. Clone the repository:
`git clone https://github.com/ailmari/constantine.git`
2. Install npm dependencies:
`npm install`
3. Build the docker image: `docker build -t constantine .`
4. Run the docker image: `docker run -p 3000:3000 constantine`
5. Send a requests with a string query, for example: `http://localhost:3000/?roman=XI`
