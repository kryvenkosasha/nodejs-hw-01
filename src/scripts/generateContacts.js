import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  let existingContacts = [];

  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    existingContacts = JSON.parse(data);
  } catch (err) {
    console.error(err);
  }

  for (let i = 0; i < number; i++) {
    const data = createFakeContact();
    console.log(data);
    existingContacts.push(data);
  }

  try {
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(existingContacts, null, 2),
      'utf8',
    );
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

await generateContacts(5);
