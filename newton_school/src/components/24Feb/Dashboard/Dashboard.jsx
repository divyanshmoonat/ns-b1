import { useState } from "react";
import PriceInput from "../PriceInput/PrinceInput";
import PriceCalculator from "../PriceCalculator/PriceCalculator";

import "./Dashboard.css";

const Dashboard = () => {
  const [price, setPrice] = useState(0);

  const onPriceUpdate = (price) => {
    setPrice(price);
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <PriceInput onPriceUpdate={onPriceUpdate} />
      <PriceCalculator price={price} />
    </div>
  );
};
export default Dashboard;

