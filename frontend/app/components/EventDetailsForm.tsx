"use client";

import { EventDetailsFormProps } from "../types";

export default function EventDetailsForm({
  register,
  onNext,
}: EventDetailsFormProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Event Details</h2>
        <p className="text-gray-600 mb-6">Tell us about your event</p>
      </div>

      {/* Event Name */}
      <div>
        <label
          htmlFor="eventName"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Event Name <span className="text-red-500">*</span>
        </label>
        <input
          id="eventName"
          type="text"
          placeholder="e.g., Sarah's Wedding Reception"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
          {...register("eventName", { required: true })}
        />
      </div>

      {/* Event Type */}
      <div>
        <label
          htmlFor="eventType"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Event Type <span className="text-red-500">*</span>
        </label>
        <select
          id="eventType"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none appearance-none bg-white"
          {...register("eventType", { required: "Select any one" })}
        >
          <option value="">Select event type</option>
          <option value="Wedding/Anniversary">Wedding/Anniversary</option>
          <option value="Birthday">Birthday</option>
          <option value="Formal Event">Formal Event</option>
          <option value="Meet & Greet">Meet & Greet</option>
          <option value="Casual">Casual</option>
        </select>
      </div>

      {/* Event Venue */}
      <div>
        <label
          htmlFor="eventVenue"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Event Venue <span className="text-red-500">*</span>
        </label>
        <input
          id="eventVenue"
          type="text"
          placeholder="e.g., Grand Ballroom, Hotel Taj"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
          {...register("eventVenue", { required: true })}
        />
      </div>

      {/* Event Date & Time */}
      <div>
        <label
          htmlFor="datetime"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Date & Time <span className="text-red-500">*</span>
        </label>
        <input
          id="datetime"
          type="datetime-local"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
          {...register("eventDate", { required: true })}
        />
      </div>

      {/* Next Button */}
      <div className="pt-4">
        <button
          type="button"
          onClick={onNext}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
