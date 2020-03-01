"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = (function () {
    function Product(t, p) {
        this.title = t;
        this.price = p;
    }
    Product.prototype.getInfo = function () {
        return [this.title, this.price];
    };
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map