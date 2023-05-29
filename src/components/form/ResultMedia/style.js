import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  corpo: {
    flex: 1,
    padding: 10,
    backgroundColor: "#E6E8FA", // Cor de fundo do componente
    borderRadius: 30, // Raio de borda para o componente
    marginBottom: 10, // Margem inferior do componente
  },
  titulo: {
    color: "preto", // Cor do texto do título
    alignItems: "center", // Alinhamento do texto do título
  },
  resultado: {
    color: "preto", // Cor do texto do resultado
    fontSize: 45, // Tamanho da fonte do resultado
    alignItems: "center", // Alinhamento do texto do resultado
  },
  caixaBotaoCompartilhar: {
    width: "100%", // Largura do componente de compartilhamento
    alignItems: "center", // Alinhamento do componente de compartilhamento
    marginBottom: 10, // Margem inferior do componente de compartilhamento
  },
  botaoCompartilhar: {
    backgroundColor: "#1877f2", // Cor de fundo do botão de compartilhamento
    borderRadius: 50, // Raio de borda para o botão de compartilhamento
    paddingTop: 5, // Preenchimento superior do botão de compartilhamento
  },
  textoBotaoCompartilhar: {
    color: "#fff", // Cor do texto do botão de compartilhamento
    fontWeight: "bold", // Peso da fonte do texto do botão de compartilhamento
    paddingHorizontal: 30, // Preenchimento horizontal do texto do botão de compartilhamento
    alignItems: "center", // Alinhamento do texto do botão de compartilhamento
  },
});

export default styles;
