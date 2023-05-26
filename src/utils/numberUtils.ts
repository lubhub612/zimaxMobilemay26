export const numberWithCommas = ((x: any) => {
    const xx= parseFloat(x).toFixed(0);
    //return xx.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
   return xx.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});
