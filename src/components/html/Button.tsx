type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">,'children'>;

const ButtonComponent = ({variant, children, ...rest}: ButtonProps) => {
  return (
    <div>
      <button className={`class-with-${variant}`} {...rest}>
        {children}
      </button>
    </div>
  );
}

export default ButtonComponent
