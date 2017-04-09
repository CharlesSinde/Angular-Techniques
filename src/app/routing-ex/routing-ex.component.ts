import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'ngc-routing-ex',
  templateUrl: './routing-ex.component.html',
  styleUrls: ['./routing-ex.component.css']
})
export class RoutingExComponent implements OnInit {
  private id: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.params['id'], 10);
  }

}
