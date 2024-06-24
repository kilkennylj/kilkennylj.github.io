export const metadata = {
    title: 'Liam Kilkenny\'s Portfolio',
    description: 'Professional Portfolio Website developed by Liam Kilkenny',
  }

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    )
  }