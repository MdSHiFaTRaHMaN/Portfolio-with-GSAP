const textSplitterIntoChar = (
  text,
  isFancyFont = false,
  isNewLine = false,
) => {
  if (!text) return '';
  const words = text.split(' ');
  const char = words.map((word) => word.split(''));

  let result = '';
  char.forEach((word) => {
    result += '<span class="text-nowrap! overflow-clip ';
    if (isNewLine) {
      result += ' leading-none block ';
    } else {
      result += ' inline-block ';
    }
    result += '">';

    word.forEach((ch) => {
      let classes =
        'letters translate-y-[120%] inline-block will-change-auto will-change-transform ';
      if (isFancyFont) {
        classes += ' font-fancy ';
      }

      result += `<span class="${classes}">${ch}</span>`;
    });

    result += '</span> ';
  });

  return result;
};

const getAvailableForWorkDate = () => {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const monthNames = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  let index = date.getMonth();
  const month = monthNames[index];

  return `${month} '${year}`;
};

const gotoSection = (url) => {
  if (typeof window !== 'undefined' && window.lenis) {
    window.lenis.start();
    if (url === '#testimonials-section') {
      window.lenis.scrollTo('#slider', { duration: 3 });
      return;
    }
    window.lenis.scrollTo(url, { duration: 3 });
  }
};

export { textSplitterIntoChar, getAvailableForWorkDate, gotoSection };
