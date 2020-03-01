"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var class_transformer_1 = require("class-transformer");
var product_1 = require("./product");
var prd = new product_1.Product("MOSSAD", 22);
console.log(prd.getInfo());
var products = [{ title: 'A', price: 33 }, { title: 'book', price: 23.3 }];
var loadedProd = class_transformer_1.plainToClass(product_1.Product, products);
for (var _i = 0, loadedProd_1 = loadedProd; _i < loadedProd_1.length; _i++) {
    var prod = loadedProd_1[_i];
    console.log(prod.getInfo());
}
//# sourceMappingURL=app.js.map