import { mongodb } from "~/utils/db.server";
import { Link, useLoaderData } from "@remix-run/react";
/* import InsertBtn from "~/components/InsertBtn"; */
import DeleteBtn from "~/components/DeleteBtn";
import type { Movie } from "~/utils/types.server";
import MovieTR from "~/components/movie";
import { json } from "@remix-run/node";

export async function loader() {

  let db = await mongodb.db("hons_load_test");
  let collection = await db.collection("film");
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
      <br />
      <ul>
      {[10, 100, 500, 1000, 10000].map((quantity) => (
        <li key={quantity}>
          <Link to={'/movies/insert${quantity}'}>
            Insert {quantity} records
          </Link>
        </li>
      ))}
    </ul>
      <br/>
      <br />
      <DeleteBtn />

      <br></br>
      <br></br>

      <h3>Amount of Records: {movies.length}</h3>
    </div>
  );
}
