import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { TasksServiceService } from '../tasks-service.service';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {

  AddTaskForm!: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TasksServiceService) { }

  ngOnInit(): void {
    this.AddTaskForm = this.fb.group({
      name: '',
      paragraphs: this.fb.array([]),
      date: new Date(),
      status: ''
    })
  }

  get ParagraphForm() {
    return this.AddTaskForm.get('paragraphs') as FormArray
  }

  addParagraph() {
    const paragraph = this.fb.group({
      text: ''
    })

    this.ParagraphForm.push(paragraph)
  }

  deleteParagraph(i: number) {
    this.ParagraphForm.removeAt(i)
  }


  addFormatedTask() {
    let name = this.AddTaskForm.value.name
    let date = this.AddTaskForm.value.date
    let status = this.AddTaskForm.value.status
    let paragraphs: any[] = []
    Object.values(this.AddTaskForm.value.paragraphs).map(val => {
      paragraphs.push(Object(val)["text"])
    })
    
    this.taskService.addTask(name, paragraphs, date, status, 355, 110)
    location.reload()
  }
}
