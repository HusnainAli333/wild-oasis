import Header from "./_components/Header";
import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import ReservationContext from "./context/ReservationContext";

export const metadata = {
  title: {
    default: "Welcome to Wild Oasis",
    template: "%s The Wild Oasis",
  },
  description:
    "small hotel located in the woods of italy deep in the foreset, consist of 8 luxry cabins for the customers to use ",
};
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 antialiased text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">
            <ReservationContext>{children}</ReservationContext>
          </main>
        </div>
      </body>
    </html>
  );
}
