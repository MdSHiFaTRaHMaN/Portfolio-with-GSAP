import './globals.css';

export const metadata = {
  title: 'Sifat Rahman',
  description: 'A freelance web developer making good shit since 2025.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
