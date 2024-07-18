import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservations({ cabin }) {
  const [setting, booking] = await Promise.all([
    getBookedDatesByCabinId(cabin.id),
    getSettings(),
  ]);
  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector setting={setting} booking={booking} cabin={cabin} />
      <ReservationForm cabin={cabin} />
    </div>
  );
}

export default Reservations;
