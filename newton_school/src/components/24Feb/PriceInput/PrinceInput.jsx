import "./PriceInput.css";

const PriceInput = (props) => {
  const onPriceChange = (e) => {
    props.onPriceUpdate(e.target.value); // Calling fn passed as a prop to send data to parent
  };

  return (
    <div className="price-input">
      <input
        type={"number"}
        onChange={onPriceChange}
        placeholder="Enter price"
      />
    </div>
  );
};
export default PriceInput;
