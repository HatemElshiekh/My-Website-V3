import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function Home(){
  return(<div>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop" alt="Dubai skyline" fill className="object-cover opacity-50" priority/>
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white" />
      </div>
      <div className="container py-24 md:py-36">
        <h1 className="font-serif text-4xl md:text-6xl max-w-3xl leading-tight">Premium Consulting & AI-Driven Marketing for Healthcare Brands.</h1>
        <p className="mt-6 text-lg text-black/70 max-w-2xl">UAE · Egypt · KSA. Strategy, performance, and systems that scale — without gimmicks.</p>
        <div className="mt-8 flex gap-3">
          <Link href="/book"><Button className="h-12 px-6">Book a Consultation</Button></Link>
          <Link href="/courses"><Button className="h-12 px-6 bg-white text-base-charcoal border border-black/10 hover:bg-black/5">View Courses</Button></Link>
        </div>
      </div>
    </section>
    <section className="container py-16 grid gap-6 md:grid-cols-3">
      {[{title:'Consulting',desc:'Positioning, go-to-market, and growth plans.'},{title:'Performance Marketing',desc:'Google, Meta, and full-funnel measurement.'},{title:'AI in Marketing',desc:'Automation and agents that cut costs, not corners.'}].map(it=>(<Card key={it.title}><CardHeader><CardTitle>{it.title}</CardTitle></CardHeader><CardContent className='text-sm text-black/70'>{it.desc}</CardContent></Card>))}
    </section>
    <section className="container py-10">
      <div className="text-black/60 text-sm uppercase tracking-wider mb-4">Trusted by</div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 opacity-70">{Array.from({length:5}).map((_,i)=>(<div key={i} className='h-10 rounded-2xl bg-black/5'/>))}</div>
    </section>
    <section className="container py-16">
      <div className="flex items-center justify-between mb-6"><h2 className="text-2xl font-semibold">Featured Courses</h2><Link href="/courses" className="text-sm text-base-blue">View all</Link></div>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="overflow-hidden"><div className="relative h-48"><Image src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop" alt="Doctor course" fill className="object-cover"/></div><CardHeader><CardTitle>Marketing for Doctors</CardTitle></CardHeader><CardContent className="text-sm text-black/70">Practical, no-nonsense marketing for clinics and dentists.</CardContent></Card>
        <Card className="overflow-hidden"><div className="relative h-48"><Image src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop" alt="Dubai professional scene" fill className="object-cover"/></div><CardHeader><CardTitle>Start Your Marketing Career in Dubai (Available Soon)</CardTitle></CardHeader><CardContent className="text-sm text-black/70">A clear roadmap to land roles, the right way.</CardContent></Card>
      </div>
    </section>
  </div>);
}
