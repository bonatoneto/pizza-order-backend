import prismaClient from "../../prisma";

interface ItemRequest {
  order_id: string;
  product_id: string;
  amount: number;
}

class AddItemService {
  async execute({ amount, product_id, order_id }: ItemRequest) {
    const order = await prismaClient.item.create({
      data: {
        order_id: order_id,
        product_id:  product_id,
        amount,
      }, 
      select: {
        id: true,
        order_id: true,
        product_id: true,
        amount: true,
        product: {
          select: {
            name: true,
          }
        },
      }
    })

    return order;
  }
}

export { AddItemService };