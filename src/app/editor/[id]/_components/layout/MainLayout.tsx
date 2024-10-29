// import Header from "./includes/Header";
import { BackCustomizeId} from "../BackCustomizeId";
import Footer from "./includes/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <BackCustomizeId/>
      {children}
      <Footer />
    </>
  );
}
