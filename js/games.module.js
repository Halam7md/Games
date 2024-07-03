import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Games {
   constructor() {
      this.getGames("mmorpg");

      document.querySelectorAll(".navbar-nav a").forEach((link) => {
         link.addEventListener("click", (e) => {
            document.querySelector(".navbar-nav .active").classList.remove("active");
            e.target.classList.add("active");
            this.getGames(e.target.dataset.category);
         });
      });

      this.ui = new Ui();
   }

   async getGames(category) {
      const loading = document.querySelector(".loading");
      loading.classList.remove("d-none");
      const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key": "4f5698c515msh3383eb5ba1a7e33p1f6ef9jsn8f6624ec55f6",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            Accept: "application/json",
            "Content-Type": "application/json",
         },
      };

      const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
      const response = await api.json();
      
      this.ui.displayDataGame(response);
      this.startEvent();
      loading.classList.add("d-none");
   }

   startEvent() {
      document.querySelectorAll(".card").forEach((item) => {
         item.addEventListener("click", () => {
            const id = item.dataset.id;
            this.showDetails(id);
         });
      });
   }

   showDetails(idGame) {
      const details = new Details(idGame);
      document.querySelector("#Games").classList.add("d-none");
      document.querySelector("#Details").classList.remove("d-none");
   }

   
}


