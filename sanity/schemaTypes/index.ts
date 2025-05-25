import { type SchemaTypeDefinition } from "sanity";
import { albumType } from "./albumType";
import { articleType } from "./articleType";
import { duoMemberType } from "./duoMemberType";
import { interestingFacts } from "./interestingFacts";
import { songType } from "./songType";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [duoMemberType, interestingFacts, albumType, songType, articleType],
};
