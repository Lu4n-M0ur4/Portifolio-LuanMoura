import useForm from "../../hooks/useForm";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {
  ContactContainer,
  FormContainer,
  FormInputMessage,
  FormInputs,
  SocialContact,
  SocialContent,
} from "./Contato.style";
import emailjs from "@emailjs/browser";
import { Location } from "../Location/Location";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useContext } from "react";
import { DefaultTheme } from "styled-components/dist/types";
import { ThemeContext } from "styled-components";
import { Theme } from "@mui/material";



interface FormState {
  name: string;
  email: string;
  msg: string;
  phone: string;
}

interface FormProps {
  form: FormState;
  setForm: (initialState: FormState) => void;
  onChangeInputs: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Contato = () => {

  const theme = useContext<DefaultTheme | undefined>(ThemeContext);

  const { setForm, form, onChangeInputs }: FormProps = useForm({
    name: "",
    email: "",
    msg: "",
    phone: "",
  });

  const templateParams = {
    from_name: form.name,
    message: form.msg,
    email: form.email,
    Phone: form.phone,
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm({
      name: "",
      email: "",
      msg: "",
      phone: "",
    });


    emailjs
      .send(
        "service_urp87vd",
       "template_s3a42qq",
        templateParams,
        "U8w3GiKEFTAz2xagA"
      )
      .then((res) => {
        console.log("email enviado", res.status, res.text);
      })
      .catch((err) => {
        console.log("ERRO", err);
      });
  };



  return (
    <>
      <ContactContainer>
        <SocialContact >
          <SocialContent theme={theme as Theme & DefaultTheme} >
            <h1>Contato</h1>
            <h3><LocationOnIcon/>Rua Paz da Floresta, 20 casa A</h3>
            <br />
            <h3><MailOutlineIcon/>luan.moura-rj@hotmail.com</h3>
            <br />
            <h3><PhoneEnabledIcon/>+55 (21) 9 93636584</h3>
          </SocialContent>

          <Location />
        </SocialContact>
        <FormContainer  theme={theme as Theme & DefaultTheme}>
          <form onSubmit={sendEmail} >
            <FormInputs theme={theme as Theme & DefaultTheme}
              name="name"
              value={form.name}
              onChange={onChangeInputs}
              label="Nome"
            ></FormInputs>
            <FormInputs theme={theme as Theme & DefaultTheme}
              name="phone"
              value={form.phone}
              onChange={onChangeInputs}
              label="Telefone"
            ></FormInputs>
            <FormInputs theme={theme as Theme & DefaultTheme}
              name="email"
              value={form.email}
              onChange={onChangeInputs}
              label="E-mail"
            ></FormInputs>

            <FormInputMessage theme={theme as Theme & DefaultTheme}
              // sx={{ input: { height: "200px" }}}
              name="msg"
              value={form.msg}
              onChange={onChangeInputs}
              label="Deixe sua mensagem"
            ></FormInputMessage>
            <button className='idButton'>
              Enviar
              <ArrowOutwardIcon />
            </button>
          </form>
        </FormContainer>
      </ContactContainer>
    </>
  );
};
