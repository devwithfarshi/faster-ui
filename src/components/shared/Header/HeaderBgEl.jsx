const HeaderBgEl = ({ stickyNav }) => {
  return (
    <div
      className={`absolute   bg-white/60 backdrop-blur-md h-full left-1/2 -translate-x-1/2  -z-10 duration-300 ${
        stickyNav
          ? "w-full rounded-none shadow-xl border-b border-b-white"
          : " hidden lg:block w-[499px] rounded-[20px] border border-white shadow-none"
      }`}
    ></div>
  );
};

export default HeaderBgEl;
