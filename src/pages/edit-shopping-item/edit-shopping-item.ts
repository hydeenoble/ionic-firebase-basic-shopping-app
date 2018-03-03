import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database-deprecated";
import {ShoppingItemInterface} from "../../models/shopping-item/shopping-item.interface";

/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {

  shoppingItemRef$ : FirebaseObjectObservable<ShoppingItemInterface>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private database: AngularFireDatabase) {

    const shoppingItemId = this.navParams.get('shoppingItemId');

    console.log(shoppingItemId);

    this.shoppingItemRef$ = this.database.object(`shopping-list/${shoppingItemId}`)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditShoppingItemPage');
  }

}
