import { UseFormRegister } from "react-hook-form";

export type EventDetailsFormProps = {
  register: UseFormRegister<FormValues>;
  onNext: () => void;
  onBack?: () => void;
};

export type FormValues = {
  eventType: string;
  eventName: string;
  eventVenue: string;
  eventDate: string;
  hireType: string;
  plannerDetails: {
    eventBudget: number;
    guestCount: number;
    services: string[];
  };
  performerDetails: {
    performerType: string[];
    duration: string;
    equipmentRequired: string;
    count: {
      anchorCount: number;
      djCount: number;
      dancerCount: number;
      singerCount: number;
    };
  };
  crewDetails: {
    crewType: string[];
    duration: string;
    equipmentRequired: string;
    count: {
      stageNumbers: number;
      securityNumbers: number;
      lightNumbers: number;
      soundNumbers: number;
      photographers:number;
    };
  };
};
