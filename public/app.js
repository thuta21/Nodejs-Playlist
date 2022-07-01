var callFunction = (fun) => {
    fun();
}

var test1 = () => {
    console.log("testing")
}

callFunction(test1);