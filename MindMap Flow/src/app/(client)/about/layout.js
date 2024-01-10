import { DataProvider } from "@/app/context/DataProvider";

export const metadata = {
  title: "Giới thiệu - Mindmap Flow",
  description: "Giới thiệu - Mindmap Flow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
