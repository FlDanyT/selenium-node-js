const { Builder, By, Key, until, error } = require('selenium-webdriver')


require("chromedriver");


        async function indexTwo() {
            let driver = await new Builder().forBrowser('chrome').build();
            driver.get('https://vk.com/');
            driver.findElement(By.xpath('//*[@id="index_email"]')).click(); // Кнопка на нажатие формы номера

            await driver.sleep(5000)

            driver.findElement(By.xpath('//*[@id="index_email"]')).sendKeys('phone'); // Написание номера

            await driver.sleep(5000)

            driver.findElement(By.xpath('//*[@id="index_login"]/div[1]/form/button[1]')).click(); // Нажатие войти

            await driver.sleep(5000)

            driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/div[2]/div/div/div/form/div[4]/div/button[2]/span')).click(); // Нажатие войти при помощи пороля

            await driver.sleep(5000)

            driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/div[2]/div/div/div/form/div[1]/div[3]/div[1]/div/input')).click(); // Кнопка на нажатие формы пароля

            await driver.sleep(5000)

            driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/div[2]/div/div/div/form/div[1]/div[3]/div[1]/div/input')).sendKeys('password'); // Написание пороля

            await driver.sleep(5000)

            driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/div[2]/div/div/div/form/div[2]/button/span[1]')).click(); // Нажатие войти
        

                async function indexOne() {


                    await driver.sleep(5000)
                        let test = 'https://vk.com/' + 'id1'
                      

                  await  driver.get(test);
                
                    await driver.sleep(5000)

    
                        await driver.sleep(5000)

                        driver.findElement(By.xpath('//*[@id="profile_redesigned"]/div/div/div/div[2]/div[2]/div[2]/div/div[2]/div/div/div/div[2]/a/span[1]')).click(); // Нажатие написать сообщение

                         await driver.sleep(5000)

                         driver.findElement(By.xpath('//*[@id="mail_box_editable"]')).sendKeys('Привет'); // Написание текста в сообщениях

                       await driver.sleep(5000)

                         driver.findElement(By.xpath('//*[@id="mail_box_send"]')).click(); // Нажатие отправить сообщение

                        await driver.sleep(3000)
                       driver.quit()

                }

                indexOne();
   
    }indexTwo()







