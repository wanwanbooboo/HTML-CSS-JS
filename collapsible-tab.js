const $coll = document.getElementsByClassName("collapsible");
let i = 0;
while(i < $coll.length) {
  $coll[i].addEventListener("click", function() {
    // collapsibleの兄弟要素であるcontentを取得している
    const $content = this.nextElementSibling;
    // classList.toggle("active")は目的のクラスにactiveがあれば消し、なければ付けるメソッド
    $content.classList.toggle("active");
  });
  i++;
}
