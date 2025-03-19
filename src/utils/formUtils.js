export function checkData(formData){
    for(const key in formData){
        if(formData[key] === '') throw new Error('Please fill all inputs!')
    }
}