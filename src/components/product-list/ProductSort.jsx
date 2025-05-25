import { useState } from "react";
import { useShop } from "../../contexts";

export default function ProductSort() {
  const [sortBy, setSortBy] = useState("");
  const { setSortType } = useShop();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm">Sort by:</span>
      <select
        value={sortBy}
        onChange={(e) => {
          setSortBy(e.target.value);
          setSortType(e.target.value);
        }}
        className="border rounded-md px-2 py-1 text-sm">
        <option value="popularity">Most Popular</option>
        <option value="newest">Newest</option>
        <option value="price_ascending">Price: Low to High</option>
        <option value="price_descending">Price: High to Low</option>
      </select>
    </div>
  );
}
