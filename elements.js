const $ = selector => document.querySelector(selector);

const $$ = selector => document.querySelectorAll(selector);

const elements = {
  globalElements: {
    blocks: $$('.block'),
    buttonsContainer: $('.buttons-container'),
    summaryContainer: $('.summary'),
    summaryContentContainer: $('.summary__content'),
    summarySubmitBtn: $('#summary__submit-btn'),
    summaryModifyBtn: $('#summary__update-btn'),
    form: $('.form'),
    photFrame: $('.photo-frame'),
    alert: $('.alert')
  },
  inputElements: {
    firstName: $('#firstname'),
    middleName: $('#midname'),
    lastName: $('#lastname'),
    email: $('#email'),
    phoneNumber: $('#phonenum'),
    gender: {
      male: $('#male'),
      female: $('#female')
    },
    cob: $('#cob'),
    pob: $('#pob'),
    dob: $('#dob'),
    firstNameOnPass: $('#fnonpass'),
    middleNameOnPass: $('#mnonpass'),
    lastNameOnPass: $('#lnonpass'),
    passNumber: $('#passnum'),
    passIssuer: $('#passissuer'),
    passExpdate: $('#passexpdate'),
    grade: $('#grade'),
    photo: $('#photo')
  }
};
