import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
    title: 'Ali Gaziev | Blog',
    description: 'Fullstack Developer Portfolio',
    themeColor: '#0d1117',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body>{children}</body>
            <Analytics/>
		</html>
	)
}
