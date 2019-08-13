# Angular 2 
## Structure
1. src folder

    Containes all the necessary TS, HTML and CSS/SCSS files for app modules and components.
2. Index file
    
    All the content of the index file is added dynamically using xml tags for custom components using their selector attributes.
    
    For ex:
    ```html
    <app-root></app-root>
    ```
    This will inject code of a component with said selector value.

3. Exporting values for Template
    
    For each component we have a tag, a template and list of css scripts. We can pass template variables by exporting a class with needed fields in the JS/TS file for the component.
4. Directives:
    
    Directives let angular listen to HTML fields and store them in given variables for later use in the file.

    For Ex. we want to read values from file and display in some other field. So first we add the ngModel directive to it and display it in desired tag:
    ```html
    <input type='text' [(ngModel)]='name'>
    <p>{{ name }}</p>
    ```
    This wont actually do anything as we need to add a module for handling angular forms in the ```app.module.ts``` file
    ```ts
    import { FormsModule } from '@angular/forms';
    ```
    Then we need to add it to the list of imported modules in the App NgModule part.
5. Adding Bootstrap to Angular Project

    First install the bootstrap package from npm
    ```npm
    npm i --save bootstrap@latest
    ```
    Then we need to make the angular app aware about this styling module.

    To do that we edit the angular.json config file:
    ```json
    {
        "architect" : 
            {
                "build" : 
                    {
                        "styles":[
                            "node_modules/bootstrap/dist/css/bootstrap.min/css"
                        ]         
                    }
            }
    }
    ```
1. On running the ```ng serve``` command our project is rebuild and JS bundle scripts are added to the index file that dynamically injects components in the web page.

1. index.html 

    The actual HTML content that is single page being served by the angualr app
1. main.ts 
    
    This is the first file to be executed which maps together the single web page site to be displayed with necessary injections of further components.

    In that file we import the module for our angular app ```app.module.ts``` and loads that module.
    ```ts
    platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
    ```

    When the main.ts file bootstraps the AppModule it searches for that NgModule and within it we provide information about the component that should be loaded.
    ```ts
    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
      ],
      providers: [],
      // This is where we tell the boostrap to find following component
      bootstrap: [AppComponent]
    })
    ```
    Then it looks for the AppComponent where we have defined the @Component and exported template variables.
1. src/app

    1. app.component.html - The main content of the starting app
    1. app.component.ts - Describes the Typescript code for the component including the selector value which will mapped to the tag in the corresponding HTML tag in the index.html. The template for this component is the above document

## Components
We divide our entire web project into Components tath we add together in the app component
1. A root app component is loaded on satrtup (app-component) to which we will add other components.
1. All new components are to be stored in a subfolder of src/app directory with the name of the component for simplicity

    For ex: server component:

    1. To create a component create a file like ```server.component.ts```
    1. A component is basically a class we need to export. so lets create a class ```ServerComponent```
    1. But this class next requires a decorator ```@Component()``` to make it identified as a Component.
    1. This component decorator has to be imported first
        ```ts
        import { Component } from @angular/core;
        ```
    1. The component decorator next takes a JS object for specifying attributes.
        1. selector - Maps the tag of string value to the component. Naming convention :  ```app-component-name```
        1. templateUrl - This is the external HTML file that acts as template for this component.
        
            The template file has to be created in the same component subfolder as ```server.component.html```
            
            Next we point his templateUrl to this file in TS syntax as ```./serve.component.html```

    1. Before we start making use of this component we need to maake changes to ```app.module.ts```. Components are building blocks for the web app but  modules are used to bundle them together and export as packages. 

        For smaller projects we use a single app module, but for larger ones we can split them into more modules.

        Modules are basically bundles of fucntionalities and tells angular app of which  features we can use.

        Modulesare are also classes with a special decorator : ```@NgModule``` from ```@angular/core``` library. Ex : 
        ```ts
        @NgModule({
          declarations: [
            AppComponent
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
        ```
        We can add multiple modules in the app module using the imports array

        Now all that is left is to register the newly created component in the NgModule's declarations array after importing the TS file.
        ```ts
        @NgModule({
          declarations: [
            AppComponent,
            ServerComponent
          ],
            ...
        })
        ```
    1. Now to actually use this component we need to add its selctor tag in an HTML file. We cannot do that in the index file, as it already has the root component. So instead we can add the selector tag in the ```app.component.html``` file.
        ```html
        <h1>Hello World!!!! This is the app component</h1>
        <app-server></app-server>
        ```
