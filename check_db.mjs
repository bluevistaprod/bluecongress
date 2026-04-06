import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: process.env.DATABASE_URL.split('@')[1].split('/')[0],
  user: process.env.DATABASE_URL.split('://')[1].split(':')[0],
  password: process.env.DATABASE_URL.split(':')[2].split('@')[0],
  database: process.env.DATABASE_URL.split('/').pop(),
});

const [offers] = await connection.execute('SELECT * FROM offers');
const [features] = await connection.execute('SELECT * FROM features');

console.log('=== OFFERS ===');
console.log(JSON.stringify(offers, null, 2));
console.log('\n=== FEATURES ===');
console.log(JSON.stringify(features, null, 2));

await connection.end();
