// Nook & Co. demo store: builds the product list from products.json.
// "View in your room" opens the Can It Fit app with the product (canitfit://product?id=...).

const APP_PACKAGE = "com.jovanyeokaisheng.canitfit";
const SVG_NS = "http://www.w3.org/2000/svg";
const isAndroid = /Android/i.test(navigator.userAgent);

// On Android an intent link opens the app, or jumps to the note under the list if it isn't installed.
function appLink(id) {
  const query = "id=" + encodeURIComponent(id);
  if (!isAndroid) return "canitfit://product?" + query;
  const fallback = location.href.split("#")[0] + "#get-app";
  return "intent://product?" + query + "#Intent;scheme=canitfit;package=" + APP_PACKAGE +
    ";S.browser_fallback_url=" + encodeURIComponent(fallback) + ";end";
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

// An icon from icons.svg, e.g. icon("room").
function icon(name) {
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("class", "icon");
  svg.setAttribute("aria-hidden", "true");
  const use = document.createElementNS(SVG_NS, "use");
  use.setAttribute("href", "icons.svg#" + name);
  svg.append(use);
  return svg;
}

function dimension(label, value) {
  const cell = el("div");
  const amount = el("dd", null, String(value));
  amount.append(el("span", null, " cm"));
  cell.append(el("dt", null, label), amount);
  return cell;
}

function row(product) {
  const item = el("li", "item");
  item.id = product.id;

  const plate = el("figure", "plate");
  const img = el("img");
  img.src = product.image;
  img.alt = product.name;
  img.loading = "lazy";
  plate.append(img);

  const spec = el("dl", "spec");
  spec.append(
    dimension("Width", product.widthCm),
    dimension("Depth", product.depthCm),
    dimension("Height", product.heightCm)
  );

  const view = el("a", "view");
  view.href = appLink(product.id);
  view.append(icon("room"), el("span", null, "View in your room"));

  const buy = el("div", "buy");
  buy.append(el("span", "price", "S$" + product.priceSgd.toLocaleString("en-SG")), view);

  const detail = el("div");
  detail.append(el("h2", "name", product.name), el("p", "desc", product.description), spec, buy);
  item.append(plate, detail);
  return item;
}

fetch("products.json", { cache: "no-cache" })
  .then(response => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  })
  .then(data => {
    document.getElementById("products").replaceChildren(...data.products.map(row));
    if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
  })
  .catch(() => {
    document.getElementById("status").textContent = "Couldn't load the products. Refresh to try again.";
  });
