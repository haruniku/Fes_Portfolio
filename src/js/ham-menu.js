// ハンバーガーメニューの処理
const ham_menu_box = document.getElementsByClassName("hamburger-menu_box")[0];
const ham_menu_active = document.getElementById("hamburger-menu_list");
function ham_onClick(){
  // hamburger_menu_active.classList.toggle("hamburger-menu_hidden");
  ham_menu_active.classList.toggle("hamburger-menu_active");
}
ham_menu_box.addEventListener("click", ham_onClick, false);
ham_menu_active.addEventListener("click", ham_onClick, false);
