import "./logout.css"

export default function logout() {
  return (
    <div className = "logout">

<ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>


        <button className="button-header">Log out</button>
    </div>
  )
}
