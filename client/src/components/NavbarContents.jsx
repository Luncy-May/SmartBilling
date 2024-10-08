import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Home, Community, MyPlans, Profile, Setting, Support, About, Dashboard, Team, Calendar } from "../pages";
const NavbarContents = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
    element: <Home />
  },
  {
    title: "About",
    path: "/about",
    icon: <FaIcons.FaInfoCircle />,
    cName: "nav-text",
    element: <About />
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: <FaIcons.FaCalendar />,
    cName: "nav-text",
    element: <Calendar />
  },
  {
    title: "My Plans",
    path: "/myPlans",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
    element: <MyPlans />
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <FaIcons.FaChartBar />,
    cName: "nav-text",
    element: <Dashboard />
  },
  {
    title: "Community",
    path: "/community",
    icon: <FaIcons.FaPeopleArrows />,
    cName: "nav-text",
    element: <Community />
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
    element: <Team />
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <FaIcons.FaUser />,
    cName: "nav-text",
    element: <Profile />
  },
  {
    title: "Setting",
    path: "/setting",
    icon: <FaIcons.FaCogs />,
    cName: "nav-text",
    element: <Setting />
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    element: <Support />
  },
];

export default NavbarContents