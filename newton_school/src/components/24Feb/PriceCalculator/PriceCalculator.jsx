import "./PriceCalculator.css";

const PriceCalculator = (props) => {
//   console.log(props.price);
  const calculateDiscount = (price) => {
    let discount = 0;
    if (price <= 100) {
      discount = 0;
    } else if (price >= 101 && price <= 1000) {
      discount = price / 10;
    } else if (price >= 1001 && price <= 5000) {
      discount = (price / 100) * 12;
    } else {
      discount = (price / 100) * 15;
    }
    return discount.toFixed();
  };
  const calculateTotalPrice = (price) => {
    return price - calculateDiscount(price);
  };
  return (
    <div className="price-calculator">
      <h3>Original Price : {props.price}</h3>
      <h3>Discount: {calculateDiscount(props.price)}</h3>
      <h3>Total Price to pay : {calculateTotalPrice(props.price)}</h3>
    </div>
  );
};
export default PriceCalculator;

/**
 * 0-100 : No discount
 * 101-1000 : 10% discount
 * 1000-5000 : 12% discount
 * 5000+ : 15% discount
 */
