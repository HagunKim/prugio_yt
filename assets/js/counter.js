const remainDate = document.querySelector("#dday_counter");

function diffDay() {
    const newHouseDate = new Date("2025-03-31")
    const todayDate = new Date();
    const diff = newHouseDate - todayDate;
    const diffDay = Math.floor(diff / (1000*60*60*24));

    remainDate.innerText = `D-${diffDay}`;
}

diffDay();