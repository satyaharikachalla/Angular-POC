

# Angular e-commerce Project

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

## Angular Commands
### Project Setup:
ng new <project-name>: Creates a new Angular project.

ng add <package-name>: Adds a new package to your project.

### Generating Components and Services:
ng generate component <component-name>: Creates a new component.

ng generate service <service-name>: Creates a new service.

ng generate module <module-name>: Creates a new module.

ng generate pipe <pipe-name>: Creates a new pipe.

ng generate directive <directive-name>: Creates a new directive.

### Development Server:
ng serve: Starts the development server and watches for changes.

ng serve --open (ng serve -o): Opens the application in the browser automatically.

### Building and Deployment:
ng build: Builds the application for production.

ng build --prod: Builds the application for production with optimizations.

### Testing:
ng test: Runs unit tests and ng e2e: Runs end-to-end tests.
### Miscellaneous:
ng version: Displays the Angular CLI version.

ng help: Displays help information for a specific command.

ng update: Updates Angular CLI and project dependencies.

## Lifecycle event sequence
After your application instantiates a component or directive by calling its constructor, Angular calls the hook methods you have implemented at the appropriate point in the lifecycle of that instance.
Angular executes hook methods in the following sequence. Use them to perform the following kinds of operations.

### ngOnChanges()	
Respond when Angular sets or resets data-bound input properties. The method receives a SimpleChanges object of current and previous property values.
#### NOTE: 
This happens frequently, so any operation you perform here impacts performance significantly.
See details in Using change detection hooks in this document.	Called before ngOnInit() (if the component has bound inputs) and whenever one or more data-bound input properties change.
#### NOTE:
If your component has no inputs or you use it without providing any inputs, the framework will not call ngOnChanges().
### ngOnInit()	
Initialize the directive or component after Angular first displays the data-bound properties and sets the directive or component's input properties. See details in Initializing a component or directive in this document.	Called once, after the first ngOnChanges(). ngOnInit() is still called even when ngOnChanges() is not (which is the case when there are no template-bound inputs).
### ngDoCheck()
Detect and act upon changes that Angular can't or won't detect on its own. See details and example in Defining custom change detection in this document.	Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.
### ngAfterContentInit()	
Respond after Angular projects external content into the component's view, or into the view that a directive is in.
See details and example in Responding to changes in content in this document.	Called once after the first ngDoCheck().
### ngAfterContentChecked()
Respond after Angular checks the content projected into the directive or component.
See details and example in Responding to projected content changes in this document.	Called after ngAfterContentInit() and every subsequent ngDoCheck().
### ngAfterViewInit()	
Respond after Angular initializes the component's views and child views, or the view that contains the directive.
See details and example in Responding to view changes in this document.	Called once after the first ngAfterContentChecked().
### ngAfterViewChecked()	
Respond after Angular checks the component's views and child views, or the view that contains the directive.	Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().
### ngOnDestroy()	
Cleanup just before Angular destroys the directive or component. Unsubscribe Observables and detach event handlers to avoid memory leaks. See details in Cleaning up on instance destruction in this document.	Called immediately before Angular destroys the directive or component.

