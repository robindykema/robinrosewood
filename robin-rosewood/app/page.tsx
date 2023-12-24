import Image from 'next/image'

export default function Home() {
  return (
<main className='container'>
  <nav className=''>
    <div>
      <h1 id='Logo' className='ml-10 py-4 font-serif font-normal text-2xl'>Robin Rosewood</h1>
    </div>
  </nav>
  <section id='hero' className=' bg-robin-yellow text-hero-navy font-serif text-4xl'>
    <div id="hero-text" className='ml-10 pt-10 pb-4' >
    <div id='hero-headline' className='mb-4'>
      <h2 className='font-semibold lg:text-hero-headline lg:tracking-tightest lg:leading-hero-headline w-2'>Robin Rosewood</h2>
    </div>
    <div id='hero-subheadline' className='font-semibold'>
      <p>Author.</p>
      <p>Storyteller.</p>
      <p>Wordsmith.</p>
    </div>
    </div>
  </section>
  <section id="homepage-block-1">

  </section>
  <section id="homepage-block-2">

  </section>
  <section id="homepage-about-block">
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
  <footer>

  </footer>

</main>

    )
}
