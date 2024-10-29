// import Header from "./includes/Header";
import { BackCustomize} from "../BackCustomize"
import Footer from "./includes/Footer"
import Header from "./includes/Header";



export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Header/>
    <BackCustomize/>
      {children}
      <Footer />
    </>
  );
}
