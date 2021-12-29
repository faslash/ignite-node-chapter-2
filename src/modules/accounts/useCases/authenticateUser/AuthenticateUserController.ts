import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";



class AuthenticateUserController {
  
  async handle(request: Request, reponse: Response): Promise<Response> {
    const { password, email } = request.body;

    const authenticateUserCase = container.resolve(AuthenticateUserUseCase);

    const token = await authenticateUserCase.execute({
      password,
      email
    });

    return reponse.json(token);
  }
}

export { AuthenticateUserController }
