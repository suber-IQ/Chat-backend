import { config } from './config';
import express from 'express';
import { ChattyServer } from './setupServer';
import databaseConnection from './setupDatabase';

class Application {
  public initialize(): void {
    this.loadConfig();
    databaseConnection();
    const app: express.Express = express();
    const server: ChattyServer = new ChattyServer(app);
    server.start();
  }
  private loadConfig(): void {
    config.validateConfig();
  }
}

const application: Application = new Application();
application.initialize();
