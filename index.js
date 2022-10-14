const span = document.getElementById("span");

//onClick
// function present(event, no) {
//   let result = document.querySelector(`.result${no}`);
//   result.innerText = event.target.value;
//   if (event.target.value === "출석") {
//     span.innerText = `${Number(span.innerText) + 1}`;
//     result.style.color = "green";
//   } else if (event.target.value === "지각") {
//     result.style.color = "black";
//   } else if (event.target.value === "결석") {
//     result.style.color = "red";
//   }
// }

// addel
for (let i = 0; i < 27; i++) {
  let inputs = document.querySelectorAll(`input[name="student${i + 1}"]`);
  // console.log(inputs);
  // console.log(inputs.length);
  // console.log(inputs[0]);
  // console.log(inputs[1]);
  // console.log(inputs[2]);

  for (let j = 0; j < inputs.length; j++) {
    let input = inputs[j];
    input.addEventListener("click", function () {
      let result = document.querySelector(`.result${i + 1}`);
      result.innerText = input.value;
      if (inputs[0].checked === true) {
        span.innerText = `${Number(span.innerText) + 1}`;
        result.style.color = "green";
      } else if (inputs[1].checked === true) {
        result.style.color = "black";
        const list = $(`.result${i + 1}`).attr("value");
        $(".list").append(`<li>${list}</li>`);
        //클릭시 요소 삭제 하기
        $("li").click(function () {
          $(this).remove();
        });
      } else if (inputs[2].checked === true) {
        result.style.color = "red";
        const list2 = $(`.result${i + 1}`).attr("value");
        $(".list2").append(`<li>${list2}</li>`);
        //클릭시 요소 삭제 하기
        $("li").click(function () {
          $(this).remove();
        });
      }
    });
  }
}
//날짜

const date = document.querySelector(".date");

function getTime() {
  let now = new Date();
  let year = now.getFullYear();
  let month = ("0" + (now.getMonth() + 1)).slice(-2);
  let day = ("0" + now.getDate()).slice(-2);
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconde = now.getSeconds();

  let today = `${year}년 ${month}월 ${day}일 ${hour}시 ${minutes}분 ${seconde}초`;

  date.innerText = today;
}

function init() {
  setInterval(getTime, 1000);
}

init();

function btn() {
  const ul = document.querySelector("ul");
}

// console.log($(".result1").attr("value"));
