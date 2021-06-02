import expressLoader from './express.loader.js'
import mongooseLoader from './mongoose.loader.js'

export default async (app) => {
  const connection = await mongooseLoader();
  console.log('DB connection successful');

  expressLoader(app);
  console.log('Express middleware loaded succesfully');
}