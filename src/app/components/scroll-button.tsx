'use client';

import { useEffect, useState } from 'react';

type ScrollButtonProps = {
  sections: React.RefObject<HTMLElement | null>[]; // Sections utama
};

export default function ScrollButton({ sections }: ScrollButtonProps) {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [isAtFooter, setIsAtFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Cek posisi scroll terhadap sections
      const currentIndex = sections.findIndex((ref, index) => {
        const element = ref.current;
        if (!element) return false;
        const offsetTop = element.offsetTop;
        const nextOffsetTop = sections[index + 1]?.current?.offsetTop || Infinity;

        return scrollPosition >= offsetTop && scrollPosition < nextOffsetTop;
      });

      if (currentIndex !== -1) {
        setActiveSectionIndex(currentIndex);
        setIsAtFooter(false); // Reset ketika kita ada di section biasa
      }

      // Cek apakah footer terlihat
      const footer = document.getElementById('footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        if (footerTop < window.innerHeight && footerTop >= 0) {
          setIsAtFooter(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleClick = () => {
    if (isAtFooter) {
      // Kalau sudah di footer → scroll ke atas
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSectionIndex(0);
      setIsAtFooter(false);
    } else if (activeSectionIndex < sections.length - 1) {
      // Scroll ke section berikutnya
      const nextSection = sections[activeSectionIndex + 1].current;
      if (nextSection) {
        window.scrollTo({
          top: nextSection.offsetTop - 100,
          behavior: 'smooth',
        });
      }
    } else {
      // Kalau sudah di section terakhir → scroll ke footer
      const footer = document.getElementById('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
        setIsAtFooter(true);
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#27548A] text-white text-[1.5rem] p-4 w-16 h-16 rounded-full shadow-lg hover:bg-blue-700 transition-all"
      aria-label={isAtFooter ? 'Scroll up' : 'Scroll down'}
    >
      <span
        className={`inline-block transition-transform duration-500 ease-in-out ${
          isAtFooter ? 'rotate-180' : 'rotate-0'
        }`}
      >
        ↓
      </span>
    </button>
  );
}
