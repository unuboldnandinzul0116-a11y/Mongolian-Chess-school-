# Монгол Шатрын Сургууль — Starter сайт

Энэ репозиторт эхний статик вэб хувилбар нэмэгдсэн.

Агуулга:
- index.html — Нүүр хуудас (HTML)
- css/styles.css — Загвар (CSS)
- js/scripts.js — Клиент талын интерактив (JavaScript)
- assets/logo.svg, assets/qr.svg — Лого, QR жишээ

Ямар зүйл ажиллана (дараалсан):
- Сайтын нүүр хуудас, курсын жагсаалт, демо самбар (клиент тал дээр визуал)
- Бүртгэлийн маягт — локалд хадгална (localStorage) зөвхөн демо зориулалттай
- QR болон банк шилжүүлгийн мэдээллийг харуулах модал

Ямар зүйл шаардлагатай backend (ажиллагдаагүй):
- Бүртгэлүүдийг сервер дээр хадгалах, имэйл илгээх
- Төлбөрийн баталгаажуулалт (QR/банк шалгах) — автомат шалгалт, захиалга/статус
- Хэрэглэгчийн нэвтрэлтийн систем (signup/login/session)

Хэрхэн GitHub дээр файлуудыг гаргах (вебээр):
1. Репозиторт орно: https://github.com/unuboldnandinzul0116-a11y/Mongolian-Chess-school-
2. "Add file" -> "Create new file" дээр дар
3. Файлын нэрийг оруул (жишээ: `index.html`) ба дээрх кодыг копи-пэйст хийнэ
4. Доор commit мессеж бичиж "Commit new file" дар
5. "Add file" давтан хийгээд `css/styles.css`, `js/scripts.js`, `assets/logo.svg`, `assets/qr.svg`, `README.md` файлуудыг нэмнэ

Хэрхэн Git ашиглан (локал ба команд):
1. GitHub репог clone хийнэ:
   git clone https://github.com/unuboldnandinzul0116-a11y/Mongolian-Chess-school-.git
2. Репо руу ор:
   cd Mongolian-Chess-school-
3. Шинэ файлуудыг үүсгэж нэмнэ (жишээ дээрх файлуудыг local-д үүсгэнэ)
4. Git-д нэмээд commit хийнэ:
   git add .
   git commit -m "Initial static site: homepage, styles, scripts, assets"
   git push origin main

Дараагийн алхмууд (зөвлөмж):
- Backend (Node/Express, Django, Rails) ашиглан бүртгэл/нэвтрэх болон төлбөр баталгаажуулах талийг хийх
- Төлбөр: QR скан хийхэд төлбөрийг баталгаажуулах webhook эсвэл администраторт шүүлт хийх процесс хэрэгтэй
- Хэрэглэгчийн нууцлал, GDPR/MN датаны хамгаалалын бодлого хэрэглэх

Хэрэв та хүсвэл би эдгээр файлуудыг тус репозиторид шууд байршуулж, commit хийнэ.
