export function Header() {
    return(
        <header className="grid grid-cols-[1fr_auto_1fr] items-center">
        {/* Left links */}
            <nav>
                <ul className="flex justify-around">
                    <li><a href="/" className="font-pixel text-2xl">Home</a></li>
                    <li><a href="/" className="font-pixel text-2xl">Menu</a></li>
                </ul>
            </nav>
        {/* Logo */}
            <a className="justify-self-center"><img src=".\src\assets\logo.svg" className="w-24"></img></a>
        {/* Right Links */}
            <nav>
                <ul className="flex justify-around">
                    <li><a href="/" className="font-pixel text-2xl">Reserve</a></li>
                    <li><a href="/" className="font-pixel text-2xl">About</a></li>
                </ul>
            </nav>
        </header>
    )
}