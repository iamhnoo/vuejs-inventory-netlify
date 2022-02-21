import { createStore } from "vuex";

export default createStore({
  // state คือพื้นที่สำหรับเก็บตัวแปร object หรือค่าต่างๆ ของแอพเราไว้
  state: {
    counter: 0,
    showSideMenu: true,
  },
  // ฟังก์ชันการทำงานบางอย่าง ที่ต้องการเปลี่ยนแปลงค่าใน state
  mutations: {
    // ฟังก์ชันเพิ่มค่าให้ counter
    increment(state) {
      state.counter++;
    },
    // ฟังก์ชันลบค่าให้ counter
    decrement(state) {
      state.counter--;
    },
    // ฟังก์ชันซ่อนแสดงเมนูด้านข้าง
    toggleSideMenu(state) {
      state.showSideMenu = !state.showSideMenu;
    }
  },
  actions: {},
  modules: {},
});
