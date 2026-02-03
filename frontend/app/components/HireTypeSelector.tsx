"use client";

import { UseFormSetValue } from "react-hook-form";
import { FormValues } from "../types";
import { useState } from "react";

type Props = {
  setValue: UseFormSetValue<FormValues>;
  onNext: () => void;
  onBack: () => void;
};

export default function HireTypeSelector({ onNext, setValue, onBack }: Props) {
  const [selected, setSelected] = useState<string>("");

  const handleSelect = (type: "planner" | "performer" | "crew") => {
    setSelected(type);
    setValue("hireType", type);
  };

  const hireOptions = [
    {
      type: "planner" as const,
      icon: "📋",
      title: "Event Planner",
      description:
        "Complete event management including vendors, decor, guest coordination, and catering services",
      features: [
        "Vendor Management",
        "Decor Planning",
        "Guest Coordination",
        "Catering Services",
      ],
    },
    {
      type: "performer" as const,
      icon: "🎤",
      title: "Performers",
      description:
        "Entertainment professionals including anchors, DJs, dancers, and live bands",
      features: [
        "Professional Anchors",
        "DJs & Music",
        "Dancers",
        "Live Bands",
      ],
    },
    {
      type: "crew" as const,
      icon: "🎬",
      title: "Technical Crew",
      description:
        "Technical support for stage, lighting, sound, security, and photography needs",
      features: ["Stage Setup", "Lighting & Sound", "Security", "Photography"],
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          What do you need?
        </h2>
        <p className="text-gray-600 mb-6">
          Select the type of service you're looking for
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {hireOptions.map((option) => (
          <div
            key={option.type}
            onClick={() => handleSelect(option.type)}
            className={`cursor-pointer rounded-xl border-2 p-6 transition-all duration-200 hover:shadow-lg ${
              selected === option.type
                ? "border-purple-600 bg-purple-50 shadow-md ring-2 ring-purple-200"
                : "border-gray-200 hover:border-purple-300"
            }`}
          >
            <div className="text-4xl mb-3">{option.icon}</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {option.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{option.description}</p>
            <ul className="space-y-1">
              {option.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="text-xs text-gray-500 flex items-center"
                >
                  <svg
                    className="w-3 h-3 mr-1 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 pt-4">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-200"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!selected}
          className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
            selected
              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
