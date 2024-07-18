"use client";
import { createContext, useContext, useState } from "react";

const CreateReservationContext = createContext();

const intialState = { to: undefined, from: undefined };

function ReservationContext({ children }) {
  const [range, setRange] = useState(intialState);
  const resetRange = () => setRange(intialState);
  return (
    <CreateReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </CreateReservationContext.Provider>
  );
}

function useReservationsContext() {
  const context = useContext(CreateReservationContext);
  return context;
}

export { useReservationsContext };
export default ReservationContext;
