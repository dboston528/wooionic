import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as WC from 'woocommerce-api';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss']
})
export class FolderPage implements OnInit {
  public folder: string;

  WooCommerce: any;

  constructor(private activatedRoute: ActivatedRoute) {
    //local object\
    this.WooCommerce = WC({
      url: 'http://localhost:8080/web1/',
      consumerKey: 'ck_7fc7708bad49558bb8a8108b93102f0f271fdf16',
      consumerSecret: 'cs_0b6b28ae7e1b6acc3289c439b9d98ed29dea0011'
    });

    this.WooCommerce.getAsync('products').then(
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
