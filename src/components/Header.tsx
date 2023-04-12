import Link from 'next/link'
import { FaGithub, FaDiscord, FaTwitter } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import GetPraiseButton from './landing/GetPraiseButton'
import { OverlapHover, OverlapHoverImage } from 'react-overlap'

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const logoData = [
    {
      svg: FaGithub,
      href: 'https://github.com/givepraise/praise',
      alt: 'Github',
    },
    {
      svg: FaDiscord,
      href: 'https://discord.gg/U2ydzXBG6C',
      alt: 'Discord',
    },
    {
      svg: FaTwitter,
      href: 'https://twitter.com/givepraise',
      alt: 'Twitter',
    },
  ]

  return (
    <header
      className={`${
        isSticky ? 'fixed top-0 left-0 z-50 w-full bg-white ' : ''
      }`}>
      <nav className="mx-auto flex items-center px-4 py-4">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/img/icon.png" alt="Your Logo" width={32} height={32} />
          </Link>
        </div>
        <div className="ml-2 hidden items-center space-x-4 md:flex">
          <Link href="/">
            <span className="font-bold text-gray-800 hover:text-pink-600">
              Praise
            </span>
          </Link>
          <Link href="https://givepraise.xyz/docs/" target="_blank">
            <span className="ml-2 text-gray-800 hover:text-pink-600">Docs</span>
          </Link>
          <Link href="https://mirror.xyz/givepraise.eth" target="_blank">
            <span className="ml-2 text-gray-800 hover:text-pink-600">Blog</span>
          </Link>
          <GetPraiseButton />
        </div>
        {/* <OverlapHover size={30} spacing={10} overlap={0.4} direction="left">
          {logoData.map((data, index) => (
            <OverlapHoverImage
              key={index}
              alt={data.alt}
              href={data.href}
              className="opacity-100 hover:opacity-70" // Optional, tailwind example
              svg={data.svg}
            />
          ))}
        </OverlapHover> */}
        <div className="headerGroupIcons ml-auto flex items-center space-x-4">
          <Link
            href="https://twitter.com/givepraise"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600">
            <FaTwitter className="text-3xl" />
          </Link>
          <Link
            href="https://discord.com/invite/U2ydzXBG6C"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600">
            <FaDiscord className="text-3xl" />
          </Link>
          <Link
            href="https://github.com/givepraise/praise"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600">
            <FaGithub className="text-3xl" />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
