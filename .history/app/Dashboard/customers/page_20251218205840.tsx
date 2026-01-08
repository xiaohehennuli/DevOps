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
