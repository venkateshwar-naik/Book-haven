const form = document.querySelector(".form");
const input1 = document.querySelector("#book");
const input2 = document.querySelector("#Author");
const input3 = document.querySelector("#price");
const tasks = document.querySelector(".tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputvalue1 = input1.value;
  const inputvalue2 = input2.value;
  const inputvalue3 = input3.value;

  const userdata1 = input1.value;
  const userdata2 = input2.value;
  const userdata3 = input3.value;

  if (inputvalue1 == "") {
    e.preventDefault();
    alert("please provide  name of the book");
    input1.focus();
    return;
  }
  if (inputvalue2 == "") {
    e.preventDefault();
    alert("please provide  name of the author");
    input2.focus();
    return;
  }
  if (inputvalue3 == "") {
    e.preventDefault();
    alert("please provide  price of the book");
    input3.focus();
    return;
  }

  const task1 = document.createElement("div");
  task1.classList.add("task1");

  const task2 = document.createElement("div");
  task2.classList.add("task2");

  const task3 = document.createElement("div");
  task3.classList.add("task3");

  const content1 = document.createElement("div");
  content1.classList.add("content1");
  const head1=document.createElement('h3')
  head1.innerHTML="name of the book"
  content1.appendChild(head1)

  const content2 = document.createElement("div");
  content2.classList.add("content2");
  const head2=document.createElement('h3')
  head2.innerHTML="author of the book"
  content2.appendChild(head2)


  const content3 = document.createElement("div");
  content3.classList.add("content3");
  const head3=document.createElement('h3')
  head3.innerHTML="price of the book"
  content3.appendChild(head3)


  const taskinp1 = document.createElement("input");
  taskinp1.classList.add("text");
  taskinp1.classList.add("form-control");
  taskinp1.classList.add("my-3");
  taskinp1.value = userdata1;
  taskinp1.setAttribute("readonly", "readonly");
  taskinp1.type = "text";

  const taskinp2 = document.createElement("input");
  taskinp2.classList.add("text");
  taskinp2.classList.add("form-control");
  taskinp2.classList.add("my-3");
  taskinp2.value = userdata2;
  taskinp2.setAttribute("readonly", "readonly");
  taskinp2.type = "text";

  const taskinp3 = document.createElement("input");
  taskinp3.classList.add("text");
  taskinp3.classList.add("form-control");
  taskinp3.classList.add("my-3");
  taskinp3.value = userdata3;
  taskinp3.setAttribute("readonly", "readonly");
  taskinp3.type = "text";

  content1.appendChild(taskinp1);
  content2.appendChild(taskinp2);
  content3.appendChild(taskinp3);

  task1.appendChild(content1);
  task2.appendChild(content2);
  task3.appendChild(content3);

  tasks.appendChild(task1);
  tasks.appendChild(task2);
  tasks.appendChild(task3);

  const actions1 = document.createElement("div");
  const actions2 = document.createElement("div");
  const actions3 = document.createElement("div");

  actions1.classList.add("actions1");
  actions2.classList.add("actions2");
  actions3.classList.add("actions3");

  const edit = document.createElement("button");
  edit.classList.add("edit");
  edit.classList.add("btn");
  edit.classList.add("btn-warning");
  edit.innerHTML = "edit";

  // edit1.addEventListener("click", () => {
  //   taskinp1.removeAttribute("readonly", "readonly");
  //   edit1.innerHTML = "save";
  //   taskinp1.focus();
  // });
  // delet1.addEventListener("click", () => {
  //   tasks.removeChild(task1);
  // });

  // const edit2 = document.createElement("button");
  // edit2.classList.add("edit2");
  // edit2.classList.add("btn");
  // edit2.classList.add("btn-warning");
  // edit2.innerHTML = "edit";

  // const edit3 = document.createElement("button");
  // edit3.classList.add("edit3");
  // edit3.classList.add("btn");
  // edit3.classList.add("btn-warning");
  // edit3.innerHTML = "edit";

  const delet = document.createElement("button");
  delet.classList.add("delet");
  delet.classList.add("btn");
  delet.classList.add("btn-danger");
  delet.innerHTML = "delete";

  // const delet2 = document.createElement("button");
  // delet2.classList.add("delet2");
  // delet2.classList.add("btn");
  // delet2.classList.add("btn-danger");
  // delet2.innerHTML = "delete";

  // const delet3 = document.createElement("button");
  // delet3.classList.add("delet3");
  // delet3.classList.add("btn");
  // delet3.classList.add("btn-danger");
  // delet3.innerHTML = "delete";

  actions1.appendChild(edit);
  actions1.appendChild(delet);
  
  

  actions2.appendChild(edit);
  actions2.appendChild(delet);

  actions3.appendChild(edit);
  actions3.appendChild(delet);

  tasks.appendChild(actions1);
  tasks.appendChild(actions2);
  tasks.appendChild(actions3);

  input1.value = "";
  input2.value = "";
  input3.value = "";

  // ...........

  edit.addEventListener("click", () => {
    taskinp1.removeAttribute("readonly", "readonly");
    edit.innerHTML = "save";
    taskinp1.focus();
  });

  edit.addEventListener("click", () => {
    taskinp2.removeAttribute("readonly", "readonly");
    edit.innerHTML = "save";
    taskinp2.focus();
  });

  edit.addEventListener("click", () => {
    taskinp3.removeAttribute("readonly", "readonly");
    edit.innerHTML = "save";
    taskinp3.focus();
  });

  delet.addEventListener("click", () => {
    tasks.removeChild(task1);
  });
  delet.addEventListener("click", () => {
    tasks.removeChild(task2);
  });
  delet.addEventListener("click", () => {
    tasks.removeChild(task3);
  });




});
