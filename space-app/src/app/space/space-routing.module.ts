import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { DestructionRoomComponent } from './destruction-room/destruction-room.component';
import { EngineersRoomComponent } from './engineers-room/engineers-room.component';
import { HangarComponent } from './hangar/hangar.component';

const routes: Routes = [
  
  { path: 'space', 
  component: HangarComponent, 
  children: [
    { path: 'production', component: EngineersRoomComponent},
    { path: 'destruction', component: DestructionRoomComponent},
    { path: 'about' , component: AboutComponent},
    { path: '', redirectTo: 'production' ,  pathMatch: 'full'},
    
  ] 
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaceRoutingModule {}
