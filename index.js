initApp();

elements.inputElements.photo.addEventListener('change', onPhotoSelection);

elements.globalElements.summarySubmitBtn.addEventListener(
  'click',
  onSummarySubmit
);

elements.globalElements.summaryModifyBtn.addEventListener(
  'click',
  onSummaryModify
);
