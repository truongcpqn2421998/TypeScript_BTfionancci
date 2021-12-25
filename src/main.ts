function fibonacci(number:number){
    let f:Array<number>;
    f=[0,1];
    for (let i = 2; i < number-1; i++) {
        f[i]=f[i-2]+f[i-1]
    }
    let sum:number=0;
    for (let i = 0; i < f.length; i++) {
        console.log(f[i])
        sum+=f[i];
    }
    console.log(sum)
}
fibonacci(5);
