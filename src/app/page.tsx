import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MindMelds',
  description: 'MindMelds connects small businesses with mental health experts for personalized consultations and custom productivity apps, bridging the gap between mental well-being and business efficiency.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">MindMelds</h1>
      <p className="mt-4 text-lg">MindMelds connects small businesses with mental health experts for personalized consultations and custom productivity apps, bridging the gap between mental well-being and business efficiency.</p>
    </main>
  )
}
