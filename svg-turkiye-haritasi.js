function svgturkiyeharitasi() {
  let resim = document.querySelector('#content');
  const element = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');

  element.addEventListener('mouseover', function (event) {
    if (event.target.tagName === 'path') {
      info.innerHTML = '<div>' + event.target.parentNode.getAttribute('data-iladi') + '</div>';
    }
  });

  element.addEventListener('mousemove', function (event) {
    info.style.top = event.pageY + 25 + 'px';
    info.style.left = event.pageX + 'px';
  });

  element.addEventListener('mouseout', function (event) {
    info.innerHTML = '';
  });

  element.addEventListener('click', function (event) {
    if (event.target.tagName === 'path') {
      const parent = event.target.parentNode;
      const id = parent.getAttribute('id');

      const line = document.getElementById('line');
      
      let currentWidth = 0;
      const targetWidth = 500; // Hedef genişlik
      const duration = 300; // Animasyon süresi (ms)
      const intervalTime = 10; // Her adımdaki zaman aralığı (ms)
      const increment = (targetWidth - currentWidth) / (duration / intervalTime); // Genişlik artış miktarı
      
      const interval = setInterval(function() {
          currentWidth += increment;
          line.style.width = currentWidth + 'px';
          
          if(currentWidth >= targetWidth) {
              clearInterval(interval);
          }
      }, intervalTime);
      if (id === 'van') {
        resim.classList.add("foto-animate")
        degistir("2011 Van Depremi","van.jpg",van,van_hasar);
        return
      }      
      if(id ==='erzincan')
      {
        resim.classList.add("foto-animate");
        degistir("1939 Erzincan Depremi","erzincan.jpg",erzincan,erzincan_hasar);
        return
      }
      if(id === "kocaeli"){
        resim.classList.add("foto-animate");
        degistir("1999 Kocaeli Depremi","kocaeli.jpg",kocaeli,kocaeli_hasar);
        return
      }
      if(id === "hatay" || id ==="kahramanmaraş" || id=== "elazığ" || id=== "adıyaman"){
        resim.classList.add("foto-animate");
        degistir("2023 6 Şubat Depremi","hatay.jpg",hatay,hatay_hasar);
        resim
      }
    }
  });
}









// HTML'de belirtilmiş olan 'line' ve 'navbar' elementlerini alıyoruz.
let isClicked = false;

document.addEventListener('mousedown', () => {
  isClicked = true;
  console.log('Fare tıklandı!');

  // setInterval kullanarak sürekli mesaj yazdırma işlemini gerçekleştiriyoruz
  const interval = setInterval(() => {
    if (isClicked) {
      console.log('Fare hala tıklı.');
    } else {
      clearInterval(interval); // Fare bırakıldığında setInterval'ı temizle
    }
  }, 1000); // Her saniye bir mesaj yazdırılacak (1000 milisaniye)
});

document.addEventListener('mouseup', () => {
  isClicked = false;
  console.log('Fare bırakıldı.');
});
document.addEventListener('mousemove', (event) => {
  // Eğer sürükleme durumu aktif ise 'line' elementinin genişliğini güncelliyoruz.
  if (isClicked) {
    updateLine(event.clientX);
  }
});
const border = document.getElementById('border');
const line = document.getElementById('line');
const navbar = document.getElementById('navbar');

function updateLine(clientX) {
  // 'navbar' elementinin boyutunu alıyoruz.
  const rect = navbar.getBoundingClientRect();
  // Fare konumunu 'navbar'ın sol kenarına göre ayarlıyoruz.
  const mouseX = clientX - rect.left;
  // Fare konumunu 'navbar'ın içine sığacak şekilde sınırlıyoruz.
  const clampedX = Math.max(0, Math.min(rect.width, mouseX));

  // 'line' elementinin genişliğini güncelliyoruz.
  line.style.width = clampedX + 'px';
  console.log(navbar.style.width)
}
function degistir(baslık,resim,eser,hasarbilgi){

  var resimElementi = document.getElementById('resim');
  resimElementi.src = resim; // Yeni resmin dosya adı ve yolunu belirtin 
  var pElementi = document.getElementById("baslık");
  pElementi.innerHTML = baslık; 
 
  document.getElementById("eser").innerText =eser
   document.getElementById('eser').innerHTML = eser.replace(/<br>/g, '<hr>');
  document.getElementById('hasarbilgi').innerText = hasarbilgi
}

const van_hasar = '7.2 Büyüklüğünde, 644 ölü, 17005 hasarlı bina'
const van = `
YURDUM SEVMEK MACERADIR
Maceradır
Ülkeme aşk mektubudur
Her yaban neylersin ki yavan
Edirne ötesi sabah kahvaltıda
Biz de onun çay altıdır esası
Ezine beyazı ve Gemlik siyahı
Olmadan olmaz
Bir de otlu peynir çıkarırsanız
Sizden tatlısı bulunmaz
Yurdum sevmek maceradır
Öyle güzeldir ki çünkü
Onu sevmek marifet bile sayılmaz
Ankara keskinin Bozkırında
Isırırken tenini
gecenin süt dişleri
Ya da deki "Eyvah", de ki "Havar"
Erciş'te, bir göçükte çocuk
İstihkakından karılmış
Bir beton muammasının altında
Herkesten "Orda kimse var mı?"
kadar uzakta
Misafir nefeslerle umut sayıklarken
Yurdum sevmek maceradır...
Ya da büyük kalpli isimsiz bir kurtarıcı
Bir serdengeçtinin kuvvetli eli,
sıkısından kavrayınca seni
Bir bebek gibi gülümseyince
kurtaranın yer yüzü

Yurdum sevmek maceradır...
Yaralarına deyince çok uzaktan
tanımadığın bir dostun merhemi
Göz pınarlarına taşınca memleket ve
merhamet kelimeleri
Yurdum sevmek maceradır..
Maceradır çünkü sevmek esasen
dilsiz Gönderenin adresi yok bu aşk
mektubu Bu darb-ı mesel
Bu cürmü masal
Sensiz olmaz, sensiz olmasın
Sensiz olacaksa, olmasın...`;

