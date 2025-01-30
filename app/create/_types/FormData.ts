// Definir el tipo de los datos del formulario
interface FormData {
  title?: string;
  desc?: string;
  palette?: string;
  design?: {
    title: string;
    prompt: string;
  };
  idea?: string;
}

export default FormData;
