Feature('Login');

Scenario('Login com sucesso',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.fillField('#user', 'joaopedro@gmail.com')
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado')

}).tag('cen1')

Scenario('Tentando logar digitando apenas o e-mail',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.fillField('#user', 'joaopedro@gmail.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.')

}).tag('cen2')

Scenario('Tentando logar digitando apenas a senha',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.')

}).tag('cen3')

Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.')

}).tag('cen4')
