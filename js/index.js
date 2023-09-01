const allCategory = async () => {
    const response = await fetch(
        " https://openapi.programming-hero.com/api/videos/categories"
    );
    const data = await response.json();

    // const allData=data.data;
    // console.log(allData);
    const tabContainer = document.getElementById("tab-container")
    data.data.forEach((category) => {
        const div = document.createElement("div");
        div.innerHTML = `
       <button class="btn px-5 normal-case">${category.category}</button>
       `;
        // if (category.index === 0) {
        //     div.classList.add("active");
        // }
        tabContainer.appendChild(div);
    });
};
allCategory();