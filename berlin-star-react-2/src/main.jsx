import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";
import Features from "./components/Features";
import Trips from "./components/Trips";
import CarsBanner from "./components/CarsBanner";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import Toast from "./components/Toast";

function App() {
  const [transport, setTransport] = useState("shared");
  const [booking, setBooking] = useState({
    open: false,
    from: "صنعاء",
    to: "",
    date: "",
    passengers: "1"
  });
  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);
    window.clearTimeout(window.__toastTimer);
    window.__toastTimer = window.setTimeout(() => setToast(""), 3000);
  };

  const openBooking = (data = {}) => {
    setBooking((old) => ({ ...old, ...data, open: true }));
  };

  const closeBooking = () => {
    setBooking((old) => ({ ...old, open: false }));
  };

  const searchTrip = (data) => {
    if (!data.to) return showToast("اختر الوجهة أولاً");
    if (data.from === data.to) return showToast("مدينة الانطلاق والوصول يجب أن تكون مختلفة");
    if (!data.date) return showToast("اختر تاريخ الرحلة");

    openBooking(data);
  };

  return (
    <>
      <TopBar />
      <Navbar onBook={() => openBooking({})} />

      <main>
        <Hero />

        <SearchBox
          transport={transport}
          setTransport={setTransport}
          onSearch={searchTrip}
        />

        <Features />
        <Trips onBook={(to) => openBooking({ to })} />
        <CarsBanner
          onBook={() => {
            setTransport("private");
            openBooking({ transport: "private" });
          }}
        />
      </main>

      <Footer />

      <BookingModal
        open={booking.open}
        booking={booking}
        setBooking={setBooking}
        transport={transport}
        setTransport={setTransport}
        onClose={closeBooking}
        showToast={showToast}
      />

      <Toast message={toast} />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
