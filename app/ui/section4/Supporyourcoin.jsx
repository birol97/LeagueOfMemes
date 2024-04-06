const gettingstarted = () => {
    return (
<section className="py-12 bg-white">
  <div className="container mx-auto max-w-full">
    <h2 className="text-4xl font-semibold text-center mb-6">Steps to support your Memecoin</h2>
    <div className="grid md:grid-cols-3 gap-6 bg-slate-950">
      <div className="mb-4">
        <h2 className="text-center">Tournament details</h2>
        <div className="tournament-details grid grid-cols-4 gap-4 mb-4">
  {/* Example of one grid item */}
  {Array.from({ length: 32 }).map((_, index) => (
    <div key={index} className="border rounded-lg p-4 mb-2 ml-2">
      {/* Content goes here */}
      <p className="text-center"> {"Team" + index + 1}</p>
    </div>
  ))}
</div>
      </div>
      <div className="mb-4">
        <h2 className="text-center">Select Memecoin to Support</h2>
        <img src="/path-to-coin-png" alt="Description of Image" className="w-full" />
        <p className="text-lg mb-4">Content for part 1...</p>
      </div>
      <div className="mb-4">
        <h2 className="text-center">Send this wallet sol to support your Choosen wallet</h2>
        <p>End get rewarded by supporting your coin</p>
        <img src="/path-to-your-image.png" alt="Description of Image" className="w-full" />
        <p className="text-lg mb-4">Content for part 2...</p>
      </div>
    </div>
  </div>
</section>

    );
  };
  
  export default  gettingstarted;
    