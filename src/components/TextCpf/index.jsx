import { useFormtCpf } from "../../hooks/useFormtCpf";

export function Textcpf({ cpf }) {
    const { cpfFormatted } = useFormtCpf();
    return <p>{ cpfFormatted(cpf)}</p>
}