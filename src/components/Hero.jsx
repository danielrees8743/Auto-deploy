import logo from "../assets/logo.svg";

const NavItems = [
  "Home",
  "The Roles",
  "Process Overview",
  "The Roles",
  "Process Overview",
];

function Hero() {
  return (
    <div>
      <div className="mx-5 flex flex-col items-center justify-between md:flex-row">
        <img src={logo} className="h-28 w-28" />
        <div className="nav">
          <ul className="text flex flex-col gap-1 md:flex-row md:gap-4">
            {NavItems.map((item) => (
              <li
                key={1 + 1}
                className="cursor-pointer rounded bg-pink-400 px-3 py-1 hover:bg-pink-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Hero;
