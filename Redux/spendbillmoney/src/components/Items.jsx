import React from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Item from "./Item";

function Items() {
  const products = useSelector((state) => state.items.items);

  return (
    <Row xs={1} md={2} lg={3}>
      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </Row>
  );
}

export default Items;
