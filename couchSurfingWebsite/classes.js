"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Classes
var Car = /** @class */ (function () {
    function Car(make, year, color) {
        this.make = make;
        this.year = year;
        this.color = color;
    }
    return Car;
}());
var Image = /** @class */ (function () {
    function Image(src, title, reviews) {
        this.src = src;
        this.title = title;
        this.reviews = reviews;
    }
    return Image;
}());
var MainProperty = /** @class */ (function () {
    function MainProperty(src, title, reviews) {
        this.src = src;
        this.title = title;
        this.reviews = reviews;
    }
    return MainProperty;
}());
exports.default = MainProperty;
