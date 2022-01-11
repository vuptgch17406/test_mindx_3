function getData(url, callback) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function renderDatas(datas) {
  console.log("datas", datas);
  const {
    code,
    full_share_link,
    full_short_link,
    full_short_link2,
    full_short_link3,
    original_link,
    share_link,
    short_link,
    short_link2,
    short_link3,
  } = datas;
  let dataStr = datas
    .map((data) => {
      return data;
    })
    .join("");

  console.log(dataStr);
  document.getElementById("root").innerHTML = dataStr;
}

getData(
  "https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html",
  renderDatas
);

let input = document.getElementById("txt-link");
let option = document.querySelectorAll(".short");
let domain = document.querySelector(".short.active").innerHTML;
let btn = document.getElementById("btn-link");
option.forEach((e) => {
  e.addEventListener("click", function (e) {
    let shortActive = document.querySelector(".short.active");
    shortActive.classList.remove("active");
    e.target.classList.add("active");
    domain = e.target.innerHTML;
  });
});
btn.addEventListener("click", function () {
  let getLink = input.value;
  renderDatas(getLink);
});
