import './globals.css'

export const metadata = {
  title: 'Netlify MCP Deployment Test',
  description: 'Testing our new Netlify MCP integration for 100% automated deployment\!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
