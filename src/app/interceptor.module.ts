import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import {
 HttpEvent,
 HttpInterceptor,
 HttpHandler,
 HttpRequest,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './user.service';


@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

    constructor (private userService:UserService) {}

    intercept( req: HttpRequest<any>, next: HttpHandler,): Observable<HttpEvent<any>> {
        const dupReq = req.clone({
            //headers: req.headers.set('Authorization', 'Token '+this.userService.getToken()),
            setHeaders: {
                Authorization: `Bearer ${this.userService.getToken()}`
            }
        });
        return next.handle(dupReq);
    }
}
    
    
@NgModule({
providers: [
    {provide: HTTP_INTERCEPTORS,
    useClass: HttpsRequestInterceptor,
    multi: true,},
    UserService,
    ],
})
    
    
export class Interceptor {}