import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const productsList = [
  {
    title: "Bananas",
    price: 15,
    description: "Imported from Nicaragua. Best bananas in the world",
    quantity: 7
  },
  {
    title: "Apples",
    price: 6,
    description: "Nothing as good and juicy as a japanese apple",
    quantity: 6
  },
  {
    title: "Beef",
    price: 19,
    description: "The best argentinian meat",
    quantity: 2
  },
  {
    title: "Oranges",
    price: 6,
    description: "Tiny and delicious",
    quantity: 3
  },
  {
    title: "Strawberries",
    price: 3,
    description: "Tiny and delicious",
    quantity: 17
  },
];

const Products = (props) => {
  const mappedProductsList = productsList.map((index, i) => {
    return (
      <ProductItem
        key={i}
        title={index.title}
        price={index.price}
        description={index.description}
        quantity={index.quantity}
      />
    );
  });

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{mappedProductsList}</ul>
    </section>
  );
};

export default Products;
