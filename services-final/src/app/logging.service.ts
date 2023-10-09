export class LoggingService {
  //no @Service!
  logStatusChange(status: string){
    console.log('A server status changed, new status: ' + status);
  }
}
