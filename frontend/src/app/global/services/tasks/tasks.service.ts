import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from '../../models/tasks/task.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash';
import { UserModel } from '../../models/users/user.model';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private hostURl: string;

  constructor(private http: HttpClient) {
    this.hostURl = environment.host;
  }

  public getAll(): Observable<TaskModel[]> {
    return this.http
      .get<TaskModel[]>(`${this.hostURl}/api/tasks`)
      .pipe(map(result => _.map(result, (t) => new TaskModel(t))));
  }

  public getById(id: string): Observable<TaskModel> {
    return this.http
      .get<TaskModel>(`${this.hostURl}/api/tasks/${id}`)
      .pipe(map(result => new TaskModel(result)));
  }

  public create(resource: TaskModel): Observable<TaskModel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post<TaskModel>(`${this.hostURl}/api/tasks`, resource, {headers})
      .pipe(map(result => new TaskModel(result)));
  }

  public update(resource: TaskModel): Observable<TaskModel> {
    return this.http
      .put<TaskModel>(`${this.hostURl}/api/tasks/${resource._id}`, resource)
      .pipe(map(result => new TaskModel(result)));
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.hostURl}/api/tasks/${id}`);
  }

  public pingOtherDevicesForTask(resource: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post(`${this.hostURl}/api/tasks/pingOtherDevices`, resource, {headers})
      .pipe(map(result => result));
  }

  public addParticipant(resourceId: string, participantId: string): Observable<TaskModel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post<TaskModel>(`${this.hostURl}/api/tasks/${resourceId}/participant/${participantId}`, {headers})
      .pipe(map(result => new TaskModel(result)));
  }

  public getAllParticipants(id: string): Observable<string[]> {
    return this.http
      .get<string[]>(`${this.hostURl}/api/tasks/${id}/participants`)
      .pipe(map(result => result));
  }

  public getParticipantById(id: string, participantId: string): Observable<string> {
    return this.http
      .get<string>(`${this.hostURl}/api/tasks/${id}/participants/${participantId}`)
      .pipe(map(result => result));
  }

  public updateParticipant(resourceId: string, participant: UserModel): Observable<TaskModel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .put<TaskModel>(`${this.hostURl}/api/tasks/${resourceId}/participants/${participant._id}`, participant, {headers})
      .pipe(map(result => new TaskModel(result)));
  }

  public deleteParticipant(id: string, participantId: string): Observable<void> {
    return this.http.delete<void>(`${this.hostURl}/api/tasks/${id}/participants/${participantId}`);
  }

}
