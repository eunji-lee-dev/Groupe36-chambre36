<template>
   <div>
      <Taskbar />
      <div class="browser">
        <BrowserInterface />
        <section>
          <div class="first">
            <p>Bonjour, Chloé</p>
            <div id="btns">
              <button>Voir Tous les articles</button>
              <button>Créer un article</button>
            </div>
          </div>
          <div class="second">
            <p>Vous avez 1 message en brouillon :</p>
          </div>
          <div class="third">
            <p>Titre : Un dernier mot</p>
            <p>Dernière édition aujourd'hui à 18h45</p>
          </div>
          <p>
              Pour ceux habitués à vivre depuis toujours à l'ombre de leur mélancolie, la pandémie n'a rien changé à leur vie.
              <br><br>
              Voilà maintenant 2 mois que nous sommes tous confinés, 2 mois que je n'ai plus l'inspiration pour mes dessins.
              J'hésite réellement à fermer ce blog. De toutes manières je n'ai jamais vraiment aimé mes dessins. Peut-être que ce n'est pas pour moi après tout...
              Je n'ai rien d'autre, aucun talent, rien d'incroyable. Je ne suis qu'une fille complètement paumée qui ne vaut rien.
              <br><br>
              Soyez rassurés, je ne vous dérangerai plus à présent.
              <br>
              Ceci est mon dernier post.
          </p>
          <div class="fourth" id="btns">
            <button>Publier</button>
            <button>Supprimer</button>
          </div>
        </section>
      </div>
      <Toolbar />
   </div>
</template>


<script>
import Taskbar from "@/components/global/Taskbar";
import Toolbar from "@/components/Toolbar";
import BrowserInterface from "@/components/global/BrowserInterface";
export default {
  name: "BlogDraft",
  components: {Toolbar, Taskbar, BrowserInterface}
}
</script>

<style>
  #btns button {
    height: 20px;
    margin-right: 15px;
    width: 150px;
    height: 35px;
    border-radius: 5px;
    border: none;
    background-color: #435462;
    color: #fff;
    cursor: pointer;
  }
  .browser {
    width: 80%;
    height: 500px;
    background-image: url("../assets/imgs/bg1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 7px;
    border: 1px solid rgba(255,255,255,0.2);
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
  .browser section {
    max-width: 60%;
    height: 79%;
    margin: 20px auto;
    padding: 40px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: auto;
  }
  .browser section .first {
    display: flex;
    justify-content: space-between;
  }
  .browser section .first p {
    font-size: 18px;
  }
  .browser section .second {
    text-align: left;
    font-size: 13px;
    color: #7C7C7C;
  }
  .browser section .third {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
  }

  .browser section .third p:nth-child(2) {
    color: #7C7C7C;
  }

  .browser section p{
    text-align: left;
    font-size: 14px;
    margin-bottom: 30px;
  }

  .browser section .fourth {
    text-align: right;
    border-top: 1px solid #D4D4D4;
  }
  .browser section .fourth button {
    margin-top: 50px;
  }
</style>
