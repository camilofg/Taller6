var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if(browser.isExisting('button=Cerrar'))
      browser.click('button=Cerrar');
  });

  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 5000);
    browser.click('button=Ingresar');
  });

  When(/^I fill with (.*) and (.*)$/ , (email, password) => {
    var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password);
  });

  When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click();
  });


  Then('I expect to see {string}', error => {
      browser.waitForVisible('.aviso.alert.alert-danger', 5000);
      var alertText = browser.element('.aviso.alert.alert-danger').getText();
      console.log(error);
      expect(alertText).to.include(error);
  });

  Then('I expect to see {string}', control => {
      browser.waitForVisible(control, 5000);
      expect(browser.isExisting(control));
  });
});


defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home screen2', () => {
    browser.url('/');
    if(browser.isExisting('button=Cerrar'))
      browser.click('button=Cerrar');
  });

  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 5000);
    browser.click('button=Ingresar');
  });

  When(/^I fill with (.*) and (.*) and (.*) and (.*) and (.*)$/ , (name, lastname, department, email, password) => {
    browser.waitForVisible('input[name="nombre"]', 5000);
    var regName = browser.element('input[name="nombre"]');
    regName.click();
    regName.setValue(name);

    browser.waitForVisible('input[name="apellido"]', 5000);
    var regLastName = browser.element('input[name="apellido"]');
    regLastName.click();
    regLastName.setValue(lastname);
    
    browser.waitForVisible('input[name="correo"]', 5000);
    var mailInput = browser.element('input[name="correo"]');
    mailInput.click();
    mailInput.setValue(email);
   
    browser.waitForVisible('select[name="idDepartamento"]', 15000);
    var selectDepartment = browser.element('select[name="idDepartamento"]');
    selectDepartment.selectByValue(department);

    browser.waitForVisible('input[name="password"]', 5000);
    var passwordInput = browser.element('input[name="password"]');
    passwordInput.click();
    passwordInput.setValue(password);
  });

  When('I try to register', () => {
    browser.waitForVisible('button=Registrarse', 5000);
    browser.element('button=Registrarse').click();
  });


  Then('I expect to see {string}', error => {
      browser.pause(20000);
      browser.waitForVisible('.aviso.alert.alert-danger', 50000);
      var ctrl = $$('.aviso.alert.alert-danger')[0].getText();
      console.log(ctrl);
      expect(ctrl).to.include(error);
      // var alertText = browser.element('.aviso.alert.alert-danger').getText();
      // expect(alertText).to.include(error);
  });

  Then('I expect to see {string}', errorPopup => {
    browser.pause(20000);
    browser.waitForVisible('.text-muted.lead', 50000);
    var alertText = browser.element('.text-muted.lead').$('div').getText();
    console.log(alertText);
    expect(alertText).to.include(errorPopup);
   });
  
});