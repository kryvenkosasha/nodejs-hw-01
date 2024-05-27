import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  let filteredContacts = [];
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    contacts.forEach((contact) => {
      if (Math.random() >= 0.5) {
        filteredContacts.push(contact);
      }
    });
    await fs.writeFile(PATH_DB, JSON.stringify(filteredContacts), 'utf-8');
  } catch (err) {
    console.error(err);
  }
};

await thanos();
