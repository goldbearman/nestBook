import {
    CallHandler,
    Injectable,
    NestInterceptor,
    ExecutionContext,
    InternalServerErrorException
} from '@nestjs/common';
import {Reflector} from '@nestjs/core';
import {catchError, Observable, tap, throwError} from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    constructor() {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log('New request!');
        const now = Date.now();
        return next
            .handle() //вызывает метод контроллера(здесь мы его переписываем)
            .pipe(
                tap(() => {
                    console.log(`\nExecution time: ${Date.now() - now}ms`);
                    console.log('\nRequest was successful!');
                }),
                catchError(err => {
                    console.log(`\nExecution time: ${Date.now() - now}ms`);
                    console.log('\nRequest was failed!');
                    console.log('\nError message: ', err);
                    return throwError(new InternalServerErrorException());
                })
            );
    }


}
