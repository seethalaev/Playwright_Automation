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
    //Select dropdown option
    page.locator('').selectOption;
    //Hover mouse on event
    page.locator('').hover()
    //Drage elemtn to target
    page.locator('').dragTo(target)

})
test('Assertions',async({page})=>{
    //element visible on page
    expect (page.locator('')).toBeVisible()
    //element is not visible
    expect (page.locator('')).toBeHidden()
    //element is enabled
    expect (page.locator('')).toBeEnabled()
    //element is disabled
    expect (page.locator('')).toBeDisabled()
    //exact text match

 expect(page.locator('')).toHaveText('')
    //Number of matching elements
    expect(page.locator('')).toHaveCount(n)
    //css class matching pattern 
    expect(page.locator('')).toHaveClass()
    //Page title mactches
    expect(page).toHaveTitle('Tile')

})
test('Api testing',async({page})=>{
    //Send get request
 page.request.get(url)
    //Send post with body
 page.request.post(url,{data:{}})
    //Send put with body
page.request.put(url,{data:{}})
    //Send delete request
page.request.delete(url)


//get http status code
Response.status()
//get http response
Response.json()
//get response header
Response.header()
//check status code is 2xx
Response.ok()


