"use client";

import { QueryClientProvider, QueryClient, QueryCache } from "react-query";

import { handleError } from "@/hooks/useApiError";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: handleError,
    },
  },
  queryCache: new QueryCache({
    onError: handleError,
  }),
});

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
