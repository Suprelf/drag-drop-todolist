import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {
  IdMaxValue: number;

  constructor(private cookieService: CookieService) {
    const IdMaxValue_raw = this.cookieService.get('IdMaxValue');

    if (IdMaxValue_raw === '') {
      this.cookieService.set('IdMaxValue', '0');
      this.IdMaxValue = Number(this.cookieService.get('IdMaxValue'));
      console.log('IdMaxValue not found, set to: ', this.IdMaxValue)
    }
    else {
      this.IdMaxValue = Number(this.cookieService.get('IdMaxValue'));
      console.log('IdMaxValue found:', this.IdMaxValue)
    }
  }

  public getAllTasks() {
    const allCookies = this.cookieService.getAll()
    const Tasks: any[] = []
    Object.values(allCookies).map(val => {
      if ( (JSON.parse(Object(val))).hasOwnProperty('name') ) {
        Tasks.push(JSON.parse(Object(val)))
      }
    })
    return Tasks
  }

  public getIdMaxValue() {
    return this.IdMaxValue
  }

  public getCookiePosByName(name: string) {
    const allTasks = this.getAllTasks()
    for (let i of allTasks) {
      if (Object.values(i)[0] == name) {
        return Object.values(i)[3], Object.values(i)[4]
      }
    } 
    return
  }

  public incrementIdMaxValue() {
    const temp = this.IdMaxValue
    this.cookieService.set('IdMaxValue', String(temp + 1));
  }

  public resetIdMaxValue() {
    const resetedIdMaxValue = this.IdMaxValue
    this.cookieService.set('IdMaxValue', '0');
    return resetedIdMaxValue
  }

  public addTask(Name: string, Paragraphs: Array<String>, Date: Date, Status: string, 
                 PositionX: number, PositionY: number) {
    this.cookieService.set(`${String(this.getIdMaxValue() + 1)}`, `${JSON.stringify({
      name: Name,
      paragraphs: Paragraphs,
      date: Date,
      status: Status,
      positionX: PositionX, 
      positionY: PositionY
    })}`);
    this.incrementIdMaxValue()

    console.log('added: ', { name: Name, paragraphs: Paragraphs, date: Date, status: Status, 
                             positionX: PositionX, positionY: PositionY })
  }

  public resetPos(task: any, newX: number, newY: number) {
    const allTasks = this.getAllTasks()
    for (let i of allTasks) {
      if (JSON.stringify(i) == JSON.stringify(task)) {
        console.log(task)
        console.log(newX)
        this.cookieService.set(String(allTasks.indexOf(i)), `${JSON.stringify({
          name: task.name,
          paragraphs: task.paragraphs,
          date: task.date,
          status: task.status,
          positionX: newX, 
          positionY: newY
        })}`)
        console.log(this.getAllTasks())
      }
    }
   
  }
}
