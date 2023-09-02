const allCategory = async () => {
    const response = await fetch(
        " https://openapi.programming-hero.com/api/videos/categories"
    );
    const data = await response.json();

   
    const tabContainer = document.getElementById("tab-container")
    data.data.forEach((category) => {
        const div = document.createElement("div");
        div.innerHTML = `
       <button onclick="handleLoadVideos('${category.category_id}')" class="btn px-5 focus:bg-red-600 focus:text-white normal-case">${category.category}</button>
       `;


        tabContainer.appendChild(div);

    });

};

const handleLoadVideos = async (categoryId) => {

    const response = await fetch(`
    https://openapi.programming-hero.com/api/videos/category/${categoryId}`
    );
    const data = await response.json();
   
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
            <p>${videoData?.authors[0].profile_name} <span>  </span> ${videoData?.authors[0].verified?`${videoData?.authors[0].verified}<i class="fa-solid fa-circle-check text-blue-600"></i>`:''} </p>
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


