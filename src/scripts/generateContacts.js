import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  for (let i = 0; i < number; i++) {
    const data = createFakeContact();
    console.log(data);
    try {
      await fs.writeFile(PATH_DB, JSON.stringify(data), 'utf8');
      console.log('Дані успішно записані у файл.');
    } catch (err) {
      console.error('Помилка запису у файл:', err);
    }
  }
};

await generateContacts(5);
