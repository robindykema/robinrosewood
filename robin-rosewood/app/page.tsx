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
  <section>

  </section>
  <footer>

  </footer>

</main>

    )
}
