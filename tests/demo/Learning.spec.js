import { test, expect,chromium} from '@playwright/test'
test('Navigation commands',async({page})=>{
    //navigate to url
    page.goto(url)
    //Browser back button
    page.goBack()
    //Browser forward button
    page.goForward()
    //Reload current page
    page.reload()
    //Wait for navigation to complete
    page.waitForURL(url)
    //Current page url
    page.url()
    //Current page title
    page.title()
})
test('Locators',async({page})=>{

})
test('Actions',async({page})=>{
    //click an element
    page.locator('').click()
    //double click element
    page.locator('').dblclick()
    //clear field type text
    page.locator('').fill('text')
    //Press keybord key
    page.locator('').press('Enter')
    //Toggle check box state
    page.locator('').check() 
    page.locator('').uncheck()
 