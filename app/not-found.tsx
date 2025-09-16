import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy to-charcoal text-white flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-copper font-playfair mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
            Page Not Found
          </h2>
          <p className="text-xl text-white/80 font-lato leading-relaxed mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to exploring our systematic investing solutions.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild variant="premium" size="lg" className="group">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-navy group">
            <Link href="/insights">
              <Search className="w-4 h-4 mr-2" />
              Browse Insights
            </Link>
          </Button>
        </div>
        
        <div className="text-sm text-white/60 font-lato">
          <p>Need help? <Link href="/contact" className="text-copper hover:underline">Contact us</Link></p>
        </div>
      </div>
    </div>
  )
}
