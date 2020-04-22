function hi(){
    console.log("hi module01.js");
}
// module.exports=hi();
// module.exports.abc="abc";
module.exports={
    hi:hi,
    abc:"abc"
}