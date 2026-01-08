

// app/dashboard/customers/[id]/page.tsx
export default async function CustomerDetail(   params: Promise<{ id: string }>,
    searchParams?: Promise<{ name: string}>) {
    console.log('params',params)
    const { id } = await params;
    const { name } = await searchParams;
    return <div>CustomerDetail Page. {id}</div>;
  }
  