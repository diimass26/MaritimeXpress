import mongoose from 'mongoose';

const username = encodeURIComponent(process.env.DB_USERNAME || "");
const password = encodeURIComponent(process.env.DB_PASSWORD || "");
const MONGODB_URI = `mongodb+srv://${username}:${password}@cluster0.nluyau9.mongodb.net/maritimexpress_db?retryWrites=true&w=majority&appName=Cluster0`;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(MONGODB_URI);
}