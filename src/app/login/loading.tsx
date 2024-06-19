import { ImSpinner6 } from "react-icons/im";
export default function HomeLoading() {
  return <>
  <div className="w-full h-screen flex items-center justify-center">
      <ImSpinner6 size={100} className="animate-spin"/>
  </div>
  </>;
}
