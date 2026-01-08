

// app/dashboard/customers/[id]/page.tsx
export default async function CustomerDetail(
    {
        params,
        searchParams,  // 通过对象解构
      }: {
        params: Promise<{ id: string }>;
        searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
      }
) {
    console.log('params',params)
    const { id } = await params;
    const { name } = await searchParams;
    console.log('searchParams',searchParams)
    return  <>
        <div>CustomerDetail Page. {id}</div>
        <div>CustomerDetail Page. {name}</div>
    </>
    ;
  }
  