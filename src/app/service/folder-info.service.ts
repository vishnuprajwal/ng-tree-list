import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
	providedIn: 'root'
})
export class FolderInfoService {

	constructor(private httpClient: HttpClient) { }

	api = "http://finfort-ops-dashboard-service-uat.ap-south-1.elasticbeanstalk.com:8080/v1/api/getFileInfosFromS3?ffOrderNo=";

	public getFileInfosFromS3(ffOrderNumber):any {

		return this.httpClient.get<any>(this.api + ffOrderNumber).pipe(
			catchError(this.handleError<any>('getFileInfosFromS3', null)));
	}

	// ------------------------------------------------------------------------------------------------
	private handleError<T>(operation = 'operation', result?: T) {

		return (error: any): Observable<T> => {
			console.log(error);

			this.log(`${operation} failed: ${error.message}`);

			return of(error as T);
		};
	}

	private log(message: string) {
		console.log(message);
	}

	// ------------------------------------------------------------------------------------------------
}
