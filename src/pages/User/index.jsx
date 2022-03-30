import Username from "../../components/Username"
import Account from "../../components/Account"

function User(props) {
    return(
        <main className="main bg-dark">
            <Username/>
            <Account/>
        </main>
    )
}

export default User