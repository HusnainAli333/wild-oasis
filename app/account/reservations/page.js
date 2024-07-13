import ReservationCard from "@/app/_components/ReservationCard";
export const metadata = {
  title: "Reservations",
};
function page() {
  const booking = [];
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your Reservations
      </h2>
      {booking.length === 0 ? (
        <p className="text-lg">
          {" "}
          You have no Reservations yet
          <a className="underline text-accent-500" href="/cabins">
            {" "}
            luxry cabins &rarr;
          </a>
        </p>
      ) : (
        <ul className="space-y-6">
          {booking.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default page;
