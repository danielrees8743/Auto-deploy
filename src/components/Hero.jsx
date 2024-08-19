import logo from "../assets/logo.svg";

const NavItems = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "The Roles",
    link: "/roles",
  },
  {
    id: 3,
    name: "Vacancies",
    link: "/vacancies",
  },
  { id: 4, name: "Process Overview", link: "/process-overview" },
  { id: 5, name: "FAQ's", link: "/faq" },
];

function Hero() {
  return (
    <div className="w-full bg-violet-200">
      <div className="navigation mx-2 flex flex-col items-center justify-between md:flex-row">
        <img src={logo} className="" />
        <div className="nav">
          <ul className="flex flex-col text-center md:flex-row md:gap-2">
            {NavItems.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer rounded bg-pink-400 px-2 py-1 hover:bg-pink-500 hover:shadow-md"
              >
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Hero;
