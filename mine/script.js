const input = document.getElementById("input");
const btn = document.getElementById("check");
const holder = document.getElementById("holder");
function knowForPalindrome() {
  const getPalindrome = input.value;
  if (getPalindrome === "") {
      holder.classList.add("error");
      holder.innerHTML = "<p> Input can't be empty </p>";
  } else {
    const text = getPalindrome.replace(/[^a-zA-Z0-9]/g, "");
    const isPalindrome = text === text.split("").reverse().join("");
    holder.classList.remove("result-side", "error");
    if (isPalindrome) {
      holder.classList.add("result-side");
      holder.innerHTML = `<p> Yes it is a Palindrome</p> `;
    } else {
      holder.classList.add("error");
      holder.innerHTML = ` <p> no it is not a Palindrome</p>`;
    }
    setTimeout(() => {
      holder.classList.remove("result-side", "error");
      holder.classList.add(isPalindrome ? "result-side" : "error");
    }, 10);
  }
}
btn.addEventListener("click", knowForPalindrome);
