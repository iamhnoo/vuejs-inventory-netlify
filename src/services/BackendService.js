import axios from "axios";

// อ่าน token จาก localStorage
//let token = "";
//if (localStorage.getItem("user")) {
//  let userStorage = localStorage.getItem("user"); // get ได้ string json
//  let userStorageJSON = JSON.parse(userStorage); // แปลงเป็น Object Json
//  token = userStorageJSON["token"]; // ดึง value ของ userStorageJSON ที่ตำแหน่ง 'token'
//} else {
//  token = "";
//}

const BackendService = axios.create({
  // baseURL: "http://localhost:8000/api/",
  baseURL: process.env.VUE_APP_URL_API,
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data", // ใช้ในกรณีมีการส่งไฟล์ที่เป็น data ลักษณะ เป็นรูปภาพ ผ่าน API
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  },
});
/** การใช้งาน intterceptors เพื่อแทรกตัว token เข้าไปใน header
 * มีการทำงานคล้ายกับ whath คอยเฝ้าดูการเปลี่ยนแปลงบนหน้า web
 * */
BackendService.interceptors.request.use((configg) => {
  // อ่าน token จาก localStorage
  let token = "";

  try {
    let userStorage = localStorage.getItem("user");
    let userStorageObjJSON = JSON.parse(userStorage);
    token = userStorageObjJSON["token"];
  } catch (error) {
    console.log(error);
  }

  if (token) {
    configg.headers.Authorization = "Bearer " + token;
  }

  return configg;
});

export default BackendService;
