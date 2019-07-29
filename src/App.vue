<template>
  <div id="app">
    <img src="./assets/fotoja-kolektivi.jpg" alt="Kolektivi i Shkollës" style="width:100%; display: none;">
    <Stafi />
  </div>
</template>

<script>
import Stafi from './components/Stafi.vue'
export default {
  name: 'app',
  components: {
    Stafi
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway');

* {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin:0;
    padding:0;
    border:0;
}

body {
    font-family: 'Raleway', sans-serif;
    background: url(./assets/fotoja-kolektivi.jpg) fixed center;
}

#app {
  background-color: rgba(250, 250, 250, 0.65);
}

.profa {
  background-color: transparent;
  width: 195px;
  height: 195px;
  border: 2px solid #ae323e;
  -webkit-perspective: 1000px;
  perspective: 1000px;
}

.foto-profa {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  -webkit-transition: transform 0.8s;
  transition: transform 0.8s;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.profa:hover .foto-profa {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.profa:hover .emri-para {
  bottom:0;
}

.foto-profa-para, .detajet {
  position: absolute;
  width: 100%;
  height: 100%;
  -ms-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.foto-profa-para {
  background-color: #bbb;
}

.emri-para {
  position: absolute;
  right: 15px;
  left: 15px;
  bottom: -12px;
  background-color: #ae323e;
  color: white;
  display: inline-block;
  padding: 5px;
  -ms-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.detajet {
  background-color: #ae323e;
  height: 193px !important;
  color: white;
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

#wrapper-box {
    max-width: 1200px;
    min-height: 100vh;
    margin: 20px auto;
    padding-bottom: 10px;
    padding-right: 12px;
    padding-left: 12px;
}

#profesoret, .kontakti {
    list-style: none;
}

#profesoret {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 35px 5px;
    position: relative;
    padding-top: 50px;
    padding-bottom:30px;
}

.foto-profa-para img {
    width: 100%;
}

.foto-profa-para h3.emri-para {
    font-size: 14px;
    font-weight: 200;
    letter-spacing: 0.5px;
}

.detajet {
    text-align: center;
}

.detajet h3 {
    font-size: 0.9em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.9px;
    padding-bottom: 0.3em;
    margin-top: 2em;
}

.detajet h4 {
    font-size: 0.7em;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    white-space: pre-line;
}

.kontakti {
    margin: 15px 0 10px;
}

.kontakti li {
  display: inline;
}

.detajet {
  display: -webkit-flex !important;
  display: flex !important;
  -webkit-justify-content: center !important;
  -ms-flex-pack: center !important;
  justify-content: center !important;
  -webkit-flex-direction: column !important;
  -ms-flex-direction: column !important;
  flex-direction: column !important;
  height: 193px;
  padding: 5px;
}

.profa {
    margin: 0 auto;
}

.kontakti li a {
  color: #fff;
  display: inline-block;
  font-size: 12px;
  line-height: 17px;
  width: 23px;
  height: 23px;
  padding: 3px;
  margin: 2px 4px;
  border: 1px solid #fff;
  border-radius: 50%;
  -webkit-transition: all ease-in-out 0.3s;
  transition: all ease-in-out 0.3s;
}

.kontakti li:hover a {
  color: #ae323e;
  background-color: #fff;
}

#kerkimi {
  text-align: center;
}
#kerkimi {
  z-index:2;
  width:100%;
  position: fixed;
  top:0;
  right: 0;
  left:0;
  margin:0;
  padding:8px 7px;
  z-index:3;
  background-color: #ae323e;
  box-shadow: 2px 2px 7px 0 rgba(0,0,0,.15);
}

#kerkimi input, #kerkimi select {
  border: 1px solid #fff;
  padding-left:7px;
  padding-right:7px;
  width: 300px;
  height: 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 15px;
}
#kerkimi select {
  background-color: #ae323e;
  color: white;
  margin-left: 5px;
  border: 1px solid #fff;
}


#kerkimi input:focus, #kerkimi select:focus {
  outline: 0;
  border: 1px solid #fff;
}
#kerkimi input::-webkit-input-placeholder {
  font-family: 'Raleway', sans-serif;
}


@media screen and (max-width: 1023px) {
  #profesoret {
      grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

@media screen and (max-width: 829px) {
  #profesoret {
      grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (max-width: 629px) {
  #profesoret {
      grid-template-columns: 1fr 1fr;
  }
  
  #kerkimi {
    height: 45px;
  }

  #kerkimi input {
    width:24% !important;
    position: absolute;
    left:0;
    font-size:14px !important;
    margin: 0;
  }
  #kerkimi select {
    width:74% !important;
    position: absolute;
    font-size:14px !important;
    right:0;
    margin: 0;
  }
}

@media screen and (max-width: 413px) {

  #profesoret {
      grid-template-columns: 1fr 1fr;
  }

  #wrapper-box {
      padding-right: 5px;
      padding-left: 5px;
  }

  .profa {
      width: 165px;
      height: 165px;
  }

  .detajet {
      height: 163px !important;
  }

  .emri-para {
    font-size:13px !important;
    padding: 3px;
    bottom: -11px;
    left:12px;
    right:12px;
  }

  #titulli {
      font-size: 24px;
  }
}

@media screen and (max-width: 344px) {
  .profa {
      width: 150px;
      height: 150px;
  }
  .detajet {
      height: 148px !important;
  }
  .emri-para {
    left:10px;
    right:10px;
  }
}

.fade-enter-active {
  -webkit-transition: transform 0.3s;
  transition: transform 0.3s;
  -webkit-transition-delay: 0.42s;
  transition-delay: 0.42s;
}

.fade-leave-active {
  -webkit-transition: transform 0.3s;
  transition: transform 0.3s;
}

.fade-enter, .fade-leave-to {
  -webkit-transform: rotateY(90deg);
  transform: rotateY(90deg);
}

/* HOVER EFEKTI */
li.email, li.telefon {
  position: relative;
  display: inline-block;
}

li.email span, li.telefon span {
  display: none;
  position: relative;
  font-family: Arial, sans-serif;
}

@media (min-width:768px) {
 
 li.email a, li.telefon a {
   cursor: default;
   pointer-events: none;
 }
 
 li.email:hover span, li.telefon:hover span {
     display: inline-block;
     background-color: #333;
     font-size: 16px;
     color: #fff;
     text-align: center;
     padding: 5px 10px;
     border-radius: 2px;
     letter-spacing:0.2px;
     
     position: fixed;
     z-index: 2;
     margin-top: 25px;
     margin-left: -120px;
 }
 
 li.telefon:hover a span {
   letter-spacing:0.5px;
   margin-left: -65px !important;
 }
 
 li.telefon:hover a span:before {
   content:'0';
 }

}
</style>
