import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";

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

  shoppingItemRef$: FirebaseListObservable<ShoppingItemInterface[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private database: AngularFireDatabase) {
    this.shoppingItemRef$ = this.database.list('shopping-list');

  }

  addShoppingItem(shoppingItem: ShoppingItemInterface){
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemNumber: Number(this.shoppingItem.itemNumber)
    })

    this.shoppingItem = {} as ShoppingItemInterface;

    this.navCtrl.pop();
  }

}
