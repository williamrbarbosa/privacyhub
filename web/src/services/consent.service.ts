import api from "../hooks/api";
import { useMutation } from "@tanstack/react-query";

export type CreateConsentDTO = {
  analytics: boolean;
  marketing: boolean;
};

export type ConsentResponse = {
  id: string;
  analytics: boolean;
  marketing: boolean;
  necessary: boolean;
  createdAt: string;
};

export async function createConsent(data: CreateConsentDTO) {
  const response = await api.post<ConsentResponse>("/consent", data);
  return response.data;
}

export function useCreateConsent() {
  return useMutation({
    mutationFn: (data: CreateConsentDTO) => createConsent(data),
  });
}
