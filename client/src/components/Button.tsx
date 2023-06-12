import clsx from "clsx";

type ButtonProps = {
  type: "filled" | "outline";
  title: string;
  handleClick?: () => void;
  customClass?: string;
};

const Button = ({ type, title, handleClick, customClass }: ButtonProps) => {
  return (
    <button
      className={clsx("button", customClass, {
        "button-filled": type === "filled",
        "button-outline": type === "outline",
      })}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
