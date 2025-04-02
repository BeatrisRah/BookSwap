export function checkData(formData, optional = []){
    for(const key in formData){
        if (optional.includes(key)) continue;  


        if(formData[key] === '') throw new Error('Please fill all inputs!')
        if(key === 'price' && Number(formData[key]) < 0) throw new Error('Please fill a correct price!')
    }
}