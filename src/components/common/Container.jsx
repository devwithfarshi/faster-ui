const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-[1216px] mx-auto px-4 lg:px-0 ${className}`}>
      {children}
    </div>
  );
};
export default Container;
