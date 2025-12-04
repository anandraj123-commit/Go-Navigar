import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";

export const metadata = {
  title: "My App",
  description: "Example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Material Icons */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
      </head>

      <body>
        {children}

        {/* Bootstrap JS (optional but recommended for dropdowns, modals etc.) */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
