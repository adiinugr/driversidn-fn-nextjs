import React from "react"

// Components
import Loader from "./Loader"
import Header from "./Header"
import Footer from "./Footer"

function PageLoader() {
  return (
    <>
      <Header />
      <section className="bg-white xl:h-[calc(100vh_-_80px)] 2xl:h-fit mt-[80px] grid place-content-center">
        <Loader />
      </section>
      <Footer />
    </>
  )
}

export default PageLoader
