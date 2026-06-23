function validateForm() {
  let ok = true;
  const fname = document.getElementById("fname");
  const email = document.getElementById("email");
  const pwd = document.getElementById("pwd");
  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  [fname, email, pwd].forEach((el) => el.classList.remove("error"));
  ["fname-err", "email-err", "pwd-err"].forEach((id) =>
    document.getElementById(id).classList.remove("show"),
  );

  if (!fname.value.trim()) {
    fname.classList.add("error");
    document.getElementById("fname-err").classList.add("show");
    ok = false;
  }
  if (!emailRx.test(email.value)) {
    email.classList.add("error");
    document.getElementById("email-err").classList.add("show");
    ok = false;
  }
  if (pwd.value.length < 8) {
    pwd.classList.add("error");
    document.getElementById("pwd-err").classList.add("show");
    ok = false;
  }
  if (ok) {
    const t = document.getElementById("toast");
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 3000);
  }
}

function resetForm() {
  document
    .querySelectorAll("input:not([type=range]), select, textarea")
    .forEach((el) => {
      if (el.type === "checkbox" || el.type === "radio") el.checked = false;
      else el.value = "";
    });
  document
    .querySelectorAll(".error")
    .forEach((el) => el.classList.remove("error"));
  document
    .querySelectorAll(".error-msg")
    .forEach((el) => el.classList.remove("show"));
  document.getElementById("char-out").textContent = "0/300";
  document.getElementById("bval").textContent = "₾1000";
  document.getElementById("budget").value = 1000;
  document.getElementById("file-text").textContent = "ფაილის არჩევა...";
}
