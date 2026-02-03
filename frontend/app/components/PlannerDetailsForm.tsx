"use client";

import { EventDetailsFormProps } from "../types";

type Props = EventDetailsFormProps & {
  onBack: () => void;
};

export default function PlannerDetailsForm({
  register,
  onNext,
  onBack,
}: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Event Planning Requirements
        </h2>
        <p className="text-gray-600 mb-6">Tell us about your planning needs</p>
      </div>

      {/* Event Budget */}
      <div>
        <label
          htmlFor="eventBudget"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Event Budget (₹) <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <span className="absolute left-4 top-3.5 text-gray-500">₹</span>
          <input
            id="eventBudget"
            type="number"
            placeholder="50000"
            className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
            {...register("plannerDetails.eventBudget", { required: true })}
          />
        </div>
        <p className="mt-1 text-xs text-gray-500">
          Approximate budget for the entire event
        </p>
      </div>

      {/* Guest Count */}
      <div>
        <label
          htmlFor="guestCount"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Expected Guest Count <span className="text-red-500">*</span>
        </label>
        <input
          id="guestCount"
          type="number"
          placeholder="e.g., 150"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
          {...register("plannerDetails.guestCount", { required: true })}
        />
        <p className="mt-1 text-xs text-gray-500">
          Estimated number of attendees
        </p>
      </div>

      {/* Services Required */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Services Required <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          {[
            { value: "Vendor", label: "Vendor Management", icon: "🛍️" },
            { value: "Decor", label: "Decor & Styling", icon: "🎨" },
            {
              value: "Guest Management",
              label: "Guest Management",
              icon: "👥",
            },
            { value: "Caterers", label: "Catering Services", icon: "🍽️" },
          ].map((service) => (
            <label
              key={service.value}
              className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-purple-300 cursor-pointer transition-all group"
            >
              <input
                type="checkbox"
                value={service.value}
                className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500 cursor-pointer"
                {...register("plannerDetails.services", {
                  required: "Select at least one",
                })}
              />
              <span className="ml-3 text-2xl">{service.icon}</span>
              <span className="ml-3 text-gray-700 font-medium group-hover:text-purple-700">
                {service.label}
              </span>
            </label>
          ))}
        </div>
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
          className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
