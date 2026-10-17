document.addEventListener('DOMContentLoaded', () => {
  const yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const button = item.querySelector('.faq-question');
    if (!button) return;
    button.addEventListener('click', () => {
      faqItems.forEach((other) => {
        if (other !== item) other.classList.remove('open');
      });
      item.classList.toggle('open');
    });
  });

  const modalTriggers = document.querySelectorAll('[data-open-modal]');
  const modal = document.getElementById('payment-modal');
  const modalClose = document.querySelector('.modal-close');

  if (modal) {
    const openModal = () => modal.classList.add('open');
    const closeModal = () => modal.classList.remove('open');

    modalTriggers.forEach((trigger) => {
      trigger.addEventListener('click', openModal);
    });

    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeModal();
    });
  }

  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const tabName = button.dataset.tab;
      tabButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
      tabPanels.forEach((panel) => panel.classList.toggle('active', panel.id === tabName));
    });
  });

  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  const getUsers = () => JSON.parse(localStorage.getItem('mch_users') || '[]');
  const setCurrentUser = (user) => localStorage.setItem('mch_current_user', JSON.stringify(user));

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(loginForm);
      const email = String(formData.get('email') || '').trim();
      const password = String(formData.get('password') || '').trim();
      const users = getUsers();
      const match = users.find((u) => u.email === email && u.password === password);

      if (!match) {
        alert('Имэйл эсвэл нууц үг буруу байна. Бүртгэл үүсгээд дахин оролдоно уу.');
        return;
      }

      setCurrentUser({ name: match.name, email: match.email });
      window.location.href = 'dashboard.html';
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(signupForm);
      const user = {
        name: String(formData.get('name') || '').trim(),
        email: String(formData.get('email') || '').trim(),
        password: String(formData.get('password') || '').trim(),
        age: String(formData.get('age') || '').trim(),
      };

      if (!user.name || !user.email || !user.password || !user.age) {
        alert('Бүх мэдээллийг бөглөнө үү.');
        return;
      }

      const users = getUsers();
      const exists = users.some((u) => u.email === user.email);
      if (exists) {
        alert('Энэ имэйлтэй бүртгэл аль хэдийн бүртгэгдсэн байна.');
        return;
      }

      users.push(user);
      localStorage.setItem('mch_users', JSON.stringify(users));
      setCurrentUser({ name: user.name, email: user.email });
      alert('Бүртгэл амжилттай үүслээ. Дашрамд dashboard руу шилжүүлж байна.');
      window.location.href = 'dashboard.html';
    });
  }

  const currentUser = JSON.parse(localStorage.getItem('mch_current_user') || 'null');
  const studentName = document.getElementById('student-name');
  const welcomeTitle = document.getElementById('welcome-title');

  if (studentName && currentUser) {
    studentName.textContent = currentUser.name || 'Суралцагч';
  }

  if (welcomeTitle && currentUser) {
    welcomeTitle.textContent = `${currentUser.name || 'Суралцагч'}-ын өнөөдрийн ахиц`;
  }
});
