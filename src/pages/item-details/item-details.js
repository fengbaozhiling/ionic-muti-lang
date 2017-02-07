import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
export var ItemDetailsPage = (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-item-details',
                    templateUrl: 'item-details.html'
                },] },
    ];
    /** @nocollapse */
    ItemDetailsPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
    ];
    return ItemDetailsPage;
}());
//# sourceMappingURL=item-details.js.map