import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, className = "", ...props }) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {label}
    </button>
  );
};

export default Button;
