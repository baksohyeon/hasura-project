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
    database: process.env.DB_NAME,
    entities: [__dirname + '/../common/entity/*.entity{.ts,.js}'],
  },
});
