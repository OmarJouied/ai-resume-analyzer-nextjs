import Link from "next/link"
import UserMenu from "./UserMenu"
import { getCurrentUser } from "@/lib/server-utils";

const Navbar = async () => {
  const user = await getCurrentUser();

  console.log({ user })

  return (
    <header>
      <div className="container mx-auto flex justify-between items-center py-4 gap-3">
        <h1>AI Analizer</h1>
        <nav>
          <ul className="flex-center gap-3">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <UserMenu username={user.name} />
      </div>
    </header>
  )
}

export default Navbar