export const GET_DUO_BY_NAME = `*[_type == "duoMember" && slug.current == $slug && lang == $locale]
    {name, 
    slug, 
    image, 
    imageUrl, 
    fullName, 
    dateOfBirth, 
    placeOfBirth,
    bio, 
    instruments}`; //checked

export const GET_FACT_BY_ID = `*[_type == "interestingFact" && id == $id && lang == $locale]{title, id, description, image}`; //checked

export const GET_FACTS = `*[_type == "interestingFact" && lang == $locale] | order(id asc) {id, title}`; //checked

export const GET_ALBUMS = `*[_type == "album" && lang == $locale] | order(releaseDate desc) {title, albumCover, slug, promoDescription, releaseDate}`; //checked

export const GET_ALBUM_BY_SLUG = `*[_type == "album" && slug.current == $slug && lang == $locale][0]{id, promoDescription, title, imageUrl, albumDescription, links, albumCover, releaseDate, gallery, titleSVG, songs[]->{
    title, slug
  }}`; //checked

export const GET_SONG_BY_SLUG = `*[_type == "song" && slug.current == $slug && lang == $locale]{title, description}`; //checked

export const SEARCH_IN_ALBUMS = `*[_type == "album" && lower(title) match lower($q)] {_type, title, albumCover, slug}`;
export const SEARCH_IN_SONGS = `*[_type == "song" && lower(title) match lower($q)] {_type, title, slug, album}`;
export const SEARCH_IN_MEMBERS = `*[_type == "duoMember" && lower(name) match lower($q)] {_type, name, slug, imageUrl}`;

export const SEARCH = `*[
  _type in ["album", "song", "duoMember", "interestingFact", "article"]
  && (
    title match $q || 
    name match $q
  ) 
][0...30] {
  _id,
  _type,
  title,
  id,
  album->{
  slug
  },
  name,
  slug,
   "slugCurrent": coalesce(album->slug.current, slug.current)
} | order(slugCurrent asc)`;

export const GET_ALL_ARTICLES_BY_LANG = `*[_type == "article" && lang == $locale] | order(date desc) {title, slug, date, promo, imageUrl}`;
export const GET_ARTICLE_BY_SLUG = `*[_type == "article" && slug.current == $slug && lang == $locale][0] {title, slug, date, promo, content, imageUrl, references}`;
