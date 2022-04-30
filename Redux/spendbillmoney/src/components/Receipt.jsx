import React, { useMemo } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";

function Receipt() {
  const total = useSelector((state) => state.items.total);
  const items = useSelector((state) => state.items.items);
  const cart = useMemo(() => {
    if (items) {
      return items.filter((item) => item.count > 0);
    } else {
      return [];
    }
  }, [items]);
  return (
    <Card className="fs-5 fw-bold">
      <Stack className="mx-auto">
        <div className="text-center">Your Receipt</div>
        <Stack>
          {cart.map((item) => {
            return (
              <Stack
                direction="horizontal"
                key={item.id}
                className="fs-6 fw-normal justify-content-between"
                gap={5}
              >
                <div>{item.Name}</div>
                <div>x{item.count}</div>
                <CurrencyFormat
                  value={item.count * item.Price}
                  displayType="text"
                  thousandSeparator={true}
                  prefix={"$"}
                  renderText={(value) => (
                    <div className="text-success fw-bold">{value}</div>
                  )}
                />
              </Stack>
            );
          })}
        </Stack>
        <Stack
          className="border-top justify-content-between"
          direction="horizontal"
          gap={5}
        >
          Total
          <CurrencyFormat
            value={total}
            displayType="text"
            thousandSeparator={true}
            prefix={"$"}
            renderText={(value) => (
              <div className="text-success fw-bold">{value}</div>
            )}
          />
        </Stack>
      </Stack>
    </Card>
  );
}

export default Receipt;
