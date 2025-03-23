export async function createImageUrl(imageFile){
    const newForm = new FormData()
    newForm.append('file', imageFile);
    newForm.append('upload_preset', 'react_preset');
    
    const res = await fetch('https://api.cloudinary.com/v1_1/dserynjly/image/upload', {
        method:'POST',
        body:newForm,
    })
    if (!res.ok) throw new Error("Image upload failed");

    const imageData = await res.json()
    const imageUrl = imageData.secure_url;

    return imageUrl;
}

