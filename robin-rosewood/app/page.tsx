import Image from 'next/image'

export default function Home() {
  return (
<main className='relative flex flex-col'>
<nav>
    <div>
      <h1 id='Logo' className='ml-10 py-4 font-serif font-normal text-2xl'>Robin Rosewood</h1>
    </div>
  </nav>
  <section id='hero' className='grid grid-cols-12 bg-robin-yellow text-hero-navy font-serif'>
    <div id="hero-text" className='col-span-6 z-10 ml-10 pb-6'>
      <div id='hero-headline' className='mb-4 mt-12 relative'>
        <Image className='fixed top-12' width={100} height={100} src='/images/bird.svg' alt='hero illustration' />
        <h2 className='text-hero-headline leading-hero-headline tracking-tightest font-semibold'>Robin Rosewood</h2>
      </div>
      <div id='hero-subheadline' className='text-4xl font-semibold'>
        <p>Author.</p>
        <p>Storyteller.</p>
        <p>Wordsmith.</p>
      </div>
    </div>
    <div id='hero-illustration' className='col-span-6 relative'>
    <div id='illustration' className='mt-12 relative'>
      <Image className='absolute right-0' width={500} height={500} src='/images/heroillustration.svg' alt='hero illustration' />
      </div>
    </div>
</section>

  <section id="homepage-block-1" className="col-span-12">
    {/* Content for block 1 */}
  </section>
  <section id="homepage-block-2" className="col-span-12">
    {/* Content for block 2 */}
  </section>
  <section id="homepage-about-block" className="col-span-12">
    <h3>About</h3>
    <div id='headshot' className="w-64 h-64 rounded-full overflow-hidden">
      <Image
        width={450}
        height={450}
        src='/images/robin.jpg'
        alt="Headshot"
        className="w-full h-full object-cover"
      />
    </div>
  </section>
  <footer className="col-span-12">
    {/* Footer content */}
  </footer>
</main>

    )
}
