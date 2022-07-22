import "./style.scss";

const Button = ({ children, ...rest }) => {
  return (
    <button {...rest} className="button_Sass">
      {children}
    </button>
  );
};

export default Button;
