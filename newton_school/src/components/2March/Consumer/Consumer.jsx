import ChildConsumer from "../ChildConsumer/ChildConsumer";
import "./Consumer.css";

const Consumer = () => {
  console.log("Consumer component rendered");
  return (
    <div>
      <h3>Context Consumer Example</h3>
      <ChildConsumer />
    </div>
  );
};

export default Consumer;
