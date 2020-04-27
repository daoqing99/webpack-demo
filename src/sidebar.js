function Sidebar() {
  var dom = document.getElementById("root");
  var sidebar = document.createElement('div')
  sidebar.innerHTML = 'sidebar'
  dom.append(sidebar)
}
export default Sidebar;