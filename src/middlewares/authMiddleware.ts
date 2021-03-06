import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

interface TokenPaylod {
    id: string;
    iat: number;
    exp: number;
}

function authMiddleware(request: Request, response: Response, next: NextFunction)
{
    const { authorization } = request.headers;

    if(!authorization) {
        response.sendStatus(401);
    }

    const token = authorization.replace('Bearer', '').trim();

    try
    {
        const data = jwt.verify(token, 'secret');

        const {id} = data as TokenPaylod; 

        request.userId = id

        return next();
    }
    catch
    {
        return response.sendStatus(401);
    }
}

export { authMiddleware }