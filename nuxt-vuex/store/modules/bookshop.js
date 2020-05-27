export const state = () => ({
  guest: 0,
  sales: 0,
  books: [{
      title: "ハリーポッター",
      price: 1000,
      quantity: 3,
      author: "tanaka"
    },
    {
      title: "ハレルヤ",
      price: 2000,
      quantity: 2,
      author: "otsuka"
    },
    {
      title: "カジカジ",
      price: 3000,
      quantity: 2,
      author: "tanaka"
    },
    {
      title: "初めてのJavascript",
      price: 2000,
      quantity: 3,
      author: "otsuka"
    },
    {
      title: "Effective Javascript",
      price: 2500,
      quantity: 3,
      author: "yamada"
    },
    {
      title: "RubyOnRailsの速習ガイド",
      price: 4000,
      quantity: 3,
      author: "otsuka"
    },
    {
      title: "関数型プログラミング",
      price: 3000,
      quantity: 3,
      author: "tanaka"
    },
    {
      title: "仕事ができる人は性格が悪い",
      price: 2000,
      quantity: 3,
      author: "yamada"
    },
    {
      title: "超自己中力",
      price: 1000,
      quantity: 3,
      author: "otsuka"
    },
    {
      title: "マーケティングの哲学",
      price: 5000,
      quantity: 3,
      author: "yamada"
    }
  ],
  noBookMessage: "検索しましたが見当たりませんでした",
  serchBooks: []
});

/* computedのプロパティの役割 */
export const getters = {
  books: state => state.books,
  serchBooks: state => state.serchBooks,
  noBookMessage: state => state.noBookMessage,
  totalBooks: state => state.books.length,
  cheapBooks: state => state.books.filter(book => book.price <= 2000).length,
  targetAuthorBooks: state => state.books.filter(book => book.author === "otsuka")
};

export const mutations = {
  serchForTitle(state, {value, cheackForm}) {
    state.serchBooks = [];
    const filterBooks = state.books.filter(book => {
      return cheackForm(state, book, value);
    });
    if (!filterBooks.length) {
      //何もないから配列の中身をリセットするぜ */
      state.serchBooks = [];
      // }
    }
  }
};