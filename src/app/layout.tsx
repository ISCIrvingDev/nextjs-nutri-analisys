// * NextJS: SEO
import type { Metadata } from 'next';

// * Styles
import './globals.css';
import { Inter } from 'next/font/google';

// * Providers
import { LanguageProvider } from '@/shared/providers/LanguageContext';

// * Components
import { Header } from './_components/Header';
import { Footer } from './_components/Footer';
import { Toaster } from '@/shared/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nutri Analysis - AI-Powered Meal Nutrition Analysis',
  description:
    'Upload a photo of your meal and get instant nutritional analysis powered by artificial intelligence. Track calories, protein, carbs, and more.',
  // "keywords" ya es una propiedad obsoleta
  // keywords: [
  //   'nutrition analysis',
  //   'meal tracker',
  //   'calorie counter',
  //   'AI nutrition',
  //   'food analysis',
  //   'meal nutrition',
  // ],
  authors: [{ name: 'Irving Salazar', url: 'https://ivin-dev.com' }],
  // "openGraph" esta provocando errores en el SEO
  // openGraph: {
  //   title: 'Nutri Analysis - AI-Powered Meal Nutrition Analysis',
  //   description:
  //     'Upload a photo of your meal and get instant nutritional analysis powered by AI',
  //   type: 'website',
  //   url: '/', // Es la misma que "canonical"
  //   images: ['/img/logo.png']
  // },
  metadataBase: new URL('https://nutri.ivin-dev.com'), // Next will use this to make complete URLs from relative paths.
  // metadataBase: new URL('http://localhost:3000'), // Para pruebas de SEO en local
  alternates: {
    canonical: '/', // For the homepage, or specific path like '/articles/my-post'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
