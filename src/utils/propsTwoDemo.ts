import { reactive } from '@vue/composition-api';

export default {
    useCounter: () => {
        const count = reactive({
            x: 0
        })
        function increment () { count.x++; console.log(count.x) }
        setTimeout(() => {
            increment();
        }, 1000);
        return count;
    }
}