const erzincan_hasar = "7.9 Büyüklüğünde, 32968 ölü, 116720 hasarlı bina";
const erzincan = `Sam değmiş de bağlar dökmüş gazeli
Hanı harap olmuş Keşan Erzincan
Nice yiğitleri nice güzeli
Feleğin toruna düşen Erzincan

Kimi ana vermiş kimisi baba
Nice yavru vermiş gelmez hesaba
Felek kor insanı ne kaptan kaba
Tarihli felaket nişan Erzincan

Bahar gelir güller açmaz bağında
Kainat uykuda hep yatağında
Bir seher vaktinde uyku çağında
Feryadı dağlardan aşan Erzincan

Susmuş bülbülleri güller perişan
Garkolmuş toprağa kalmamış nişan
Kükredikçe dalgalara karışan
Hani Fırat ile coşan Erzincan

Dokuz kırk altıda uğradım gördüm
Veysel der içimden ağladım durdum
Bu ulu Tanrı'dan isteyin yardım
Gayret kuşağını kuşan Erzincan

Aşık Veysel Şatıroğlu
<hr>
Kara haber
Erzincan’da bir kuş var
Kanadında gümüş yok
Gitti yarim gelmedi
gayrı bunda bir iş yok.
Oy dağlar dağlar, dağlar, dağlar...
Aldı ellerine kanlı başını
Karın ortasında Erzincan ağlar...
O ağlamasında kimler ağlasın

Kar yağar lapa lapa
tipidir gelir geçer...
Yan yana sırt üstü yatan ölüler
akşam uyur tandıramaz
ateşini yandıramaz

Gün ağarır şafak söker
kimsecikler gitmez suya
ezilmiş başlarıyla ölüler
vardılar uyanılmaz uykuya

Ses edip geceye beyaz taşından
kışlanın saati çaldı ikiyi.
Ne çabuk lahzada bitti yaşamak
Kimisi altı aylık,
kimisi sakalı ak,
kimi on üç, on dört yaşında;
kimi yola gidecek
kimisi mektup bekler
yan yana sırt üstü yatan ölüler...

Yayıkta yağ vardı, dövülemedi,
akpeynir torbaya koyulamadı,
hasret gitti ölüler
dünyaya doyulamadı...

Uyanıp kaçamadılar,
kuş olup uçamadılar
açıldı kuyular kimse inemez
Erzincan Beygiri rahvandır amma
ölüler ata binemez
yan yana sırt üstü yatan ölüler...

Kesemden verecek şeyim yok; 
yüreğimden verdim.

Nazım Hikmet
`;

const kocaeli_hasar = "7.8 Büyüklüğünde, 17480 ölü, 73342 hasarlı bina";

const kocaeli = `
Yirmi birinci asra çok az bir zaman kala
Doksan dokuz yılının 17 AĞUSTOSU...
Hayâlimden silinmez dehşet tablosu hâlâ
GÖLCÜK ŞEHRİNDE deprem dumana kattı tozu...

Yaşanan deprem değil kıyamet koptu sanki
Pazar Pazartesiye bağlanırken o gece...
Yerin karnı yarıldı...Deniz yuttu inan ki
Şehir toz bulut oldu...Sıfır üç iki geçe...

Bu gözler onu gördü ve yaşadı bu beden
Gerçek KIYAMET GÜNÜ ne korkunçtur kim bilir?
İlâhî Takdirdir bu zengin - fakir demeden
Saniyeler içinde canlar gitti ne denir...

ALLAH'ım yaşanmamış felâketler yaşatma
Aczimize verdiğin akıl da kâr etmiyor...
Yüzlerimizi güldür,gözümüzü ağlatma
Ağlanacak çok şey var göz yaşımız yetmiyor...

Alper Kürük
`;

const hatay_hasar = `7.8 Büyüklüğünde, 50.783 ölü, 107.204 yaralı, 297 kayıp`;

const hatay = `
Adıyaman'da, Malatya'da, Diyarbakır'da
Taştan heykeller gibi bakıyoruz
Nemrut Dağı'ndan şimdi dünyaya,
Başımıza gelenin ne olduğunu
Tam anlayamadık da...

Pazarcık, Elbistan
Ve Samandağ'da,
Hani yalnız bereket yağardı
İskenderun Ovası'na?

Şiir başlıyorsa madem,
Sözün bittiği yerde,
Dilimize çevirmek
Eğer mümkünse.........

Bilmem belki de değildir.
Söz sanatlarından hiçbiri
Hatta hiçbir güzel şey
Bu ana eşlik etmek
İstemeyecektir.

Yılmaz Erdoğan
`