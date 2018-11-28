import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { firebase } from "./app.config";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {IonicStorageModule} from '@ionic/Storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChatService } from './app.services';
import { ChatsPage } from '../pages/chats/chats';
import { ChatroomPage } from '../pages/chatroom/chatroom';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ChatsPage,
    ChatroomPage
  ],
  imports: [
    BrowserModule,    
    AngularFireModule.initializeApp(firebase.config),
    AngularFirestoreModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ChatsPage,
    ChatroomPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ChatService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
