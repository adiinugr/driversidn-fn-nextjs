import React from "react"

// Components
import Header from "@/components/Header"
import Footer from "@/components/Footer"

function PageLoader() {
  return (
    <>
      <Header />
      <section className="bg-white xl:h-[calc(100vh_-_80px)] 2xl:h-fit mt-[80px] grid place-content-center">
        Page not found!
      </section>
      <Footer />
    </>
  )
}

export default PageLoader
