# Монгол Шатрын Сургууль — polished starter v2

Энэ төсөл нь HTML, CSS, JavaScript ашиглан бүтээгдсэн frontend starter юм. Дүрэм/систем нь дараах байдлаар ажиллана:

- index.html — нүүр хуудас
- course.html — курс дэлгэрэнгүй
- dashboard.html — суралцагчийн dashboard
- login.html — нэвтрэх/бүртгүүлэх UI
- admin.html — админ mock panel
- css/styles.css — бүх сайтын стиль
- js/scripts.js — FAQ, modal, mock login/signup, localStorage demo
- assets/logo.svg, assets/qr.svg — лого, QR жишээ

Ажлын чанар:
- Сайтын нүүр, курс, dashboard, login/signup, payment modal бүгд frontend дээр ажилладаг.
- Бүртгэл, нэвтрэх болон төлбөрийн баталгаажуулалт localStorage demo байдлаар хийгдсэн.
- Бодит backend integration шаардлагатай талуудыг UI-ээр ялган харуулсан.

Backend шаардлагатай хэсгүүд:
- User authentication (email/password/session)
- Admin authorization
- Payment verification (QR/Bank manual payment confirmation)
- Database for students, course enrollments, payments
- Email approval pipeline

Хэрхэн GitHub дээр үүсгэх:
1. Репозиторт очно: https://github.com/unuboldnandinzul0116-a11y/Mongolian-Chess-school-
2. branch `polished-v2`-ыг ашиглана. Хэрэв шинэ branch ашиглахгүй бол default branch дээр push хийж болно.
3. Add file -> Create new file товшино.
4. index.html, course.html, dashboard.html, login.html, admin.html, css/styles.css, js/scripts.js, assets/logo.svg, assets/qr.svg файлуудыг үүсгэнэ.
5. Commit дараад push хийнэ.

Локал дээр ажиллуулах:
- VS Code дээр проект нээж, http server ажиллуулах:
  python -m http.server 8000
- Дараа нь browser-ээр:
  http://localhost:8000/index.html

Төлбөрийн хэлбэр:
- Bank transfer / QR manual flow нарын UI байна.
- Баримт баталгаажуулах, автомат статусын шинэчлэлт backend-д хийгдэнэ.

Хэрэв та хүсвэл дараагийн алхамд би:
- real login/signup backend (Node.js/Express or Django)
- admin dashboard API
- payment confirmation flow
- MongoDB/PostgreSQL схем
- production deploy setup
-ийг төлөвлөж, код бичиж болно.
