const app = require('./app');

const PORT = process.env.PORT || 8000;

const {loadPlanetsData} = require('./models/planets.model');

const http = require('http');

const server = http.createServer(app);

async function startServer(){
    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`)
    });
}
startServer();