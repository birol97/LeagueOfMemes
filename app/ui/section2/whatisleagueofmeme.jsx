// Assuming you are using TailwindCSS
const WhatIsLeagueofmemes = () => {
    return (
      <section className="py-12 items-center justify-center bg-yellow-100">
        
          <h2 className="text-4xl font-semibold text-center mb-6font-bold text-sky-300 p-2 rounded shadow-lg" style={{
   }}>What is LeagueOfMEMES?</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-x-8  bg-black">
            <div className="md:w-1/2 mb-4 md:mb-0 px-4">
              <img src="/logo.jpg" alt="Dogecoin" className="w-full" />
            </div>
            <div className="md:w-1/2 px-4 text-white">
              <p className="text-lg mb-4">
                Dogecoin is a cryptocurrency featuring a likeness of the Shiba Inu dog from the Doge meme as its logo. It was introduced as a joke currency on December 6, 2013.
              </p>
              <p className="text-lg mb-4">
                Despite its origins as a joke, Dogecoin has grown into a widely recognized and used cryptocurrency, known for its friendly and enthusiastic community.
              </p>
              <p className="text-lg mb-4">
                Dogecoin transactions are fast, cheap, and secure, making it ideal for tipping and charitable donations, among other uses.
              </p>
              <div className="text-center">
                <a href="#download" className="btn-primary">Get Started</a>
              </div>
            </div>
          </div>
        
      </section>
    );
  };
  
  export default WhatIsLeagueofmemes;
  