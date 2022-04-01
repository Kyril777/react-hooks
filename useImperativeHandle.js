/* Used to modify the exposed ref; rarely used. Useful when you have to execute functions from a child component in a parent component.*/

const useImperativeHandle = (props, ref) => {

    const myBtn = useRef(null);

    React.useImperativeHandle(ref, () => ({
        click: () => {
            console.log('clicking button!');
            myBtn.current.click();
        }
    }));
}
