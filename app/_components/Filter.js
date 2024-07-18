"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParms = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const activeFilter = searchParms?.get("capacity") ?? "all";
  function handleFilter(filter) {
    const parms = new URLSearchParams(searchParms);
    parms.set("capacity", filter);
    router.replace(`${pathName}?${parms.toString()}`, { scroll: false });
  }
  return (
    <div className="border border-primary-800 flex">
      <button
        className={`px-5 py-2 hover:bg-primary-700 ${
          activeFilter === "all" ? "bg-primary-900" : ""
        } `}
        onClick={() => handleFilter("all")}
      >
        All
      </button>
      <button
        className={`px-5 py-2 hover:bg-primary-700 ${
          activeFilter === "small" ? "bg-primary-900" : ""
        } `}
        onClick={() => handleFilter("small")}
      >
        1&mdash;3 guests
      </button>
      <button
        className={`px-5 py-2 hover:bg-primary-700 ${
          activeFilter === "medium" ? "bg-primary-900" : ""
        } `}
        onClick={() => handleFilter("medium")}
      >
        4&mdash;7 guests
      </button>
      <button
        className={`px-5 py-2 hover:bg-primary-700 ${
          activeFilter === "large" ? "bg-primary-900" : ""
        } `}
        onClick={() => handleFilter("large")}
      >
        8&mdash;12 guests
      </button>
    </div>
  );
}

export default Filter;
