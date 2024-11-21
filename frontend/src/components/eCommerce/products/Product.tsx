import ProductCard from "./ProductCard"

const Product = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 my-9 md:my-12 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
  )
}

export default Product