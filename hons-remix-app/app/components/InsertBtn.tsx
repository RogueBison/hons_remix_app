import {Link} from "@remix-run/react";
export default function InsertBtn() {
  
  return (
    <button type="button">
      <Link to="/movies/insert">Insert 10 records</Link>
    </button>
  );
}

