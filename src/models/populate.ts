import { db } from "./db";

export async function populate() {
   await db.Markdowns.bulkAdd([
    {
      title: 
        ' ## este es un ejemplo con javascript \n'+
        ' ```js \n'+
        ' console.log("buscando un valor") \n'+
        ' ```'
        
    },
    {
      title: 
      ' ## este es un ejemplo con php \n'+
      ' ```php \n'+
      ' $myArray = [] \n'+
      ' $myValue = explode("-", $myArray) \n'+
      ' ```'
    },
  ]);
}
