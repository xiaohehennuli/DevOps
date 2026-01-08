import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // 读取参数
  const id = params.id;

  // 模拟 fetch data
  const customer = (await new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          title: `customer-${id}`,
          description: `customer-${id} desc...`,
        }),
      1000
    )
  )) as any;

  return {
    title: customer.title,
    description: customer.description,
  };

作者：风骨
链接：https://juejin.cn/post/7433796131858497546
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。