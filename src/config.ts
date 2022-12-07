import dotenv from 'dotenv';
import bunyan from 'bunyan';
import cloudinary from 'cloudinary';
dotenv.config({});

class Config {
  public DATABASE_URL: string | undefined;
  public JWT_TOKEN: string | undefined;
  public NODE_ENV: string | undefined;
  public SECRET_KEY_ONE: string | undefined;
  public SECRET_KEY_TWO: string | undefined;
  public CLIENT_URL: string | undefined;
  public REDIS_HOST: string | undefined;
  public PORT: number | undefined;
  public CLOUD_NAME: string | undefined;
  public CLOUD_API_KEY: string | undefined;
  public CLOUD_API_SECRET: string | undefined;

  private readonly DEFAULT_DATABASE_URL = 'mongodb://localhost:27017/Chatty-App';
  private readonly DEFAULT_JWT_TOKEN = '1341234dasf';
  private readonly DEFAULT_NODE_ENV = 'local';
  private readonly DEFAULT_SECRET_KEY_ONE = 'ahfkk32242@dafk';
  private readonly DEFAULT_SECRET_KEY_TWO = 'ahsfk234h23@23';
  private readonly DEFAULT_CLIENT_URL = 'http://localhost:3000';
  private readonly DEFAULT_REDIS_HOST = 'redis://localhost:6379';
  private readonly DEFAULT_PORT = 9000;
  private readonly DEFAULT_CLOUD_NAME = 'sumit';
  private readonly DEFAULT_CLOUD_API_KEY = '74395775345';
  private readonly DEFAULT_CLOUD_API_SECRET = 'asfjlasfower2343rfdfer3';

  constructor() {
    this.DATABASE_URL = process.env.DATABASE_URL || this.DEFAULT_DATABASE_URL;
    this.JWT_TOKEN = process.env.JWT_TOKEN || this.DEFAULT_JWT_TOKEN;
    this.NODE_ENV = process.env.NODE_ENV || this.DEFAULT_NODE_ENV;
    this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE || this.DEFAULT_SECRET_KEY_ONE;
    this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO || this.DEFAULT_SECRET_KEY_TWO;
    this.CLIENT_URL = process.env.CLIENT_URL || this.DEFAULT_CLIENT_URL;
    this.REDIS_HOST = process.env.REDIS_HOST || this.DEFAULT_REDIS_HOST;
    this.PORT = Number(process.env.PORT) || Number(this.DEFAULT_PORT);
    this.CLOUD_NAME = process.env.CLOUD_NAME || this.DEFAULT_CLOUD_NAME;
    this.CLOUD_API_KEY = process.env.CLOUD_API_KEY || this.DEFAULT_CLOUD_API_KEY;
    this.CLOUD_API_SECRET = process.env.CLOUD_API_SECRET || this.DEFAULT_CLOUD_API_SECRET;
  }

  public createLogger(name: string): bunyan {
    return bunyan.createLogger({
      name,
      level: 'debug'
    });
  }

  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`Configuration ${key} is undefined...`);
      }
    }
  }

  public cloudinaryConfig(): void {
    cloudinary.v2.config({
      cloud_name: this.CLOUD_NAME,
      api_key: this.CLOUD_API_KEY,
      api_secret: this.CLOUD_API_SECRET
    });
  }
}

export const config: Config = new Config();
