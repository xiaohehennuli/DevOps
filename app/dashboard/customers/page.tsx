import type { Metadata } from 'next';

  
  export default function Customer({ params }: { params: { id: string } }) {
    return <div>CustomerDetail Page. {params.id}</div>;
  }
  