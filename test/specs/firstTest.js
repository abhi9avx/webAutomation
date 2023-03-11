//Test suite name
describe('Ecomerce Application',async()=> 
//fat operator 

{

//webdriver Asyn when we are using await
xit('Login fail page',async()=>
{
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await browser.getTitle())
    await expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
    //css selector , xpath
    /*
        id -> #id
        class name - .className
        tagname[attribute= 'value']
        //tagname[@attribute = 'value']   -> xpath
    */
   await $("input[name ='username']").setValue("abhinav")
   await $("#username").setValue("rahulsattyacademy")
   const password = $("//input[@type='password']")
   await password.setValue("learningfs")
   await (await $("#signInBtn")).click()
   ///await browser.pause(3000)
   await console.log(await $(".alert-danger").getText())
   await browser.waitUntil(async()=> await $('#signInBtn').getAttribute('value')== 'Sign In',
   {
    timeout: 5000,
    timeoutMsg: 'Error message is not showing up'
    })
    await console.log(await $(".alert-danger").getText())
    await expect ($("p")).toHaveTextContaining("username is rahulshettyacademy and Password is learning")

 })

it('Login Success page ', async()=>{

    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    await $("input[name ='username']").setValue("rahulshettyacademy")
    const password = $("//input[@type='password']")
    await password.setValue("learning")
    await (await $("#signInBtn")).click()
    //wait until checkout button is displayed
    await $(".btn-primary").waitForExist()
    await expect(browser).toHaveUrlContaining("shop")
    await expect(browser).toHaveTitle("ProtoCommerce")



})





})