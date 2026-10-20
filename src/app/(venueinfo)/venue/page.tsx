import getVenues from '@/libs/getVenues';
import VenueCatalog from '@/components/VenueCatalog';

export default function Venue() {
  const venues = getVenues()

  return (
    <main className="min-h-screen bg-stone-100 px-5 py-12 sm:py-16">
      <VenueCatalog venuesJson={venues} />
    </main>
  );
}
