// index, show, create, update, delete
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import SendForgotEmailPasswordService from '@modules/users/services/SendForgotPasswordEmailService';

export default class ForgotEmailPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const forgotPasswordEmail = container.resolve(
      SendForgotEmailPasswordService,
    );

    await forgotPasswordEmail.execute({ email });

    return response.status(204).json();
  }
}
