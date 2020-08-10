"use strict";

const fs = require("fs");

class Parser {
    constructor(file) {
        this.jsonData = fs.readFileSync(file);
        this.data = JSON.parse(this.jsonData);
        this.objectNum = 0;
    }

    getNextObject() {
        const obj = this.data[this.objectNum];
        this.objectNum++;
        return obj;
    }
}

module.exports = Parser;