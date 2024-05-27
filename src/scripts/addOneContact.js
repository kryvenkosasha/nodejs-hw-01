import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
          const data = createFakeContact();
          try {
            await fs.writeFile(PATH_DB, JSON.stringify(data), 'utf8');
            console.log('Дані успішно записані у файл.');
          } catch (err) {
            console.error('Помилка запису у файл:', err);
          }
};

await addOneContact();
