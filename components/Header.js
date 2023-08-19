import Link from "next/link"

// Third Party
import { FiSearch } from "react-icons/fi"

function Header() {
  return (
    <header className="fixed top-0 left-0 bg-white w-full h-[80px] z-20 shadow">
      <div className="container flex justify-between items-center h-full">
        <Link href="/" className="text-2xl font-semibold text-primary-900">
          DRIVERSIDN
        </Link>
        <nav className="text-primary-900">
          <ul className="flex gap-10">
            <li className="hover:text-primary-600">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-primary-600">
              <Link href="/category/latest-updates">Recent</Link>
            </li>
            <li className="hover:text-primary-600">
              <Link href="/category/most-populars">Most Popular</Link>
            </li>
          </ul>
        </nav>
        <div className="flex h-fit bg-gray-100 py-[6px] px-4 items-center gap-2 rounded-lg">
          <FiSearch size={22} className="text-gray-700" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent p-1 focus:outline-none"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
