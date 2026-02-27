import { test } from '@playwright/test'
//skip test
test.skip('Test one',async({page}) =>{

})
//mark test as failure
test('not yet ready',async({page}) =>{
    test.fail()
})
//test marke as fix
test.fixme('to be fixed',async({page}) =>{
   
})
//slow test
test('slow  test',async({page}) =>{
    test.slow()
})
//run specfic test
// test.only('focus this test',async({page}) =>{
    
// })
//tag
test('Test fast @smoke',async({page}) =>{
    //to run-npx playwright test annotations --headed --grep "@smoke" 
    //opposite of this-npx playwright test annotations --headed --grep-invert "@smoke" 
})

