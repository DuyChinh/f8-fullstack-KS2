import { UserProvider } from "@auth0/nextjs-auth0/client";
export const metadata = {
  title: "Liên hệ - Mindmap Flow",
  description: "Liên hệ - Mindmap Flow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>{children}</body>
      </UserProvider>
    </html>
  );
}
