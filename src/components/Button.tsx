type ButtonProps = {
  type: "filled" | "outlined";
  title: string;
  handleClick: () => void;
  customClass?: string;
};

const Button = ({ type, title, handleClick, customClass }: ButtonProps) => {
  return <button className={`button ${customClass}`}>{title}</button>;
};

export default Button;
