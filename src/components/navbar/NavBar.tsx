import"./NabBar.scss"

interface Iprops {

}

const NavBar = ({}:Iprops)=>{
return(
    <div className="navbar">
      <div className="logo">
        <h1>nagdista <span>edu</span></h1>
      </div>
      <div className="links">
        <ul>
            <li><a href="#">home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">blog</a></li>
            <li><a href="#">contact</a></li>
           
        </ul>
      </div>
      <div className="nav-btn">
        <button className="btn join">join group</button>
      </div>
    </div>
)
}

export default NavBar ; 