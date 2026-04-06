import mysql from 'mysql2/promise';
import crypto from 'crypto';

const connection = await mysql.createConnection({
  host: process.env.DATABASE_URL?.split('@')[1]?.split('/')[0] || 'localhost',
  user: process.env.DATABASE_URL?.split('://')[1]?.split(':')[0] || 'root',
  password: process.env.DATABASE_URL?.split(':')[1]?.split('@')[0] || '',
  database: process.env.DATABASE_URL?.split('/').pop() || 'bluevista',
});

// Créer un utilisateur admin avec un openId unique
const openId = 'admin-' + crypto.randomBytes(16).toString('hex');
const email = 'giz@bluevista.fr';
const name = 'Giz Admin';

try {
  await connection.execute(
    'INSERT INTO users (openId, name, email, loginMethod, role) VALUES (?, ?, ?, ?, ?)',
    [openId, name, email, 'local', 'admin']
  );
  console.log('✓ Utilisateur admin créé avec succès');
  console.log('OpenId:', openId);
  console.log('Email:', email);
  console.log('Rôle: admin');
} catch (error) {
  console.error('Erreur:', error.message);
}

await connection.end();
