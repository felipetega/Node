'use client'
import React, { useEffect } from 'react';


const CardSection = ({ children }) => {
  useEffect(() => {
    // Encontrar o maior card
    const cards = document.querySelectorAll('.card'); // Assumindo que os cards tenham a classe 'card'
    let maxHeight = 0;

    cards.forEach((card) => {
      if (card instanceof HTMLElement) { // Verificando se é um HTMLElement
        const cardHeight = card.clientHeight;
        if (cardHeight > maxHeight) {
          maxHeight = cardHeight;
        }
      }
    });

    // Aplicar a mesma altura a todos os cards
    cards.forEach((card) => {
      if (card instanceof HTMLElement) { // Verificando se é um HTMLElement
        card.style.height = `${maxHeight}px`;
      }
    });
  }, [children]);

  return (
    <section className="flex flex-col w-full md:flex-row items-center">
      {children}
    </section>
  );
}

export default CardSection;
