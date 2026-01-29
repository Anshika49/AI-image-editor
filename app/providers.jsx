// "use client";

// import { ClerkProvider } from "@clerk/nextjs";
// import { ConvexReactClient } from "convex/react";
// import { ConvexProviderWithClerk } from "convex/react-clerk";
// import { shadesOfPurple } from "@clerk/themes";
// import { ThemeProvider } from "../components/theme-provider";
// import { Toaster } from "sonner";
// import FloatingShapes from "../components/floating-shapes";
// import Header from "../components/header";

// const convex = new ConvexReactClient(
//   process.env.NEXT_PUBLIC_CONVEX_URL
// );

// export default function Providers({ children }) {
//   return (
//     <ClerkProvider appearance={{ baseTheme: shadesOfPurple }}>
//       <ConvexProviderWithClerk client={convex}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="dark"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <Header />
//           <main className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
//             <FloatingShapes />
//             <Toaster richColors />
//             {children}
//           </main>
//         </ThemeProvider>
//       </ConvexProviderWithClerk>
//     </ClerkProvider>
//   );
// }
