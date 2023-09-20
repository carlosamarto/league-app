// Next
import dynamic from "next/dynamic";
const Search = dynamic(async () => await import("@/components/search"));

export default function Home() {
  return (
    <div>
      <Search />
    </div>
  );
}
