"use client";

import { EventDetailsFormProps } from "../types";

type Props = EventDetailsFormProps & {
  onBack: () => void;
};

export default function CrewDetailsForm({ register, onNext, onBack }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Technical Crew Requirements
        </h2>
        <p className="text-gray-600 mb-6">
          Tell us about your technical support needs
        </p>
      </div>

      {/* Duration */}
      <div>
        <label
          htmlFor="crewDuration"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Crew Duration <span className="text-red-500">*</span>
        </label>
        <input
          id="crewDuration"
          type="text"
          placeholder="e.g., 5 hours, Full day"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
          {...register("crewDetails.duration", { required: true })}
        />
        <p className="mt-1 text-xs text-gray-500">
          How long will you need the crew?
        </p>
      </div>

      {/* Crew Types */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Crew Types <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          {[
            { value: "Stage", label: "Stage Setup Crew", icon: "🎪" },
            { value: "Lighting", label: "Lighting Technicians", icon: "💡" },
            { value: "Sound", label: "Sound Engineers", icon: "🔊" },
            { value: "Security", label: "Security Personnel", icon: "🛡️" },
            {
              value: "Photographer",
              label: "Photographers/Videographers",
              icon: "📸",
            },
          ].map((crew) => (
            <label
              key={crew.value}
              className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-purple-300 cursor-pointer transition-all group"
            >
              <input
                type="checkbox"
                value={crew.value}
                className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500 cursor-pointer"
                {...register("crewDetails.crewType", {
                  required: "Select at least one",
                })}
              />
              <span className="ml-3 text-2xl">{crew.icon}</span>
              <span className="ml-3 text-gray-700 font-medium group-hover:text-purple-700">
                {crew.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Count Details */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Number of Crew Members (Optional)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="stageNumbers"
              className="block text-xs text-gray-600 mb-1"
            >
              Stage Crew
            </label>
            <input
              id="stageNumbers"
              type="number"
              min="0"
              placeholder="0"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
              {...register("crewDetails.count.stageNumbers")}
            />
          </div>
          <div>
            <label
              htmlFor="lightNumbers"
              className="block text-xs text-gray-600 mb-1"
            >
              Lighting Technicians
            </label>
            <input
              id="lightNumbers"
              type="number"
              min="0"
              placeholder="0"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
              {...register("crewDetails.count.lightNumbers")}
            />
          </div>
          <div>
            <label
              htmlFor="soundNumbers"
              className="block text-xs text-gray-600 mb-1"
            >
              Sound Engineers
            </label>
            <input
              id="soundNumbers"
              type="number"
              min="0"
              placeholder="0"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
              {...register("crewDetails.count.soundNumbers")}
            />
          </div>
          <div>
            <label
              htmlFor="securityNumbers"
              className="block text-xs text-gray-600 mb-1"
            >
              Security Personnel
            </label>
            <input
              id="securityNumbers"
              type="number"
              min="0"
              placeholder="0"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
              {...register("crewDetails.count.securityNumbers")}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="photographers"
              className="block text-xs text-gray-600 mb-1"
            >
              Photographers/Videographers
            </label>
            <input
              id="photographers"
              type="number"
              min="0"
              placeholder="0"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
              {...register("crewDetails.count.photographers")}
            />
          </div>
        </div>
      </div>

      {/* Equipment Required */}
      <div>
        <label
          htmlFor="crewEquipmentRequired"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Equipment Required (Optional)
        </label>
        <textarea
          id="crewEquipmentRequired"
          rows={3}
          placeholder="e.g., Professional cameras, LED lights, wireless mics, walkie-talkies..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none resize-none"
          {...register("crewDetails.equipmentRequired")}
        />
        <p className="mt-1 text-xs text-gray-500">
          List any special equipment needs
        </p>
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
