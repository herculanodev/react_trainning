export function InputSenha(props){
    <>
    <label htmlFor="senha" type="password" id="senha" value={props.valor} onChange={props.mudaValor} required></label>
    
    </>
}
export default InputSenha;