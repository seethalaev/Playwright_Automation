//  const {test,expect} = require('@playwright/test')
// const {hello,helloworld}=require('./demo/hello')
// import {hello, helloworld} from './demo/hello.js'
//  console.log(hello());
//  console.log(helloworld());
//  const{ha,hell}=require('./demo/hai')
//  console.log(ha())
//  import{ha,hell} from './demo/hai.js'


const {test,expect} =require('@playwright/test')
test('My first test starts here',async ({page}) => {
   await page.goto('https://google.com')
  await expect(page).toHaveTitle('Google')
})


//  test('My frist test',async({page})=>
// {
//    await page.goto("https://google.com")
//    await expect(page).toHaveTitle('Google')
// })
// test('my firaast test ',()=>{
   
// })
// require('@playwright/test')