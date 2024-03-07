import { mongodb, ObjectId } from "~/utils/db.server";
import { redirect } from "@remix-run/node";

export async function loader() {
  let db = await mongodb.db("hons_load_test");
  let collection = await db.collection("filmsRemix");

  
    let newObjectId = new ObjectId();
    let dataToInsert = {
      _id: newObjectId,
      title: 'Jaws',
      synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      year: 1975,
      genre: 'Horror'
    };

    await collection.insertOne(dataToInsert);
  
  return redirect('/movies');
}


