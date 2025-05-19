export const GET_DUO_BY_NAME = `*[_type == "duoMember" && slug.current == $slug]
    {name, 
    slug, 
    image, 
    imageUrl, 
    fullName, 
    dateOfBirth, 
    placeOfBirth,
    bio, 
    instruments}`;

export const GET_FACT_BY_ID = `*[_type == "interestingFact" && id == $id]{title, id, description, image}`;

export const GET_FACTS = `*[_type == "interestingFact"] | order(id asc) {id, title}`;

export const GET_ALBUMS = `*[_type == "album"] | order(releaseDate desc) {title, albumCover, slug, promoDescription, releaseDate}`;

export const GET_ALBUM_BY_SLUG = `*[_type == "album" && slug.current == $slug][0]{id, title, imageUrl, albumDescription, links, albumCover, releaseDate, gallery, titleSVG, songs[]->{
    title, slug
  }}`;

export const GET_SONG_BY_SLUG = `*[_type == "song" && slug.current == $slug]{title, description}`;
