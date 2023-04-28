const html = document.querySelector("html");
const darkToggle = document.getElementById("dark-toggle");
const decor = document.getElementById("decor");

function a() {
  if (darkToggle.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}

window.onscroll = () => {
  const header = document.querySelector("#navbar");
  const top = document.querySelector("#to-top");
  const fixednav = header.offsetTop;
  if (window.pageYOffset > fixednav) {
    header.classList.add("fixednav");
    top.classList.add("flex");
    top.classList.remove("hidden");
  } else {
    top.classList.remove("fixednav");
    top.classList.add("hidden");
    top.classList.remove("flex");
  }
};

const burger = document.querySelector(".hamburger1");
const hidden = document.querySelector(".nav");
function hamburger() {
  burger.classList.toggle("hamburger");
  hidden.classList.toggle("hidden");
}

(function () {
  let tabs = document.querySelectorAll(".tabs");
  tabs.forEach(function (tab) {
    let tabTogglers = tab.querySelectorAll("a");

    tabTogglers.forEach(function (toggler) {
      toggler.addEventListener("click", function (e) {
        e.preventDefault();

        let tabName = this.getAttribute("href");

        let tabContents = document.querySelector(
          "#" + tab.getAttribute("data-content")
        );

        for (let i = 0; i < tabContents.children.length; i++) {
          tabTogglers[i].parentElement.classList.remove(
            "border-blue-400",
            "border-b",
            "opacity-100"
          );
          tabContents.children[i].classList.remove("hidden");
          if ("#" + tabContents.children[i].id === tabName) {
            continue;
          }
          tabContents.children[i].classList.add("hidden");
        }
        e.target.parentElement.classList.add(
          "border-blue-400",
          "border-b-3",
          "opacity-100"
        );
      });
    });

    tab.querySelectorAll(".default-tab")[0].click();
  });
})();

const sendMail = () => {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceId = "service_g5ajbk7";
  const template = "template_4bzfdgh";

  emailjs
    .send(serviceId, template, params)
    .then(() => {
      document.getElementById("name").value = "";
      (document.getElementById("email").value = ""),
        (document.getElementById("message").value = "");
      Swal.fire({
        title: "Terima Kasih!",
        text: "Pesan Berhasil Terkirim",
        imageUrl: "../../img/thank.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "thank yoou",
      });
    })
    .catch(() => {
      alert("pesan gagal dikirimkan");
    });
};
