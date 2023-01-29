import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TasksServiceService } from '../tasks-service.service';


@Component({
  selector: 'app-desk-task',
  templateUrl: './desk-task.component.html',
  styleUrls: ['./desk-task.component.scss']
})
export class DeskTaskComponent implements OnInit {
  @Input() name = ''
  @Input() paragraphs = []
  @Input() date = new Date()
  @Input() status_value = ''
  posX: any
  posY: any

  constructor(private cookieService: TasksServiceService) {}
  ngOnInit(): void {
    this.status.setValue(this.status_value);
    this.posX, this.posY = this.cookieService.getCookiePosByName(this.name)
  }

  status = new FormControl('');
}
