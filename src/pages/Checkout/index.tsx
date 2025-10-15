import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Button from "../../components/Button";
import Card from "../../components/Card";

import creditCard from "../../assets/images/cartao.png";
import barCard from "../../assets/images/boleto.png";

import * as S from "./styles";

import { usePurchaseMutation } from "../../services/api";
import { RootReducer } from "../../store";
import { getTotalPrice, parsesToBrl } from "../../utils";

type Installment = {
  quantity: number;
  amount: number;
  formattedAmount: string;
};

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false);
  const [purchase, { data, isSuccess }] = usePurchaseMutation();
  const { items } = useSelector((state: RootReducer) => state.cart);
  const [installments, setInstallments] = useState<Installment[]>([]);

  const totalPrices = getTotalPrice(items);

  const form = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      cpf: "",
      deliveryEmail: "",
      confirmDeliveryEmail: "",
      cardOwner: "",
      cpfCardOwner: "",
      cardDisplayName: "",
      cardNumber: "",
      expiresMonth: "",
      expiresYear: "",
      cardCode: "",
      installments: 1,
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, "O nome precisa tem no mínimo 5 caracteres")
        .required("Campo obrigatório"),
      cpf: Yup.string()
        .min(14, "O campo precisa ter 14 caractere")
        .max(14, "O campo precisa ter 14 caractere")
        .required("Campo obrigatório"),
      email: Yup.string()
        .email("E-mail inválido")
        .required("Campo obrigatório"),
      deliveryEmail: Yup.string()
        .email("E-mail inválido")
        .required("Campo obrigatório"),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref("deliveryEmail")], "Os e-mails precisam ser iguais")
        .required("Campo obrigatório"),

      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required("Campo obrigatório") : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required("Campo obrigatório") : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required("Campo obrigatório") : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required("Campo obrigatório") : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required("Campo obrigatório") : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required("Campo obrigatório") : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required("Campo obrigatório") : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required("Campo obrigatório") : schema
      ),
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          name: values.fullName,
          email: values.email,
          document: values.cpf,
        },
        delivery: {
          email: values.deliveryEmail,
        },
        payment: {
          installments: 1,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              name: values.cardOwner,
              document: values.cpfCardOwner,
            },
            expires: {
              month: 10,
              year: 2025,
            },
          },
        },
        products: [
          {
            id: 1,
            price: 200,
          },
        ],
      });
    },
  });

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isTouched && isInvalid;

    return hasError;
  };

  useEffect(() => {
    if (totalPrices > 0) {
      const installmentArray: Installment[] = [];
      for (let i = 1; i <= 6; i++) {
        installmentArray.push({
          quantity: i,
          amount: totalPrices / i,
          formattedAmount: parsesToBrl(totalPrices / i),
        });
      }
      setInstallments(installmentArray);
    }
  }, [totalPrices]);

  if (items.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      {isSuccess ? (
        <Card title="Muito obrigado">
          <p>
            É com satisfação que informamos que recebemos seu pedido com
            sucesso!
            <br />
            Abaixo estão os detalhes da sua compra: <br />
            Número do pedido: {data.orderId} <br /> Forma de pagamento:
            {payWithCard ? "Cartão de crédito" : "Boleto bancário"}
          </p>
          <p className="margin-top">
            Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
            que a confirmação pode levar até 3 dias úteis. Após a aprovação do
            pagamento, enviaremos um e-mail contendo o código de ativação do
            jogo
          </p>
          <p className="margin-top">
            Se você optou pelo pagamento com cartão de crédito, a liberação do
            código de ativação ocorrerá após a aprovação da transação pela
            operadora do cartão. Você receberá o código no e-mail cadastrado em
            nossa loja.
          </p>
          <p className="margin-top">
            Pedimos que verifique sua caixa de entrada e a pasta de spam para
            garantir que receba nossa comunicação. Caso tenha alguma dúvida ou
            necessite de mais informações, por favor, entre em contato conosco
            através dos nossos canais de atendimento ao cliente.
          </p>
          <p className="margin-top">
            Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
            jogo!
          </p>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title="Dados de cobrança">
            <S.Row>
              <S.InputGroup>
                <label htmlFor="fullName">Nome completo</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError("fullName") ? "error" : ""}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.values.email}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError("email") ? "error" : ""}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="cpf">CPF</label>
                <input
                  id="cpf"
                  type="text"
                  name="cpf"
                  value={form.values.cpf}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError("cpf") ? "error" : ""}
                />
              </S.InputGroup>
            </S.Row>
            <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
            <S.Row>
              <S.InputGroup>
                <label htmlFor="deliveryEmail">E-mail</label>
                <input
                  id="deliveryEmail"
                  type="email"
                  name="deliveryEmail"
                  value={form.values.deliveryEmail}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError("deliveryEmail") ? "error" : ""}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
                <input
                  id="confirmDeliveryEmail"
                  type="email"
                  name="confirmDeliveryEmail"
                  value={form.values.confirmDeliveryEmail}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError("confirmDeliveryEmail") ? "error" : ""
                  }
                />
              </S.InputGroup>
            </S.Row>
          </Card>

          <Card title="Pagamento">
            <>
              <S.TabButton
                isActive={!payWithCard}
                onClick={() => setPayWithCard(false)}
                type="button"
              >
                <img src={barCard} alt="Boleto" />
                Boleto bancário
              </S.TabButton>
              <S.TabButton
                isActive={payWithCard}
                onClick={() => setPayWithCard(true)}
                type="button"
              >
                <img src={creditCard} alt="cartão de crédito" />
                Cartão de crédito
              </S.TabButton>
              <div className="margin-top">
                {payWithCard ? (
                  <>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="cardOwner">
                          Nome do titular do cartão
                        </label>
                        <input
                          type="text"
                          id="cardOwner"
                          name="cardOwner"
                          value={form.values.cardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError("cardOwner") ? "error" : ""
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cpfCardOwner">
                          CPF do titular do cartão
                        </label>
                        <input
                          id="cpfCardOwner"
                          type="text"
                          name="cpfCardOwner"
                          value={form.values.cpfCardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError("cpfCardOwner") ? "error" : ""
                          }
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.InputGroup>
                        <label htmlFor="cardDisplayName">Nome no cartão</label>
                        <input
                          id="cardDisplayName"
                          type="text"
                          name="cardDisplayName"
                          value={form.values.cardDisplayName}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError("cardDisplayName") ? "error" : ""
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <input
                          id="cardNumber"
                          type="text"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError("cardNumber") ? "error" : ""
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="expiresMonth">Mês de vencimento</label>
                        <input
                          id="expiresMonth"
                          type="text"
                          name="expiresMonth"
                          value={form.values.expiresMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError("expiresMonth") ? "error" : ""
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="expiresYear">Ano de vencimento</label>
                        <input
                          id="expiresYear"
                          type="text"
                          name="expiresYear"
                          value={form.values.expiresYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError("expiresYear") ? "error" : ""
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="48px">
                        <label htmlFor="cardCode">CVV</label>
                        <input
                          id="cardCode"
                          type="text"
                          name="cardCode"
                          value={form.values.cardCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError("cardCode") ? "error" : ""
                          }
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.InputGroup maxWidth="150px">
                        <label htmlFor="installments">Parcelamento</label>
                        <select
                          name="installments"
                          id="installments"
                          value={form.values.installments}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError("installments") ? "error" : ""
                          }
                        >
                          {installments.map((installment) => (
                            <option
                              key={installment.quantity}
                              value={installment.quantity}
                            >
                              {installment.quantity}x de{" "}
                              {installment.formattedAmount}
                            </option>
                          ))}
                        </select>
                      </S.InputGroup>
                    </S.Row>
                  </>
                ) : (
                  <p>
                    Ao optar por essa forma de pagamento, é importante lembrar
                    que a confirmação pode levar até 3 dias úteis, devido aos
                    prazos estabelecidos pelas instituições financeiras.
                    Portanto, a liberção do código de ativação do jogo
                    adiquirido ocorrerá somente após a aprovação do paagamento
                    do boleto.
                  </p>
                )}
              </div>
            </>
          </Card>

          <Button type="submit" title="clique aqui para finalizar a compra">
            Finalizar compra
          </Button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
