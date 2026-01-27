import Hero from "./components/Hero";
import TripInfo from "./components/TripInfo";
import Accommodation from "./components/Accommodation";
import Itinerary from "./components/Itinerary";
import Outfit from "./components/Outfit";
import Shopping from "./components/Shopping";
import Restaurants from "./components/Restaurants";
import Transport from "./components/Transport";
import Currency from "./components/Currency";

export default function Home() {
    return (
        <main>
            <Hero />
            <TripInfo />
            <Accommodation />
            <Itinerary />
            <Outfit />
            <Shopping />
            <Restaurants />
            <Transport />
            <Currency />
        </main>
    );
}
