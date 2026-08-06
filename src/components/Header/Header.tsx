export function Header() {
    return(
        <header className="min-w-full flex justify-between border py-4 px-12 bg-red-500 items-center">
        {/* Left links */}
            <nav>
                <ul className="flex gap-6">
                    <li><a href="/" className="font-pixel">Home</a></li>
                    <li><a href="/" className="font-pixel">Menu</a></li>
                </ul>
            </nav>
        {/* Logo */}
            <a><img src=".\src\assets\logo.svg" className="w-24"></img></a>
        {/* Right Links */}
            <nav>
                <ul className="flex gap-6">
                    <li><a href="/" className="font-pixel">Reserve</a></li>
                    <li><a href="/" className="font-pixel">About</a></li>
                </ul>
            </nav>
        </header>
    )
}