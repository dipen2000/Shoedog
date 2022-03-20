import "./container.css";
const Container = (props) => {
  return <div className="container margin-sides-auto">{props.children}</div>;
};

export { Container };
