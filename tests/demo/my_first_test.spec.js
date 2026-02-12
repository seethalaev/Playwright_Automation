const{test,expect}=require('@playwright/test')
// const{hello,helloworld}=require('../demo/hello')
// console.log(hello())
test("This is my first test",async({page}) =>{
   await page.goto("https://google.com")

})