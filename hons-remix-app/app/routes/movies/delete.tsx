import { mongodb } from "~/utils/db.server";
import { redirect } from "@remix-run/node";

export async function loader() {
  let db = await mongodb.db("hons_load_test");
  let collection = await db.collection("filmsRemix");
  await collection.deleteMany({});

  return redirect('/movies');
}


