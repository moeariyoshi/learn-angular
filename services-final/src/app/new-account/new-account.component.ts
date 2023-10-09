import { Component } from '@angular/core'; //Deleted EventEmitter and Output
import {LoggingService} from "../logging.service";
import {AccountsService} from "../accounts.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //for Service
  //providers: [LoggingService]
  //removed AccountsService from providers to use the same instance of the AccountsService
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  //loggingService can be any name
  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService){
    //listens to event emitter in account.component.ts
    this.accountsService.statusUpdated.subscribe(
      (status: string) => {
        alert('New Status: ' + status)
      });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // No longer listening to event because AccountsService
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });

    //Not how to use service in Angular!!!
    // const service = new loggingService;
    // service.logStatusChange(accountStatus);
    //don't create instance manually
    //instead do this:
    //this.loggingService.logStatusChange(accountStatus);
    // Commented out to use this in AccountsService

    this.accountsService.addAccount(accountName, accountStatus);
  }
}
