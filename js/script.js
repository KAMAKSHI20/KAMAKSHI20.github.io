/* =========== Typing animation ================ */
var typed = new Typed(".typing",{
    strings:[""," Web Designer"," Web Developer"," Graphic Designer"," YouTuber"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
/* =========== Aside ================ */
const nav = document.querySelector(".nav"),
      navList = nav.querySelector("li"),
      totalNavList = navList.length;
      for(let i=0; i<totalNavList; i++)
      {
           const a = navList[i].querySelector("a");
           a.addEventListener("click", function()
           {
                  for(let j=0; j<totalNavList; j++)
                  {
                        navList.querySelector("a").classList.remove("active");
                  }
                  this.classList.add("active")
                  showSection(this);
           })
      }
      function showSection(element)
      {
            const target = element.getAttribute("href").split("#")[1];
            document.querySelector("#" + target).classList.add("active")
      }
