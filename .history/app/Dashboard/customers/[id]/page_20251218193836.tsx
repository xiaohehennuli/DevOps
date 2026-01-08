import { useSearchParams, useRouter } from 'next/navigation';

// app/dashboard/customers/[id]/page.tsx
export default async function CustomerDetail({ params }: { params: { id: string };searchParams?: Promise<{ 
    name: string;
  }>; }) {
    console.log('params',params)
    const { id } = await params;
    const {} = useSearchParams();
    return <div>CustomerDetail Page. {id}</div>;
  }
  