import CardCategory from "./CardCategory";

const Category = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 my-9 md:my-12 gap-4 md:grid-cols-4 lg:grid-cols-5 lg:gap-8">
      <CardCategory />
      <CardCategory />
      <CardCategory />
      <CardCategory />
      <CardCategory />
      <CardCategory />
      <CardCategory />
    </div>
  );
};

export default Category;
