import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable({
	providedIn: 'root', 
 })

export class MovieGuard implements CanActivate {
	canActivate() {
		console.log('MovieGuard працює');
	  return true;
	}
 }