import CategoryList from "@/components/Home/CategoryList";
import FilterButton from "@/components/Home/FilterButton";
import Hero from "@/components/Home/Hero";
import MultiCategory from "@/components/Home/MultiCategory";
import PropertyList from "@/components/Home/Property/PropertyList";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="wrapper">
        <FilterButton />
        <CategoryList />
        <PropertyList />
      </div>
    </>
  );
}
