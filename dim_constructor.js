// CONSTRUCTOR
function Middleware() {
  let args ={
    name: null,
    arr: null
  }
  //error
  this._error = false;
  this._errorName = "First arg must be the name (reference) for your service/s";
  this._errorEmpty = "Second arg must be [service/s]!";
}
//Method
Middleware.prototype.errorCheck = function () {
  if (typeof this.args.name !== "string") {
    this._error = true;
    console.log(this._errorName);
  } else if (this.args.arr.length === 0) {
    this._error = true;
    console.log(this._errorEmpty);
  } else {
    this._error = false;
  }
  return this._error;
};



// CONSTRUCTOR
function Container() {
  //inherit Middelware properties
  Middleware.apply(this);
  this.container = new Map();  
}
// inherit Middelware methods
Container.prototype = Object.create(Middleware.prototype);

//Methods
Container.prototype.set = function (name, ...params) {
  this.args = {name, arr: params || []}
  if (this.errorCheck())  return;
  //set item/s
  this.container.set(name, this.args.arr);
  
};
Container.prototype.get = function (name) {
  return this.container.get(name);
};
Container.prototype.size = function () {
  return this.container.size;
};
Container.prototype.isExist = function (name) {
  return this.container.has(name);
};
Container.prototype.remove = function (name) {
  this.container.delete(name)
};

// CONSTRUCTOR
function Dinjector() {
  //inherit Container properties
  Container.apply(this);
}
// inherit Container methods
Dinjector.prototype = Container.prototype;

let dinject = new Dinjector();
