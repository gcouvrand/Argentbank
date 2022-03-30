import Logo from "../../assets/argentBankLogo.png"
import { Link } from "react-router-dom"

function Header(props) {
    return(
        <nav className="main-nav">
            <Link to="/" a class="main-nav-logo">
                <img
                  className="main-nav-logo-image"
                  src={Logo}
                  alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link to="/sign-in" class="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                        Sign In
                </Link>
            </div>
     </nav>
    )
}
export default Header