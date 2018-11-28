import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatroomPage } from './chatroom';
import{ SortPipe} from "../../pipes/sort/sort";

@NgModule({
  declarations: [
    ChatroomPage,
  ],
  imports: [
    SortPipe,
   
    IonicPageModule.forChild(ChatroomPage),
  ],
})
export class ChatroomPageModule {}
