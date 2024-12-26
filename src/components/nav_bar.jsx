import React from "react";
import {Link} from "react-scroll";

const NavBar = () => {
    return(
        <div>
            <img src="" alt=""></img>
            <div className="navbarMenu">
            <Link className="navbarMenuItems">Home</Link>
            <Link className="navbarMenuItems">About me</Link>
            <Link className="navbarMenuItems">Project</Link>
            {
            //TODO: need to look back
            /* <Link className="navbarMenuItems">Git Hub</Link> */
            }
            </div>
            <div className="navbarBtn"></div>
        </div>
    )
}

export default NavBar;
