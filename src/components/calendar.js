import React, {useState, useEffect} from "react";
import Months from "../../months.json";
import "../../styles/calendar.css";
import Arrow from "../../public/assets/arrow.png";
import Image from "next/image";
function Calendar({setDate}) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonthIndex = today.getMonth();
  const currentDay = today.getDate();

  // State to manage the selected month and year
  const [year, setYear] = useState(currentYear);
  const [monthIndex, setMonthIndex] = useState(currentMonthIndex);

  // State for range selection with default start date
  const [startDate, setStartDate] = useState(
    new Date(currentYear, currentMonthIndex, currentDay)
  );

  setDate(startDate);

  const [endDate, setEndDate] = useState(null);

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Check if it's a leap year
  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  // Adjust February for leap years
  const getDaysInMonth = (monthIndex) => {
    const month = Months.months[monthIndex];
    if (month.name === "February" && isLeapYear(year)) {
      return 29;
    }
    return month.days;
  };

  // Get the day of the week the month starts on (0 for Sunday, 1 for Monday, etc.)
  const getFirstDayOfMonth = () => {
    const firstDay = new Date(year, monthIndex, 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1; // Adjust for Monday as the first day of the week
  };

  // Handle selecting a date
  const selectDate = (day) => {
    const selectedDate = new Date(year, monthIndex, day);
    // const selectedDate = new Date(year, monthIndex, );

    // If no end date has been selected or the selected date is before the start date, set it
    if (!startDate || selectedDate < startDate) {
      setStartDate(selectedDate);
      setEndDate(null); // Reset end date if start date is re-selected
    } else if (!endDate && selectedDate > startDate) {
      setEndDate(selectedDate);
    } else {
      // Reset if both start and end date are already selected
      setStartDate(selectedDate);
      setEndDate(null);
    }
  };

  // Check if a date is in the selected range
  const isInRange = (day) => {
    if (!startDate || !endDate) return false;
    const currentDate = new Date(year, monthIndex, day);
    return currentDate >= startDate && currentDate <= endDate;
  };

  // Check if a date is the selected start or end date
  const isSelectedDate = (day) => {
    const date = new Date(year, monthIndex, day);
    return (
      (startDate && date.getTime() === startDate.getTime()) ||
      (endDate && date.getTime() === endDate.getTime())
    );
  };

  // Helper function to generate day cells for the current month
  const generateDays = () => {
    const daysInMonth = getDaysInMonth(monthIndex);
    const firstDayOfMonth = getFirstDayOfMonth();
    const daysArray = [];

    // Add empty cells for the days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(<div key={`empty-${i}`} className="empty-day" />);
    }

    // Add the actual days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = isSelectedDate(day);
      const inRange = isInRange(day);

      // Disable past dates in the current month
      const isPast =
        year === currentYear &&
        monthIndex === currentMonthIndex &&
        day < currentDay;

      daysArray.push(
        <div className=" flex flex-col items-center  text-center gap-1">
          <div
            key={day}
            className={`day-cell ${isSelected ? "selected-day" : ""} ${
              inRange ? "in-range-day" : ""
            } ${isPast ? "disabled-day" : ""}`}
            onClick={() => !isPast && selectDate(day)} // Only allow clicks on valid days
          >
            {day}
          </div>
          <div
            className={`${
              currentDay == day &&
              monthIndex == currentMonthIndex &&
              year == currentYear
                ? " border-[3px] border-gray-600 rounded-full "
                : ""
            } `}
          ></div>
        </div>
      );
    }

    return daysArray;
  };

  // Handle month navigation, disable navigation to past months
  const goToPreviousMonth = () => {
    if (year === currentYear && monthIndex === currentMonthIndex) return; // Prevent going to past months
    setMonthIndex((prev) => (prev === 0 ? 11 : prev - 1));
    if (monthIndex === 0) setYear((prev) => prev - 1);
  };

  const goToNextMonth = () => {
    setMonthIndex((prev) => (prev === 11 ? 0 : prev + 1));
    if (monthIndex === 11) setYear((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <div className="flex gap-5 items-center  my-2">
        <button
          onClick={goToPreviousMonth}
          disabled={year === currentYear && monthIndex === currentMonthIndex}
        >
          <div
            className={`${
              year === currentYear && monthIndex === currentMonthIndex
                ? " "
                : "p-4 rounded-full bg-[#f6f6f6]"
            }`}
          >
            <Image src={Arrow} alt="arr" className=" rotate-90" />
          </div>
        </button>
        <div className=" font-inter text-lg m-0">
          {Months.months[monthIndex].name} {year}
        </div>
        <button onClick={goToNextMonth}>
          {" "}
          <div className=" p-4 rounded-full bg-[#f6f6f6]">
            <Image src={Arrow} alt="arr" className=" -rotate-90" />
          </div>
        </button>
      </div>

      <div className="flex gap-5 ml-3">
        {weekdays.map((weekday) => (
          <div key={weekday} className=" font-medium text-[14px]">
            {weekday}
          </div>
        ))}
      </div>

      <div className="calendar-days-container">{generateDays()}</div>

      {startDate && endDate && (
        <div className="selected-range">
          Selected Range: {startDate.toDateString()} - {endDate.toDateString()}
        </div>
      )}
    </div>
  );
}

export default Calendar;
