export const insertExhibitor = (exhibitors) => {
  exhibitors.forEach((exhibitor) => {
    document
      .getElementById(exhibitor.labo + "-labo")
      .appendChild(createExhibitorNode(exhibitor));
  });
};
