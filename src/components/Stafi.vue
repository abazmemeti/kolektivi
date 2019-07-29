<template>
    <div id="wrapper-box">
        <div id="kerkimi">
            <div style="position: relative">
            <input type="search" v-model="kerko" placeholder="Kërko ..."/>
            <select v-model="keshilli">
                <option value="">STAFI I PUNËS</option>
                <option value="Drejtoria">Drejtoria</option>
                <option value="Administrata">Administrata</option>
                <option value="Bashkëpunëtorë Profesional">Bashkëpunëtorët Profesional</option>
                <option value="Këshilli i Gjuhëtarëve">Këshilli i Gjuhëtarëve</option>
                <option value="Këshilli i Lëndëve Shoqërore">Këshilli i Lëndëve Shoqërore</option>
                <option value="Këshilli i Lëndëve Shkencore">Këshilli i Lëndëve Shkencore</option>
                <option value="Këshilli i Matematikës dhe Informatikës">Këshilli i Matematikës dhe Informatikës</option>
                <option value="Këshilli i Elektroteknikës">Këshilli i Elektroteknikës</option>
                <option value="Këshilli i Makinerisë">Këshilli i Makinerisë</option>
                <option value="Këshilli i Mjekësisë">Këshilli i Mjekësisë</option>
                <option value="Këshilli i Ekonomisë">Këshilli i Ekonomisë</option>
              </select>
            </div>
        </div>
        
        <transition-group name="fade" tag="ul" id="profesoret">
            <li class="profa" v-for="profa in filtrimi" v-bind:key="profa.id">
                <div class="foto-profa">
                    <div class="foto-profa-para">
                        <img :src="profa.fotoja" :alt="profa.emri">
                        <h3 class="emri-para">{{ profa.emri }}</h3>
                    </div>
                    <div class="detajet">
                        <h3 class="emri">{{ profa.emri }}</h3>
                        <h4 class="detyra">{{ profa.profesioni | textFilter }}</h4>
                        <ul class="kontakti">
                            <li v-if="profa.fb" class="facebook"><a :href="profa.fb"><i class="fa fa-facebook"></i></a></li>
                            <li v-if="profa.in" class="linkedin"><a :href="profa.in"><i class="fa fa-linkedin"></i></a></li>
                            <li v-if="profa.ins" class="instagram"><a :href="profa.ins"><i class="fa fa-instagram"></i></a></li>
                            <li v-if="profa.email" class="email"><a :href="'mailto:' + profa.email"><i class="fa fa-envelope"></i><span>{{profa.email}}</span></a></li>
                            <li v-if="profa.tel" class="telefon"><a :href="'tel:+381' + profa.tel"><i class="fa fa-phone"></i><span>{{profa.tel}}</span></a></li>
                        </ul>
                    </div>
                </div> 
            </li>
        </transition-group>
        <div style="position: fixed; left:0; right:0; bottom: 0; background-color: #ae323e;"><p style="text-align: center; color: white; font-size: 0.7em; padding: 5px 0;">Developed by: <a style="color: white" target="_blank" href="http://abazmemeti.co.nf">Abaz Memeti</a></p></div>
    </div>
</template>

<script>
import stafi from '@/stafi.json'
export default {
  name: 'Stafi',
  data() {
      return {
      emri: '',
      kerko: '',
      keshilli: '',
      stafi
    }
  },
  computed:{
    filtrimi() {
      return sipasTekstit(sipasKeshillit(this.stafi, this.keshilli), this.kerko)
    }
  }
}
function sipasTekstit(stafi, kerko) {
  const kerkim = kerko.trim()
  if (!kerkim.length) return stafi
    return stafi.filter(item => item.emri.toLowerCase().indexOf(kerkim.toLowerCase()) > -1)
}

function sipasKeshillit(stafi, keshilli) {
  if (!keshilli) return stafi
    return stafi.filter(item => item.keshilli === keshilli)
}
</script>

<style scoped>
    
</style>