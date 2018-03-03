import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ShoppingItemInterface} from "../../models/shopping-item/shopping-item.interface";

/**
 * Generated class for the AddShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

  shoppingItem = {} as ShoppingItemInterface;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addShoppingItem(shoppingItem: ShoppingItemInterface){
    console.log(shoppingItem);
  }

}
