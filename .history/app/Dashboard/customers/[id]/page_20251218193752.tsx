import { useSearchParams, useRouter } from 'next/navigation';

// app/dashboard/customers/[id]/page.tsx
export default async function CustomerDetail({ params }: { params: { id: string } }) {
    console.log('params',params)
    const { id } = await params;
    const {} = React.use
    return <div>CustomerDetail Page. {id}</div>;
  }
  