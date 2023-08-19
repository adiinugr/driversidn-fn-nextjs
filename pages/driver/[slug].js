import React, { useEffect, useState } from "react"
import Image from "next/image"

// Third Party
import parse from "html-react-parser"
import { FiChevronRight, FiDownload, FiEdit } from "react-icons/fi"
import { AiFillStar } from "react-icons/ai"

// Utils
import { fetchAPI } from "@/utils/fetch-api"

// Components
import Header from "@/components/Header"
import RecentPost from "@/components/RecentPost"
import LatestUpdatesDriver from "@/components/LatestUpdatesDriver"
import Footer from "@/components/Footer"

// Const
const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN
const options = { headers: { Authorization: `Bearer ${token}` } }

import Link from "next/link"
import platform from "platform"
import Loader from "@/components/Loader"

const joinOperatingSystem = (array) => {
  let newArray = []

  array.forEach((element) => newArray.push(element.attributes.name))

  const sortedArray = newArray.sort().join(" / ")

  return sortedArray
}

const ButtonDownloadComponent = ({
  buttonLoading,
  deviceDownloadUrl,
  deviceOS
}) => {
  if (buttonLoading) {
    return (
      <div className="mt-6 mx-auto grid place-content-center">
        <Loader size={40} />
      </div>
    )
  }

  if (deviceDownloadUrl[0]) {
    return (
      <Link
        className="flex w-fit items-center gap-4 bg-secondary-500 py-2 px-5 rounded-xl text-white mt-6 mx-auto"
        href={deviceDownloadUrl[0].attributes.file.data.attributes.url}
      >
        <div className="text-left">
          <p className="font-semibold text-xl">Free Download</p>
          <p className="font-medium text-sm">for {deviceOS}</p>
        </div>
        <FiDownload size={26} />
      </Link>
    )
  }

  return (
    <div className="mt-6 mx-auto grid place-content-center text-red-500">
      Sorry. The driver is not available for your operating system.
    </div>
  )
}

