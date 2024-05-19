import data from "./data.json" assert { type: "json" };

const scoresList = document.querySelector(".score-list"); // selecting the score-list element

let scoreHtml = "";

data.forEach((scoreData) => {
  scoreHtml += `
        <div class="skills ${scoreData.category.toLowerCase()}">
            <div>    
                <img
                    src="${scoreData.icon}"
                    alt="logo-${scoreData.category.toLowerCase()}"
                />
            </div>
            <span class="score-category">${scoreData.category}</span>
            <span class="score-result">${scoreData.score} <em>/ 100</em></span>
        </div>
    `;
});

scoresList.innerHTML = scoreHtml;
