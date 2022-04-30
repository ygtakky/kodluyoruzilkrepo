import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";

function MoneyBar() {
  const balance = useSelector((state) => state.items.balance);

  return (
    <CurrencyFormat
      value={balance}
      displayType="text"
      thousandSeparator={true}
      prefix={"$"}
      renderText={(value) => (
        <div className="bg-success text-white text-center p-2 fs-3 my-3">
          {value}
        </div>
      )}
    />
  );
}

export default MoneyBar;
