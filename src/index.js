const BACKEND_URL = "https://young-forest-03120.herokuapp.com";
const MONASTERIES_URL = `${BACKEND_URL}/api/v1/monasteries`;
const FIGURES_URL = `${BACKEND_URL}/api/v1/figures`;

function addClickListener(element, callback) {
  const button = element;
  button.addEventListener("click", callback);
}

document.addEventListener("DOMContentLoaded", function () {
  Monastery.allInstances = [];
  Monastery.fetchMonasteries();
  Figure.allInstances = [];
  Figure.fetchFigures();
  addClickListener(
    document.querySelector("#monasteries_index"),
    Monastery.renderMonasteries
  );
  addClickListener(
    document.querySelector("#figures_index"),
    Figure.renderFigures
  );
  addClickListener(
    document.querySelector("#monasteries_create"),
    Monastery.renderForm
  );
  addClickListener(
    document.querySelector("#figures_create"),
    Figure.renderForm
  );
});
