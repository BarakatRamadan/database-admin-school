// Database Admin School — site script
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('nav.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Articles search (client-side filter, works once article cards exist)
  var searchInput = document.querySelector('#article-search');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      var q = searchInput.value.trim().toLowerCase();
      document.querySelectorAll('[data-article-card]').forEach(function (card) {
        var text = card.textContent.toLowerCase();
        card.style.display = text.indexOf(q) !== -1 ? '' : 'none';
      });
    });
  }

  // Submit-problem form -> mailto fallback (static site, no backend)
  var form = document.querySelector('#problem-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var subject = encodeURIComponent('طلب جديد من الموقع: ' + (data.get('type') || ''));
      var body = encodeURIComponent(
        'الاسم: ' + data.get('name') + '\n' +
        'وسيلة التواصل: ' + data.get('contact') + '\n' +
        'نوع الطلب: ' + data.get('type') + '\n' +
        'النظام/الأداة: ' + data.get('system') + '\n\n' +
        'تفاصيل الطلب:\n' + data.get('details')
      );
      window.location.href = 'mailto:barakatramadan394@gmail.com?subject=' + subject + '&body=' + body;
    });
  }
});
