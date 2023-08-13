import Footer from "@/components/Footer"
import Header from "@/components/Header"
import LatestUpdatesDriver from "@/components/LatestUpdatesDriver"
import RecentPost from "@/components/RecentPost"
import { latestUpdatesDriverArray, recentPostArray } from "@/data/dummyData"
import Image from "next/image"
import React from "react"
import { AiFillStar } from "react-icons/ai"
import { FiChevronRight, FiDownload, FiEdit, FiStar } from "react-icons/fi"

function Driver() {
  return (
    <main>
      <Header />
      <section className="container py-16">
        <div className="flex items-center gap-2">
          <span className="text-gray-500">Home</span>{" "}
          <FiChevronRight size={22} className="text-gray-500" />{" "}
          <span className="text-gray-500">Canon</span>
          <FiChevronRight size={22} className="text-gray-500" />{" "}
          <span>Canon LBP2900b Printer Driver</span>
        </div>

        <div className="flex gap-24 mt-12">
          <div className="w-8/12">
            <div className="flex justify-between items-center gap-4">
              <div className="w-[130px] aspect-square relative">
                <Image
                  src="/images/printer.webp"
                  fill
                  className="object-cover rounded-md"
                  alt="Printer"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-2xl mb-2 text-gray-900">
                  Canon LBP2900b Printer Driver
                </h3>
                <div className="flex items-center gap-2 text-gray-700 mb-2">
                  <span className="text-green-600 font-medium">Free</span>
                  <span>English</span>
                  <span>V.123.b</span>
                </div>
                <div className="flex gap-4 items-center text-gray-700">
                  <div className="flex items-center gap-1">
                    <AiFillStar size={24} className="text-yellow-500" />
                    <p>4.7</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiDownload size={20} />
                    <p>2043</p>
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-4 bg-secondary-500 py-3 px-5 rounded-xl text-white">
                <div className="text-left">
                  <p className="font-semibold text-xl">Free Download</p>
                  <p className="font-medium text-sm">for Windows</p>
                </div>
                <FiDownload size={26} />
              </button>
            </div>

            <table className="mt-10 text-gray-800">
              <tbody>
                <tr>
                  <td className="w-56 py-1 font-medium">Latest Version:</td>
                  <td>Canon LBP2900b Printer Driver V.123.b</td>
                </tr>
                <tr>
                  <td className="py-1 font-medium">Requirements:</td>
                  <td>Windows 7 / Windows 8 / Windows 10 / Windows 11</td>
                </tr>
                <tr>
                  <td className="py-1 font-medium">Author / Product:</td>
                  <td>Epson Corp</td>
                </tr>
                <tr>
                  <td className="py-1 font-medium">Size:</td>
                  <td>23.5 Mb</td>
                </tr>
                <tr>
                  <td className="py-1 font-medium">Old Versions:</td>
                  <td>
                    <select
                      name="version"
                      id="version"
                      className="border border-gray-800 py-1 px-2 rounded-md"
                    >
                      <option value="">Select Version</option>
                      <option value="V.111a">V.111a</option>
                      <option value="V.100">V.100</option>
                      <option value="V.90b">V.90b</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <article className="mt-10">
              <h1 className="font-medium text-xl mb-2">
                How to install Epson Stylus R260
              </h1>
              <p>
                The driver installation process for this printer driver has been
                described in our printer driver installation guide. Many users
                think that the driver installation process is the same for all
                operating systems, but in reality, that is not the case.
                Therefore, in our driver installation guide, we have described
                the installation process for various operating systems so that
                you can install your newly downloaded Epson Stylus Photo R260
                printer driver without any mistake on your operating system.
              </p>

              <h1 className="font-medium text-xl mb-2 mt-6">
                Choosing a Printer Driver
              </h1>
              <p>
                The Epson inkjet printer is a standalone printing device.
                However, it’s designed to deliver high quality photo prints and
                so the driver you should install for this printer must be the
                one which is capable of bringing out the best performance of
                this printing device. For this reason, we would recommend
                installing full version Epson Stylus Photo R260 driver for this
                printer because it’s released by Epson especially for this
                printer and is the best fit to be used with this printing
                machine.
              </p>
              <h1 className="font-medium text-xl mb-2 mt-6">
                Why Download Your Driver from Here
              </h1>
              <p>
                Downloading your drivers from this site offers some special
                advantages. Firstly, you get a for your full feature Epson
                Stylus Photo R260 driver, which means that you don’t have to
                search for your printer model or its driver link, like on the
                official Epson website. However, you get the same driver from
                this site which you would get from the official Epson site
                because all our links download directly from the Epson website.
                In short, you get fully compatible and genuine Epson drivers
                from our one click download links.
              </p>
            </article>
            <button className="flex items-center gap-4 bg-secondary-500 py-3 px-5 rounded-xl text-white mt-10 mx-auto">
              <p className="font-semibold text-xl">Free Download</p>
              <FiDownload size={26} />
            </button>

            <div className="mt-16">
              <h1 className="font-medium text-2xl mb-2">User Reviews</h1>
              <div className="flex justify-between items-center gap-10">
                <div className="flex gap-4 items-baseline">
                  <p className="text-5xl text-orange">5.0</p>
                  <div className="flex items-center gap-1">
                    <AiFillStar size={30} className="text-orange" />
                    <AiFillStar size={30} className="text-orange" />
                    <AiFillStar size={30} className="text-orange" />
                    <AiFillStar size={30} className="text-orange" />
                    <AiFillStar size={30} className="text-orange" />
                  </div>
                  <p className="text-gray-700">8000 reviews</p>
                </div>
                <button className="btn flex items-center gap-2 bg-primary-700 text-white">
                  <FiEdit size={22} />
                  <p>Write Review</p>
                </button>
              </div>
              <hr className="my-6" />

              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 aspect-square rounded-full bg-green-500 text-white grid place-content-center text-xl font-medium">
                    K
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Kenan</p>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <AiFillStar size={22} className="text-orange" />
                        <AiFillStar size={22} className="text-orange" />
                        <AiFillStar size={22} className="text-orange" />
                        <AiFillStar size={22} className="text-orange" />
                        <AiFillStar size={22} className="text-orange" />
                      </div>
                      <p className="text-sm text-gray-700">6 months ago</p>
                    </div>
                    <p>
                      Drivers work fine. I&apos;ve been using it for a very long
                      time and had no problems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 aspect-square rounded-full bg-blue-600 text-white grid place-content-center text-xl font-medium">
                    A
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Anastasya Abigail</p>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <AiFillStar size={22} className="text-orange" />
                        <AiFillStar size={22} className="text-orange" />
                        <AiFillStar size={22} className="text-orange" />
                        <AiFillStar size={22} className="text-orange" />
                        <AiFillStar size={22} className="text-orange" />
                      </div>
                      <p className="text-sm text-gray-700">10 months ago</p>
                    </div>
                    <p>
                      I really enjoy using the drivers on this website. Thank
                      You.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/12">
            <RecentPost recentPostArray={recentPostArray} />
            <LatestUpdatesDriver
              latestUpdatesDriverArray={latestUpdatesDriverArray}
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Driver
