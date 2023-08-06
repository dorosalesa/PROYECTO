export const div = function (attributes, parent) {
  return createElement("div", attributes, parent);
};

export const p = function (attributes, parent) {
  return createElement("p", attributes, parent);
};

export const img = function (attributes, parent) {
  return createElement("img", attributes, parent);
};

export const input = function (attributes, parent) {
  return createElement("input", attributes, parent);
};

export const h3 = function (attributes, parent) {
  return createElement("h3", attributes, parent);
};

export const h4 = function (attributes, parent) {
  return createElement("h4", attributes, parent);
};

const createElement = function (type, attributes, parent) {
  var element = document.createElement(type);
  parent.appendChild(element);
  for (const attribute in attributes) {
    element[attribute] = attributes[attribute];
  }
  return element;
};
