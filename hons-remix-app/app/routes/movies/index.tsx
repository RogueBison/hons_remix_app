import { mongodb } from "~/utils/db.server";
import { useLoaderData } from "@remix-run/react";
import DeleteBtn from "~/components/DeleteBtn";
import { json } from "@remix-run/node";
import InsertBtn from "~/components/InsertBtn";

export async function loader() {

  let db = await mongodb.db("hons_load_test");
  let collection = await db.collection("filmsRemix");
  let movies = await collection.find({}).toArray();

  return json({movies});
}

export default function Movies() {
  let { movies } = useLoaderData();

  return (
    <div>
      <h1>Martin Alexander | Hons Project Remix App </h1>
      <hr></hr>
      <br></br>
      <h2>Insert or Delete Film Records:</h2>
      <InsertBtn />
      <h3>Amount of Records: {movies.length}</h3>
      <DeleteBtn />
    </div>
  );
}
