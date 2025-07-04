import Image from 'next/image';

export default function Home() {
  return (
    <main className="pt-40 ">
      <div className="flex justify-between items-center px-20">
        <section className="space-y-2">
          <p className='text-6xl'>Hi, I'm Vijaya krishna </p>
          <p className='text-3xl'>— AI Engineer & Full-Stack Developer</p>
          <p className='text-1xl'>I build machine learning models and modern web & mobile apps</p>
          

        </section>
        
          <Image src="/icons/logo.png" alt="Logo" width={300} height={100} />
      </div>
    </main>
  )
}