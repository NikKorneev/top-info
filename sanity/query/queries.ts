export const GET_DUO_BY_NAME = `*[_type == "duoMember" && slug.current == $slug]
    {name, 
    slug, 
    image, 
    imageUrl, 
    fullName, 
    dateOfBirth, 
    placeOfBirth, 
    instruments}`;
