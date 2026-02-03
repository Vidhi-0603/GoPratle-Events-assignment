"use client";

import { EventDetailsFormProps } from "../types";

type Props = EventDetailsFormProps & {
  onBack: () => void;
};

export default function PerformerDetailsForm({
  register,
  onNext,
  onBack,
}: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Performer Requirements
        </h2>
        <p className="text-gray-600 mb-6">
          Tell us what entertainment you need
        </p>
      </div>

      {/* Duration */}
      <div>
        <label
          htmlFor="duration"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Performance Duration <span className="text-red-500">*</span>
        </label>
        <input
          id="duration"
          type="text"
          placeholder="e.g., 3 hours, Full day"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
          {...register("performerDetails.duration", { required: true })}
        />
        <p className="mt-1 text-xs text-gray-500">
          How long will the performance last?
        </p>
      </div>

      {/* Performer Types */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Performer Types <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          {[
            { value: "Anchor", label: "Professional Anchor/MC", icon: "🎙️" },
            { value: "DJ", label: "DJ / Music Producer", icon: "🎧" },
            { value: "Dancer", label: "Dancers / Dance Group", icon: "💃" },
            { value: "Singer/Band", label: "Singer / Live Band", icon: "🎤" },
          ].map((performer) => (
            <label
              key={performer.value}
              className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-purple-300 cursor-pointer transition-all group"
            >
              <input
                type="checkbox"
                value={performer.value}
                className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500 cursor-pointer"
                {...register("performerDetails.performerType", {
                  required: "Select at least one",
                })}
              />
              <span className="ml-3 text-2xl">{performer.icon}</span>
              <span className="ml-3 text-gray-700 font-medium group-hover:text-purple-700">
                {performer.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Count Details */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Number of Performers (Optional)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="anchorCount"
              className="block text-xs text-gray-600 mb-1"
            >
              Anchors
            </label>
            <input
              id="anchorCount"
              type="number"
              min="0"
              placeholder="0"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
              {...register("performerDetails.count.anchorCount")}
            />
          </div>
          <div>
            <label
              htmlFor="djCount"
              className="block text-xs text-gray-600 mb-1"
            >
              DJs
            </label>
            <input
              id="djCount"
              type="number"
              min="0"
              placeholder="0"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
              {...register("performerDetails.count.djCount")}
            />
          </div>
          <div>
            <label
              htmlFor="dancerCount"
              className="block text-xs text-gray-600 mb-1"
            >
              Dancers
            </label>
            <input
              id="dancerCount"
              type="number"
              min="0"
              placeholder="0"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
              {...register("performerDetails.count.dancerCount")}
            />
          </div>
          <div>
            <label
              htmlFor="singerCount"
              className="block text-xs text-gray-600 mb-1"
            >
              Singers/Band Members
            </label>
            <input
              id="singerCount"
              type="number"
              min="0"
              placeholder="0"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
              {...register("performerDetails.count.singerCount")}
            />
          </div>
        </div>
      </div>

      {/* Equipment Required */}
      <div>
        <label
          htmlFor="equipmentRequired"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Equipment Required (Optional)
        </label>
        <textarea
          id="equipmentRequired"
          rows={3}
          placeholder="e.g., Wireless microphones, LED screen, smoke machine..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none resize-none"
          {...register("performerDetails.equipmentRequired")}
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
