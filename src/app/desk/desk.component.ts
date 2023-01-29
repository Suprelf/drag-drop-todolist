import { Component, OnInit } from '@angular/core';
import { TasksServiceService } from '../tasks-service.service';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragEnd } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.scss']
})
export class DeskComponent implements OnInit {
  Tasks: any;
  dialogRef: any;

  constructor(
    private cookieService: TasksServiceService, 
    public dialog: MatDialog
    ) { }

  openAddTaskDialog() {
    this.dialogRef = this.dialog.open(TaskDialogComponent)
  }

  ngOnInit(): void {
    this.Tasks = this.cookieService.getAllTasks()
    console.log(this.Tasks)
  }

  resetDragPos(event: CdkDragEnd, task: any) {
    this.cookieService.resetPos(task, event.dropPoint.x, event.dropPoint.y)
  }

  


}
