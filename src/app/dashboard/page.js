import MarketplaceCard from "../components/MarketplaceCard";
import { getListings } from "../utils/fetchFuntion";
import Sidemenu from "../components/Sidemenu";

export default  async function Page() {
  const listings = await getListings();
  console.log(listings);

  return (
    <section className="h-screen w-screen bg-slate-100 relative md:flex" >
      <Sidemenu/>
      <section className="w-full overflow-y-auto py-10 px-12">
        <div className="flex justify-between">
        <p className="font-600 text-xl">Welcome</p>
        <div>
          <p>Hi</p>
        </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex gap-5">
            <div className="rounded-xl w-1/4 h-32 bg-red-300"></div>
            <div className="rounded-xl w-1/4 h-32 bg-red-300"></div>
            <div className="rounded-xl w-1/4 h-32 bg-red-300"></div>
            <div className="rounded-xl w-1/4 h-32 bg-red-300"></div>
          </div>
          <div className="other-listings">
            <h5>Marketplace</h5>
            <div className="flex gap-5 overflow-x-hidden">
            {listings?.map((listing) =>(
              <MarketplaceCard key={listing.listingId} name={listing.timeZone}/>
            ))}
            </div>
          </div>
          <div className="gap-5 property-overview">
            <div className="rounded-xl w-full h-52 bg-red-300"></div>
          </div>
          <div>
            <div className="flex flex-col gap-3">
            <div className="rounded-xl w-full h-12 bg-red-300"></div>
            <div className="rounded-xl w-full h-12 bg-red-300"></div>
            <div className="rounded-xl w-full h-12 bg-red-300"></div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
