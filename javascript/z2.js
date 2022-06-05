alert(`урок закінчено  `)
let tovar_price=prompt(`яка ціна товару`);
let garanty_price=prompt(`яка`);
let dostav_price=prompt(`яка ціна доставки`);
let g = prompt(`як вас звуть`);
let a =prompt(`які є в вас товари`);
let w=prompt(`яка гарантія`);
let t = prompt(`яка кількісьть товару`);
let suma = tovar_price* t + garanty_price* t + dostav_price ;

console.log(`вітаю, ${g} ! ваше замовленя 
${a} за ціною-${tovar_price}грн у кількості ${t} штук
гарантія на ${w}рік вартістю-${garanty_price}грн у кількості${t}штук
вартість доставки-${dostav_price}
прийнято та буде оброблегно протягом 24 год
загальна вартісьть замовлення ${suma}`);
