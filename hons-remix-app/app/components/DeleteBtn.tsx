import { Link } from "@remix-run/react";

export default function DeleteBtn() {
  return (
    <button type="button">
      <Link to="/movies/delete">Delete all records</Link>
    </button>
  );
}
