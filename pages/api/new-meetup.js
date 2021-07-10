import { MongoClient } from 'mongodb';
import URL from '../../config/db.config';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(URL, { useUnifiedTopology: true });
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);
    client.close();

    res.status(201).json({ message: 'Meetup Inserted!' });
  }
}
