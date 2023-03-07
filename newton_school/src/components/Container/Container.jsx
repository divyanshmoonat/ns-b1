import "./Container.css";

const Container = (props) => {
  // console.log(props);
  return <div className="component-wrapper">{props.children}</div>;
};

export default Container;
