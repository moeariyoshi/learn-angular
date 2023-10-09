import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Data, Params, Router} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              //needed to navigate to a component thru button
              private router: Router) {}

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.server = data['server']; //has to match what we put in resolve: {server:
    }
      );
    //now using server resolver
    // const id = + this.route.snapshot.params['id']; // '1' : + converts to integer
    // this.server = this.serversService.getServer(id);
    // this.route.params
    //   .subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // );
  }

  onEdit(){
    //Absolute path: ['/server', this.server.id, 'edit']
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
