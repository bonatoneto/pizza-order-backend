import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}

class UpdateOrderService {
  async execute({ order_id }: OrderRequest) {
    const order = await prismaClient.order.update({
      where: {
        id: order_id
      },
      data: {
        draft: false,
      }
    })

    return order;
  }
}

export { UpdateOrderService };