// მეინი
const main_container = document.getElementsByTagName("main")[0];
main_container.style.display = "flex";
main_container.style.flexDirection = "column";

// ლურჯი კონტეინერი
const container1 = document.createElement("div");
main_container.appendChild(container1);
container1.style.display = "flex";
container1.style.flexDirection = "column";
container1.style.alignItems = "center";
container1.style.gap = "120px";
container1.style.padding = "220px 0 80px";
container1.style.background = "#252B42";

// ლურჯი კონტეინერის ტექტის კონტეინერი
const container1_text_cont = document.createElement("div");
container1.appendChild(container1_text_cont);
container1_text_cont.style.display = "flex";
container1_text_cont.style.flexDirection = "column";
container1_text_cont.style.alignItems = "center";
container1_text_cont.style.gap = "40px";
container1_text_cont.style.width = "610px";

// welcome text
const welcome = document.createElement("h5");
welcome.textContent = "welcome";
container1_text_cont.appendChild(welcome);
welcome.style.fontSize = "16px";
welcome.style.fontWeight = "700";
welcome.style.lineHeight = "24px";
welcome.style.color = "#23A6F0";

// h1
const header = document.createElement("h1");
header.textContent = "Selling on the internet like a pro";
container1_text_cont.appendChild(header);
header.style.fontSize = "58px";
header.style.fontWeight = "700";
header.style.textAlign = "center";
header.style.lineHeight = "80px";
header.style.color = "#FFFFFF";

// p
const header_paragraph = document.createElement("p");
header_paragraph.textContent =
  "We know how large objects will act, but things on a small scale just do not act that way.";
container1_text_cont.appendChild(header_paragraph);
header_paragraph.style.fontSize = "20px";
header_paragraph.style.fontWeight = "400";
header_paragraph.style.textAlign = "center";
header_paragraph.style.lineHeight = "30px";
header_paragraph.style.color = "white";

// button.div
const button_cont = document.createElement("div");
container1_text_cont.appendChild(button_cont);
button_cont.style.display = "flex";
button_cont.style.gap = "10px";

// get queto now button
const get_quote_button = document.createElement("button");
button_cont.appendChild(get_quote_button);
get_quote_button.textContent = "Get Quote Now";
get_quote_button.style.borderRadius = "5px";
get_quote_button.style.border = "none";
get_quote_button.style.padding = "15px 40px";
get_quote_button.style.width = "193px";
get_quote_button.style.height = "52px";
get_quote_button.style.fontSize = "14px";
get_quote_button.style.fontWeight = "700";
get_quote_button.style.textAlign = "center";
get_quote_button.style.lineHeight = "22px";
get_quote_button.style.color = "white";
get_quote_button.style.background = "#23A6F0";

// learn more button
const learn_more = document.createElement("button");
button_cont.appendChild(learn_more);
learn_more.textContent = "Learn More";
learn_more.style.borderRadius = "5px";
learn_more.style.border = "solid 1px #23A6F0";
learn_more.style.padding = "15px 40px";
learn_more.style.height = "52px";
learn_more.style.fontSize = "14px";
learn_more.style.fontWeight = "700";
learn_more.style.textAlign = "center";
learn_more.style.lineHeight = "22px";
learn_more.style.color = "#23A6F0";
learn_more.style.background = "transparent";

// card container
// export
export const container1_card_cont = document.createElement("div");
container1.appendChild(container1_card_cont);
container1_card_cont.style.display = "flex";
container1_card_cont.style.gap = "30px";

import { Card } from "./style.js";

// card შემოტანა
Card(
  "icons/smile_icon.png",
  "training Courses",
  "#252B42",
  "#E74040",
  "The gradual accumulation of information about atomic and small-scale behaviour...",
  "#737373",
  "white"
);
Card(
  "icons/check_icon.png",
  "2,769 online courses",
  "#252B42",
  "#E74040",
  "The gradual accumulation of information about atomic and small-scale behaviour...",
  "#737373",
  "white"
);
Card(
  "icons/payment_icon.png",
  "training Courses",
  "white",
  "white",
  "The gradual accumulation of information about atomic and small-scale behaviour...",
  "white",
  "#23A6F0"
);

