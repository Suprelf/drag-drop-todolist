import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { HeadbarComponent } from './headbar/headbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DeskComponent } from './desk/desk.component';
import { DeskTaskComponent } from './desk-task/desk-task.component';
import { SidebarTaskComponent } from './sidebar-task/sidebar-task.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

const routes: Routes = [
  { path: 'desk', component: DeskComponent },
  { path: '', redirectTo: '/desk', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    SidebarComponent,
    DeskComponent,
    DeskTaskComponent,
    SidebarTaskComponent,
    TaskDialogComponent
  ],
  entryComponents: [TaskDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    DragDropModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
