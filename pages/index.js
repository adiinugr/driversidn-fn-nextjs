import Image from "next/image"

// Third Party
import { FiChevronRight } from "react-icons/fi"
import { AiFillStar } from "react-icons/ai"

// Components
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import RecentPost from "@/components/RecentPost"
import LatestUpdatesDriver from "@/components/LatestUpdatesDriver"

// Data
import { latestUpdatesDriverArray, recentPostArray } from "@/data/dummyData"
import Link from "next/link"
import DriverCard from "@/components/DriverCard"

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

export default function Home() {
  return (
    <main>
      <Header />

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
              <Link
                href="/category/most-populars"
                className="btn bg-white text-primary-900 hover:text-primary-600 transition-colors"
              >
                Popular Drivers
              </Link>
              <Link
                href="/category/latest-updates"
                className="btn border border-white hover:bg-white hover:text-blue-900 transition-colors"
              >
                Latest Updates
              </Link>
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
              <Link
                href="/category/most-populars"
                className="flex items-center gap-2 text-primary-900 hover:text-primary-600 font-medium transition-colors"
              >
                <p>See All</p>
                <FiChevronRight size={20} />
              </Link>
            </div>

            {/* <div className="grid grid-cols-1 gap-10">
              {mostPopularDriverArray.map((driver) => (
                <DriverCard driver={driver} />
              ))}
            </div> */}
          </div>
        </div>
        <div className="w-4/12">
          <RecentPost recentPostArray={recentPostArray} />

          <LatestUpdatesDriver
            latestUpdatesDriverArray={latestUpdatesDriverArray}
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
