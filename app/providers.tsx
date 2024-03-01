import { ThemeProvider } from "next-themes";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


export function Providers({ children }: { children: React.ReactNode }) {

const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
    </QueryClientProvider>
  );
}
