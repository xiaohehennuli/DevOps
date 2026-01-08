// app/dashboard/customers/[id]/page.tsx
export default function CustomerDetail({ params }: { params: { id: string } }) {
    console.log('params',params)
    return <div>CustomerDetail Page. {params.value.id}</div>;
  }
  