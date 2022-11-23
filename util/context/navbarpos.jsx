import { createContext, useState } from "react";

const NavBarContext = createContext(false);
const NavBarPosProvider = ({ children }) => {
    const [navbarPos, setNavbarPos] = useState(true);
    return (
        <NavBarContext.Provider value={{ navbarPos, setNavbarPos }}>
            {children}
        </NavBarContext.Provider>
    );
}
export { NavBarContext, NavBarPosProvider };