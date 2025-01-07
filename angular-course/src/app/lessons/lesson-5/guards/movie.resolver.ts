import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<any> {
  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot): any {
    const id = route.paramMap.get("id");
   
   //  return this.http.get<any>(`/api/movie/${id}`);
	return {data: 'string'};
 
  }
}