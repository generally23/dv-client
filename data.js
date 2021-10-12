let currentBlockPosition = 0;
let currentBlock = elements.globalElements.blocks.item(currentBlockPosition);
let previousBlock = elements.globalElements.blocks.item(
  currentBlockPosition - 1
);
let nextBlock = elements.globalElements.blocks.item(currentBlockPosition + 1);

const unknown = 'Inconnu';

const getNextBlock = currentBlockPos =>
  elements.globalElements.blocks.item(currentBlockPos + 1);

const getPreviousBlock = currentBlockPos =>
  elements.globalElements.blocks.item(currentBlockPos - 1);
