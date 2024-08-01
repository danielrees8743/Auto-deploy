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
    <div className="w-full bg-green-200">
      <div className="navigation mx-2 flex flex-col items-center justify-between md:flex-row">
        <img src={logo} className="" />
        <div className="nav">
          <ul className="flex flex-col text-center md:flex-row md:gap-2">
            {NavItems.map((item) => (
              <li
                key={1 + 1}
                className="cursor-pointer rounded bg-pink-400 px-2 py-1 hover:bg-pink-500 hover:shadow-md"
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