1. Now we can also create a component using the AngularCLI tools:
    ```bash
    ng generate component servers
    OR
    ng g c servers
    ```
    This will automatically create a new Component and required files for it and also will make necessary changes in the ```app.module.ts``` file
    
    The ```servers.component.spec.ts``` is a file generated and used for testing the components and can be removed.
    
    Now we can simple modify the templates and use the ```app-server``` selector in it and replicate it to give an idea of multiple server instances used in the servers used.
     
1. Instead of creating template files for each component we can write inline HTML code using the ```template``` property of the Component.
    ```typescript
    @Component({
      selector: 'app-servers',
      template: `
        <app-server></app-server>
        <app-server></app-server>
        <app-server></app-server>
        <app-server></app-server>`,
      styleUrls: ['./servers.component.css']
    })
    ```  
1. Also we can style to our component templates using mutliple styleshhets using inline code or external file by using the ```styleUrls``` or the ```styles``` array  of the ```Component```
1. Selectors can be created as tag attributes rather than tags themselves using a very CSS like selector property. 

    For ex. in the selector tab we can use
    ```typescript
    @Component({
      // tslint:disable-next-line:component-selector
      selector: '[app-servers]',
    })
    ```
    And in the template file in place of tags we can use them as attributes
    ```html
    <div app-servers></div>
    <!-- instead of -->
    <app-servers></app-servers>
    ```
  
    Other method method is to use them as class. For ex:
    ```typescript
        @Component({
          // tslint:disable-next-line:component-selector
          selector: '.app-servers',
        })
    ```
    And in the template file in place of tags we can use them as attributes
    ```html
    <div class=".app-servers"></div>
    ```
    
   No other selector method such as by ID or 3rd party methods are allowed. Default is to use like Elements.

## Data Binding
Data Binding is the communication of data between your business logic and the HTML templates.

Different types of communication :
1. Output data - Use string interpolation : {{ }}, property-binding : [property] = "data"
2. React to user events - Event binding : (event) = 'expression'
3. Two-way binding : [(ngmodel)] = 'data'

### String interpolation
We can pass data dynamically from the TS file of a component to the template and display it using the {{ }} syntax.

For ex :

Business logic
```typescript
export class ServerComponent {
  id = 123;
  status = 'offline';

  getServerStatus() {
    return this.status;
  }
}
```

Template
```html
<h3>Server with ID {{ id }} is {{ getServerStatus() }}.</h3>
```

### Property Binding
Instead of passing string values to diaplay on template we can pass data as attribute/property for template tag using [ ] notation 

For ex:

Business logic
```typescript
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

}
```
HTML template
```html
<button class="btn btn-primary" [disabled]="!allowNewServer" >Add Server</button>
```
### Event Binding
We can call TS functions as reaction to user actions such as clicks on an element.
1. First we define the function we want to execute in the Component TS file
      ```typescript
      export class ServersComponent implements OnInit {
        serverCreationStatus = 'No servers created';
        onCreateServer(){
          this.serverCreationStatus = 'Server was created';
        }
      }
      ```
    We can also call this code inside the template, but its better in the component logic file.
2. Next we need to assign this function to handle the user generated events. 

    For that on the element we want to listen for events we use ( event_name ) to access the event and assign the function
    ```html
    <button [disabled]="!allowNewServer" class="btn btn-primary" (click)="onCreateServer()">Add Server</button>
    <p>{{ serverCreationStatus }}</p>
    ```

3. Another example

   Take form input to generate dynamic output
    ```html
    <label>Server Name</label>
    <input type="text" class="form-control" (input)="onUpdateServerName($event)"><br>
    ```
    The ``onUpdateServerName`` method is called upon whenever we make changes to the input field.

    All the information about this event can be passed onto the function using the implicit variable ``event``

    Updating the backend TS code:
    ```typescript
    onUpdateServerName(event: Event) {
        this.serverName = (event.target as HTMLInputElement).value;
      }
    ```
### Two-way Binding
For Two-Way-Binding (covered in the next lecture) to work, you need to enable the ``ngModel``  directive. This is done by adding the ``FormsModule``  to the imports [ ]  array in the ``AppModule``.

You then also need to add the ``import from @angular/forms``  in the ``app.module.ts`` file:

> import { FormsModule } from '@angular/forms'; 

