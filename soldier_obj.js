const soldier = {
    name: 'John Weak',
    health: 10,
    gun: {
        weapon_name: 'Glock-17',
        cartridges: 30,
    },
    ammo: 3,
}

soldier.shoot = function() {
    if (soldier.gun.cartridges > 0) {
    soldier.gun.cartridges--
    console.log('Бах-бах')
}
}

soldier.reload = function() {
    if (soldier.ammo <= 0) {
        console.log('Не осталось боеприпасов.')
    } else {
        console.log('Перезарядка...')
    }
    soldier.ammo--
    soldier.gun.cartridges = 30
}
soldier.hurt = function() {
    if (soldier.health <= 0) {
        console.log('Ты проиграл.')
    } else {
        soldier.health--
    }
}
console.log(`Имя: ${soldier.name}, Здоровье: ${soldier.health}, Название оружия: ${soldier.gun.weapon_name}, Патроны: ${soldier.gun.cartridges}, Боезапасы: ${soldier.ammo}.`)

soldier.shoot()
console.log(`Патроны: ${soldier.gun.cartridges}, Боезапасы: ${soldier.ammo}.`)
soldier.reload()
console.log(`Патроны: ${soldier.gun.cartridges}, Боезапасы: ${soldier.ammo}.`)
soldier.hurt()
console.log(`Здоровье: ${soldier.health}`)

console.log(`Имя: ${soldier.name}, Здоровье: ${soldier.health}, Название оружия: ${soldier.gun.weapon_name}, Патроны: ${soldier.gun.cartridges}, Боезапасы: ${soldier.ammo}.`)

