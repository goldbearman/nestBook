import {
    CallHandler,
    Injectable,
    NestInterceptor,
    ExecutionContext,
    InternalServerErrorException
} from '@nestjs/common';
import {Reflector} from '@nestjs/core';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class BookLoggingInterceptor implements NestInterceptor {
    constructor(private readonly reflector: Reflector) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log({
            handler:context.getClass().name,
            className: context.getHandler().name,
        })
        return next.handle();
    }
}
