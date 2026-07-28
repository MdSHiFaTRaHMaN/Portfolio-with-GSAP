import './globals.css';

export const metadata = {
  title: 'Ebraheem Alhetari - Portfolio',
  description: 'A freelance full-stack developer making good shit since 2023.',
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
