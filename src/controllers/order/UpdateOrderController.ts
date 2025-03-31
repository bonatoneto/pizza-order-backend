import { Request, Response } from "express";
import { UpdateOrderService } from "../../services/order/UpdateOrderService";

class UpdateOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body;

    const updateOrderService = new UpdateOrderService();

    const order = await updateOrderService.execute({
      order_id,
    })

    return res.json(order);
  }
}

export { UpdateOrderController };