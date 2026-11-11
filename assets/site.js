// Повзунок «чернетка ↔ готовий сайт»: input[type=range] поверх аркуша керує --x.
// Працює пальцем, мишею і клавіатурою (стрілки), бо це звичайний range.
document.querySelectorAll('[data-cmp]').forEach((cmp) => {
  const range = cmp.querySelector('.cmp-range');
  const set = (v) => cmp.style.setProperty('--x', v + '%');
  range.addEventListener('input', () => { cmp.classList.remove('hint'); set(range.value); });
  set(range.value);
});

// Підказка на першому екрані: ручка один раз проходить ліворуч-праворуч, щоб було видно, що її можна тягнути.
const hero = document.querySelector('.cmp-hero');
if (hero && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const r = hero.querySelector('.cmp-range');
  const go = (v, d) => setTimeout(() => { if (!hero.classList.contains('hint')) return; hero.style.setProperty('--x', v + '%'); r.value = v; }, d);
  hero.classList.add('hint');
  go(22, 700); go(78, 1900); go(52, 3100);
  setTimeout(() => hero.classList.remove('hint'), 4300);
}
