import { Route } from "react-router-dom";
import Icon from "../assets/Icon.png";
import Logo from "../assets/Logo.png";
import Menu from "../assets/Menu-Icon.png";
import Nav from "../assets/Nav-Link.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { Name: "Home", Icon: Menu, route: "/" },
    { Name: "shop", Icon: Nav },
    { Name: "Bag", Icon: Icon, route: "/Bag" },
  ];

  return (
    <aside className="ml-5 mt-5 mb-5 w-20 rounded-md bg-white shadow-lg p-6 hidden md:block">
      <div className="flex flex-1 items-center mb-5 ">
        <Link to="/">
          <img src={Logo} alt="Icon" className="w-10 h-10" />
        </Link>
      </div>

      <ul className="space-y-5">
        {links.map((link) => (
          <li
            key={link}
            className="text-gray-600 hover:text-blue-600 cursor-pointer"
          >
            <Link to={link.route}>
              {" "}
              <img
                src={link.Icon}
                alt={link.Name}
                className="w-7 h-7 inline-block "
              />
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Navbar;
