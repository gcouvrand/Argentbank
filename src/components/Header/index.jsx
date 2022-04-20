import Logo from "../../assets/argentBankLogo.png"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
    const dispatch = useDispatch;
    // We use the state from the store to know if the user is logged in or not
    const loggedIn = useSelector(state => state.Actions.loggedIn)

    return(
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img
                  className="main-nav-logo-image"
                  src={Logo}
                  alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {loggedIn ?
                // If the user is logged in, he can click on "Sign Out" to sign out 
                <Link onClick={ () => dispatch("SignOut")} to="/" class="main-nav-item">
                    <FontAwesomeIcon icon={faSignOutAlt} className="fa-icon"/>
                        Sign Out
                </Link>
                :
                <Link to="/sign-in" className="main-nav-item">
                    <FontAwesomeIcon icon={faUserCircle} className="fa-icon"/>
                        Sign In
                </Link>
                }
            </div>
     </nav>
    )
}

export default Header