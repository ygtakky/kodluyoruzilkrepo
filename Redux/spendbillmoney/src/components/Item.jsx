import React, { useEffect, useMemo, useState } from "react";
import CurrencyFormat from "react-currency-format";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { calculateBalance, setCount } from "../redux/ItemsSlice";

function Item({ product }) {
  const [productCount, setProductCount] = useState(product.count);
  const balance = useSelector((state) => state.items.balance);
  const dispatch = useDispatch();
  const maxCount = useMemo(() => {
    return Math.floor(balance / product.Price);
  }, [balance, product.Price]);
  const maximum = useMemo(() => {
    return productCount + maxCount;
  }, [productCount, maxCount]);

  useEffect(() => {
    dispatch(setCount({ id: product.id, amount: productCount }));
  }, [productCount]);

  const handleChange = (value) => {
    if (!value || value < 0) {
      value = 0;
    } else if (value > maximum) {
      value = maximum;
    }
    value = Number(value);
    setProductCount(value);
  };

  return (
    <Col className="p-3">
      <Card
        style={{
          textAlign: "center",
          padding: "20px 15px",
          width: "100%",
        }}
      >
        <Card.Body>
          <Image
            src={product.image}
            style={{
              height: "120px",
              maxWidth: "100%",
              margin: "15px auto",
            }}
          />
          <Card.Title>{product.Name}</Card.Title>
          <CurrencyFormat
            value={product.Price}
            displayType="text"
            thousandSeparator={true}
            prefix={"$"}
            renderText={(value) => (
              <div className="text-success fw-bold">{value}</div>
            )}
          />
          <Stack
            direction="horizontal"
            className="mt-2 justify-content-center"
            gap={3}
          >
            <Button
              variant="danger"
              disabled={product.count === 0 ? true : false}
              onClick={() => handleChange(product.count - 1)}
            >
              Sell
            </Button>
            <Form.Control
              style={{
                maxWidth: "100px",
                textAlign: "center",
              }}
              type="number"
              id="itemCount"
              value={product.count}
              onChange={(e) => handleChange(e.target.value)}
            />
            <Button
              variant="success"
              disabled={balance - product.Price < 0 ? true : false}
              onClick={() => handleChange(product.count + 1)}
            >
              Buy
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
