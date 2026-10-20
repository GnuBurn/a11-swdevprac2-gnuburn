import Banner from '@/components/Banner';
import PromoteCard from '@/components/PromoteCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-100">
      <main>
        <Banner />
        <PromoteCard />
      </main>
    </div>
  );
}
