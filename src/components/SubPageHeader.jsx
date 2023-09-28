import { useLocation } from "react-router-dom";

export default function SubPageHeader() {
  const { pathname } = useLocation();
  return (
    <div className="subpage-header md:mx-auto md:container px-8">
      <div className="upper">
        <span>Fettah /&nbsp;</span>
        <span>
          {pathname
            .replace(/\//g, " ")
            .replace(/\b\w/g, (match) => match.toUpperCase())}
        </span>
      </div>
      <div className="lower">Web Developer</div>
    </div>
  );
}
