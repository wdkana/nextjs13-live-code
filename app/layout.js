import Link from "next/link"
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: '500',
});
export default function RootLayout({ children }) {
  return (
    <html className={roboto.className}>
      <head>
        <title>Dea FreeCourse Main Page</title>
      </head>
      <body>
        <nav style={{ padding: 16, margin: 8 }}>
          <Link href="/" style={{ padding: "0 10px 0 0" }}>Home</Link>
          <Link href="/postingan" style={{ padding: "0 10px 0 0" }}>Postingan</Link>
        </nav>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