function DriverPage({ singleDriver, latestUpdatesDriver, recentPost }) {
  const driver = singleDriver[0].attributes
  const [deviceOS, setDeviceOS] = useState()
  const [buttonLoading, setButtonLoading] = useState(false)
  const [deviceDownloadUrl, setDeviceDownloadUrl] = useState([])

  const getDeviceDownloadUrl = () => {
    setButtonLoading(true)

    const deviceArray = singleDriver[0].attributes.driver_files.data.filter(
      (item) => {
        const osArray = item.attributes.operating_systems.data

        const mappedOsArray = osArray.map((os) => os.attributes.name)

        return mappedOsArray.includes(deviceOS)
      }
    )

    setButtonLoading(false)

    return deviceArray
  }

  useEffect(() => {
    setDeviceOS(platform.os.toString())
    setDeviceDownloadUrl(getDeviceDownloadUrl())
  }, [deviceOS])

  return (
    <main>
      <Header />
      <section className="container pt-36 pb-16">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-primary-600 hover:underline">
            Home
          </Link>{" "}
          <FiChevronRight size={20} className="text-gray-800" />{" "}
          <Link
            href={`/manufacture/${driver.manufacture.data.attributes.name.toLowerCase()}`}
            className="text-primary-600 hover:underline"
          >
            {driver.manufacture.data.attributes.name}
          </Link>
          <FiChevronRight size={20} className="text-gray-800" />{" "}
          <span>{driver.title}</span>
        </div>

        <div className="flex gap-24 mt-12">
          <div className="w-8/12">
            <div className="flex justify-between items-center gap-4">
              <div className="w-[130px] aspect-square relative">
                <Image
                  src={driver.image.data.attributes.url}
                  fill
                  className="object-cover rounded-md"
                  alt={driver.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-2xl mb-2 text-gray-900">
                  {driver.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-700 mb-2">
                  <span className="text-green-600 font-medium">
                    {driver.isFree ? "Free" : "Paid"}
                  </span>
                  <span>{driver.language}</span>
                </div>
                <div className="flex gap-4 items-center text-gray-700">
                  <div className="flex items-center gap-1">
                    <AiFillStar size={24} className="text-yellow-500" />
                    <p>4.7</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiDownload size={20} />
                    <p>{driver.downloadCount ? driver.downloadCount : 0}</p>
                  </div>
                </div>
              </div>
            </div>
            <table className="mt-6 text-gray-800">
              <tbody>
                <tr>
                  <td className="w-56 py-1 font-medium">Operating System</td>
                  <td>: {deviceOS}</td>
                </tr>
                <tr>
                  <td className="py-1 font-medium">Manufacture</td>
                  <td>: {driver.manufacture.data.attributes.name}</td>
                </tr>
                <tr>
                  <td className="py-1 font-medium">Size</td>
                  <td>: 23.5 Mb</td>
                </tr>
              </tbody>
            </table>
            <ButtonDownloadComponent
              buttonLoading={buttonLoading}
              deviceDownloadUrl={deviceDownloadUrl}
              deviceOS={deviceOS}
            />
            <p className="bg-gray-100 p-4 rounded-lg mt-8 text-sm">
              <span className="text-red-600">Attention!</span> Your operating
              system may not be detected. Please use the download button at the
              bottom of this page according to your device&apos;s operating
              system.
            </p>
            <article className="mt-10 driver-description">
              {parse(driver.description)}
            </article>
            <div className="relative overflow-x-auto mt-8">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-sm text-white uppercase bg-primary-500 ">
                  <tr>
                    <th scope="col" className="px-6 py-3 font-semibold">
                      File Type
                    </th>
                    <th scope="col" className="px-6 py-3 font-semibold">
                      Operating System
                    </th>
                    <th scope="col" className="px-6 py-3 font-semibold">
                      Size
                    </th>
                    <th scope="col" className="px-6 py-3 font-semibold">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {driver.driver_files.data.map((file) => (
                    <tr
                      key={file.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {file.attributes.driver_type.data.attributes.title}
                      </th>
                      <td className="px-6 py-4">
                        {joinOperatingSystem(
                          file.attributes.operating_systems.data
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {Math.round(
                          (file.attributes.file.data.attributes.size / 1024) *
                            10
                        ) / 10}{" "}
                        Mb
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          href={file.attributes.file.data.attributes.url}
                          className="text-primary-600 hover:underline hover:underline-offset-2"
                        >
                          Download
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
            <RecentPost recentPost={recentPost} />
            <LatestUpdatesDriver latestUpdatesDriver={latestUpdatesDriver} />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default DriverPage

export const getStaticPaths = async () => {
  const responseData = await fetchAPI("/drivers", {}, options)

  const paths = responseData.data.map((data) => {
    return {
      params: {
        slug: data.attributes.slug
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const urlParamsObject = {
    filters: {
      slug: {
        $eq: params.slug
      }
    },
    populate: {
      author: {
        populate: "*"
      },
      image: { populate: "*" },
      ratings: { populate: "*" },
      manufacture: { fields: ["name"] },
      driver_files: { populate: "*" }
    }
  }

  const singleDriver = await fetchAPI("/drivers", urlParamsObject, options)

  const latestUpdatesDriver = await fetchAPI(
    "/drivers",
    {
      sort: { downloadCount: "desc" },
      pagination: {
        limit: 3
      },
      populate: {
        author: {
          fields: ["name"]
        },
        image: { fields: ["url"] }
      }
    },
    options
  )

  const recentPost = await fetchAPI(
    "/blogs",
    {
      populate: {
        author: {
          fields: ["name"]
        },
        image: { fields: ["url"] }
      }
    },
    options
  )

  return {
    props: {
      singleDriver: singleDriver.data,
      latestUpdatesDriver: latestUpdatesDriver.data,
      recentPost: recentPost.data
    }
  }
}
