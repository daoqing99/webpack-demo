// ES Moudule 模块引入方式
// webpack是一个模块打包工具

// import Header from "./header";
// import Sidebar from "./sidebar";
// import Content from "./content";
import img from "./ios.jpeg";
import "./index.scss";

var dom = document.getElementById("root");
console.log(img);
// new Header();
// new Content();
// new Sidebar();
var pic = new Image();
pic.src = img;
pic.classList.add("avatar");
dom.append(pic);