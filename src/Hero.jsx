function Hero() {
  return ( <>
    <section
      className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right"
      style={{"maxWidth":"1600px","height":"32rem","backgroundImage":"url('https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}
    >
      <div className="container mx-auto">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start p-2 px-6 tracking-wide bg-gray-200 bg-opacity-70">
          <h1 className="text-black text-3xl my-4" >
            Sell, Trade or Donate Books!
          </h1>
          <a
            className="text-xl text-pink-700 inline-block no-underline border-b border-pink-700 leading-relaxed hover:text-pink-400 hover:border-pink-400"
            href="#"
          >
            books
          </a>
        </div>
      </div>
    </section>

    <section className="bg-white py-8">

      <div className="container py-8 px-6 mx-auto text-center">

        <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8" href="#">
          About
        </a>

        <p className="mx-auto w-2/4">
        BookSwap is a platform where users can trade, sell, or donate books with others in their community. 
        It allows users to list books, browse available books, interact with other users, and arrange book exchanges or purchases.
        </p>

        <p className="mt-8 mb-8">This template is inspired by the stunning nordic minimalist design - in particular:
            <br />
            <a className="text-gray-800 underline hover:text-gray-900" href="http://savoy.nordicmade.com/" target="_blank">
              Savoy Theme
            </a> created by 

            <a className="text-gray-800 underline hover:text-gray-900" href="https://nordicmade.com/">
              https://nordicmade.com/
            </a> and 
            <a className="text-gray-800 underline hover:text-gray-900" href="https://www.metricdesign.no/" target="_blank">
              https://www.metricdesign.no/
            </a>
        </p>

      </div>

  </section>

  </>)}

export default Hero;
