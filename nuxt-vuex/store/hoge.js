import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      message: "",
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
      oldBooks: [{
          title: "貧乏暇なし",
          price: 100,
          quantity: 1,
          author: "tanaka"
        },
        {
          title: "ホームレス中学生",
          price: 200,
          quantity: 1,
          author: "otsuka"
        },
        {
          title: "成り上がり中学生",
          price: 300,
          quantity: 1,
          author: "tanaka"
        }
      ]
    },
    getters: {
      /* computedのプロパティの役割 */
      totalBooks: state => state.books.length,
      cheapBooks: state =>
        state.books.filter(book => book.price <= 2000).length,
      targetAuthorBooks: state =>
        state.books.filter(book => book.author === "otsuka"),
      message: state => state.message
    },
    mutations: {

    },
    actions: {}
  });
};

// export default createStore
