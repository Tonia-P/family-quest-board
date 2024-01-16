import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/users/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash';
import { TaskModel } from '../../models/tasks/task.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private hostURl: string;

  constructor(private http: HttpClient) {
    this.hostURl = environment.host;
  }

  public getAll(): Observable<UserModel[]> {
    return this.http
      .get<UserModel[]>(`${this.hostURl}/api/users`)
      .pipe(map(result => _.map(result, (t) => new UserModel(t))));
  }

  public getById(id: string): Observable<UserModel> {
    return this.http
      .get<UserModel>(`${this.hostURl}/api/users/${id}`)
      .pipe(map(result => new UserModel(result)));
  }

  public create(resource: UserModel): Observable<UserModel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post<UserModel>(`${this.hostURl}/api/users`, resource, {headers})
      .pipe(map(result => new UserModel(result)));
  }

  public update(resource: UserModel): Observable<UserModel> {
    return this.http
      .put<UserModel>(`${this.hostURl}/api/users/${resource._id}`, resource)
      .pipe(map(result => new UserModel(result)));
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.hostURl}/api/users/${id}`);
  }

  public pingOtherDevicesForTask(resource: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post(`${this.hostURl}/api/users/pingOtherDevices`, resource, {headers})
      .pipe(map(result => result));
  }

  public createQuest(resource: string, quest: string): Observable<UserModel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post<UserModel>(`${this.hostURl}/api/users/${resource}/quests/${quest}`, quest, {headers})
      .pipe(map(result => new UserModel(result)));
  }

  public getAllQuests(id: string): Observable<TaskModel[]> {
    return this.http
      .get<TaskModel[]>(`${this.hostURl}/api/users/${id}/quests`)
      .pipe(map(result => _.map(result, (t) => new TaskModel(t))));
  }

  public getQuestsById(id: string, quest: string): Observable<TaskModel> {
    return this.http
      .get<TaskModel>(`${this.hostURl}/api/users/${id}/quests/${quest}`)
      .pipe(map(result => new TaskModel(result)));
  }

  public updateQuest(resource: string, quest: TaskModel): Observable<UserModel> {
    return this.http
      .put<UserModel>(`${this.hostURl}/api/users/${resource}/quests/${quest}`, quest)
      .pipe(map(result => new UserModel(result)));
  }

  public deleteQuest(id: string, quest: string): Observable<void> {
    return this.http.delete<void>(`${this.hostURl}/api/users/${id}/quests/${quest}`);
  }

}
