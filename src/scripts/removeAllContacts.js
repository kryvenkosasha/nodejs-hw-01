import { da } from '@faker-js/faker';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  const data = [];
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data), 'utf-8');
  } catch (err) {
    console.error(err);
  }
};

await removeAllContacts();
