export default function Movie (props: any) {
  return (
    <tr key={props._id}>
      <td>{props.title}</td>
      <td>{props.synopsis}</td>
      <td>{props.year}</td>
      <td>{props.genre}</td>
    </tr>
  )
}