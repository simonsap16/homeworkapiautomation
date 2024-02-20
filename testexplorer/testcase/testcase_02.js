const { getMethod, postMethod, putMethod } = require("../APIserver/APIobject");


describe("Testing API restful", function () {
    let id;
    //testcase1
    it("TEST GET from function" , async function(){
        await getMethod();
    }) 
    it("TEST POSt from function" , async function(){
        await postMethod();
    }) 
   it("TEST PUT from function" , async function (){
        await putMethod(id);
   })
});