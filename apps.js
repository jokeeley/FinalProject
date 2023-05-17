// #region HORIZONTAL NAVBAR

const hNav = document.querySelector("#horizontal-navbar");
const hNavTop = document.querySelector("#h-navbar-top");
const hNavLogo = document.querySelector("#h-navbar-logo");
const listTitle = document.querySelectorAll(".list-title");
const listContent = document.querySelectorAll(".list-content");
const listContentItems = document.querySelectorAll(".list-content-items");
const searchbar = document.querySelector("#searchbar");
const topLogo = document.querySelector("#h-navbar-logo-top");
const bottomLogo = document.querySelector("#h-navbar-logo-bottom");

logoSize = () =>{
  if (hNav.classList.contains('h-navbar-slide')){
    bottomLogo.className = 'logo-grow';
  } else {
    bottomLogo.className = 'logo-shrink';
  }
}

hNav.addEventListener("mouseover", () => {
  hNav.classList.remove("h-navbar-pos");
  hNav.classList.add("h-navbar-slide");
  logoSize();
  // bottomLogo.classList.remove('logo-shrink');
  // bottomLogo.classList.add('logo-grow');
  // hNavLogo.classList.add("h-navbar-logo-grow");
});

hNav.addEventListener("mouseleave", () => {
  if (!searchbar.matches(":focus")) {
    setTimeout(() => {
      hNav.classList.add("h-navbar-pos");
      hNav.classList.remove("h-navbar-slide");
      logoSize();
      // bottomLogo.classList.add('logo-shrink')
      // bottomLogo.classList.remove('logo-grow')
      // hNavLogo.classList.remove("h-navbar-logo-grow");
    }, 1000);
  }
});



listTitle.forEach((title) => {
  title.addEventListener("mouseover", () => {
    const titleChild = title.firstElementChild;
    titleChild.classList.add("content-display");
    listContent.forEach((list) => {
      title.classList.add("orange-bg");
      list.addEventListener("mouseover", () => {
        list.classList.add("content-display");
      });
    });
  });
  title.addEventListener("mouseleave", () => {
    const titleChild = title.firstElementChild;
    titleChild.classList.remove("content-display");
    listContent.forEach((list) => {
      title.classList.remove("orange-bg");
      list.addEventListener("mouseleave", () => {
        list.classList.remove("content-display");
      });
    });
  });
});

searchbar.addEventListener("focus", () => {
  hNav.classList.add("h-navbar-slide");
  hNav.classList.remove("h-navbar-pos");
  logoSize();
});

searchbar.addEventListener("blur", () => {
  hNav.classList.remove("h-navbar-slide");
  hNav.classList.add("h-navbar-pos");
  logoSize();
});

// #endregion


// #region HEADER PARALLAX
document.body.onscroll = function headerParallax() {
  let scrolling = document.scrollingElement.scrollTop;
  let headerIMG = document.getElementById("header-img");
  let xPos = "70%";
  let factor = 0.3;
  let yPos = (scrolling - 1400) * factor;
  headerIMG.style.backgroundPosition = xPos + " " + yPos + "px";
};
// #endregion