export const createExhibitorNode = (exhibitor) => {
  const span = document.createElement("span");
  const name = document.createTextNode(exhibitor.name);
  span.appendChild(name);
  return span;
};
