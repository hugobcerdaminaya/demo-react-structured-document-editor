import { db } from "./db";

export async function populate() {
   await db.Markdowns.bulkAdd([
    {
      title: 
        ` name: Pedro,
          email: pedro@gmail.com,
          password: "123456789"
        `
    },
    {
      title: 
        ` name: Daniela,
          email: daniela@gmail.com,
          password: qwerty
        `
    },
  ]);
}
