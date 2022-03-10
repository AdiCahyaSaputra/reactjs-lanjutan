import { useParams } from 'react-router-dom' 

export default function Blog() {
  // ambil param apapun yg di url
  const urlParams = useParams();
  return (
    <>
      <h1>{urlParams.artikel}</h1>
      <p>Ini Detail dari artikel</p>
    </>
  )
}