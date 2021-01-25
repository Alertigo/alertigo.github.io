import { Component, OnInit } from '@angular/core';
import { NotesService } from "../../services/notes.service";

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss']
})
export class ListNotesComponent implements OnInit {

  public notes: any = [];

  constructor(private _notesService: NotesService) { }

  ngOnInit(): void {
    this._notesService.getNotes().subscribe(notes => {
      this.notes = notes;
    })
  }

}
