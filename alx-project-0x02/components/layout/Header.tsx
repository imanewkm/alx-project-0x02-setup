import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold">
                        <Link href="/">Logo</Link>
                    </div>
                    <div className="flex space-x-6">
                        <Link href="/home" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                            About
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
