import {products} from "@/lib/products";
import DetailProduct from "@/app/product/[id]/DetailProduct";

export default async function ProductPage(props: {
  params: Promise<{
    id: string;
  }>
}) {
  const params = await props.params
  // Fake api request
  const product = products.find(p => p.id === Number(params.id))
  
  if (!product) return <p>Товар не найден</p>
  
  return (
    <DetailProduct product={product} />
  )
}