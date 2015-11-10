import Hapi from 'hapi';
import routesInjector from './routes-loader';

const server = new Hapi.Server();

server.connection({
  port: 5000,
  routes: {
    cors: true
  }
});

routesInjector(server);

export default server;
