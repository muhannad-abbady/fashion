
const useAddZeroes = () => {

    const router = { locale: "en" }

    const groupNumber = (n, s = (router.locale === 'fr' ? " " : ','), s2 = (router.locale === 'fr' ? "," : '.')) => {
        let [a, b] = n.split('.')
        if (a.length < 4)
            return n
        let aa = ""
        for (let i = a.length; i > 0; i = i - 3) {
            if (i - 3 >= 0)
                aa = a.slice(i - 3, i) + (aa ? s : "") + aa;
            else
                aa = a.slice(0, i) + s + aa;
        }
        return aa + (b ? s2 + b : "")
    }

    const z = (num) => {
        let n = Number(num)
        n = n.toFixed(2)
        return groupNumber(n)
    }
    return { z }
}


export default useAddZeroes;