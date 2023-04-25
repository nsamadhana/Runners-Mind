import Link from "next/link"

export default function Nav() {
    return (
        <nav className="flex justify-between items-center py-10">
            <Link href="/">
                <button className="px-4 text-lg font-medium">Runners Mind</button>
            </Link>       
            <ul className = "flex items-center gap-10">
                <Link href='/auth/login' legacyBehavior>
                    <a className="py-2 px-4 text-medium bg-cyan-500 text-white rounded-lg font-medium ml-8">Join Now</a>
                </Link>
            </ul>     
        </nav>
    );
}