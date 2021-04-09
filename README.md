
# DIM

Tiny Dependency Injection Module for small scale project using node.js

## How to install
```javscript
npm i @mrsalsa/dim
```

## How to use it
```javscript
const Dinjector = require('@mrsalsa/dim')
    
let container = new Dinjector();

// register (service/s) for later use  
// you can put as many services as you want
container.set('services', service1, service2, service3);
    
// another set
container.set('Mailer', Mailer);
```

## 'get' the service from the container as easy as :
```javscript
let service1 = container.get('Mailer');
```

## check if the container had your service :
```javscript
console.log(container.isExist('Mailer')) // output: true
```

## get the size(length) of your container : 
```javscript
console.log(container.size()) // output ex: 2
```
## remove the any record from your container :
```javscript
container.remove('Mailer)
```

Thats all For Now , Simple , Tiny and easy to use .

# Contribution
Any Kind of making this tiny module effective are WELCOME :)

## How to contribute
- Fork it
- clone it in your local machine
- create new branch for your feature
- pull request
- your pull will verified in this stage
- merge your pull
- DONE , you are free to delete your new branch
- Same steps if you want to add more features

# License
MIT License

Copyright (c) [2021] [salsa-project]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.