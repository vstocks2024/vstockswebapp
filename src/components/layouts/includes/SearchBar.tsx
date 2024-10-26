import SearchLabel from "./SearchLabel";
import SearchInput from "./SearchInput";
import SearchTags from "./SearchTags";
import { BreadcrumbWithCustomSeparator } from "./BreadcrumbWithCustomSeparator";
export default function SearchBar() {
  return (
    <div className="flex flex-col">
      <div className=" flex flex-col items-center justify-center p-1 ">
        <SearchLabel />
        <SearchInput />
        <SearchTags />
      </div>
      <BreadcrumbWithCustomSeparator />
    </div>
  );
}
