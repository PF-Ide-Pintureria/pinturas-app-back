const calculatePrice = (priceList, discount, iva, markup) => {
    //precio de lista - descuento (si es que hay) + IVA + ganancia
    const finalPrice = priceList * (1 - discount / 100) * (1 + iva / 100) * (1 + markup / 100);
    return Math.floor(finalPrice);
};

module.exports = calculatePrice;
