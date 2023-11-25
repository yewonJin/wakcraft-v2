import { Noto_Sans_KR } from "next/font/google";

import "./globals.css";
import TopNav from "@/components/TopNav";
import RecoilProvider from "@/provider/RecoilProvider";
import QueryProvider from "@/provider/QueryProvider";
import { Toaster } from "react-hot-toast";

export const normal = Noto_Sans_KR({
  weight: "400",
  display: "fallback",
  style: "normal",
  subsets: ["cyrillic"],
  variable: "--noto-sans_KR-normal",
  fallback: ["system-ui"],
});

export const medium = Noto_Sans_KR({
  weight: "500",
  display: "fallback",
  style: "normal",
  subsets: ["cyrillic"],
  variable: "--noto-sans_KR-medium",
  fallback: ["system-ui"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta title="wakcraft" name="description" content="Description" />
        <script dangerouslySetInnerHTML={{ __html: setInitialThemeMode }} />
      </head>
      <body className={normal.className}>
        <RecoilProvider>
          <QueryProvider>
            <Toaster />
            <TopNav />
            {children}
          </QueryProvider>
        </RecoilProvider>
      </body>
    </html>
  );
}

const setInitialThemeMode = `
  const getIntialThemeMode = () => {
    const storageTheme = localStorage.getItem("theme");
    const hasStorageTheme = typeof storageTheme === "string";

    if (hasStorageTheme) {
      return storageTheme;
    }

    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const hasMediaQueryPreference = typeof preference.matches === "boolean";

    if (hasMediaQueryPreference) {
      return preference.matches ? "dark" : "light";
    }

    return "light";
  };

  const currentMode = getIntialThemeMode();

  if(currentMode === 'dark') {
    document.documentElement.classList.add(currentMode);
  }

  localStorage.setItem("theme", currentMode);
`;
