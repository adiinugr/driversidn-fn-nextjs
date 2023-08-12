import { FiSearch } from "react-icons/fi"

export default function Home() {
  return (
    <main>
      <header className="container mx-auto flex justify-between items-center h-[80px]">
        <div className="text-2xl font-semibold text-primary-900">LOGO</div>
        <nav className="text-primary-900">
          <ul className="flex gap-10">
            <li>Home</li>
            <li>Recent</li>
            <li>Most Popular</li>
          </ul>
        </nav>
        <div className="flex h-fit bg-gray-200 py-[6px] px-4 items-center gap-2 rounded-lg">
          <FiSearch size={22} className="text-gray-700" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent p-1 focus:outline-none"
          />
        </div>
      </header>
    </main>
  )
}
