"use client";
import Header from "./components/Header";
export default function Example() {
  return (
    <div className="bg-white">
      <Header></Header>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        {/ background shade /}
        <div className=" mx-auto max-w-3xl lg:max-w-4xl sm:max-w-2xl py-6 sm:py-48 lg:py-28">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to Kerala Rehab{" "}
            </h1>
            <p className=" mt-6 tracking-tight text-gray-900 text-2xl">
              Kerala Rehab: Your Promise, Our Commitment{" "}
            </p>
            <p className="mt-6 text-lg leading-8 text-justify text-gray-600">
              Kerala Rehab is a dedicated platform designed to transform pledges
              into tangible support for those in need. Born from the urgent
              response to the 2024 Wayanad landslide, our mission extends beyond
              a single crisis. We are committed to ensuring that every promise
              made by individuals, firms, and society to disaster victims is
              fulfilled. Through rigorous monitoring and transparent reporting,
              we strive to create a world where pledges are not mere words, but
              actions that uplift lives.
            </p>
            <p className="mt-6 text-lg leading-8 text-justify text-gray-600">
              Whether it's a natural disaster, economic hardship, or any other
              crisis, Kerala Rehab is here to bridge the gap between promise and
              reality.{" "}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                See Offers
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Add Offers <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
