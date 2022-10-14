import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler):   Observable<HttpEvent<any>> {

    // const token: string = localStorage.getItem('token') != null ? localStorage.getItem('token') : '';
    const backupAuthToken: string = 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6MH0.eyJleHAiOjE2NjU3NDEzMjksImlzcyI6ImRpc2N1enoiLCJqaWQiOiIzQTVOVFA2MVdPSUs4TzU5IiwidWlkIjoiZGFuaWVsLmRvK2xpZnRlcnNAem9vbWluZm8uY29tIiwidmVyIjoyLCJ0dyI6eyJPcmdJZCI6MTA3NTc0NDMyNzY4MTE5NCwiVGVhbUlkIjoxMDc2MDgzMTc1NTU2MzI3LCJVc2VySWQiOjEwNzU3NTc1OTMxNDI0NjYsIlJvbGUiOjAsIlJvbGVJZCI6MSwiU2VuZE9uQmVoYWxmIjp0cnVlLCJFbWFpbCI6ImRhbmllbC5kbytsaWZ0ZXJzQHpvb21pbmZvLmNvbSIsIklzRW1haWxWZXJpZmllZCI6dHJ1ZSwiVG9rZW5UeXBlIjozMDAsIkRldmljZUlkIjoiMWMzMjQxODAtY2QyNi00YTVkLTg0OTktYTNiMjAyOTQ0MzE5IiwiQXBwVmVyc2lvbiI6MiwiSXNPcmdBZG1pbiI6dHJ1ZSwiUGVybWlzaW9ucyI6IjEuMywxMC4zLDExLjMsMTIuMywyMC4zLDMxLjMsMzAuMywzMi4zLDMzLjMsMzQuMywzNS4zLDQxLjMsNDAuMyw0My4zLDQyLjMsNDQuMyw0NS4zLDUwLjMsNTEuMyw1Mi4zIn19.YNkPbx_9tiKozG7g97g663DIthYx3yPnwHXWyqxMkcM';

    const authToken = (localStorage.getItem('token') as string);

    const authReq = req.clone({
      headers: req.headers.set('authorization', authToken)
    });
    return next.handle(authReq);
  }
}
