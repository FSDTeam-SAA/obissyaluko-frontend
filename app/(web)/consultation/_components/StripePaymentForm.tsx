"use client";

import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { toast } from "sonner";

interface Props {
  amount: number;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function StripePaymentForm({ amount, onSuccess, onCancel }: Props) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      toast.error("Payment system not ready");
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    setIsProcessing(false);

    if (error) {
      toast.error("Payment failed", { 
        description: error.message 
      });
    } else if (paymentIntent?.status === "succeeded") {
      toast.success("Payment successful!", {
        description: "Your consultation has been booked successfully.",
      });
      onSuccess();
    } else if (paymentIntent?.status === "requires_action") {
      toast.info("Additional authentication required", {
        description: "Please follow the instructions to complete your payment.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="rounded-lg border border-gray-200 p-4 bg-white">
        <PaymentElement />
      </div>

      <div className="bg-gray-50 rounded-lg p-3 text-center">
        <p className="text-sm text-gray-600">
          Total charge:{" "}
          <span className="font-semibold text-[#CD9B46] text-lg">
            ${amount.toFixed(2)}
          </span>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-2">
        <button
          type="button"
          onClick={onCancel}
          disabled={isProcessing}
          className="h-12 rounded-md bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors disabled:opacity-50"
        >
          Back
        </button>

        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className="h-12 rounded-[8px] bg-[#CD9B46] text-sm font-semibold text-white hover:bg-[#b8832f] transition-colors disabled:opacity-60"
        >
          {isProcessing ? "Processing..." : `Pay $${amount.toFixed(2)}`}
        </button>
      </div>
    </form>
  );
}