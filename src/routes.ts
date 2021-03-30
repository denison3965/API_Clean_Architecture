import { Response, Router, Request, request, response }  from 'express';
import { createUserCrontroller } from './useCases/CreateUser';
import { authenticationController } from './useCases/Authentication'

import { authMiddleware } from './middlewares/authMiddleware'

const router = Router();

router.post("/users", (request, response) => {
   return createUserCrontroller.handle(request, response);
})

//Protect router
router.get("/users", authMiddleware ,(request, response) => {
   return createUserCrontroller.index(request, response);
})


router.post('/auth', (request, response) => {
    return authenticationController.handle(request, response);
})

export { router }