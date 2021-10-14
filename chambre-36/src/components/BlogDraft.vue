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
            <p>Titre : Je dois vous parler</p>
            <p>Dernière édition aujourd'hui à 18h45</p>
          </div>
          <p>
              Alios autem dicere aiunt multo etiam inhumanius (quem locum breviter paulo ante perstrinxi) praesidii adiumentique causa, non benevolentiae neque caritatis, amicitias esse expetendas; itaque, ut quisque minimum firmitatis haberet minimumque virium, ita amicitias appetere maxime; ex eo fieri ut mulierculae magis amicitiarum praesidia quaerant quam viri et inopes quam opulenti et calamitosi quam ii qui putentur beati.<br>
            <br>
              Inter has ruinarum varietates a Nisibi quam tuebatur accitus Vrsicinus, cui nos obsecuturos iunxerat imperiale praeceptum, dispicere litis exitialis certamina cogebatur abnuens et reclamans, adulatorum oblatrantibus turmis, bellicosus sane milesque semper et militum ductor sed forensibus iurgiis longe discretus, qui metu sui discriminis anxius cum accusatores quaesitoresque subditivos sibi consociatos ex isdem foveis cerneret emergentes, quae clam palamve agitabantur, occultis Constantium litteris edocebat inplorans subsidia, quorum metu tumor notissimus Caesaris exhalaret.<br>
            <br>
              Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi. praediximus enim Montium sub ipso vivendi termino his vocabulis appellatos fabricarum culpasse tribunos ut adminicula futurae molitioni pollicitos.
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
    max-width: 80%;
    height: 350px;
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
    margin-bottom: 20px;
  }
  .browser section .first p {
    font-size: 18px;
  }
  .browser section .second {
    text-align: left;
    font-size: 13px;
    margin-bottom: 20px;
    color: #7C7C7C;
  }
  .browser section .third {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    font-size: 15px;
  }

  .browser section .third p:nth-child(2) {
    color: #7C7C7C;
  }

  .browser section p{
    text-align: left;
    font-size: 14px;
    margin-bottom: 50px;
  }

  .browser section .fourth {
    text-align: right;
    border-top: 1px solid #D4D4D4;
  }
  .browser section .fourth button {
    margin-top: 50px;
  }
</style>
