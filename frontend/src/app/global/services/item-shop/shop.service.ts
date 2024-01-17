import { Injectable } from '@angular/core';
import { ShopModel } from '../../models/shops/shop.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { environment } from 'src/environments/environment';
import { ItemModel } from '../../models/items/item.model';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {
  private hostURl: string;

  constructor(private http: HttpClient) {
    this.hostURl = environment.host;
    // remove comment to delete all items
    // this.deleteAll();
  }

  public getAll(): Observable<ShopModel[]> {
    return this.http
      .get<ShopModel[]>(`${this.hostURl}/api/shop`)
      .pipe(map(result => _.map(result, (t) => new ShopModel(t))));
  }
  public create(resource: ShopModel): Observable<ShopModel> {
    return this.http
      .post<ShopModel>(`${this.hostURl}/api/shop`, resource)
      .pipe(map(result => new ShopModel(result)));
  }
  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.hostURl}/api/shop/${id}`);
  }

  public getById(id: string): Observable<ShopModel> {
    return this.http
      .get<ShopModel>(`${this.hostURl}/api/shop/${id}`)
      .pipe(map(result => new ShopModel(result)));
  }

  public update(resource: ShopModel): Observable<ShopModel> {
    return this.http
      .put<ShopModel>(`${this.hostURl}/api/shop/${resource._id}`, resource)
      .pipe(map(result => new ShopModel(result)));
  }

  public addItem(id: string, item: ItemModel): Observable<ShopModel> {
    return this.http
      .post<ShopModel>(`${this.hostURl}/api/shop/${id}/items/${item._id}`, item)
      .pipe(map(result => new ShopModel(result)));
  }

  public getAllItems(resource: string): Observable<ItemModel[]> {
    return this.http
      .get<ItemModel[]>(`${this.hostURl}/api/shop/${resource}/items`)
      .pipe(map(result => _.map(result, (t) => new ItemModel(t))));
  }

  public getItemById(resourceId: string, id: string): Observable<ItemModel> {
    return this.http
      .get<ItemModel>(`${this.hostURl}/api/shop/${resourceId}/items/${id}`)
      .pipe(map(result => new ItemModel(result)));
  }

  public updateItem(resource: string, item: ItemModel): Observable<ShopModel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .put<ShopModel>(`${this.hostURl}/api/shop/${resource}/items/${item._id}`, item, {headers})
      .pipe(map(result => new ShopModel(result)));
  }

  public deleteItem(id: string, item: string): Observable<void> {
    return this.http.delete<void>(`${this.hostURl}/api/shop/${id}/items/${item}`);
  }





  // Debug function for deleting all items
  private deleteAll() {
    this.getAll().subscribe((data: ShopModel[]) => {
      data.forEach((item: ShopModel) => {
        this.delete((item as any)._id).subscribe((data: any) => { });
      });
    });
  }

  public pingOtherDevicesForTask(resource: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post(`${this.hostURl}/api/shop/pingOtherDevices`, resource, {headers})
      .pipe(map(result => result));
  }



}
