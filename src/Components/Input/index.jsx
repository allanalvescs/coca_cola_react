import "./style.scss";

const Input = ({ icon: Icon, register, name, error, ...rest }) => {
  return (
    <div className="Container_input">
      <div className="input">
        {Icon && <Icon size="20" />}
        <input {...rest} {...register(name)} />
      </div>
      <div className="container_label">{error && <label>{error}</label>}</div>
    </div>
  );
};

export default Input;
