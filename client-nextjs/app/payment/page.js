import React from 'react';

const Payment = () => {
  return (
    <div>
      <h2>Pagamento</h2>
      <h3>Cartão de Crédito</h3>

      <label>
        <input type="radio" name="paymentMethod" value="creditCard" />
        Cartão de Crédito
      </label>

      <label>
        <input type="radio" name="paymentMethod" value="pix" />
        Pix com +5% off
      </label>

      <label>
        <input type="radio" name="paymentMethod" value="boleto" />
        Boleto Bancário
      </label>

      <label>
        <input type="radio" name="paymentMethod" value="giftCard" />
        Cartão Presente
      </label>

      <h3>Dados do cartão</h3>

      <label>
        Número do cartão
        <input type="text" />
      </label>

      <label>
        Nome impresso
        <input type="text" />
      </label>

      <label>
        Validade
        <input type="text" placeholder="MM/AA" />
      </label>

      <label>
        Código de segurança
        <input type="text" />
      </label>

      <label>
        Número de parcelas
        <select>
          <option value="1">1x</option>
          <option value="2">2x</option>
          <option value="3">3x</option>
        </select>
      </label>

      <label>
        Parcelamento
        <input type="checkbox" />
      </label>

      <label>
        Salvar cartão para minhas próximas compras
        <input type="checkbox" />
      </label>

      <h3>Resumo</h3>

      <p>Valor dos produtos</p>
      <p>R$ 1.199,98</p>

      <p>Frete</p>
      <p>Grátis</p>

      <p>Descontos</p>
      <p>- R$ 580,00</p>

      <h2>Total</h2>
      <h2>R$ 619,98</h2>

      <button>Finalizar compra</button>

      <p>
        Ao finalizar a sua compra, você concorda com a nossa Política de trocas e devoluções.
      </p>
    </div>
  );
};

export default Payment;
