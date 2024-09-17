const Button = ({
  text,
  variant = "dark",
  className = "w-[211px] py-4 lg:py-[18px]",
}) => {
  const style =
    variant !== "dark" ? "bg-primary text-white" : "bg-foreground text-white";

  return (
    <button
      className={`relative rounded-10 font-bold text-base duration-150 hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-primary   overflow-hidden  ${style} ${className} group`}
    >
      <span className="inline-block relative after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:w-0 after:duration-200 group-hover:after:w-full after:h-[2px] after:bg-white/60 after:z-10">
        {text}
      </span>
    </button>
  );
};

export default Button;
