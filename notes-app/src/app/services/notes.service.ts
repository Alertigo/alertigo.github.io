import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private baseUrl: string = "http://localhost:3000/notes"

  constructor(private _httpClient: HttpClient) { }

  getNotes() {
    return this._httpClient.get(this.baseUrl);
  }
}
