// Меню
export const initMenu = function () {
  const menuBtn = document.querySelector(".nav__toggle");
  const header = document.querySelector(".header");
  const headerNav = document.querySelector(".header__nav");
  const menuLink = document.querySelectorAll(".nav-menu__link--anchor");

  const onMenuOpened = () => {
    header.classList.add("header--open");
    document.body.classList.add("no-scroll");
  };

  const onMenuClosed = () => {
    header.classList.remove("header--open");
    document.body.classList.remove("no-scroll");
  };

  const onMenuEsc = (evt) => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      header.classList.remove("header--open");
      document.body.classList.remove("no-scroll");
    }
  };

  if (menuBtn) {
    menuBtn.addEventListener("click", (evt) => {
      evt.preventDefault();
      if (header.classList.contains("header--open")) {
        onMenuClosed();
        document.removeEventListener("keydown", onMenuEsc);
      } else {
        onMenuOpened();
        document.addEventListener("keydown", onMenuEsc);
      }
    });

    headerNav.addEventListener("click", (evt) => {
      evt.preventDefault();
      let target = evt.target;
      if (target === headerNav) {
        if (header.classList.contains("header--open")) {
          onMenuClosed();
        }
      }
    });
  }

  // Скролл к якорю

  if (menuLink) {
    for (const anchor of menuLink) {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const blockID = anchor.getAttribute("href");
        if (header.classList.contains("header--open")) {
          onMenuClosed();
        }
        document.querySelector(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }
};
