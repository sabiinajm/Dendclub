import { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
const dates = [
  { label: "23 Okt", day: "b.e" },
  { label: "24 Okt", day: "ç" },
  { label: "25 Okt", day: "bugün" },
  { label: "26 Okt", day: "c.a" },
  { label: "27 Okt", day: "c" },
  { label: "28 Okt", day: "c" },
  { label: "29 Okt", day: "c" },
  { label: "30 Okt", day: "c" },
];

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
];

const disabledSlots = ["10:00", "14:00"];

const QueueBooking = () => {
  const [selectedDate, setSelectedDate] = useState("25 Okt");
  const [selectedTime, setSelectedTime] = useState("09:30");

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow border border-[#D1D1D6]">
      <p className="text-sm font-light mb-4 text-[#AEAEB2]">Görüş tarixi</p>

      {/* Gün seçimi */}
      <Swiper spaceBetween={8} slidesPerView={"auto"} className="mb-4">
        {dates.map((date) => (
          <SwiperSlide key={date.label} style={{ width: "fit-content" }}>
            <button
              onClick={() => setSelectedDate(date.label)}
              className={`flex flex-col items-center px-3 py-2 border rounded-md min-w-[53px] text-xs  text-[#2C2C2E]
          ${
            selectedDate === date.label
              ? "bg-[#0D9CD8] text-white font-normal"
              : "bg-white text-gray-800 border-gray-300 hover:bg-blue-100"
          }
        `}
            >
              <span>{date.label}</span>
              <span
                className={`text-xs ${
                  selectedDate === date.label ? "" : "text-[#636366]"
                }`}
              >
                {date.day}
              </span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Saat seçimi */}
      <p className="text-sm font-light mb-4 text-[#AEAEB2]">Görüş saatı</p>
      <div className="grid grid-cols-4 gap-x-[39px] gap-y-[13px] mb-4">
        {timeSlots.map((slot) => {
          const isDisabled = disabledSlots.includes(slot);
          const isSelected = selectedTime === slot;

          return (
            <button
              key={slot}
              onClick={() => !isDisabled && setSelectedTime(slot)}
              disabled={isDisabled}
              className={`
                px-2 py-2 rounded-md text-sm border transition
                ${
                  isDisabled
                    ? "bg-gray-200 text-gray-400 line-through cursor-not-allowed"
                    : isSelected
                    ? "bg-[#0D9CD8] text-white font-normal"
                    : "bg-white text-gray-700 hover:bg-blue-100 border-gray-300"
                }
              `}
            >
              {slot}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QueueBooking;
