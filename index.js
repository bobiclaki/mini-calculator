const write = value => process.stdout.write(value || 'Введите пример: ');

write();

process.openStdin().addListener('data', value => {
    try {
        console.log(eval(value.toString()));
    } catch (err) {
        write("!!! Ошибка...\n");
    }
    write();
})
