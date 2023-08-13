import Image from "next/image"
import { FiChevronRight, FiSearch } from "react-icons/fi"
import { AiFillStar } from "react-icons/ai"

const manufacturesArray = [
  {
    id: 1,
    title: "Epson",
    imageUrl: "/images/printers/epson.png"
  },
  {
    id: 2,
    title: "Canon",
    imageUrl: "/images/printers/canon.png"
  },
  {
    id: 3,
    title: "Brother",
    imageUrl: "/images/printers/brother.png"
  },
  {
    id: 4,
    title: "HP",
    imageUrl: "/images/printers/hp.png"
  }
]

const mostPopularDriverArray = [
  {
    id: 1,
    brandName: "Canon LBP2900b Printer Driver",
    imageUrl: "/images/printer.webp",
    rating: "4.5",
    description:
      "The Canon LBP2900 Driver is a free utility officially developed and distributed by Canon Inc for its line of desktop printers. With this driver package"
  },
  {
    id: 2,
    brandName: "Canon LBP2900b Printer Driver",
    imageUrl: "/images/printer.webp",
    rating: "4.5",
    description:
      "The Canon LBP2900 Driver is a free utility officially developed and distributed by Canon Inc for its line of desktop printers. With this driver package"
  },
  {
    id: 3,
    brandName: "Canon LBP2900b Printer Driver",
    imageUrl: "/images/printer.webp",
    rating: "4.5",
    description:
      "The Canon LBP2900 Driver is a free utility officially developed and distributed by Canon Inc for its line of desktop printers. With this driver package"
  }
]

const recentPostArray = [
  {
    id: 1,
    title: "The Best Printer in 2023",
    description:
      "The Canon LBP2900 Driver is a free utility officially developed and distributed by Canon Inc for its line of desktop printers. With this driver package",
    imageUrl: "/images/printer-1.jpg",
    author: "Adi Nugroho",
    published: "5 minutes ago"
  },
  {
    id: 2,
    title: "Recent Technology Without Ink",
    description:
      "The Canon LBP2900 Driver is a free utility officially developed and distributed by Canon Inc for its line of desktop printers. With this driver package",
    imageUrl: "/images/printer-2.jpg",
    author: "Adi Nugroho",
    published: "5 hours ago"
  }
]

const latestUpdatesDriverArray = [
  {
    id: 1,
    title: "Canon MF272dw Driver",
    description:
      "The Canon LBP2900 Driver is a free utility officially developed and distributed by Canon Inc for its line of desktop printers. With this driver package",
    imageUrl: "/images/printer-1.jpg"
  },
  {
    id: 2,
    title: "Epson Workforce Pro WF-7820 Driver",
    description:
      "The Canon LBP2900 Driver is a free utility officially developed and distributed by Canon Inc for its line of desktop printers. With this driver package",
    imageUrl: "/images/printer-2.jpg"
  }
]

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
        <div className="container mx-auto py-20 flex justify-between items-center gap-20 h-full">
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
          <div className="w-1/2">
            <div className="relative h-[340px] w-[280px] mx-auto">
              <div className="w-[290px] h-[290px] absolute rounded-full bg-primary-500 blur-circle transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="abolute w-full h-full border border-white rounded-3xl rotate-[-20deg]"></div>
              <Image
                src="/images/printer.jpg"
                fill
                className="object-cover rounded-3xl"
                alt="Printer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-24 flex gap-24">
        <div className="w-8/12">
          <div className="mb-20">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">
              Manufactures
            </h2>
            <p>
              The following is a list of the most famous printer drivers in the
              world. We provide official drivers that are safe and secure.
            </p>
            <div className="grid grid-cols-4 gap-6 mt-4">
              {manufacturesArray.map((manufacture) => (
                <div key={manufacture.id} className="relative h-12">
                  <Image
                    src={manufacture.imageUrl}
                    fill
                    className="object-contain"
                    alt={manufacture.title}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex justify-between items-baseline mb-4">
              <h2 className="text-3xl font-medium text-gray-800 mb-5">
                Most Popular Drivers
              </h2>
              <div className="flex items-center gap-2 text-primary-500 font-medium">
                <p>See All</p>
                <FiChevronRight size={20} />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-10">
              {mostPopularDriverArray.map((driver) => (
                <div
                  key={driver.id}
                  className="flex justify-between items-center gap-8 h-[120px]"
                >
                  <div className="w-56 h-full relative">
                    <Image
                      src={driver.imageUrl}
                      fill
                      className="object-cover"
                      alt={driver.brandName}
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2 text-gray-900">
                      {driver.brandName}
                    </h3>
                    <div className="flex gap-2 items-center mb-2">
                      <AiFillStar size={24} className="text-yellow-500" />
                      <p>{driver.rating}</p>
                    </div>
                    <p className="text-gray-700 line-clamp-2">
                      {driver.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-4/12">
          <div className="mb-16">
            <h3 className="mb-4 text-xl font-medium">Latest Updated Drivers</h3>

            <div className="grid grid-cols-1 gap-8">
              {recentPostArray.map((post) => (
                <div
                  key={post.id}
                  className="flex justify-between items-center gap-4"
                >
                  <div className="w-[100px] aspect-square relative">
                    <Image
                      src={post.imageUrl}
                      fill
                      className="object-cover rounded-md"
                      alt={post.title}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-2 text-gray-900">
                      {post.title}
                    </h3>

                    <p className="text-gray-700 text-sm mb-2 line-clamp-3">
                      {post.description}
                    </p>

                    <p className="text-xs">
                      <span className="font-medium">{post.author}</span> -{" "}
                      {post.published}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-medium">Recent Posts</h3>

            <div className="grid grid-cols-1 gap-8">
              {latestUpdatesDriverArray.map((post) => (
                <div
                  key={post.id}
                  className="flex justify-between items-center gap-4"
                >
                  <div className="w-[100px] aspect-square relative">
                    <Image
                      src={post.imageUrl}
                      fill
                      className="object-cover rounded-md"
                      alt={post.title}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-2 text-gray-900">
                      {post.title}
                    </h3>

                    <p className="text-gray-700 text-sm mb-2 line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary-900 text-white text-center py-10">
        <div className="container">
          <div className="mb-2">
            <ul className="flex items-center justify-center gap-6">
              <li>About Us</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div>
            © Copyright 2023 - 2023 Driversidn.com. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
