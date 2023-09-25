export default () => ({
  port: process.env.SERVER_PORT,

  database: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    charset: process.env.DB_CHARSET,
    timezone: process.env.DB_TIMEZONE,
    syncronize: process.env.DB_SYNCHRONIZE,
    entities: [__dirname + '/../common/entity/*.entity{.ts,.js}'],
  },
});

export interface DatabaseConfig {
  type: 'mysql';
  host: string;
  port: number;
  name: string;
  password: string;
  charset: string;
  timezone: string;
  syncronize: boolean;
  entities: string[];
}
