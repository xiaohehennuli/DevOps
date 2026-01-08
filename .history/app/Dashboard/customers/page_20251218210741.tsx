import type { Metadata } from 'next';

export const metadata: Metadata = {

  };

  export default function CustomerDetail({ params }: { params: { id: string } }) {
    return <div>CustomerDetail Page. {params.id}</div>;
  }
  