import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first book written ever",
  },
  {
    id: "p2",
    price: 12,
    title: "Bulb",
    description: "The first bulb invention",
  },
  {
    id: "p3",
    price: 2,
    title: "Rice",
    description: "India Home Grown",
  },
  {
    id: "p4",
    price: 16,
    title: "Apple",
    description: "Kashmiri Apple",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
