
let dinjector = function(){

    let _container = new Map();

    //error
    let _error = false;
    let _errorName = 'First arg must be the name (reference) for your service/s';
    let _errorEmpty = 'Second arg must be [service/s]!';

    //checks
    let args ={
        name: null,
        arr: null
    }

    return{
        errorCheck(){
            if(typeof args.name !== 'string') {
                _error = true; 
                console.log(_errorName); 
            }else if(args.arr.length === 0){
                _error = true; 
                console.log(_errorEmpty); 
            }else{
                _error = false;
            }
            return _error;
        },


        set(name, ...params){
            args = {name, arr: params || []}
            if (this.errorCheck())  return;
            //set item/s
            _container.set(name, args.arr);
        },
        get(name){
            //get item/s
            return _container.get(name)
        },
        size(){
            return _container.size;
        },
        isExist(name){
            //check
            return _container.has(name)
        },
        remove(name){
            //check
            _container.delete(name)
        }
    }
}

let dim = dinjector();






module.exports = dinjector();





