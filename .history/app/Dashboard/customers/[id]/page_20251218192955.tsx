// app/dashboard/customers/[id]/page.tsx
export default async function CustomerDetail({ params }: { params: { id: string } }) {
    console.log('params',params)
    const { id } = await params;
    return <div>CustomerDetail Page. {id}</div>;
  }
  