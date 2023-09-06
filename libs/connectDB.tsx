import mongoose from 'mongoose';
let mongoURL = process.env.MONGO_URL as string;
const coonectDataBase = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log('Mongo Data Base connection successful 😁');
  } catch (err) {
    console.log('Mongo Data Base connection Failed 😨');
  }
};
export default coonectDataBase;
