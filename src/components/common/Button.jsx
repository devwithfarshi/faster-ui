const Button = ({
  text,
  variant = "dark",
  className = "w-[211px] py-4 lg:py-[18px]",
}) => {
  const style =
    variant !== "dark" ? "bg-primary text-white" : "bg-foreground text-white";
  return (
    <button className={`rounded-10  font-bold text-base ${style} ${className}`}>
      {text}
    </button>
  );
};
export default Button;
