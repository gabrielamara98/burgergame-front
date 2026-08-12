import { Link } from "react-router-dom";

export function Header() {
    return(
        <header className="grid grid-cols-[1fr_auto_1fr] items-center">
        {/* Left links */}
            <nav>
                <ul className="flex justify-around">
                    <li><Link to="/" className="font-pixel text-2xl">Home</Link></li>
                    <li><Link to="/menu" className="font-pixel text-2xl">Menu</Link></li>
                </ul>
            </nav>
        {/* Logo */}
            <Link to ="/" className="justify-self-center"><img src=".\src\assets\logo.svg" className="w-24"></img></Link>
        {/* Right Links */}
            <nav>
                <ul className="flex justify-around">
                    <li><Link to="/reserve" className="font-pixel text-2xl">Reserve</Link></li>
                    <li><Link to="/about" className="font-pixel text-2xl">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}