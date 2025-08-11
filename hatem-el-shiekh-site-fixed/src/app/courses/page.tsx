export const metadata = { title: 'Courses' };
const videos=[
  {id:'1FNG5JHer9c4ZxDRLUZvEp6VHRpiuDlPQ',title:'1 — Introduction'},
  {id:'1j3No1AR08_XBijljll8R-B8yxvhmaNYq',title:'2 — Content Writing'},
  {id:'1OXPpFgwcRlJvIbcXRVUG8_lLbCYnwVBf',title:'3 — Visual Content'},
  {id:'1upRJsqO1qKOJZwlrebNMcyWDDD_9LsHd',title:'4 — Visual Content 2'},
  {id:'1lLYyhVtvNDnqJwSKenb7DXXy2eZ5LXmi',title:'5 — Media Buying'},
  {id:'1WoPsgD3d2nLHk0ilahsy-sPFqDgOnLEg',title:'6 — Media Buying 2'}
];
export default function Courses(){return(<div className='container py-16 space-y-10'><h1 className='font-serif text-4xl'>Courses</h1><section className='rounded-3xl border border-black/5 bg-white p-6 shadow-soft'><h2 className='text-2xl font-semibold'>Marketing for Doctors</h2><p className='mt-2 text-black/70'>Watch all modules below.</p><div className='mt-6 grid gap-8'>{videos.map(v=>(<div key={v.id} className='rounded-3xl border border-black/10 bg-black/90 shadow-soft overflow-hidden'><div className='px-5 pt-4 pb-3 text-white/90 text-sm'>{v.title}</div><iframe src={`https://drive.google.com/file/d/${v.id}/preview`} width='100%' height='520' allow='autoplay' className='w-full'/></div>))}</div></section><section className='rounded-3xl border border-black/5 bg-white p-6 shadow-soft'><h2 className='text-2xl font-semibold'>How to Start a Career in Dubai as a Digital Marketer</h2><div className='mt-2 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-amber-800 text-xs font-semibold'>Available Soon</div><p className='mt-3 text-black/70 max-w-3xl'>This program will cover practical steps to land roles in Dubai: portfolio building, job targeting, interview prep, and on-the-job ramp-up.</p></section></div>);}
