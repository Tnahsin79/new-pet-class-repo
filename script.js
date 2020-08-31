//console.log("hello");
var petData = [];
var petstatus = [];
var enquiryData = [];
var AvailableClass = /** @class */ (function () {
    function AvailableClass(type, breed, age, color) {
        this.insert(type, breed, age, color);
    }
    AvailableClass.prototype.insert = function (type, breed, age, color) {
        this.type = type;
        this.breed = breed;
        this.age = age;
        this.color = color;
    };
    return AvailableClass;
}());
var RequestClass = /** @class */ (function () {
    function RequestClass() {
    }
    RequestClass.prototype.insert = function (check) {
        var f;
        for (var i = 0; i < check.length; i++) {
            f = 0;
            petData.forEach(function (element) {
                if ((element["type"] === check[i].type) && (element["breed"] === check[i].breed) && (element["age"] === check[i].age) && (element["color"] === check[i].color)) {
                    f = 1;
                    enquiryData.push(check[i]);
                    petstatus.push("Available");
                }
            });
            if (f === 0) {
                enquiryData.push(check[i]);
                petstatus.push("Not Available");
            }
        }
    };
    return RequestClass;
}());
var result; //stores the result for first 5 enquiries
var findStatus = function () {
    console.log("RUNNING findStatus() function");
    for (var i = 0; i < 5; i++) {
        var str = enquiryData[i]["type"] + "," + enquiryData[i]["breed"] + "," + enquiryData[i]["age"] + "," + enquiryData[i]["color"] + ": " + petstatus[i];
        console.log(str);
    }
};
var count = {};
var countpet = function () {
    console.log("RUNNING countpet() function");
    for (var i = 0; i < petData.length; i++) {
        if (count[petData[i]["type"]] === undefined)
            count[petData[i]["type"]] = 1;
        else
            count[petData[i]["type"]]++;
    }
};
var mapRequest = function () {
    console.log("RUNNING mapRequest() function");
    for (var i = 0; i < 5; i++) {
        if (petstatus[i] === "Available") {
            var str = enquiryData[i]["type"] + "," + enquiryData[i]["breed"] + "," + enquiryData[i]["age"] + "," + enquiryData[i]["color"] + ": " + petstatus[i];
            console.log(str);
        }
    }
};
var pet1 = new AvailableClass("dog", "lab", 7, "black");
petData.push(pet1);
var pet2 = new AvailableClass("cat", "lab", 2, "black");
petData.push(pet2);
var pet3 = new AvailableClass("dog", "lab", 5, "white");
petData.push(pet3);
var pet4 = new AvailableClass("fish", "lab", 7, "black");
petData.push(pet4);
var pet5 = new AvailableClass("cat", "lab", 7, "black");
petData.push(pet5);
var pet6 = new AvailableClass("dog", "lab", 2, "brown");
petData.push(pet6);
var pet7 = new AvailableClass("cat", "lab", 7, "white");
petData.push(pet7);
var pet8 = new AvailableClass("cat", "lab", 3, "black");
petData.push(pet8);
var pet9 = new AvailableClass("fish", "lab", 6, "orange");
petData.push(pet9);
var req1 = new AvailableClass("fish", "lab", 7, "black");
var req2 = new AvailableClass("cat", "lab", 2, "black");
var req4 = new AvailableClass("fish", "lab", 6, "black");
var req5 = new AvailableClass("cat", "lab", 7, "black");
var req7 = new AvailableClass("cat", "lab", 6, "white");
var req8 = new AvailableClass("cat", "lab", 3, "black");
var petRequest = new RequestClass();
petRequest.insert([req1, req2, req4, req5, req7, req8]);
console.log(petData);
console.log(enquiryData);
console.log(petstatus);
findStatus();
countpet();
console.log(JSON.stringify(count));
mapRequest();
