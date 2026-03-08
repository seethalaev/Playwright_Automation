import { test, expect,chromium} from '@playwright/test'
test('Navigation command',async({page})=>{
    page.goto(url)
    page.goBack()
    page.goForward()
    page.reload()
    page.waitForURL(url)
    page.url()
    page.title()
})