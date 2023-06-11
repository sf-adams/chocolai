import clsx from "clsx";

type ButtonProps = {
  type: "filled" | "outlined";
  title: string;
  handleClick: () => void;
  customClass?: string;
};

const Button = ({ type, title, handleClick, customClass }: ButtonProps) => {
  return (
    <button
      className={clsx("button", customClass, {
        "button-filled": type === "filled",
        "button-outlined": type === "outlined",
      })}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
