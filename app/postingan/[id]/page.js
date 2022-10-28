import Image from "next/image"
async function getDetailPostingan(id) {
  let detailPostingan = await fetch(`https://dummyjson.com/products/${id}`)
  return detailPostingan.json()
}

export default async function Page({ params }) {
  const detail = await getDetailPostingan(params.id)
  console.log({ detailProduct: detail })
  return (
    <div>
      <img src={detail.images[1]} alt={detail.images[2]} width={400} height={400} />
      <p>Merk: {detail.brand}</p>
      <p>Seri: {detail.title}</p>
      <p>Kategori: {detail.category}</p>
      <p>Rating: {detail.rating}</p>
      <p>Stock: {detail.stock}</p>
      <p>Harga: {detail.price}</p>
      <p>Deskripsi: {detail.description}</p>
    </div>
  )
}