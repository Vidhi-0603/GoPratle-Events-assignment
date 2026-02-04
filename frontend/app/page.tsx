"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import EventDetailsForm from "./components/EventDetailsForm";
import { FormValues } from "./types";
import HireTypeSelector from "./components/HireTypeSelector";
import PlannerDetailsForm from "./components/PlannerDetailsForm";
import PerformerDetailsForm from "./components/PerformerDetailsForm";
import ReviewAndSubmitForm from "./components/ReviewAndSubmitForm";
import CrewDetailsForm from "./components/CrewDetailsForm";

export default function Home() {
  const [step, setStep] = useState<number>(1);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    resetField,
    reset,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data, "form data");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/events`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (!res.ok) {
        throw new Error("Failed to create event");
      }

      const result = await res.json();
      console.log("Event created ✅", result);

      alert("Event posted successfully!");
      // Reset form and go back to step 1

      reset();
      
      setStep(1);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Create Your Event
          </h1>
          <p className="text-gray-600">Let's plan something amazing together</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Step {step} of {totalSteps}
            </span>
            <span className="text-sm font-medium text-purple-600">
              {progress.toFixed(0)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-2.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Step Labels */}
          <div className="flex justify-between mt-4">
            {["Event Details", "Hire Type", "Requirements", "Review"].map(
              (label, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center ${
                    step > index + 1
                      ? "text-purple-600"
                      : step === index + 1
                        ? "text-purple-700 font-semibold"
                        : "text-gray-400"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                      step > index + 1
                        ? "bg-purple-600 text-white"
                        : step === index + 1
                          ? "bg-purple-600 text-white ring-4 ring-purple-200"
                          : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step > index + 1 ? (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span className="text-xs hidden sm:block">{label}</span>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            {(() => {
              switch (step) {
                case 1:
                  return (
                    <EventDetailsForm
                      register={register}
                      onNext={() => setStep(2)}
                    />
                  );

                case 2:
                  return (
                    <HireTypeSelector
                      setValue={setValue}
                      onNext={() => setStep(3)}
                      onBack={() => setStep(1)}
                    />
                  );

                case 3: {
                  const hireType = watch("hireType");

                  if (hireType === "planner")
                    return (
                      <PlannerDetailsForm
                        register={register}
                        onNext={() => setStep(4)}
                        onBack={() => {
                          resetField("plannerDetails");
                          setStep(2);
                        }}
                      />
                    );

                  if (hireType === "performer")
                    return (
                      <PerformerDetailsForm
                        register={register}
                        onNext={() => setStep(4)}
                        onBack={() => {
                          resetField("performerDetails");
                          setStep(2);
                        }}
                      />
                    );

                  if (hireType === "crew")
                    return (
                      <CrewDetailsForm
                        register={register}
                        onNext={() => setStep(4)}
                        onBack={() => {
                          resetField("crewDetails");
                          setStep(2);
                        }}
                      />
                    );

                  return null;
                }

                case 4:
                  return (
                    <ReviewAndSubmitForm
                      watch={watch}
                      onBack={() => setStep(3)}
                      isSubmitting={isSubmitting}
                    />
                  );

                default:
                  return null;
              }
            })()}
          </form>
        </div>
      </div>
    </div>
  );
}
