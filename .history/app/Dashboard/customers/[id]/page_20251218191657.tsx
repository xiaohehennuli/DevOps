// app/dashboard/customers/[id]/page.tsx
export default function CustomerDetail({ params }: { params: { id: string } }) {
    return <div>CustomerDetail Page. {params.id}</div>;
  }
  