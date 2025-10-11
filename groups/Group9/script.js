function greet() {
  alert("Hello! You just clicked the button!");
}

function openSidebar(groupName) {
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("sidebar-content");
  sidebar.style.width = "1500px";

  const groupFile = `groups/${groupName.toLowerCase().replace(" ", "")}.html`;
  console.log("Fetching sidebar file:", groupFile); 
  fetch(groupFile)
    .then(response => response.text())
    .then(data => {
      content.innerHTML = data;
    })
    .catch(err => {
      content.innerHTML = `<h2>${groupName}</h2><p>Failed to load content.</p>`;
      console.error(err);
    });
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
}
