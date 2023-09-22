import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import {
  HasuraActionsPayload,
  CreatePaymentForUserArgs,
} from 'src/payment/interface';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('/createPaymentForUser')
  createPaymentForUser(
    @Body() payload: HasuraActionsPayload<{ params: CreatePaymentForUserArgs }>,
  ) {
    console.log('a');
    const total = this.paymentService.calculateTotal(payload.input.params);
    const paymentResult = this.paymentService.processPayment({ total });
    return {
      total,
      paymentResult,
      receiptNumber: 1234567,
    };
  }
}
