import prismaClient from "../../prisma"

interface OrderRequest {
  order_id: string
}

class DeleteOrderService {
  async execute({ order_id }: OrderRequest) {
    const orderExists = await prismaClient.order.findUnique({
      where: { id: order_id }
    });

    if (!orderExists) {
      throw new Error("Pedido não encontrado.");
    }

    const order = await prismaClient.order.delete({
      where: {
        id: order_id,
      }
    })

    return order
  }
}

export { DeleteOrderService }