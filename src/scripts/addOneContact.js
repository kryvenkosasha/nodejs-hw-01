import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  let existingContacts = [];

  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    existingContacts = JSON.parse(data);
  } catch (err) {
    console.error(err);
  }

  const data = createFakeContact();
  console.log(data);
  existingContacts.push(data);

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

await addOneContact();
