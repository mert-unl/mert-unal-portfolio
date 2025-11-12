import React from 'react'
import { ContactHero } from '../Components/Contact';

function Profile() {
  return (
    <div className="flex flex-col gap-10 py-5 md:gap-20 mb-20 ">

      <img
        className="w-full h-52 md:h-170 rounded-xl border border-green-900/30 object-cover 
        shadow-green-700"
        alt="Mert Ünal"
        src="https://picsum.photos/id/1045/3200/3200"
    
      />

      <div
        className="flex flex-col gap-6 text-center  bg-gray-900/30 backdrop-blur-sm
        text-green-50 text-sm md:text-lg leading-relaxed
        rounded-2xl p-6 md:py-10 md:px-18  shadow-green-700 border border-green-500/20"
      >

        <h2
          className="text-4xl md:text-7xl font-bold text-green-100 drop-shadow-green-400
          tracking-tight"
        >
          Hakkımda
        </h2>

        <p>Merhaba, ben Mert. Frontend, backend ve mobil geliştirme ile ilgileniyorum. 
        İnşaat mühendisi olarak bir süre çalıştıktan sonra vizyonuma uygun olmadığını fark ederek 
        yazılım odaklı ilerlemeye karar verdim. Girişim fikrimi hayata geçirmek için mobil geliştirmeye başladım.</p>

        <p>Kotlin ile uygulamalar geliştirdim. Girişim sürecim beklediğim gibi ilerlemese de 3 farklı mobil uygulama 
        geliştirerek pratiğimi güçlendirdim.</p>

        <p>Tek başıma öğrenmenin sınırlarını görünce bir Full-Stack bootcamp programına katıldım. 
        Önceki teknik temelim sayesinde öğrenme hızımı kısa sürede ciddi ölçüde artırdım.</p>

        <p>Eğitim sürecinde frontend alanında başarılı olduğum için programın eğitmenlerinden biri, 
        beni part-time frontend mentorü olarak ekibe dahil etti. Böylece yeni başlayan yazılımcılara 
        bilgi ve deneyim aktarmaya başladım.</p>

        <p>Bootcamp sonrasında Insider tarafından 300 kişi içinden seçilen 50 geliştiriciden biri oldum, 
        ardından 10 kişilik staj grubuna kabul edilme başarısı gösterdim.</p>

        <p>1 aylık staj sürecinin ardından üretmeye ve gelişmeye devam ediyorum. 
        Bu site, teknik yetkinliğimi ve üretim yaklaşımımı yansıtmak için geliştirdiğim projelerden biri.</p>

        <p className="font-semibold text-green-200 mt-6 md:text-xl drop-shadow-md">Sanatla ve inovasyonla kalın.</p>
    
          <div className='flex flex-row justify-between gap-5 md:gap-24 md:mt-12'>
           <ContactHero logo=" src/assets/linkedIn.png" name="LinkedIn" link="https://www.linkedin.com/in/mert-%C3%BCnal/" />
                <ContactHero logo=" src/assets/gitHub.png" name="GitHub" link="https://github.com/mert-unl" />
           <ContactHero logo=" src/assets/gmail.png" name="Gmail"  link="mailto:mertunal1998@gmail.com?subject=İş%20Fırsatı&body=Merhaba%20Mert,"/>


          </div>
        
      </div>
    </div>
  );
}

export default Profile;

