import useDetectSticky from "../../customHooks/useDetectSticky";
import "./style.css";

function Sticky({ children, sticky = false, className, ...rest }: any) {
  const [isSticky, ref, setIsSticky] = useDetectSticky();

  return (
    <div
      className={className + (isSticky ? " isSticky" : "")}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Sticky;
