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
       <button onclick="handleLoadVideos('${category.category_id}')" class="btn px-5 normal-case">${category.category}</button>
       `;
        div.addEventListener("click", () => {
            const allButtons = tabContainer.querySelectorAll("div");
            allButtons.forEach((btn) => {
                // btn.classList.remove("active");
                div.classList.add("active");
            });
            // div.classList.add("active");

        });

        tabContainer.appendChild(div);

    });
    const allButton = tabContainer.querySelector("div button");
    if (allButton) {
        allButton.classList.add("active");
    }
};

const handleLoadVideos = async (categoryId) => {

    const response = await fetch(`
    https://openapi.programming-hero.com/api/videos/category/${categoryId}`
    );
    const data = await response.json();
    // console.log(data.data);
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = " ";

    data.data?.forEach((videoData) => {
        console.log(videoData);
        const div = document.createElement("div");
        div.innerHTML = ` 

       
<div class="card h-96 bg-base-100 shadow-xl">
     <div class=""><figure ><img  src=${videoData?.thumbnail} alt="Shoes" class="h-52 w-full relative" /> </figure>
     <div class="absolute bg-[#171717] text-[#FFF] text-xs bottom-[50%] right-2 "> ${videoData?.others.posted_date ? `<div> ${videoData?.others.posted_date}</div>` : ' '} </div> 
     </div>
      <div class="card-body">
       <div class="flex justify gap-4">
          <div class="">
   
          <img class="rounded-full w-10 h-10" src=${videoData?.authors[0].profile_picture}>
         </div>
         <div>
            <h4 class="card-title">${videoData?.title}</h4>
            <p>${videoData?.authors[0].profile_name}</p>
            <h6>${videoData?.others.views} views</h6>


        </div>
        </div>


    </div>
</div>


`;
        cardContainer.appendChild(div);
    });
    const tabContainer = document.getElementById("tab-container");
    const allButtons = tabContainer.querySelectorAll("div");
    allButtons.forEach((btn) => {
        btn.classList.remove("active");
    });
    const activeButton = tabContainer.querySelector(`div button[data-category-id="${categoryId}"]`);
    if (activeButton) {
        activeButton.classList.add("active")
    }

};



handleLoadVideos();
allCategory();


