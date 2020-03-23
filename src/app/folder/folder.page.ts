import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as WC from '@woocommerce/woocommerce-rest-api';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss']
})
export class FolderPage implements OnInit {
  WooCommerce: any;
  public folder: string;

  constructor(public activatedRoute: ActivatedRoute) {
    const api = new WC({
      url: 'http://localhost:8080/web1/',
      consumerKey: 'ck_f4947128ca6b60ac287a469bc9cdb3aafa6bfe67',
      consumerSecret: 'cs_d73d77634c2ae21f32e098352d4f6c3ff8fa8457',
      version: 'wc/v3'
    });
    api.get('products').then(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
