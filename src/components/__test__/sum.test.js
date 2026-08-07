import Sum from "../Sum"
test(
    'sum of 2 number',()=>{
        const sum = Sum(1,2)
        expect(sum).toBe(3)
    }
)