import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Estilo para o contexto do formulário
  formContext: {
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "#FF69B4",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 30,
  },
  // Estilo para o formulário em si
  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
  },
  // Estilo para as labels do formulário
  formLabel: {
    color: "#000000",
    fontSize: 18,
    paddingLeft: 20,
  },
  // Estilo para os inputs do formulário
  input: {
    width: "90%",
    borderRadius: 5,
    backgroundColor: "#FFCBDB",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  // Estilo para o botão do formulário
  buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor :"#F8CBF8",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
  // Estilo para o texto dentro do botão do formulário
  textButtonCalculator: {
    fontSize: 20,
    color: "preto",
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
  errorMessage:{
    fontSize:12,
    color: "red",
    fontWeight:"bold",
    paddingLeft:20,
  }
});

export default styles;
