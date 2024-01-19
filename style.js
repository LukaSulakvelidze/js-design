import { container1_card_cont } from "./script.js";
export function Card(
  image0,
  card_main_text0,
  card_main_text_color0,
  line_color0,
  card_main_text_paragraph0,
  card_main_text_paragraph_color0,
  backgroundColor
  ) {
  // card container
  const card = document.createElement("div");
  container1_card_cont.appendChild(card);
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.gap = "20px";
  card.style.width = "24.2%";
  card.style.padding = "35px 40px";
  card.style.backgroundColor = backgroundColor;

  // icon
  const image = document.createElement("img");
  card.appendChild(image);
  image.src = image0;
  image.style.width = "70px"
  image.style.height = "76px"

  // card main text
  const card_main_text = document.createElement("h5");
  card.appendChild(card_main_text);
  card_main_text.textContent = card_main_text0;
  card_main_text.style.fontSize = "16px";
  card_main_text.style.fontFamily = "Montserrat";
  card_main_text.style.fontWeight = "700";
  card_main_text.style.lineHeight = "24px";
  card_main_text.style.color = card_main_text_color0;

  // line
  const line = document.createElement("div");
  card.appendChild(line);
  line.style.width = "50px";
  line.style.height = "2px";
  line.style.background = line_color0;

  // card main text paragraph
  const card_main_text_paragraph = document.createElement("p");
  card.appendChild(card_main_text_paragraph);
  card_main_text_paragraph.textContent = card_main_text_paragraph0;
  card_main_text_paragraph.style.fontSize = "14px";
  card_main_text_paragraph.style.fontFamily = "Montserrat";
  card_main_text_paragraph.style.fontWeight = "400";
  card_main_text_paragraph.style.lineHeight = "20px";
  card_main_text_paragraph.style.color = card_main_text_paragraph_color0;
}