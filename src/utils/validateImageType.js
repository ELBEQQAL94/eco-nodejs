function validateImageType(files) {
    let isValidImageType;
    let types = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/tiff'];
    for(let index in types) {
        isValidImageType = files.photo.type === types[index];
        break;
    };
    return isValidImageType;
};

module.exports = validateImageType;