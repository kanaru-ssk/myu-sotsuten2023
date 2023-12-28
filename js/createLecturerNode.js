export const createLecturerNode = (lecturer) => {
  const img = document.createElement("img");
  img.setAttribute("class", "lecturer-profile-img");
  img.setAttribute("src", "./img/lecturers/" + lecturer.img_name);

  const roman = document.createTextNode(lecturer.roman);
  const romanSpan = document.createElement("span");
  romanSpan.setAttribute("class", "lecturer-profile-text");
  romanSpan.appendChild(roman);

  const name = document.createTextNode(lecturer.name);
  const nameSpan = document.createElement("span");
  nameSpan.setAttribute("class", "lecturer-profile-name");
  nameSpan.appendChild(name);

  const belongs = document.createTextNode(lecturer.belongs);
  const belongsSpan = document.createElement("span");
  belongsSpan.setAttribute("class", "lecturer-profile-text");
  belongsSpan.appendChild(belongs);

  const div = document.createElement("div");
  div.appendChild(img);
  div.appendChild(romanSpan);
  div.appendChild(nameSpan);
  div.appendChild(belongsSpan);

  const career = document.createTextNode(
    lecturer.position + "  " + lecturer.career
  );
  const p = document.createElement("p");
  p.appendChild(career);

  const li = document.createElement("li");
  li.setAttribute("class", "lecturer-profile-li");
  li.appendChild(div);
  li.appendChild(p);

  return li;
};