// თეთრი კონტეინერი
const container2 = document.createElement("div");
main_container.appendChild(container2);
container2.style.display = "flex";
container2.style.flexDirection = "column";
container2.style.alignItems = "center";
container2.style.gap = "80px";
container2.style.padding = "160px 0";
container2.style.background = "white";

// თეთრი კონტეინერის ტექსტის დივი
const container2_text_cont = document.createElement("div");
container2.appendChild(container2_text_cont);
container2_text_cont.style.display = "flex";
container2_text_cont.style.flexDirection = "column";
container2_text_cont.style.alignItems = "center";
container2_text_cont.style.gap = "10px";

// practice advice text
const practice_advice = document.createElement("h5");
container2_text_cont.appendChild(practice_advice);
practice_advice.textContent = "Practice Advice";
practice_advice.style.fontSize = "14px";
practice_advice.style.fontFamily = "Montserrat";
practice_advice.style.fontWeight = "700";
practice_advice.style.textAlign = "center";
practice_advice.style.lineHeight = "24px";
practice_advice.style.color = "#23A6F0";

// Featured Products text
const featured_products = document.createElement("h2");
container2_text_cont.appendChild(featured_products);
featured_products.textContent = "Featured Products";
featured_products.style.fontSize = "40px";
featured_products.style.fontFamily = "Montserrat";
featured_products.style.fontWeight = "700";
featured_products.style.textAlign = "center";
featured_products.style.lineHeight = "50px";
featured_products.style.color = "#252B42";

// პარაგრაფის დივი ტექსტის გასაყოფად
const paragraph_cont = document.createElement("div");
container2_text_cont.appendChild(paragraph_cont);
paragraph_cont.style.width = "469px";

// პირველი ტექსტი
const container2_text_cont_paragraph_first = document.createElement("p");
paragraph_cont.appendChild(container2_text_cont_paragraph_first);
container2_text_cont_paragraph_first.textContent =
  "Problems trying to resolve the conflict between";
container2_text_cont_paragraph_first.style.fontSize = "14px";
container2_text_cont_paragraph_first.style.fontFamily = "Montserrat";
container2_text_cont_paragraph_first.style.fontWeight = "400";
container2_text_cont_paragraph_first.style.textAlign = "center";
container2_text_cont_paragraph_first.style.lineHeight = "20px";
container2_text_cont_paragraph_first.style.width = "469px";
container2_text_cont_paragraph_first.style.color = "#737373";

// მეორე ტექსტი
const container2_text_cont_paragraph_second = document.createElement("p");
paragraph_cont.appendChild(container2_text_cont_paragraph_second);
container2_text_cont_paragraph_second.textContent =
  "the two major realms of Classical physics: Newtonian mechanics ";
container2_text_cont_paragraph_second.style.fontSize = "14px";
container2_text_cont_paragraph_second.style.fontFamily = "Montserrat";
container2_text_cont_paragraph_second.style.fontWeight = "400";
container2_text_cont_paragraph_second.style.textAlign = "center";
container2_text_cont_paragraph_second.style.lineHeight = "20px";
container2_text_cont_paragraph_second.style.width = "469px";
container2_text_cont_paragraph_second.style.color = "#737373";

// form
const form = document.createElement("form");
container2.appendChild(form);
form.style.position = "relative";

// input
const input = document.createElement("input");
form.appendChild(input);
input.placeholder = "Your Email";
input.style.width = "688px";
input.style.height = "58px";
input.style.padding = "15px 20px";
input.style.outline = "none";
input.style.borderRadius = "5px";
input.style.border = "1px solid #E6E6E6";
input.style.color = "#737373"
input.style.background = "#F9F9F9";

// subscribe button
const subscribe = document.createElement("button");
form.appendChild(subscribe);
subscribe.textContent = "Subscribe";
subscribe.style.position = "absolute";
subscribe.style.right = "0";
subscribe.style.width = "117px";
subscribe.style.height = "58px";
subscribe.style.borderRadius = "0px 5px 5px 0px";
subscribe.style.border = "none";
subscribe.style.padding = "15px 22px";
subscribe.style.fontSize = "14px";
subscribe.style.fontFamily = "Montserrat";
subscribe.style.fontWeight = "400";
subscribe.style.lineHeight = "28px";
subscribe.style.color = "white"
subscribe.style.background = "#23A6F0";
