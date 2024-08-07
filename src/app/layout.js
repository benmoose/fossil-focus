import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fossil Focus',
  description: 'Fossil Focus.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

const Navbar = () => {
  return (
    <nav className='bg-slate-900 text-slate-50'>
      <div className='p-2 sm:px-6 mx-auto max-w-7xl'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <h4 className='font-bold'>
              Fossil Focus
              <code className='ml-3 font-mono text-xs text-yellow-500'>development</code>
            </h4>
          </div>
          <p className='flex items-baseline text-sm text-slate-200'>
            by&nbsp;
            <a
              className='pointer-events-auto text-slate-50 font-bold hover:text-white ml-1'
              href='https://www.manchester.ac.uk/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Bex Hadfield
            </a>
          </p>
        </div>
      </div>
    </nav>
  )
}
