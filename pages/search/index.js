import React, { useCallback, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

// Utils
import { fetchAPI } from "@/utils/fetch-api"

// Components
import DataComponent from "@/components/DataComponent"
import Header from "@/components/Header"

function LatestUpdatesPage() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const searchParams = useSearchParams()

  const searchValue = searchParams.get("value")

  const fetchData = async (start, limit) => {
    setLoading(true)

    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN
      const path = `/drivers`
      const urlParamsObject = {
        filters: {
          title: {
            $containsi: searchValue
          }
        },
        sort: { createdAt: "desc" },
        populate: {
          author: {
            fields: ["name"]
          },
          image: { fields: ["url"] },
          ratings: { populate: "*" }
        },
        pagination: {
          start: start,
          limit: limit
        }
      }
      const options = { headers: { Authorization: `Bearer ${token}` } }
      const responseData = await fetchAPI(path, urlParamsObject, options)

      if (start === 0) {
        setData(responseData.data)
      } else {
        setData((prevData) => [...prevData, ...responseData.data])
      }
      setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData(0, 6)
  }, [searchValue])

  return (
    <main>
      <Header />
      <section className="container pt-36 pb-16">
        <h1 className="text-2xl font-semibold text-gray-800">Search Result</h1>
        <div className="mt-16">
          <DataComponent isLoading={isLoading} error={error} data={data} />
        </div>
      </section>
    </main>
  )
}

export default LatestUpdatesPage
