import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export interface ConsultationPayload {
  clientName: string;
  email: string;
  phone: string;
  type: string; // This will be "Visa Consultation", "Study Abroad", etc.
  duration: string; // This will be "1 Hour" or "30 Minutes"
  fee: number; // This will be 40 or 20
  preferredDate: string;
  preferredTime: string;
  message: string;
  paymentStatus: "Paid";
}

export interface ConsultationResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    _id: string;
    clientName: string;
    email: string;
    phone: string;
    type: string;
    duration: string;
    fee: number;
    preferredDate: string;
    preferredTime: string;
    message: string;
    status: string;
    paymentStatus: string;
    userId: string;
    adminStatus: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface PaymentIntentResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    clientSecret: string;
    paymentIntentId: string;
    amount: number;
  };
}

async function createConsultation(
  payload: ConsultationPayload,
  token: string
): Promise<ConsultationResponse> {
  console.log("📡 POST to /consultation with:", payload);
  
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/consultation`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    }
  );
  
  const data = await response.json();
  console.log("📥 Consultation response:", data);
  
  if (!response.ok) {
    throw new Error(data?.message || "Failed to create consultation.");
  }
  
  return data;
}

async function createPaymentIntent(
  consultationId: string,
  token: string
): Promise<PaymentIntentResponse> {
  console.log("💰 Creating payment intent for consultation:", consultationId);
  
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/payment/consultation/${consultationId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  
  const data = await response.json();
  console.log("💳 Payment intent response:", data);
  
  if (!response.ok) {
    throw new Error(data?.message || "Failed to create payment intent.");
  }
  
  return data;
}

export function useConsultationBooking(
  onPaymentReady: (clientSecret: string, amount: number) => void,
  onError?: (msg: string) => void
) {
  const { data: session } = useSession();
  const token = session?.accessToken as string;

  return useMutation({
    mutationFn: async (payload: ConsultationPayload) => {
      if (!token) {
        throw new Error("Please login to book consultation");
      }
      
      // Step 1: Create consultation
      const consultationResponse = await createConsultation(payload, token);
      const consultationId = consultationResponse.data._id;
      
      // Step 2: Create payment intent
      const paymentResponse = await createPaymentIntent(consultationId, token);
      
      return {
        clientSecret: paymentResponse.data.clientSecret,
        amount: paymentResponse.data.amount,
        consultationId,
      };
    },
    onSuccess: (data) => {
      console.log("✅ Payment ready with amount:", data.amount);
      onPaymentReady(data.clientSecret, data.amount);
    },
    onError: (error: Error) => {
      console.error("❌ Consultation booking error:", error);
      onError?.(error.message);
    },
  });
}