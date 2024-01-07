import { medium } from "@/app/layout";

export default function CalendarTableHead() {
  return (
    <ul
      className={`mt-3 grid grid-cols-7 gap-1 py-3 text-center text-lg text-text-primary ${medium.className} border-2 border-background-secondary`}
    >
      <li className="text-[#b91c1c]">SUN</li>
      <li>MON</li>
      <li>TUE</li>
      <li>WED</li>
      <li>THU</li>
      <li>FRI</li>
      <li className="text-[#1d4ed8]">SAT</li>
    </ul>
  );
}
