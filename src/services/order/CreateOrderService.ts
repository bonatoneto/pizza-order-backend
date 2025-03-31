import prismaClient from "../../prisma";

interface OrderRequest {
  table: number;
  name: string
}

class CreateOrderService { 
  async execute({ table, name }: OrderRequest) {
    if (table <= 0) {
      throw new Error("Numero da mesa inválido");
    }

    const order = await prismaClient.order.create({
      data: {
        table: table,
        name: name,
      },
      select: {
        id: true,
        table: true,
        name: true,
        status: true,
        draft: true
      }
    })

    return order
  }
}

export { CreateOrderService }