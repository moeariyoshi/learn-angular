import {EventEmitter, Injectable} from "@angular/core";
import {LoggingService} from "./logging.service";

//Necessary in the service that is getting the injection of another service!
//Add by default even if nothing is getting injected is recommended
@Injectable()
export class AccountsService{
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService){}

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
    //we can trigger event emitter here but instead, look at account.component.ts
  }
}

