import Nav from "./Nav";

const Header = () => {

    const isHeader = true

    return (
        <header className="header">
            <a href="#">
            <h1 className="header__title">JOGUAR</h1>
            </a>
            <Nav isHeader={isHeader}/>
        </header>
    )
}

export default Header



//{/*Nav({isHeader: true})*/}