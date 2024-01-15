export function useFormtCpf(){
    function cpfFormatCpf(value) {
        let cpf = value.replace(/\D/g, "")
        cpf.replace = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3.$4");

        return cpf;

    }
    return {cpfFormatCpf}
}