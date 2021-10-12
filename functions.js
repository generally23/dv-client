const buildFormButtons = () => {
  const buttons = [];
  if (previousBlock) {
    const prevBtn = buildButton('previous');
    buttons.push(prevBtn);
  }

  if (nextBlock) {
    const nextBtn = buildButton('next');
    buttons.push(nextBtn);
  } else {
    const reviewBtn = buildButton('review');
    buttons.push(reviewBtn);
  }

  console.log(buttons);
  return buttons;
};

const buildButton = type => {
  const button = document.createElement('button');

  switch (type) {
    case 'previous':
      button.classList.add('btn', 'btn--previous');
      button.textContent = 'Precedent';
      button.onclick = prev;
      break;
    case 'next':
      button.classList.add('btn', 'btn--next');
      button.textContent = 'Continuer';
      button.onclick = next;
      break;
    case 'review':
      button.classList.add('btn', 'btn--verify');
      button.textContent = 'Verifiez';
      button.onclick = review;
  }

  return button;
};

const renderFormButtons = buttons => {
  elements.globalElements.buttonsContainer.innerHTML = '';
  elements.globalElements.buttonsContainer.append(...buttons);
};

const toggleForm = (form = elements.globalElements.form) =>
  form.classList.toggle('form--unactive');

const toggleReview = (review = elements.globalElements.summaryContainer) =>
  review.classList.toggle('summary--active');

const toggleBlock = block => block.classList.toggle('block--active');

const initApp = () => {
  toggleBlock(currentBlock);
  const buttons = buildFormButtons();

  renderFormButtons(buttons);
};

const readInputs = elements => {
  const output = {};
  for (let key in elements) {
    const element = elements[key];

    if (element.constructor === Object) {
      for (let k in element) {
        console.log(element[k]);
        if (element[k].checked) {
          console.log('Gender: ', element[k].value);
          output[key] = element[k].value;
        }
      }
    } else if (element.type === 'file') output[key] = element.files.item(0);
    else output[key] = element.value;
  }

  return output;
};

const loadPhoto = () => {};

const buildFormData = dataObject => {
  const formData = new FormData();
  for (let key in dataObject) {
    formData.append(key, dataObject[key]);
  }
  return formData;
};

const buildSummary = ({
  firstName = unknown,
  middleName = '',
  lastName = unknown,
  email = '',
  phoneNumber = '',
  gender,
  cob = unknown,
  pob = unknown,
  dob,
  firstNameOnPass = '',
  middleNameOnPass = '',
  lastNameOnPass = '',
  passNumber = unknown,
  passIssuer = unknown,
  passExpdate,
  grade,
  photo
}) => {
  return `
    <div class="summary__element">
          <span class="summary__property">Prenom: </span>
          <span class="summary__value">${firstName}</span>
        </div>
        <div class="summary__element">
          <span class="summary__property">Second Prenom: </span>
          <span class="summary__value">${middleName}</span>
        </div>
        <div class="summary__element">
          <span class="summary__property">Nom: </span>
          <span class="summary__value">${lastName}</span>
        </div>
        <div class="summary__element">
          <span class="summary__property">Email: </span>
          <span class="summary__value">${email}</span>
        </div>
        <div class="summary__element">
          <span class="summary__property">Telephone: </span>
          <span class="summary__value">${phoneNumber}</span>
        </div>
        <div class="summary__element">
          <span class="summary__property">Sex: </span>
          <span class="summary__value">${gender}</span>
        </div>
        <div class="summary__element">
          <span class="summary__property">Pays de Naissance: </span>
          <span class="summary__value">${cob}</span>
        </div>
        <div class="summary__element">
          <span class="summary__property">Lieux de Naissance: </span>
          <span class="summary__value">${pob}</span>
        </div>
        <div class="summary__element">
          <span class="summary__property">Date de Naissance: </span>
          <span class="summary__value">${
            dob ? new Date(dob).toLocaleDateString() : 'Inconnue'
          }</span>
        </div>
        <div class="summary__element">
          <span class="summary__property">Prenom sur le Passport: </span>
          <span class="summary__value">${firstNameOnPass}</span>
        </div>
        <div class="summary__element">
          <span class="summary__property">Second Prenom sur le Passport: </span>
          <span class="summary__value">${middleNameOnPass}</span>
        </div>
        <div class="summary__element">
          <span class="summary__property">Nom sur le Passport: </span>
          <span class="summary__value">${lastNameOnPass}</span>
        </div>
        <div class="summary__element">
          <span class="summary__property">Numero de Passport: </span>
          <span class="summary__value">${passNumber}</span>
        </div>
        <div class="summary__element">
          <span class="summary__property">Pays Emetteur: </span>
          <span class="summary__value">${passIssuer}</span>
        </div>
        <div class="summary__element">
          <span class="summary__property">Date d'Expiration: </span>
          <span class="summary__value">${
            passExpdate
              ? new Date(passExpdate).toLocaleDateString()
              : 'Inconnue'
          }</span>
        </div>
        <div class="summary__element">
          <span class="summary__property">Niveau d'Education: </span>
          <span class="summary__value">${grade}</span>
        </div>
        <div class="summary__element">
          <span class="summary__property summary__property--photo">Photo: </span>
          <span class="summary__value summary__value--photo">
            <img src='${photo ? URL.createObjectURL(photo) : ''}' alt='Photo' />
          </span>
        </div>
  `;
};

const createPhotoElement = src => {
  const img = document.createElement('img');

  img.src = src;
  return img;
};

const filterObject = o => {
  const newo = { ...o };
  for (let k in newo) {
    if (!newo[k]) delete newo[k];
  }
  return newo;
};

const alertUI = (type, msg) => {
  const alert = elements.globalElements.alert;
  alert.textContent = msg;
  alert.classList.add(`alert--${type}`);
};
