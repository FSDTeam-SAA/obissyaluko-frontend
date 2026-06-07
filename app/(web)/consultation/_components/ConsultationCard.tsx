"use client";

import { CheckCircle } from "lucide-react";

interface Props {
  title: string;
  description: string;
  price: string;
  selected: boolean;
  onClick: () => void;
}

export default function ConsultationCard({
  title,
  description,
  price,
  selected,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`
      cursor-pointer rounded-lg border bg-white p-5 shadow-sm
      transition-all

      ${
        selected
          ? "border-green-500 bg-green-50 ring-1 ring-green-500"
          : "border-transparent hover:border-gray-200"
      }
    `}
    >
      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-gray-500">
        {description}
      </p>

      <p className="mt-4 text-2xl font-bold text-[#336FCA]">
        {price}
      </p>

      {selected && (
        <div className="mt-3 flex items-center gap-2 text-green-600">
          <CheckCircle size={16} />
          Selected
        </div>
      )}
    </div>
  );
}