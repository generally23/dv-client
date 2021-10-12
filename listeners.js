const prev = e => {
  e.preventDefault();

  toggleBlock(currentBlock);
  toggleBlock(previousBlock);

  currentBlockPosition -= 1;

  nextBlock = currentBlock;
  currentBlock = previousBlock;
  previousBlock = getPreviousBlock(currentBlockPosition);

  const formButtons = buildFormButtons();

  renderFormButtons(formButtons);
};

const next = e => {
  e.preventDefault();

  toggleBlock(currentBlock);

  toggleBlock(nextBlock);

  currentBlockPosition += 1;
  previousBlock = currentBlock;
  currentBlock = nextBlock;
  nextBlock = getNextBlock(currentBlockPosition);

  const formButtons = buildFormButtons();

  renderFormButtons(formButtons);
};

const onPhotoSelection = e => {
  console.log(e);

  const photoInput = e.target;

  const photoFile = photoInput.files.item(0);

  if (!photoFile) {
    elements.globalElements.photFrame.innerHTML = '';
    return;
  }

  const photoUrl = URL.createObjectURL(photoFile);

  const photoElement = createPhotoElement(photoUrl);

  elements.globalElements.photFrame.innerHTML = '';

  elements.globalElements.photFrame.appendChild(photoElement);

  //URL.revokeObjectURL(photoUrl);
};

const onSummarySubmit = async e => {
  const url = 'http://localhost/collect';
  const reqOptions = {
    method: 'POST',
    body: window.formData
  };

  try {
    const response = await fetch(url, reqOptions);
    if (response.ok) {
      toggleReview();

      alertUI(
        'success',
        'Felicitations. Vous avez soumis vos information avec success'
      );
    }
  } catch (e) {
    console.log(e);
    toggleReview();
    alertUI(
      'error',
      `Desole vos informations n'ont pas pu etre recu par notre serveur. veuillez ressayez ulterieurement`
    );
  } finally {
    alertUI(
      'error',
      `Desole vos informations n'ont pas pu etre recu par notre serveur. veuillez ressayez ulterieurement`
    );
  }
};

const review = e => {
  e.preventDefault();

  toggleForm(elements.globalElements.form);
  toggleReview(elements.globalElements.summaryContainer);

  const inputs = elements.inputElements;

  const userInputData = readInputs(inputs);

  console.log(userInputData);

  window.formData = buildFormData(userInputData);

  const summary = buildSummary(filterObject(userInputData));

  elements.globalElements.summaryContentContainer.innerHTML = summary;
};

const onSummaryModify = e => {
  console.log(e);
  toggleReview();
  toggleForm();
};
