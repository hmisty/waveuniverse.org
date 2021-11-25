import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, FilmIcon, CashIcon, GlobeIcon, SparklesIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const solutions = [
  {
    name: 'wave mall',
    description: 'Multi-chain NFT Marketplace',
    href: '/#wave-mall',
    icon: '/assets/home/wave-market-logo.svg'
  },
  {
    name: 'wave exchange',
    description: 'Crypto Exchange',
    href: '/#wave-exchange',
    icon: '/assets/home/wave-exchange-logo.svg'
  },
  {
    name: 'wave chain',
    description: 'A global entertainment alliance public blockchain',
    href: '/#wave-chain',
    icon: '/wave-logo.svg'
  },
  {
    name: 'wave fund',
    description: 'Promoting Wave Ecological Development',
    href: '/#wave-fund',
    icon: '/assets/home/wave-fund-logo.svg'
  }
]
const features = [
  {
    name: 'Low Transaction Fees',
    description: 'Affordable transaction fee for the public mainstream to use.'
  },
  {
    name: 'High Performance',
    description: 'Much higher TPS to be more competitive in the market.'
  },
  {
    name: 'Open Network',
    description: 'Fully open network for every partner to join the ecosystem.'
  },
  {
    name: 'Deep Industry Integration',
    description: 'Industry alliances are seriously participate in the ecosystem.'
  },
  {
    name: 'Entertainment Industry',
    description:
      'Film, music, directors, artists, performers etc. Wave Chain will be center of global entertainment for the next decades.',
    icon: FilmIcon
  },
  {
    name: 'Technology',
    description:
      'Embracing with AI, IoT and Decentralized Storage Services, the eco-system can benefit the experience like the cloud service.',
    icon: SparklesIcon
  },
  {
    name: 'Payment',
    description:
      'With payment service partners around the globe, we can build the real borderless payment system on the blockchain, complainced.',
    icon: CashIcon
  },
  {
    name: 'Environmental Protection',
    description:
      'Not only the blockchain is more environmental friendly, it also taking a part in the Global Environmental Protection.',
    icon: GlobeIcon
  }
]
const footerNavigation = {
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: props => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: props => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: '#',
      icon: props => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: '#',
      icon: props => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      )
    }
  ]
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Page() {
  return (
    <div className="bg-white">
      <Head>
        <title>Wave Universe</title>
        <meta name="description" content="an open global digital entertainment ecosystem" />
      </Head>
      <header>
        <Popover className="relative bg-white">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="#">
                <a>
                  <span className="sr-only">Wave Universe</span>
                  <img className="h-8 w-auto sm:h-12" src="/wave-logo-text.svg" alt="Wave Universe" />
                </a>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500'
                      )}
                    >
                      <span>Solutions</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                            {solutions.map(item => (
                              <Link key={item.name} href={item.href}>
                                <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md sm:h-12 sm:w-12">
                                    <img src={item.icon} className="h-10 w-10" aria-hidden="true" alt="" />
                                  </div>
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                </a>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Link href="#">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900 hidden">Vision</a>
              </Link>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0"></div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img className="h-8 w-auto" src="/wave-logo-text.svg" alt="Wave Universe" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid grid-cols-1 gap-7">
                      {solutions.map(item => (
                        <Link href={item.href} key={item.name}>
                          <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md text-white">
                              <img src={item.icon} className="h-10 w-10" aria-hidden="true" alt="" />
                            </div>
                            <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                          </a>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 hidden">
                  <div className="grid grid-cols-2 gap-4">
                    <Link href="#">
                      <a className="text-base font-medium text-gray-900 hover:text-gray-700">Menu</a>
                    </Link>
                  </div>
                  <div className="mt-6"></div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>

      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-cyan-600">
                <img className="h-full w-full object-cover hidden" src="/assets/home/hero-bg.jpg" alt="wave" />
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/assets/home/hero-bg.jpg"
                  className="h-full w-full object-cover sm:rounded-2xl animate-pulse"
                >
                  <source src="/assets/home/hero-bg.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <p className="text-center content-center my-5">
                  <img className="h-28 w-28 sm:h-40 sm:w-40 mx-auto " src="/wave-logo-white.svg" alt="Wave Universe" />
                </p>
                <p className="mt-6 max-w-lg mx-auto text-center font-extralight text-3xl sm:text-5xl leading-loose text-white sm:max-w-3xl uppercase">
                  an open global digital entertainment ecosystem
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Mall & Wave Exchange */}
        <div className="relative pt-16 pb-32 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
          {/* Wave Mall */}
          <div className="relative group" id="wave-mall">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div className="mt-6">
                    <h2 className="text-4xl font-light tracking-tight text-gray-900 text-center sm:text-left">
                      <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                        <img
                          src="/assets/home/wave-market-logo.svg"
                          className="inline mr-3 h-12 w-12 "
                          aria-hidden="true"
                          alt=""
                        />
                        wave mall
                      </span>
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-500">
                      Wave Mall is an open NFT marketplact supports varies of NFT assets on multiple blockchains like
                      Ethereum, Polygon (Matic PoS), Binance Smart Chain, Newton etc.
                    </p>
                    <p className="mt-4 text-base sm:text-lg text-gray-500">
                      Optimized for entertainment industry and mainstream market, with planned multiple fiat and crypto
                      currency support, Wave Mall will be a leading marketplace for mainstream to buy and trade
                      entertainment assets.
                    </p>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <blockquote>
                    <div>
                      <p className="text-base text-gray-500">A public beta will launch soon.</p>
                    </div>
                  </blockquote>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none transform transition-all group-hover:scale-105 sm:group-hover:-translate-x-16"
                    src="/assets/home/wave-mall.jpg"
                    alt="Wave Mall"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Wave Exchange */}
          <div className="mt-24 group" id="wave-exchange">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div className="mt-6">
                    <h2 className="text-4xl font-light tracking-tight text-gray-900 text-center sm:text-left">
                      <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                        <img
                          src="/assets/home/wave-exchange-logo.svg"
                          className="inline mr-3 h-12 w-12 "
                          aria-hidden="true"
                          alt=""
                        />
                        wave exchange
                      </span>
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-500">
                      Wave Exchange will be a complaince exchange providing crypto exchange service to all regions.
                    </p>
                    <p className="mt-4 text-base sm:text-lg text-gray-500">
                      Trading crypto assets without borders will never be easier.
                    </p>
                  </div>
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <blockquote>
                      <div>
                        <p className="text-base text-gray-500">
                          Currently Wave Exchange is under development and looking for partnership.
                        </p>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none transform transition-all group-hover:scale-105 sm:group-hover:translate-x-12"
                    src="/assets/home/wave-exchange.jpg"
                    alt="Wave Exchange"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Chain */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-200" id="wave-chain">
          <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
            <h2 className="text-4xl font-light tracking-tight text-gray-900 text-center sm:text-left">
              <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                <img src="/wave-logo.svg" className="inline mr-3 h-12 w-12 " aria-hidden="true" alt="" />
                wave chain
              </span>
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-cyan-800">
              A global entertainment alliance brings the industry together to the wave chain.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
              {features.map(feature => (
                <div key={feature.name}>
                  {!feature.icon ? (
                    ''
                  ) : (
                    <div>
                      <span className="flex items-center justify-center h-12 w-12">
                        <feature.icon className="h-12 w-12 text-cyan-500" aria-hidden="true" />
                      </span>
                    </div>
                  )}
                  <div className="mt-6">
                    <h3 className="text-base sm:text-lg font-medium text-cyan-600">{feature.name}</h3>
                    <p className="mt-2 text-sm sm:text-base text-cyan-900">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-8 bg-gray-50 overflow-hidden lg:py-24">
          <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center group">
              <div className="relative">
                <h2 className="text-4xl font-light tracking-tight text-gray-900 text-center sm:text-left">
                  <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                    <img
                      src="/assets/home/wave-exchange-logo.svg"
                      className="inline mr-3 h-12 w-12"
                      aria-hidden="true"
                      alt=""
                    />
                    wave wallet
                  </span>
                </h2>
                <p className="mt-3 text-base sm:text-lg text-gray-500">An easy to use crypto wallet for everyone.</p>
                <p className="mt-3 text-base sm:text-lg text-gray-500">
                  Aimed to become the portal of entertainment industry on blockchain.
                </p>
                <p className="mt-3 text-base sm:text-lg text-gray-500">
                  With features of multi-chain support, multi-wallet accounts, buy cryptos with fiat, built-in crypto
                  swap and a smooth experience of coin and NFTs management just like entertaining.
                </p>

                <div className="mt-8 border-t border-gray-200 pt-6">
                  <blockquote>
                    <div>
                      <p className="text-base text-gray-500">Wave Wallet will be released along with Wave Chain.</p>
                    </div>
                  </blockquote>
                </div>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                <img
                  className="relative mx-auto rounded-xl shadow-xl transform transition-all group-hover:scale-105 sm:group-hover:scale-125 group-hover:rotate-6"
                  width={280}
                  src="/assets/home/wave-wallet.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave Fund */}
        <div className="relative bg-gray-900" id="wave-fund">
          <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
            <div className="h-full w-full xl:grid xl:grid-cols-2">
              <div className="h-full xl:relative xl:col-start-2">
                <img
                  className="h-full w-full object-cover opacity-50 xl:absolute xl:inset-0"
                  src="/assets/home/wave-fund-bg.jpg"
                  alt=""
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
            <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
              <h2 className="text-sm font-semibold tracking-wide uppercase">
                <span className="bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
                  Promoting Wave Ecological Development
                </span>
              </h2>
              <p className="mt-3 text-4xl font-light tracking-tight text-white">
                <img
                  src="/assets/home/wave-fund-logo.svg"
                  className="inline mr-3 h-12 w-12 "
                  aria-hidden="true"
                  alt=""
                />
                wave fund
              </p>
              <p className="mt-5 text-lg text-gray-300">
                Wave Fund will empower the wave ecosystem by granting and funding projects, partners and development.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
            <div className="flex space-x-6 md:order-2">
              {footerNavigation.social.map(item => (
                <Link key={item.name} href={item.href}>
                  <a className="text-gray-400 hover:text-cyan-500 hover:scale-125 transition-all">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </Link>
              ))}
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2021 Wave Universe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
