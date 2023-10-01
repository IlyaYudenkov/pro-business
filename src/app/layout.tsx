import './styles/index.scss'

export const metadata = {
  title: 'PRO-BUSINESS',
  description: '',
}

export const dynamic = 'force-dynamic'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
