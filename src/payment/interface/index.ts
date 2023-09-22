export interface HasuraActionsPayload<
  Input extends {} = {},
  Session extends {} = {},
> {
  action: {
    name: string;
  };
  input: Input;
  session_variables: Session;
}

export interface CreatePaymentForUserArgs {
  user_id: number;
  product_id: number;
  quantity: number;
}
