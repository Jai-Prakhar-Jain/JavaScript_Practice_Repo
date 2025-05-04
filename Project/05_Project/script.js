const insert = document.querySelector("#insert");
const messageNode = document.querySelector(".key");
const message = messageNode.innerText;

document.addEventListener("keypress", (event) => {
  insert.innerHTML = `
  <div>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
  </tr>
  <tr>
    <td>${event.key}</td>
    <td>${event.code}</td>
  </tr>
</table>
  </div>`;
});
