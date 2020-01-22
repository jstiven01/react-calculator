const calculate = ({total, next, operation}, buttonName) => {
    const noDigits = ['AC','.','+/-','%','+','-','X','÷','='];

    if(!noDigits.includes(buttonName)){
        return {total: null, next: `${next ? next : ''}${buttonName}`, operation: null}
    }
    if(noDigits.includes(buttonName)) {
        return {total: null, next: next, operation: buttonName}
    }
};
export default calculate;
