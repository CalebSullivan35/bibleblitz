"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryclient = new QueryClient();
export const ReactQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <QueryClientProvider client={queryclient}>{children}</QueryClientProvider>
  );
};
