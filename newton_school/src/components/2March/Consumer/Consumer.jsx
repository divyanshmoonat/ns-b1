import ChildConsumer from "../ChildConsumer/ChildConsumer";
import "./Consumer.css";

const Consumer = () => {
  return (
    <div>
      <h3>Context Consumer Example</h3>
      <ChildConsumer />
    </div>
  );
};

export default Consumer;
