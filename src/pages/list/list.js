import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
export var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(ItemDetailsPage, {
            item: item
        });
    };
    ListPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-list',
                    templateUrl: 'list.html'
                },] },
    ];
    /** @nocollapse */
    ListPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
    ];
    return ListPage;
}());
//# sourceMappingURL=list.js.map