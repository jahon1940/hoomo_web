import Link from 'next/link'
import Image from 'next/image'

import { Button } from '../ui/button'

import HoomoLogo from '@/public/hoomo-logo.png'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/70 border-b border-gray-800/50">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          {/* <div className="relative w-8 h-8 overflow-hidden rounded-full bg-teal-600">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <Smartphone className="relative z-10 h-5 w-5 text-gray-950 m-1.5" />
      </div> */}
          <div className="size-[40px]">
            <Image
              width={500}
              height={500}
              src={HoomoLogo}
              alt="logo"
              className="font-bold text-lg text-white w-full h-full object-contain"
            />
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#services"
            className="text-sm font-medium hover:text-teal-400 transition-colors"
          >
            Услуги
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium hover:text-teal-400 transition-colors"
          >
            Проекты
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-teal-400 transition-colors">
            О нас
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-teal-400 transition-colors"
          >
            Контакты
          </Link>
        </nav>
        <Link href={'/#contact'}>
          <Button className="bg-teal-600 hover:bg-teal-700 text-gray-950 rounded-full px-6">
            Связаться
          </Button>
        </Link>
      </div>
    </header>
  )
}

export default Header
