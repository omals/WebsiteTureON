import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/" activeStyle>
						About
					</NavLink>
					<NavLink to="/contact" activeStyle>
						Contact Us
					</NavLink>
					{/* <NavLink to="/blogs" activeStyle>
						Blogs
					</NavLink> */}
					<NavLink to="/sign-up" activeStyle>
						Sign Up
					</NavLink>
                    <NavLink to="/sign-in" activeStyle>
						Sign In
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
