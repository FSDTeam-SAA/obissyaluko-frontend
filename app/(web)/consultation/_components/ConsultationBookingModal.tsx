"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ConsultationBookingForm from "./ConsultationBookingForm";
import StripePaymentForm from "./StripePaymentForm";
import { useConsultationBooking } from "./useConsultationBooking";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export enum ConsultationType {
  VISA = "Visa Consultation",
  STUDY_ABROAD = "Study Abroad",
  TOUR = "Tour Package",
  GENERAL = "General",
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  consultationType: string;
  price: string;
  duration: string;
  fee: number;
}

export default function ConsultationBookingModal({
  open,
  onOpenChange,
  consultationType,
  price,
  duration,
  fee,
}: Props) {
  const [step, setStep] = useState<"form" | "payment">("form");
  const [clientSecret, setClientSecret] = useState<string>("");
  // const [formData, setFormData] = useState<any>(null);

  const { mutate: bookConsultation, isPending } = useConsultationBooking(
    (clientSecret) => {
      setClientSecret(clientSecret);
      setStep("payment");
    },
    (errorMsg) => {
      console.error("Booking error:", errorMsg);
    }
  );
//eslint-disable-next-line
  const handleFormSubmit = (data: any) => {
    // Send duration and fee from the selected consultation
    const payload = {
      clientName: data.fullName,
      email: data.email,
      phone: data.phone,
      type: data.consultationType as ConsultationType,
      duration: duration, // This comes from selected consultation (1 Hour or 30 Minutes)
      fee: fee, // This comes from selected consultation (40 or 20)
      preferredDate: data.preferredDate,
      preferredTime: data.preferredTime,
      message: data.message || "",
      paymentStatus: "Paid" as const,
    };
    
    console.log("Sending payload:", payload);
    // setFormData(data);
    bookConsultation(payload);
  };

  const handlePaymentSuccess = () => {
    setStep("form");
    onOpenChange(false);
    // setFormData(null);
  };

  const handleBackToForm = () => {
    setStep("form");
    setClientSecret("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          max-w-[700px]
          p-0
          overflow-hidden
          !rounded-[16px]
          border-0
          [&>button]:hidden
          bg-white
        "
      >
        {/* Header */}
        <div className="bg-[#CD9B46] px-8 py-8">
          <h2 className="text-3xl font-semibold text-white">
            {step === "form" ? "Book Consultation" : "Complete Payment"}
          </h2>
          {step === "payment" && (
            <p className="text-white/90 mt-2">
              {consultationType} Consultation ({duration}) - {price}
            </p>
          )}
        </div>

        <div className="p-8">
          {step === "form" ? (
            <ConsultationBookingForm
              defaultConsultationType={consultationType}
              defaultDuration={duration}
              defaultFee={fee}
              defaultPrice={price}
              onSubmit={handleFormSubmit}
              onCancel={() => onOpenChange(false)}
              isPending={isPending}
            />
          ) : (
            clientSecret && (
              <Elements
                stripe={stripePromise}
                options={{
                  clientSecret,
                  appearance: {
                    theme: "stripe",
                    variables: {
                      colorPrimary: "#CD9B46",
                    },
                  },
                }}
              >
                <StripePaymentForm
                  amount={fee}
                  onSuccess={handlePaymentSuccess}
                  onCancel={handleBackToForm}
                />
              </Elements>
            )
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}