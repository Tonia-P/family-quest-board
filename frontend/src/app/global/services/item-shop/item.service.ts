import { Injectable } from '@angular/core';
import { ItemModel } from '../../models/items/item.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private hostURl: string;

  constructor(private http: HttpClient) {
    this.hostURl = environment.host;
    // remove comment to delete all items
    // this.deleteAll();
  }

  public getAll(): Observable<ItemModel[]> {
    return this.http
      .get<ItemModel[]>(`${this.hostURl}/api/item-shop`)
      .pipe(map(result => _.map(result, (t) => new ItemModel(t))));
  }
  public create(resource: ItemModel): Observable<ItemModel> {
    return this.http
      .post<ItemModel>(`${this.hostURl}/api/item-shop`, resource)
      .pipe(map(result => new ItemModel(result)));
  }
  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.hostURl}/api/item-shop/${id}`);
  }

  public getById(id: string): Observable<ItemModel> {
    return this.http
      .get<ItemModel>(`${this.hostURl}/api/shop/${id}`)
      .pipe(map(result => new ItemModel(result)));
  }

  public update(resource: ItemModel): Observable<ItemModel> {
    return this.http
      .put<ItemModel>(`${this.hostURl}/api/shop/${resource._id}`, resource)
      .pipe(map(result => new ItemModel(result)));
  }


  // Debug function for deleting all items
  private deleteAll() {
    this.getAll().subscribe((data: ItemModel[]) => {
      data.forEach((item: ItemModel) => {
        this.delete((item as any)._id).subscribe((data: any) => { });
      });
    });
  }

  public pingOtherDevicesForTask(resource: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post(`${this.hostURl}/api/item/pingOtherDevices`, resource, {headers})
      .pipe(map(result => result));
  }

}
