export function checkData(formData, optional = []){
    for(const key in formData){
        if (optional.includes(key)) continue;  


        if(formData[key] === '') throw new Error('Please fill all inputs!')
    }
}