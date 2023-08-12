import Image from "next/image"
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
        <div className="flex h-fit bg-gray-100 py-[6px] px-4 items-center gap-2 rounded-lg">
          <FiSearch size={22} className="text-gray-700" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent p-1 focus:outline-none"
          />
        </div>
      </header>

      <section className="bg-primary-900 text-white h-[calc(100vh_-_80px)]">
        <div className="container mx-auto py-20 flex justify-between items-center gap-20 ">
          <div className="w-1/2">
            <h1 className="text-3xl font-bold mb-6">
              Discover Your One-Stop Destination for Printer Driver Downloads
            </h1>
            <p className="mb-11">
              Welcome to our comprehensive printer driver collection, your
              ultimate source for a wide range of printer drivers to enhance
              your printing experience.
            </p>
            <div className="flex gap-8">
              <button className="btn bg-white text-primary-900 ">
                Popular Drivers
              </button>
              <button className="btn border border-white">
                Latest Updates
              </button>
            </div>
          </div>
          <div className="w-1/2 ">
            <div className="relative h-[360px] w-[300px] mx-auto">
              <div className="w-[290px] h-[290px] absolute rounded-full bg-primary-500 blur-circle transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="abolute w-full h-full border border-white rounded-3xl rotate-[-20deg]"></div>
              <Image
                src="/images/printer.jpg"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
