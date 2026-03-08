import { test, expect,chromium} from '@playwright/test'
test('Navigation commands',async({page})=>{
    //navigate to url
    page.goto(url)
    //Browser back button
    page.goBack()
    //Browser forward button
   