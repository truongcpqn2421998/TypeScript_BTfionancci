function fibonacci(number) {
    var f;
    f = [0, 1];
    for (var i = 2; i < number - 1; i++) {
        f[i] = f[i - 2] + f[i - 1];
    }
    var sum = 0;
    for (var i = 0; i < f.length; i++) {
        console.log(f[i]);
        sum += f[i];
    }
    console.log(sum);
}
fibonacci(5);
