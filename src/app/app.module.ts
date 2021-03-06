import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServerComponent} from './server/server.component';
import {ServersComponent} from './servers/servers.component';
import {DataBindingComponent} from './data-binding/data-binding.component';
import {ServerElementComponent} from './data-binding/server-element/server-element.component';
import {CreationFormComponent} from './data-binding/creation-form/creation-form.component';
import {DirectivesComponent} from './directives/directives.component';
import {BasicHighlightDirective} from "./directives/basic-highlight/basic-highlight.directive";
import {BetterHighlightDirective} from './directives/better-highlight/better-highlight.directive';
import {UnlessDirective} from './directives/unless/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DataBindingComponent,
    ServerElementComponent,
    CreationFormComponent,
    DirectivesComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
