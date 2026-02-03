"use client";

import { UseFormWatch } from "react-hook-form";
import { FormValues } from "../types";

type Props = {
  watch: UseFormWatch<FormValues>;
  onBack: () => void;
};

export default function ReviewAndSubmitForm({ watch, onBack }: Props) {
  const data = watch();
  const { hireType } = data;

  const formatDate = (dateString: string) => {
    if (!dateString) return "Not set";
    const date = new Date(dateString);
    return date.toLocaleString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Review Your Event
        </h2>
        <p className="text-gray-600 mb-6">
          Please review all details before submitting
        </p>
      </div>

      {/* Event Details Card */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white text-xl">
            🎉
          </div>
          <h3 className="text-lg font-bold text-gray-900 ml-3">
            Event Details
          </h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Event Name:</span>
            <span className="text-gray-900 font-semibold">
              {data.eventName || "Not set"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Type:</span>
            <span className="text-gray-900">{data.eventType || "Not set"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Venue:</span>
            <span className="text-gray-900">
              {data.eventVenue || "Not set"}
            </span>
          </div>
          <div className="flex justify-between items-start">
            <span className="text-gray-600 font-medium">Date & Time:</span>
            <span className="text-gray-900 text-right">
              {formatDate(data.eventDate)}
            </span>
          </div>
        </div>
      </div>

      {/* Planner Details */}
      {hireType === "planner" && data.plannerDetails && (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xl">
              📋
            </div>
            <h3 className="text-lg font-bold text-gray-900 ml-3">
              Planning Requirements
            </h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Budget:</span>
              <span className="text-gray-900 font-semibold">
                ₹
                {data.plannerDetails.eventBudget?.toLocaleString("en-IN") ||
                  "0"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Guest Count:</span>
              <span className="text-gray-900">
                {data.plannerDetails.guestCount || "0"} guests
              </span>
            </div>
            <div>
              <span className="text-gray-600 font-medium block mb-2">
                Services:
              </span>
              <div className="flex flex-wrap gap-2">
                {data.plannerDetails.services?.map((service, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {service}
                  </span>
                )) || <span className="text-gray-400">None selected</span>}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Performer Details */}
      {hireType === "performer" && data.performerDetails && (
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center text-white text-xl">
              🎤
            </div>
            <h3 className="text-lg font-bold text-gray-900 ml-3">
              Performer Requirements
            </h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Duration:</span>
              <span className="text-gray-900">
                {data.performerDetails.duration || "Not specified"}
              </span>
            </div>
            <div>
              <span className="text-gray-600 font-medium block mb-2">
                Performer Types:
              </span>
              <div className="flex flex-wrap gap-2">
                {data.performerDetails.performerType?.map((type, idx) => (
                  <span
                    key={idx}
                    className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {type}
                  </span>
                )) || <span className="text-gray-400">None selected</span>}
              </div>
            </div>
            {data.performerDetails.count && (
              <div>
                <span className="text-gray-600 font-medium block mb-2">
                  Count:
                </span>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {data.performerDetails.count.anchorCount > 0 && (
                    <span>
                      Anchors: {data.performerDetails.count.anchorCount}
                    </span>
                  )}
                  {data.performerDetails.count.djCount > 0 && (
                    <span>DJs: {data.performerDetails.count.djCount}</span>
                  )}
                  {data.performerDetails.count.dancerCount > 0 && (
                    <span>
                      Dancers: {data.performerDetails.count.dancerCount}
                    </span>
                  )}
                  {data.performerDetails.count.singerCount > 0 && (
                    <span>
                      Singers: {data.performerDetails.count.singerCount}
                    </span>
                  )}
                </div>
              </div>
            )}
            {data.performerDetails.equipmentRequired && (
              <div>
                <span className="text-gray-600 font-medium block mb-1">
                  Equipment:
                </span>
                <p className="text-gray-700 text-sm bg-white p-3 rounded-lg">
                  {data.performerDetails.equipmentRequired}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Crew Details */}
      {hireType === "crew" && data.crewDetails && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white text-xl">
              🎬
            </div>
            <h3 className="text-lg font-bold text-gray-900 ml-3">
              Crew Requirements
            </h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Duration:</span>
              <span className="text-gray-900">
                {data.crewDetails.duration || "Not specified"}
              </span>
            </div>
            <div>
              <span className="text-gray-600 font-medium block mb-2">
                Crew Types:
              </span>
              <div className="flex flex-wrap gap-2">
                {data.crewDetails.crewType?.map((type, idx) => (
                  <span
                    key={idx}
                    className="bg-green-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {type}
                  </span>
                )) || <span className="text-gray-400">None selected</span>}
              </div>
            </div>
            {data.crewDetails.count && (
              <div>
                <span className="text-gray-600 font-medium block mb-2">
                  Count:
                </span>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {data.crewDetails.count.stageNumbers > 0 && (
                    <span>Stage: {data.crewDetails.count.stageNumbers}</span>
                  )}
                  {data.crewDetails.count.lightNumbers > 0 && (
                    <span>Lighting: {data.crewDetails.count.lightNumbers}</span>
                  )}
                  {data.crewDetails.count.soundNumbers > 0 && (
                    <span>Sound: {data.crewDetails.count.soundNumbers}</span>
                  )}
                  {data.crewDetails.count.securityNumbers > 0 && (
                    <span>
                      Security: {data.crewDetails.count.securityNumbers}
                    </span>
                  )}
                  {data.crewDetails.count.photographers > 0 && (
                    <span>
                      Photographers: {data.crewDetails.count.photographers}
                    </span>
                  )}
                </div>
              </div>
            )}
            {data.crewDetails.equipmentRequired && (
              <div>
                <span className="text-gray-600 font-medium block mb-1">
                  Equipment:
                </span>
                <p className="text-gray-700 text-sm bg-white p-3 rounded-lg">
                  {data.crewDetails.equipmentRequired}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

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
          type="submit"
          className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
        >
          <span>Submit Event</span>
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
