import icon from "../assets/chefIcon.png"

const Header = () => {
    return (
        <header className="header">
            <img src={icon} alt="chef claude icon"/>
            <h1>Chef Claude</h1>
        </header>
    )
}

export default Header