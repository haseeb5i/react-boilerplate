// import { WagmiProvider } from "wagmi";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// import { wagmiConfig } from "@/lib/wagmi";
import { queryClient } from "@/lib/react-query";

export default function Providers({ children }: React.PropsWithChildren) {
  return (
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </QueryClientProvider>
  );
}
    // // <WagmiProvider config={wagmiConfig}>
    // {/* </WagmiProvider> */}
